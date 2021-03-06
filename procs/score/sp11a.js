/*
  sp11a
  Testilo score proc 11a

  Computes scores from Testaro script tp11 and adds them to a report.
  Usage example: node score 35k1r sp11a

  This proc applies specified weights to the component scores before summing them. An issue reported
  by a test is given a score. That score is determined by:
    Whether the issue is reported as an error or a warning.
    How important the issue is, if the test package is “pre-weighted” (axe, tenon, and testaro)
    Whether the test belongs to a group or is a “solo” test.
    How heavily the group is weighted, if the test package is not pre-weighted and the test belongs
      to a group

  The scores of solo tests are added together, multiplied by the soloWeight multiplier, and
    contributed to the total score.

  The scores of grouped tests are aggregated into a group score before being contributed to the
    total score. The group score is the sum of (1) an absolute score, assigned because the group has
    at least one test with a non-zero score, (2) the largest score among the tests of the group
    multiplied by a multiplier, and (3) the sum of the scores from the other tests of the group
    multiplied by a smaller multiplier. These three amounts are given by the groupWeights object.

  Browser logging produces a log score, and the prevention of tests produces a prevention score.
  They, too, are added to the total score.

  Each grouped test has a “quality” property, typically set to 1. The value of this property can be
  modified when the test is found to be higher or lower in quality than usual.
*/

// ########## IMPORTS

// Module to read and write files.
const fs = require('fs/promises');

// CONSTANTS

const scoreProcID = 'sp11a';
// Define the configuration disclosures.
const logWeights = {
  logCount: 0.5,
  logSize: 0.01,
  errorLogCount: 1,
  errorLogSize: 0.02,
  prohibitedCount: 15,
  visitTimeoutCount: 10,
  visitRejectionCount: 10
};
const soloWeight = 2;
const groupWeights = {
  absolute: 2,
  largest: 1,
  smaller: 0.4
};
const preventionWeights = {
  testaro: 50,
  other: 100
};
const otherPackages = ['aatt', 'alfa', 'axe', 'ibm', 'tenon', 'wave'];
const preWeightedPackages = ['axe', 'tenon', 'testaro'];
// Define the test groups.
const groups = {
  duplicateID: {
    weight: 3,
    packages: {
      aatt: {
        'e:F77': {
          quality: 1,
          what: 'Duplicate id attribute value'
        }
      },
      alfa: {
        r3: {
          quality: 1,
          what: 'Element ID is not unique'
        }
      },
      axe: {
        'duplicate-id': {
          quality: 1,
          what: 'ID attribute value must be unique'
        }
      },
      ibm: {
        RPT_Elem_UniqueId: {
          quality: 1,
          what: 'Element id attribute values must be unique within a document'
        }
      }
    }
  },
  imageInputNoText: {
    weight: 4,
    packages: {
      aatt: {
        'e:H36': {
          quality: 1,
          what: 'Image submit button missing an alt attribute'
        }
      },
      alfa: {
        r28: {
          quality: 1,
          what: 'Image input element has no accessible name'
        }
      },
      axe: {
        'input-image-alt': {
          quality: 1,
          what: 'Image buttons must have alternate text'
        }
      },
      ibm: {
        'v:WCAG20_Input_ExplicitLabelImage': {
          quality: 1,
          what: 'Input element of type image should have a text alternative'
        }
      },
      wave: {
        'e:alt_input_missing': {
          quality: 1,
          what: 'Image button missing alternative text'
        }
      }
    }
  },
  imageNoText: {
    weight: 4,
    packages: {
      aatt: {
        'e:H37': {
          quality: 1,
          what: 'Img element missing an alt attribute'
        }
      },
      alfa: {
        r2: {
          quality: 1,
          what: 'Image has no accessible name'
        }
      },
      axe: {
        'image-alt': {
          quality: 1,
          what: 'Images must have alternate text'
        }
      },
      ibm: {
        'v:WCAG20_Img_HasAlt': {
          quality: 1,
          what: 'Images must have an alt attribute if they convey meaning, or alt="" if decorative'
        }
      },
      wave: {
        'e:alt_missing': {
          quality: 1,
          what: 'Missing alternative text'
        }
      }
    }
  },
  imageTextBad: {
    weight: 3,
    packages: {
      alfa: {
        'r39': {
          quality: 1,
          what: 'Image text alternative is the filename instead'
        }
      }
    }
  },
  imageTextRisk: {
    weight: 1,
    packages: {
      wave: {
        'a:alt_suspicious': {
          quality: 1,
          what: 'Image alternate text is suspicious'
        }
      }
    }
  },
  decorativeImageRisk: {
    weight: 1,
    packages: {
      aatt: {
        'w:H67': {
          quality: 1,
          what: 'Image marked as decorative may be informative'
        }
      }
    }
  },
  pageLanguage: {
    weight: 4,
    packages: {
      aatt: {
        'e:H57': {
          quality: 1,
          what: 'Lang attribute of the document element'
        }
      },
      alfa: {
        r4: {
          quality: 1,
          what: 'Lang attribute missing, empty, or only whitespace'
        }
      },
      axe: {
        'html-has-lang': {
          quality: 1,
          what: 'html element must have a lang attribute'
        }
      },
      ibm: {
        WCAG20_Html_HasLang: {
          quality: 1,
          what: 'Page detected as HTML, but has no lang attribute'
        }
      },
      wave: {
        'e:language_missing': {
          quality: 1,
          what: 'Language missing or invalid'
        }
      }
    }
  },
  pageLanguageBad: {
    weight: 4,
    packages: {
      alfa: {
        r5: {
          quality: 1,
          what: 'lang attribute has no valid primary language tag'
        }
      },
      axe: {
        'html-lang-valid': {
          quality: 1,
          what: 'html element must have a valid value for the lang attribute'
        }
      },
      ibm: {
        'v:WCAG20_Elem_Lang_Valid': {
          quality: 1,
          what: 'lang attribute does not include a valid primary language'
        }
      }
    }
  },
  languageChange: {
    weight: 3,
    packages: {
      aatt: {
        'e:H58': {
          quality: 1,
          what: 'Change in language is not marked'
        }
      },
      alfa: {
        r7: {
          quality: 1,
          what: 'lang attribute has no valid primary language subtag'
        }
      },
      axe: {
        'valid-lang': {
          quality: 1,
          what: 'lang attribute must have a valid value'
        }
      }
    }
  },
  headingStructure: {
    weight: 2,
    packages: {
      aatt: {
        'w:G141': {
          quality: 1,
          what: 'Heading structure is not logically nested'
        }
      },
      alfa: {
        r53: {
          quality: 1,
          what: 'Heading skips one or more levels'
        }
      },
      axe: {
        'heading-order': {
          quality: 1,
          what: 'Heading levels should only increase by one'
        }
      },
      tenon: {
        155: {
          quality: 1,
          what: 'These headings are not structured in a hierarchical manner'
        }
      },
      wave: {
        'a:heading_skipped': {
          quality: 1,
          what: 'Skipped heading level'
        }
      }
    }
  },
  objectNoText: {
    weight: 4,
    packages: {
      aatt: {
        'e:ARIA6+H53': {
          quality: 1,
          what: 'Object elements must contain a text alternative'
        }
      },
      axe: {
        'object-alt': {
          quality: 1,
          what: 'Object elements must have alternate text'
        }
      },
      ibm: {
        'v:WCAG20_Object_HasText': {
          quality: 1,
          what: 'Object elements must have a text alternative'
        }
      },
      wave: {
        'a:plugin': {
          quality: 1,
          what: 'An unidentified plugin is present'
        }
      }
    }
  },
  imageMapAreaNoText: {
    weight: 4,
    packages: {
      aatt: {
        'e:H24': {
          quality: 1,
          what: 'Area element in an image map missing an alt attribute'
        }
      },
      axe: {
        'area-alt': {
          quality: 1,
          what: 'Active area elements must have alternate text'
        }
      },
      ibm: {
        'v:HAAC_Img_UsemapAlt': {
          quality: 1,
          what: 'Image map or child area has no text alternative'
        },
        'v:WCAG20_Area_HasAlt': {
          quality: 1,
          what: 'Area element in an image map has no text alternative'
        }
      },
      wave: {
        'e:alt_area_missing': {
          quality: 1,
          what: 'Image map area missing alternative text'
        }
      }
    }
  },
  eventKeyboard: {
    weight: 4,
    packages: {
      aatt: {
        'w:G90': {
          quality: 1,
          what: 'Event handler functionality not available by keyboard'
        }
      },
      wave: {
        'a:event_handler': {
          quality: 1,
          what: 'Device-dependent event handler'
        }
      }
    }
  },
  labelForBadID: {
    weight: 4,
    packages: {
      aatt: {
        'w:H44': {
          quality: 1,
          what: 'Label for attribute is bad ID'
        }
      },
      wave: {
        'a:label_orphaned': {
          quality: 1,
          what: 'Orphaned form label'
        }
      }
    }
  },
  linkNoText: {
    weight: 4,
    packages: {
      alfa: {
        r11: {
          quality: 1,
          what: 'Link has no accessible name'
        }
      },
      axe: {
        'link-name': {
          quality: 1,
          what: 'Links must have discernible text'
        }
      },
      ibm: {
        'v:WCAG20_A_HasText': {
          quality: 1,
          what: 'Hyperlinks must have a text description'
        }
      },
      tenon: {
        57: {
          quality: 1,
          what: 'Link has no text inside it'
        }
      },
      wave: {
        'e:link_empty': {
          quality: 1,
          what: 'Link contains no text'
        }
      }
    }
  },
  linkTextsSame: {
    weight: 2,
    packages: {
      tenon: {
        98: {
          quality: 1,
          what: 'Links have the same text but different destinations'
        }
      }
    }
  },
  linkConfusionRisk: {
    weight: 1,
    packages: {
      axe: {
        'identical-links-same-purpose': {
          quality: 1,
          what: 'Links with the same accessible name may serve dissimilar purposes'
        }
      }
    }
  },
  linkPair: {
    weight: 2,
    packages: {
      wave: {
        'a:link_redundant': {
          quality: 1,
          what: 'Adjacent links go to the same URL'
        }
      }
    }
  },
  linkForcesNewWindow: {
    weight: 3,
    packages: {
      tenon: {
        218: {
          quality: 1,
          what: 'Link opens in a new window without user control'
        }
      }
    }
  },
  newWindowSurpriseRisk: {
    weight: 1,
    packages: {
      aatt: {
        'w:H83': {
          quality: 1,
          what: 'Link may open in a new window without notice'
        }
      }
    }
  },
  buttonNoText: {
    weight: 4,
    packages: {
      alfa: {
        r12: {
          quality: 1,
          what: 'Button has no accessible name'
        }
      },
      axe: {
        'aria-command-name': {
          quality: 1,
          what: 'ARIA commands must have an accessible name'
        }
      },
      wave: {
        'e:button_empty': {
          quality: 1,
          what: 'Button is empty or has no value text'
        }
      }
    }
  },
  parentMissing: {
    weight: 4,
    packages: {
      alfa: {
        r42: {
          quality: 1,
          what: 'Element is not owned by an element of its required context role'
        }
      },
      axe: {
        'aria-required-parent': {
          quality: 1,
          what: 'Certain ARIA roles must be contained by particular parents'
        }
      }
    }
  },
  svgImageNoText: {
    weight: 4,
    packages: {
      alfa: {
        r43: {
          quality: 1,
          what: 'SVG image element has no accessible name'
        }
      },
      axe: {
        'svg-img-alt': {
          quality: 1,
          what: 'SVG elements with an img role must have an alternative text'
        }
      }
    }
  },
  metaBansZoom: {
    weight: 4,
    packages: {
      alfa: {
        r47: {
          quality: 1,
          what: 'Meta element restricts zooming'
        }
      },
      axe: {
        'meta-viewport': {
          quality: 1,
          what: 'Zooming and scaling should not be disabled'
        }
      }
    }
  },
  childMissing: {
    weight: 4,
    packages: {
      alfa: {
        r68: {
          quality: 1,
          what: 'Element owns no elements as required by its semantic role'
        }
      },
      axe: {
        'aria-required-children': {
          quality: 1,
          what: 'Certain ARIA roles must contain particular children'
        }
      }
    }
  },
  fontSizeAbsolute: {
    weight: 2,
    packages: {
      alfa: {
        r74: {
          quality: 1,
          what: 'Paragraph text has absolute font size'
        }
      }
    }
  },
  fontSmall: {
    weight: 3,
    packages: {
      tenon: {
        134: {
          quality: 1,
          what: 'Text is very small'
        }
      },
      wave: {
        'a:text_small': {
          quality: 1,
          what: 'Text is very small'
        }
      }
    }
  },
  leadingFrozen: {
    weight: 4,
    packages: {
      alfa: {
        r93: {
          quality: 1,
          what: 'Style attribute with !important prevents adjusting line height'
        }
      },
      axe: {
        'avoid-inline-spacing': {
          quality: 1,
          what: 'Inline text spacing must be adjustable with custom stylesheets'
        }
      }
    }
  },
  leadingAbsolute: {
    weight: 2,
    packages: {
      alfa: {
        r80: {
          quality: 1,
          what: 'Paragraph text has absolute line height'
        }
      }
    }
  },
  noLeading: {
    weight: 3,
    packages: {
      alfa: {
        r73: {
          quality: 1,
          what: 'Paragraphs of text have insufficient line height'
        }
      }
    }
  },
  leadingClipsText: {
    weight: 4,
    packages: {
      tenon: {
        144: {
          quality: 1,
          what: 'Line height is insufficent to properly display the computed font size'
        }
      }
    }
  },
  overflowHidden: {
    weight: 4,
    packages: {
      alfa: {
        r83: {
          quality: 1,
          what: 'Overflow is hidden or clipped if the text is enlarged'
        }
      }
    }
  },
  iframeTitleBad: {
    weight: 4,
    packages: {
      alfa: {
        r13: {
          quality: 1,
          what: 'Iframe has no accessible name'
        }
      },
      axe: {
        'frame-title': {
          quality: 1,
          what: 'Frames has no accessible name'
        },
        'frame-title-unique': {
          quality: 1,
          what: 'Frame title attribute is not unique'
        }
      },
      ibm: {
        'v:WCAG20_Frame_HasTitle': {
          quality: 1,
          what: 'Inline frame has an empty or nonunique title attribute'
        }
      }
    }
  },
  roleBad: {
    weight: 3,
    packages: {
      axe: {
        'aria-allowed-role': {
          quality: 1,
          what: 'ARIA role should be appropriate for the element'
        }
      },
      ibm: {
        'v:aria_semantics_role': {
          quality: 1,
          what: 'ARIA roles must be valid for the element to which they are assigned'
        }
      },
      testaro: {
        role: {
          quality: 1,
          what: 'Nonexistent or implicit-overriding role'
        }
      }
    }
  },
  roleMissingAttribute: {
    weight: 4,
    packages: {
      axe: {
        'aria-required-attr': {
          quality: 1,
          what: 'Required ARIA attributes must be provided'
        }
      },
      ibm: {
        'v:Rpt_Aria_RequiredProperties': {
          quality: 1,
          what: 'ARIA role on an element must have required attributes'
        }
      }
    }
  },
  ariaBadAttribute: {
    weight: 4,
    packages: {
      alfa: {
        r20: {
          quality: 1,
          what: 'ARIA attribute is not defined'
        }
      },
      axe: {
        'aria-valid-attr': {
          quality: 1,
          what: 'ARIA attribute has an invalid name'
        },
        'aria-valid-attr-value': {
          quality: 1,
          what: 'ARIA attribute has an invalid value'
        },
        'aria-allowed-attr': {
          quality: 1,
          what: 'ARIA attribute is invalid for the role of its element'
        }
      },
      ibm: {
        'v:Rpt_Aria_ValidProperty': {
          quality: 1,
          what: 'ARIA attribute is invalid for the role'
        }
      }
    }
  },
  ariaReferenceBad: {
    weight: 4,
    packages: {
      ibm: {
        'v:Rpt_Aria_ValidIdRef': {
          quality: 1,
          what: 'ARIA property must reference non-empty unique id of visible element'
        }
      },
      wave: {
        'e:aria_reference_broken': {
          quality: 1,
          what: 'Broken ARIA reference'
        }
      }
    }
  },
  ariaRoleDescriptionBad: {
    weight: 3,
    packages: {
      axe: {
        'aria-roledescription': {
          quality: 1,
          what: 'aria-roledescription is on an element with no semantic role'
        }
      }
    }
  },
  autocompleteBad: {
    weight: 2,
    packages: {
      aatt: {
        'w:H98': {
          quality: 1,
          what: 'Autocomplete attribute wrong'
        }
      },
      alfa: {
        r10: {
          quality: 1,
          what: 'Autocomplete attribute has no valid value'
        }
      },
      axe: {
        'autocomplete-valid': {
          quality: 1,
          what: 'Autocomplete attribute must be used correctly'
        }
      },
      ibm: {
        'v:WCAG21_Input_Autocomplete': {
          quality: 1,
          what: 'Autocomplete attribute token(s) must be appropriate for the input form field'
        }
      }
    }
  },
  contrastAA: {
    weight: 3,
    packages: {
      aatt: {
        'e:G18': {
          quality: 1,
          what: 'Insufficient contrast'
        }
      },
      alfa: {
        r69: {
          quality: 1,
          what: 'Text outside widget has subminimum contrast'
        }
      },
      axe: {
        'color-contrast': {
          quality: 1,
          what: 'Elements must have sufficient color contrast'
        }
      },
      ibm: {
        'v:IBMA_Color_Contrast_WCAG2AA': {
          quality: 1,
          what: 'Contrast ratio of text with background must meet WCAG 2.1 AA'
        }
      },
      wave: {
        'c:contrast': {
          quality: 1,
          what: 'Very low contrast'
        }
      }
    }
  },
  contrastAAA: {
    weight: 1,
    packages: {
      aatt: {
        'e:G17': {
          quality: 1,
          what: 'Insufficient contrast'
        }
      },
      alfa: {
        r66: {
          quality: 1,
          what: 'Text contrast less than AAA requires'
        }
      },
      axe: {
        'color-contrast-enhanced': {
          quality: 1,
          what: 'Elements must have sufficient color contrast (Level AAA)'
        }
      },
      tenon: {
        95: {
          quality: 1,
          what: 'Element has insufficient color contrast (Level AAA)'
        }
      }
    }
  },
  contrastRiskAA: {
    weight: 1,
    packages: {
      aatt: {
        'w:F24': {
          quality: 1,
          what: 'Inline background color needs complementary foreground color'
        },
        'w:G18': {
          quality: 1,
          what: 'Contrast adequacy not determinable'
        }
      }
    }
  },
  contrastRiskAAA: {
    weight: 0.5,
    packages: {
      aatt: {
        'w:G17': {
          quality: 1,
          what: 'Contrast adequacy not determinable'
        }
      }
    }
  },
  headingEmpty: {
    weight: 3,
    packages: {
      axe: {
        'empty-heading': {
          quality: 1,
          what: 'Headings should not be empty'
        }
      },
      ibm: {
        'v:RPT_Header_HasContent': {
          quality: 1,
          what: 'Heading elements must provide descriptive text'
        }
      },
      wave: {
        'e:heading_empty': {
          quality: 1,
          what: 'Empty heading'
        }
      }
    }
  },
  imageTextRedundant: {
    weight: 1,
    packages: {
      axe: {
        'image-redundant-alt': {
          quality: 1,
          what: 'Text of buttons and links should not be repeated in the image alternative'
        }
      },
      ibm: {
        'v:WCAG20_Img_LinkTextNotRedundant': {
          quality: 1,
          what: 'Text alternative for image within link should not repeat link text or adjacent link text'
        }
      }
    }
  },
  titleRedundant: {
    weight: 1,
    packages: {
      tenon: {
        79: {
          quality: 1,
          what: 'Link has a title attribute that is the same as the text inside the link'
        }
      },
      wave: {
        'a:title_redundant': {
          quality: 1,
          what: 'Title attribute text is the same as text or alternative text'
        }
      }
    }
  },
  pageTitle: {
    weight: 3,
    packages: {
      axe: {
        'document-title': {
          quality: 1,
          what: 'Documents must contain a title element'
        }
      },
      wave: {
        'e:title_invalid': {
          quality: 1,
          what: 'Missing or uninformative page title'
        }
      }
    }
  },
  h1Missing: {
    weight: 2,
    packages: {
      aatt: {
        'e:G141': {
          quality: 1,
          what: 'h2 heading should be h1'
        }
      },
      alfa: {
        'r61': {
          quality: 1,
          what: 'First heading is not h1'
        }
      },
      axe: {
        'page-has-heading-one': {
          quality: 1,
          what: 'Page should contain a level-one heading'
        }
      },
      wave: {
        'a:h1_missing': {
          quality: 1,
          what: 'Missing first level heading'
        }
      }
    }
  },
  pseudoHeadingRisk: {
    weight: 1,
    packages: {
      aatt: {
        'w:H42': {
          quality: 1,
          what: 'Heading coding should be used if intended as a heading'
        }
      },
      wave: {
        'a:heading_possible': {
          quality: 1,
          what: 'Possible heading'
        }
      }
    }
  },
  pseudoLinkRisk: {
    weight: 1,
    packages: {
      tenon: {
        129: {
          quality: 1,
          what: 'CSS underline on text that is not a link'
        }
      }
    }
  },
  pseudoListRisk: {
    weight: 1,
    packages: {
      aatt: {
        'w:H48': {
          quality: 1,
          what: 'Navigation links should be coded as list'
        }
      }
    }
  },
  selectNoText: {
    weight: 3,
    packages: {
      aatt: {
        'w:H91': {
          quality: 1,
          what: 'Select element has no value available to an accessibility API'
        }
      },
      axe: {
        'select-name': {
          quality: 1,
          what: 'Select element must have an accessible name'
        }
      },
      wave: {
        'a:select_missing_label': {
          quality: 1,
          what: 'Select missing label'
        }
      }
    }
  },
  selectFlatRisk: {
    weight: 1,
    packages: {
      aatt: {
        'w:H85': {
          quality: 1,
          what: 'If selection list contains groups of related options, they should be grouped with optgroup'
        }
      }
    }
  },
  accessKeyDuplicate: {
    weight: 3,
    packages: {
      ibm: {
        'v:WCAG20_Elem_UniqueAccessKey': {
          quality: 1,
          what: 'Accesskey attribute values on each element must be unique for the page'
        }
      },
      wave: {
        'a:accesskey': {
          quality: 1,
          what: 'Accesskey'
        }
      }
    }
  },
  fieldSetMissing: {
    weight: 2,
    packages: {
      ibm: {
        'v:WCAG20_Input_RadioChkInFieldSet': {
          quality: 1,
          what: 'Input is in a different group than another with the name'
        }
      },
      testaro: {
        radioSet: {
          quality: 1,
          what: 'No or invalid grouping of radio buttons in fieldsets'
        }
      },
      wave: {
        'a:fieldset_missing': {
          quality: 1,
          what: 'Missing fieldset'
        }
      }
    }
  },
  nameValue: {
    weight: 4,
    packages: {
      aatt: {
        'e:F68': {
          quality: 1,
          what: 'Form control wrongly labeled or unlabeled'
        },
        'e:H91': {
          quality: 1,
          what: 'Missing name or value of form control or link'
        }
      },
      wave: {
        'e:label_missing': {
          quality: 1,
          what: 'Missing form label'
        }
      }
    }
  },
  targetSize: {
    weight: 2,
    packages: {
      tenon: {
        152: {
          quality: 1,
          what: 'Actionable element is smaller than the minimum required size'
        }
      }
    }
  },
  visibleBulk: {
    weight: 1,
    packages: {
      testaro: {
        bulk: {
          quality: 1,
          what: 'Page contains many visible elements'
        }
      }
    }
  },
  activeEmbedding: {
    weight: 3,
    packages: {
      testaro: {
        embAc: {
          quality: 1,
          what: 'Active elements embedded in links or buttons'
        }
      }
    }
  },
  tabFocusability: {
    weight: 3,
    packages: {
      testaro: {
        focAll: {
          quality: 1,
          what: 'Discrepancy between elements that should be and that are Tab-focusable'
        }
      }
    }
  },
  focusIndication: {
    weight: 4,
    packages: {
      alfa: {
        r65: {
          quality: 1,
          what: 'Element in sequential focus order has no visible focus'
        }
      },
      testaro: {
        focInd: {
          quality: 1,
          what: 'Focused element displaying no or nostandard focus indicator'
        }
      }
    }
  },
  allCaps: {
    weight: 1,
    packages: {
      tenon: {
        153: {
          quality: 1,
          what: 'Long string of text is in all caps'
        }
      }
    }
  },
  textBeyondLandmarks: {
    weight: 2,
    packages: {
      alfa: {
        r57: {
          quality: 1,
          what: 'Perceivable text content not included in any landmark'
        }
      }
    }
  },
  mainTopLandmark: {
    weight: 2,
    packages: {
      axe: {
        'landmark-main-is-top-level': {
          quality: 1,
          what: 'main landmark is contained in another landmark'
        }
      }
    }
  },
  multipleMain: {
    weight: 2,
    packages: {
      axe: {
        'landmark-no-duplicate-main': {
          quality: 1,
          what: 'page has more than 1 main landmark'
        }
      }
    }
  },
  focusableOperable: {
    weight: 3,
    packages: {
      testaro: {
        focOp: {
          quality: 1,
          what: 'Operable elements that cannot be Tab-focused and vice versa'
        }
      }
    }
  },
  focusableRole: {
    weight: 3,
    packages: {
      axe: {
        'focus-order-semantics': {
          quality: 1,
          what: 'Focusable element has no active role'
        }
      }
    }
  },
  focusableHidden: {
    weight: 4,
    packages: {
      alfa: {
        r17: {
          quality: 1,
          what: 'Tab-focusable element is or has an ancestor that is aria-hidden'
        }
      },
      axe: {
        'aria-hidden-focus': {
          quality: 1,
          what: 'ARIA hidden element is focusable or contains a focusable element'
        }
      }
    }
  },
  hiddenContentRisk: {
    weight: 1,
    packages: {
      axe: {
        'hidden-content': {
          quality: 1,
          what: 'Some content is hidden and therefore may not be testable for accessibility'
        }
      }
    }
  },
  frameContentRisk: {
    weight: 1,
    packages: {
      axe: {
        'frame-tested': {
          quality: 0.2,
          what: 'Some content is in an iframe and therefore may not be testable for accessibility'
        }
      }
    }
  },
  hoverSurprise: {
    weight: 1,
    packages: {
      testaro: {
        hover: {
          quality: 1,
          what: 'Content changes caused by hovering'
        }
      }
    }
  },
  labelClash: {
    weight: 2,
    packages: {
      testaro: {
        labClash: {
          quality: 1,
          what: 'Incompatible label types'
        }
      }
    }
  },
  linkUnderlines: {
    weight: 2,
    packages: {
      testaro: {
        linkUl: {
          quality: 1,
          what: 'Non-underlined inline links'
        }
      }
    }
  },
  menuNavigation: {
    weight: 2,
    packages: {
      testaro: {
        menuNav: {
          quality: 1,
          what: 'Nonstandard keyboard navigation among focusable menu items'
        }
      }
    }
  },
  tabNavigation: {
    weight: 2,
    packages: {
      testaro: {
        tabNav: {
          quality: 1,
          what: 'Nonstandard keyboard navigation among tabs'
        }
      }
    }
  },
  spontaneousMotion: {
    weight: 2,
    packages: {
      testaro: {
        motion: {
          quality: 1,
          what: 'Change of visible content not requested by user'
        }
      }
    }
  },
  inconsistentStyles: {
    weight: 1,
    packages: {
      testaro: {
        styleDiff: {
          quality: 1,
          what: 'Heading, link, and button style inconsistencies'
        }
      }
    }
  },
  zIndexNotZero: {
    weight: 1,
    packages: {
      testaro: {
        zIndex: {
          quality: 1,
          what: 'Layering with nondefault z-index values'
        }
      }
    }
  },
  videoCaptionMissing: {
    weight: 4,
    packages: {
      axe: {
        'video-caption': {
          quality: 1,
          what: 'video element has no captions'
        }
      }
    }
  },
  videoCaptionRisk: {
    weight: 1,
    packages: {
      wave: {
        'a:youtube_video': {
          quality: 1,
          what: 'YouTube video may fail to be captioned'
        }
      }
    }
  },
  notScrollable: {
    weight: 4,
    packages: {
      alfa: {
        r84: {
          quality: 1,
          what: 'Element is scrollable but not by keyboard'
        }
      }
    }
  },
  horizontalScrolling: {
    weight: 3,
    packages: {
      tenon: {
        28: {
          quality: 1,
          what: 'Layout or sizing of the page causes horizontal scrolling'
        }
      }
    }
  },
  scrollRisk: {
    weight: 1,
    packages: {
      aatt: {
        'w:C31+C32+C33+C38+G206+SCR34': {
          quality: 1,
          what: 'Fixed-position element may force bidirectional scrolling'
        }
      }
    }
  },
  skipRepeatedContent: {
    weight: 3,
    packages: {
      alfa: {
        'r87': {
          quality: 0.5,
          what: 'First focusable element is not a link to the main content'
        }
      }
    }
  },
  noScriptRisk: {
    weight: 1,
    packages: {
      wave: {
        'a:noscript': {
          quality: 1,
          what: 'noscript element may fail to contain an accessible equivalent or alternative'
        }
      }
    }
  }
};

// VARIABLES

let packageDetails = {};
let groupDetails = {};
let summary = {};
let preventionScores = {};

// FUNCTIONS

// Initialize the variables.
const init = () => {
  packageDetails = {};
  groupDetails = {
    groups: {},
    solos: {}
  };
  summary = {
    total: 0,
    log: 0,
    preventions: 0,
    solos: 0,
    groups: []
  };
  preventionScores = {};
};

// Adds a score to the package details.
const addDetail = (actWhich, testID, addition = 1) => {
  if (addition) {
    if (!packageDetails[actWhich]) {
      packageDetails[actWhich] = {};
    }
    if (!packageDetails[actWhich][testID]) {
      packageDetails[actWhich][testID] = 0;
    }
    packageDetails[actWhich][testID] += Math.round(addition);
  }
};
// Scores a report.
exports.scorer = async report => {
  // Initialize the variables.
  init();
  // If there are any acts in the report:
  const {acts} = report;
  if (Array.isArray(acts)) {
    // If any of them are test acts:
    const testActs = acts.filter(act => act.type === 'test');
    if (testActs.length) {
      // For each test act:
      testActs.forEach(test => {
        const {which} = test;
        // Add scores to the package details.
        if (which === 'aatt') {
          const issues = test.result && test.result.report;
          if (issues && Array.isArray(issues)) {
            issues.forEach(issue => {
              const {type, id} = issue;
              if (type && id) {
                const typedID = `${type[0]}:${id}`;
                // Add 4 per error, 1 per warning.
                addDetail(which, typedID, type === 'error' ? 4 : 1);
              }
            });
          }
        }
        else if (which === 'alfa') {
          const issues = test.result && test.result.items;
          if (issues && Array.isArray(issues)) {
            issues.forEach(issue => {
              const {verdict, rule} = issue;
              if (verdict && rule) {
                const {ruleID} = rule;
                if (ruleID) {
                  // Add 4 per failure, 1 per warning (“cantTell”).
                  addDetail(which, ruleID, verdict === 'failed' ? 4 : 1);
                }
              }
            });
          }
        }
        else if (which === 'axe') {
          const impactScores = {
            minor: 1,
            moderate: 2,
            serious: 3,
            critical: 4
          };
          const tests = test.result && test.result.details;
          if (tests) {
            const warnings = tests.incomplete;
            const {violations} = tests;
            [[warnings, 0.25], [violations, 1]].forEach(issueClass => {
              if (issueClass[0] && Array.isArray(issueClass[0])) {
                issueClass[0].forEach(issueType => {
                  const {id, nodes} = issueType;
                  if (id && nodes && Array.isArray(nodes)) {
                    nodes.forEach(node => {
                      const {impact} = node;
                      if (impact) {
                        // Add the impact score for a violation or 25% of it for a warning.
                        addDetail(which, id, issueClass[1] * impactScores[impact]);
                      }
                    });
                  }
                });
              }
            });
          }
        }
        else if (which === 'ibm') {
          const {result} = test;
          const {content, url} = result;
          if (content && url) {
            let preferredMode = 'content';
            if (
              content.error ||
              (content.totals &&
                content.totals.violation &&
                url.totals &&
                url.totals.violation &&
                url.totals.violation > content.totals.violation)
            ) {
              preferredMode = 'url';
            }
            const {items} = result[preferredMode];
            if (items && Array.isArray(items)) {
              items.forEach(issue => {
                const {ruleID, level} = issue;
                if (ruleID && level) {
                  // Add 4 per violation, 1 per warning (“recommendation”).
                  addDetail(which, ruleID, level === 'violation' ? 4 : 1);
                }
              });
            }
          }
        }
        else if (which === 'tenon') {
          const issues =
            test.result && test.result.data && test.result.data.resultSet;
          if (issues && Array.isArray(issues)) {
            issues.forEach(issue => {
              const {tID, priority, certainty} = issue;
              if (tID && priority && certainty) {
                // Add 4 per issue if certainty and priority 100, less if less.
                addDetail(which, tID, certainty * priority / 2500);
              }
            });
          }
        }
        else if (which === 'wave') {
          const classScores = {
            error: 4,
            contrast: 3,
            alert: 1
          };
          const issueClasses = test.result && test.result.categories;
          if (issueClasses) {
            ['error', 'contrast', 'alert'].forEach(issueClass => {
              const {items} = issueClasses[issueClass];
              if (items) {
                const testIDs = Object.keys(items);
                if (testIDs.length) {
                  testIDs.forEach(testID => {
                    const {count} = items[testID];
                    if (count) {
                      // Add 4 per error, 3 per contrast error, 1 per warning (“alert”).
                      addDetail(
                        which, `${issueClass[0]}:${testID}`, count * classScores[issueClass]
                      );
                    }
                  });
                }
              }
            });
          }
        }
        else if (which === 'bulk') {
          const count = test.result && test.result.visibleElements;
          if (typeof count === 'number') {
            // Add 1 per 300 visible elements beyond 300.
            addDetail('testaro', which, Math.max(0, count / 300 - 1));
          }
        }
        else if (which === 'embAc') {
          const issueCounts = test.result && test.result.totals;
          if (issueCounts) {
            const counts = Object.values(issueCounts);
            const total = counts.reduce((sum, current) => sum + current);
            // Add 3 per embedded element.
            addDetail('testaro', which, 3 * total);
          }
        }
        else if (which === 'focAll') {
          const discrepancy = test.result && test.result.discrepancy;
          if (discrepancy) {
            addDetail('testaro', which, 2 * Math.abs(discrepancy));
          }
        }
        else if (which === 'focInd') {
          const issueTypes =
            test.result && test.result.totals && test.result.totals.types;
          if (issueTypes) {
            const missingCount = issueTypes.indicatorMissing
            && issueTypes.indicatorMissing.total
            || 0;
            const badCount = issueTypes.nonOutlinePresent
            && issueTypes.nonOutlinePresent.total
            || 0;
            // Add 3 per missing, 1 per non-outline focus indicator.
            addDetail('testaro', which, badCount + 3 * missingCount);
          }
        }
        else if (which === 'focOp') {
          const issueTypes =
            test.result && test.result.totals && test.result.totals.types;
          if (issueTypes) {
            const noOpCount = issueTypes.onlyFocusable && issueTypes.onlyFocusable.total || 0;
            const noFocCount = issueTypes.onlyOperable && issueTypes.onlyOperable.total || 0;
            // Add 2 per unfocusable, 0.5 per inoperable element.
            addDetail('testaro', which, 2 * noFocCount + 0.5 * noOpCount);
          }
        }
        else if (which === 'hover') {
          const issues = test.result && test.result.totals;
          if (issues) {
            const {
              impactTriggers,
              additions,
              removals,
              opacityChanges,
              opacityImpact,
              unhoverables
            } = issues;
            // Add score with weights on hover-impact types.
            const score = 2 * impactTriggers
            + 0.3 * additions
            + removals
            + 0.2 * opacityChanges
            + 0.1 * opacityImpact
            + unhoverables;
            if (score) {
              addDetail('testaro', which, score);
            }
          }
        }
        else if (which === 'labClash') {
          const mislabeledCount = test.result
          && test.result.totals
          && test.result.totals.mislabeled
          || 0;
          // Add 1 per element with conflicting labels (ignoring unlabeled elements).
          addDetail('testaro', which, mislabeledCount);
        }
        else if (which === 'linkUl') {
          const totals = test.result && test.result.totals && test.result.totals.adjacent;
          if (totals) {
            const nonUl = totals.total - totals.underlined || 0;
            // Add 2 per non-underlined adjacent link.
            addDetail('testaro', which, 2 * nonUl);
          }
        }
        else if (which === 'menuNav') {
          const issueCount = test.result
          && test.result.totals
          && test.result.totals.navigations
          && test.result.totals.navigations.all
          && test.result.totals.navigations.all.incorrect
          || 0;
          // Add 2 per defect.
          addDetail('testaro', which, 2 * issueCount);
        }
        else if (which === 'motion') {
          const data = test.result;
          if (data) {
            const {
              meanLocalRatio,
              maxLocalRatio,
              globalRatio,
              meanPixelChange,
              maxPixelChange,
              changeFrequency
            } = data;
            const score = 2 * (meanLocalRatio - 1)
            + (maxLocalRatio - 1)
            + globalRatio - 1
            + meanPixelChange / 10000
            + maxPixelChange / 25000
            + 3 * changeFrequency
            || 0;
            addDetail('testaro', which, score);
          }
        }
        else if (which === 'radioSet') {
          const totals = test.result && test.result.totals;
          const {total, inSet} = totals;
          const score = total - inSet || 0;
          // Add 1 per misgrouped radio button.
          addDetail('testaro', which, score);
        }
        else if (which === 'role') {
          const issueCount = test.result && test.result.badRoleElements || 0;
          // Add 1 per misassigned role.
          addDetail('testaro', which, issueCount);
        }
        else if (which === 'styleDiff') {
          const totals = test.result && test.result.totals;
          if (totals) {
            let score = 0;
            // For each element type that has any style diversity:
            Object.values(totals).forEach(typeData => {
              const {total, subtotals} = typeData;
              if (subtotals) {
                const styleCount = subtotals.length;
                const plurality = subtotals[0];
                const minorities = total - plurality;
                // Add 1 per style, 0.2 per element with any nonplurality style.
                score += styleCount + 0.2 * minorities;
              }
            });
            addDetail('testaro', which, score);
          }
        }
        else if (which === 'tabNav') {
          const issueCount = test.result
          && test.result.totals
          && test.result.totals.navigations
          && test.result.totals.navigations.all
          && test.result.totals.navigations.all.incorrect
          || 0;
          // Add 2 per defect.
          addDetail('testaro', which, 2 * issueCount);
        }
        else if (which === 'zIndex') {
          const issueCount = test.result && test.result.totals && test.result.totals.total || 0;
          // Add 1 per non-auto zIndex.
          addDetail('testaro', which, issueCount);
        }
      });
      // Get the prevention scores and add them to the summary.
      const actsPrevented = testActs.filter(test => test.result.prevented);
      actsPrevented.forEach(act => {
        if (otherPackages.includes(act.which)) {
          preventionScores[act.which] = preventionWeights.other;
        }
        else {
          preventionScores[`testaro-${act.which}`] = preventionWeights.testaro;
        }
      });
      const preventionScore = Object.values(preventionScores).reduce(
        (sum, current) => sum + current,
        0
      );
      const roundedScore = Math.round(preventionScore);
      summary.preventions = roundedScore;
      summary.total += roundedScore;
      // Reorganize the group data.
      const testGroups = {
        testaro: {},
        aatt: {},
        alfa: {},
        axe: {},
        ibm: {},
        tenon: {},
        wave: {}
      };
      Object.keys(groups).forEach(groupName => {
        Object.keys(groups[groupName].packages).forEach(packageName => {
          Object.keys(groups[groupName].packages[packageName]).forEach(testID => {
            testGroups[packageName][testID] = groupName;
          });
        });
      });
      // Populate the group details with group and solo test scores.
      // For each package with any scores:
      Object.keys(packageDetails).forEach(packageName => {
        // For each test with any scores in the package:
        Object.keys(packageDetails[packageName]).forEach(testID => {
          // If the test is in a group:
          const groupName = testGroups[packageName][testID];
          if (groupName) {
            // Determine the preweighted or group-weighted score.
            if (! groupDetails.groups[groupName]) {
              groupDetails.groups[groupName] = {};
            }
            if (! groupDetails.groups[groupName][packageName]) {
              groupDetails.groups[groupName][packageName] = {};
            }
            let weightedScore = packageDetails[packageName][testID];
            if (!preWeightedPackages.includes(groupName)) {
              weightedScore *= groups[groupName].weight / 4;
            }
            // Adjust the score for the quality of the test.
            weightedScore *= groups[groupName].packages[packageName][testID].quality;
            // Round the score, but not to less than 1.
            const roundedScore = Math.max(Math.round(weightedScore), 1);
            groupDetails.groups[groupName][packageName][testID] = roundedScore;
          }
          // Otherwise, i.e. if the test is solo:
          else {
            if (! groupDetails.solos[packageName]) {
              groupDetails.solos[packageName] = {};
            }
            const roundedScore = Math.round(packageDetails[packageName][testID]);
            groupDetails.solos[packageName][testID] = roundedScore;
          }
        });
      });
      // Determine the group scores and add them to the summary.
      const groupNames = Object.keys(groupDetails.groups);
      const {absolute, largest, smaller} = groupWeights;
      // For each group with any scores:
      groupNames.forEach(groupName => {
        const scores = [];
        // For each package with any scores in the group:
        const groupPackageData = Object.values(groupDetails.groups[groupName]);
        groupPackageData.forEach(packageObj => {
          // Get the sum of the scores of the tests of the package in the group.
          const scoreSum = Object.values(packageObj).reduce(
            (sum, current) => sum + current,
            0
          );
          // Add the sum to the list of package scores in the group.
          scores.push(scoreSum);
        });
        // Sort the scores in descending order.
        scores.sort((a, b) => b - a);
        // Compute the sum of the absolute score and the weighted largest and other scores.
        const groupScore = absolute
        + largest * scores[0]
        + smaller * scores.slice(1).reduce((sum, current) => sum + current, 0);
        const roundedGroupScore = Math.round(groupScore);
        summary.groups.push({
          groupName,
          score: roundedGroupScore
        });
        summary.total += roundedGroupScore;
      });
      summary.groups.sort((a, b) => b.score - a.score);
      // Determine the solo score and add it to the summary.
      const soloPackageNames = Object.keys(groupDetails.solos);
      soloPackageNames.forEach(packageName => {
        const testIDs = Object.keys(groupDetails.solos[packageName]);
        testIDs.forEach(testID => {
          const score = soloWeight * groupDetails.solos[packageName][testID];
          summary.solos += score;
          summary.total += score;
        });
      });
      summary.solos = Math.round(summary.solos);
      summary.total = Math.round(summary.total);
    }
  }
  // Get the log score.
  const logScore = logWeights.logCount * report.logCount
  + logWeights.logSize * report.logSize +
  + logWeights.errorLogCount * report.errorLogCount
  + logWeights.errorLogSize * report.errorLogSize
  + logWeights.prohibitedCount * report.prohibitedCount +
  + logWeights.visitTimeoutCount * report.visitTimeoutCount +
  + logWeights.visitRejectionCount * report.visitRejectionCount;
  const roundedLogScore = Math.round(logScore);
  summary.log = roundedLogScore;
  summary.total += roundedLogScore;
  // Add the score facts to the report.
  report.score = {
    scoreProcID,
    logWeights,
    soloWeight,
    groupWeights,
    preventionWeights,
    packageDetails,
    groupDetails,
    preventionScores,
    summary
  };
};
