const issuesData = {
  "ignorable": {
    "summary": "ignorable",
    "why": "No known impact, because the test is unreliable or invalid",
    "wcag": "",
    "weight": 1
  },
  "duplicateAttribute": {
    "summary": "duplicate attribute",
    "why": "Browser processes the document improperly",
    "wcag": "4.1.1",
    "weight": 2
  },
  "duplicateID": {
    "summary": "ID not unique",
    "why": "User may be pointed to the wrong item",
    "wcag": "4.1.1",
    "weight": 4
  },
  "roleNoText": {
    "summary": "no role-required name",
    "why": "User cannot get help understanding an item",
    "wcag": "4.1.2",
    "weight": 4
  },
  "progressNoText": {
    "summary": "progress bar not named",
    "why": "User cannot get help understanding the state of a process",
    "wcag": "4.1.2",
    "weight": 4
  },
  "componentNoText": {
    "summary": "interactive component not named",
    "why": "User cannot get help understanding a custom item",
    "wcag": "4.1.2",
    "weight": 4
  },
  "regionNoText": {
    "summary": "region not named",
    "why": "User cannot get help surveying the parts of the document",
    "wcag": "4.1.2",
    "weight": 4
  },
  "headingImageNoText": {
    "summary": "heading image not named",
    "why": "User cannot get help understanding an image used as a heading",
    "wcag": "1.1.1",
    "weight": 4
  },
  "inputNoText": {
    "summary": "input not named",
    "why": "User cannot get help on what information to enter in a form item",
    "wcag": "4.1.2",
    "weight": 4
  },
  "inputOnlyPlaceholder": {
    "summary": "input has placeholder instead of name",
    "why": "User cannot get reliable help on what information to enter in a form item",
    "wcag": "4.1.2",
    "weight": 3
  },
  "placeholderPlusAria": {
    "summary": "element has competing placeholder attributes",
    "why": "User gets conflicting help on what information to enter in a form item",
    "wcag": "4.1.2",
    "weight": 3
  },
  "imageButtonNoText": {
    "summary": "image button not named",
    "why": "User cannot get help understanding an image used as a button",
    "wcag": "1.1.1",
    "weight": 4
  },
  "imageInputNoText": {
    "summary": "image input not named",
    "why": "User cannot get help understanding an image used as a submission button",
    "wcag": "1.1.1",
    "weight": 4
  },
  "figureNoText": {
    "summary": "figure not named",
    "why": "User cannot get help on the topic of a figure",
    "wcag": "1.1.1",
    "weight": 4
  },
  "imageNoText": {
    "summary": "image not named",
    "why": "User cannot get help to know what is in an image",
    "wcag": "1.1.1",
    "weight": 4
  },
  "svgNoText": {
    "summary": "SVG image not named",
    "why": "User cannot get help to know what is in an image",
    "wcag": "1.1.1",
    "weight": 4
  },
  "imageTextSpaces": {
    "summary": "image name contains only spacing characters",
    "why": "User cannot get help understanding an image",
    "wcag": "1.1.1",
    "weight": 4
  },
  "imageTextImage": {
    "summary": "image name contains image",
    "why": "User is redundantly told an image is an image",
    "wcag": "1.1.1",
    "weight": 1
  },
  "decorativeAlt": {
    "summary": "decorative image is named",
    "why": "User gets an uninformative image description or misses an informative image",
    "wcag": "1.1.1",
    "weight": 1
  },
  "imageTextBad": {
    "summary": "image named with filename",
    "why": "Helper gives a user the filename of an image instead of describing it",
    "wcag": "1.1.1",
    "weight": 3
  },
  "imageTextRisk": {
    "summary": "image dubiously named",
    "why": "Helper may describe an image inadequately",
    "wcag": "1.1.1",
    "weight": 1
  },
  "sourceEmpty": {
    "summary": "src empty",
    "why": "Image, audio, or video to be shown cannot be found",
    "wcag": "1.3.1",
    "weight": 4
  },
  "borderBad": {
    "summary": "CSS border invalid",
    "why": "Border is displayed improperly",
    "wcag": "4.1",
    "weight": 4
  },
  "flexBad": {
    "summary": "CSS flex invalid",
    "why": "Content is displayed improperly",
    "wcag": "4.1",
    "weight": 4
  },
  "paddingBad": {
    "summary": "CSS padding invalid",
    "why": "Content is displayed improperly",
    "wcag": "4.1",
    "weight": 4
  },
  "gapBad": {
    "summary": "CSS padding invalid",
    "why": "Content is displayed improperly",
    "wcag": "4.1",
    "weight": 4
  },
  "backgroundBad": {
    "summary": "CSS background invalid",
    "why": "Background is displayed improperly",
    "wcag": "4.1",
    "weight": 4
  },
  "backgroundImageBad": {
    "summary": "background image invalid",
    "why": "Background image is displayed improperly",
    "wcag": "4.1",
    "weight": 4
  },
  "imagesSameAlt": {
    "summary": "nearby images have same alt",
    "why": "User cannot get help differentiating two adjacent images",
    "wcag": "1.1.1",
    "weight": 1
  },
  "imageTextLong": {
    "summary": "image alt long",
    "why": "Helper gives a user an overly verbose explanation of an image",
    "wcag": "1.1.1",
    "weight": 2
  },
  "imageBanned": {
    "summary": "image prohibited",
    "why": "Browser fails to display an image",
    "wcag": "1.4",
    "weight": 3
  },
  "titleLong": {
    "summary": "title long",
    "why": "Hovering makes an overly verbose explanation pop up",
    "wcag": "3.1.5",
    "weight": 2
  },
  "titleNotText": {
    "summary": "title contains ASCII art",
    "why": "Hovering makes a hard-to-understand explanation pop up",
    "wcag": "3.1.5",
    "weight": 2
  },
  "decorativeImageRisk": {
    "summary": "image dubiously marked decorative",
    "why": "Helper ignores an image that is apparently informative",
    "wcag": "1.1.1",
    "weight": 1
  },
  "decorativeElementExposed": {
    "summary": "decorative element exposed",
    "why": "Helper alerts a user to an uninformative image",
    "wcag": "1.3.1",
    "weight": 2
  },
  "pageLanguage": {
    "summary": "page language missing",
    "why": "Speaking helper may mispronounce the document text",
    "wcag": "3.1.1",
    "weight": 4,
    "max": 1
  },
  "pageLanguageBad": {
    "summary": "page language invalid",
    "why": "Speaking helper may mispronounce the document text",
    "wcag": "3.1.1",
    "weight": 4,
    "max": 1
  },
  "elementLanguageBad": {
    "summary": "element language invalid",
    "why": "Speaking helper may mispronounce the text of an item",
    "wcag": "3.1.2",
    "weight": 4
  },
  "languageChange": {
    "summary": "language change invalid",
    "why": "Speaking helper may mispronounce the text of an item",
    "wcag": "3.1.2",
    "weight": 3
  },
  "dialogNoText": {
    "summary": "dialog not named",
    "why": "User cannot get help explaining a pop-up window",
    "wcag": "4.1.2",
    "weight": 4
  },
  "objectNoText": {
    "summary": "object not named",
    "why": "User cannot get help explaining a custom item",
    "wcag": "1.1.1",
    "weight": 4
  },
  "objectTextRisk": {
    "summary": "object dubiously named",
    "why": "Helper may explain a custom item inadequately",
    "wcag": "1.1.1",
    "weight": 1
  },
  "objectAudioRisk": {
    "summary": "non-audio element plays audio?",
    "why": "User may get inadequate help consuming audio content",
    "wcag": "1.1.1",
    "weight": 1
  },
  "appletNoText": {
    "summary": "applet not named",
    "why": "User cannot get help on how to use a custom item",
    "wcag": "1.1.1",
    "weight": 4
  },
  "imageMapNoText": {
    "summary": "image map not named",
    "why": "User cannot get help on the topic of an interactive image",
    "wcag": "1.1.1",
    "weight": 4
  },
  "imageMapAreaNoText": {
    "summary": "image map area not named",
    "why": "User cannot get help on how to use an interactive image",
    "wcag": "1.1.1",
    "weight": 4
  },
  "customKeyboardRisk": {
    "summary": "custom button keyboard-inoperable?",
    "why": "Custom item may prevent a keyboard-only user from operating it",
    "wcag": "2.1.1",
    "weight": 1
  },
  "objectBlurKeyboardRisk": {
    "summary": "object not keyboard-blurrable?",
    "why": "Custom item may trap a keyboard-only user",
    "wcag": "2.1.1",
    "weight": 1
  },
  "eventKeyboardRisk": {
    "summary": "event not keyboard-triggerable?",
    "why": "Keyboard-only user may be unable to perform an action",
    "wcag": "2.1.1",
    "weight": 1
  },
  "internalLinkBroken": {
    "summary": "internal link broken",
    "why": "User cannot reach a promised document location",
    "wcag": "1.3.1",
    "weight": 4
  },
  "labelForBad": {
    "summary": "label referent ineligible",
    "why": "User cannot get help understanding an item in a form",
    "wcag": "1.3.1",
    "weight": 4
  },
  "controlIDInLabelBad": {
    "summary": "label contains control with nonmatching ID",
    "why": "User cannot get help understanding an item in a form",
    "wcag": "1.3.1",
    "weight": 4
  },
  "nonLabelableRole": {
    "summary": "aria-label on non-labelable role",
    "why": "User is misinformed about an item",
    "wcag": "1.3.1",
    "weight": 1
  },
  "ariaLabelWrongRisk": {
    "summary": "dubious aria-label",
    "why": "User may fail to get help understanding an item in a form",
    "wcag": "1.3.1",
    "weight": 1
  },
  "activeDescendantBadID": {
    "summary": "aria-activedescendant invalid",
    "why": "Keyboard-only user cannot reach an item in a menu",
    "wcag": "1.3.1",
    "weight": 4
  },
  "governedBadID": {
    "summary": "aria-controls or -owns invalid",
    "why": "Keyboard-only user cannot reach an item",
    "wcag": "1.3.1",
    "weight": 4
  },
  "descriptionBadID": {
    "summary": "aria-describedby invalid",
    "why": "User cannot get help understanding an item in detail",
    "wcag": "1.3.1",
    "weight": 4
  },
  "labelConfusionRisk": {
    "summary": "label location dubious",
    "why": "User may fail to notice the explanation of an item in a form",
    "wcag": "3.3.2",
    "weight": 1
  },
  "labelBadID": {
    "summary": "label reference invalid",
    "why": "User cannot get help understanding an item in a form",
    "wcag": "1.3.1",
    "weight": 4
  },
  "haspopupBad": {
    "summary": "aria-haspopup invalid",
    "why": "Keyboard-only user cannot operate a custom tool",
    "wcag": "1.3.1",
    "weight": 4
  },
  "applicationRisk": {
    "summary": "dubious application role",
    "why": "User actions may have unexpected effects",
    "wcag": "1.3.1",
    "weight": 1
  },
  "directionRisk": {
    "summary": "dubious direction",
    "why": "Item may behave incorrectly",
    "wcag": "1.3.2",
    "weight": 1
  },
  "clickOnly": {
    "summary": "name dubiously mouse-specific",
    "why": "User may misunderstand how to activate a link",
    "wcag": "2.4.4",
    "weight": 1
  },
  "linkNoText": {
    "summary": "link not named",
    "why": "User cannot get help understanding what a link points to",
    "wcag": "2.4.4",
    "weight": 4
  },
  "imageLinkNoText": {
    "summary": "image link not named",
    "why": "User cannot get help understanding what a link points to",
    "wcag": "2.4.4",
    "weight": 4
  },
  "linkImageTextURL": {
    "summary": "text alternative of link image a URL",
    "why": "User cannot understand what a link points to",
    "wcag": "2.4.4",
    "weight": 3
  },
  "linkBrokenRisk": {
    "summary": "link incomplete",
    "why": "User may fail to reach a promised location",
    "wcag": "1.3.1",
    "weight": 2
  },
  "linkElNoHref": {
    "summary": "link element href missing",
    "why": "User cannot reach a promised location",
    "wcag": "4.1",
    "weight": 3
  },
  "linkElNoSource": {
    "summary": "link element href or imagesrcset missing",
    "why": "User cannot reach a promised location",
    "wcag": "4.1",
    "weight": 3
  },
  "destinationNotURL": {
    "summary": "link destination not URL",
    "why": "Helper cannot properly explain a link to a user",
    "wcag": "1.3.1",
    "weight": 1
  },
  "destinationLink": {
    "summary": "link href missing",
    "why": "Helper cannot properly explain a link to a user",
    "wcag": "1.3.1",
    "weight": 2
  },
  "emailLinkBad": {
    "summary": "Microsoft will bounce email from link",
    "why": "User cannot send email",
    "wcag": "2.4.4",
    "weight": 4
  },
  "abbreviationNoTitle": {
    "summary": "abbr title missing",
    "why": "User cannot get help understanding an abbreviation",
    "wcag": "3.1.4",
    "weight": 4
  },
  "editableHow": {
    "summary": "contenteditable element incomplete",
    "why": "User cannot get help on how to edit editable content",
    "wcag": "1.3.1",
    "weight": 3
  },
  "textAreaNoText": {
    "summary": "text area not named",
    "why": "User cannot get help on what information to enter in a form item",
    "wcag": "1.3.1",
    "weight": 4
  },
  "linkAltSame": {
    "summary": "link image alt duplicative",
    "why": "Helper repeats the explanation of a link",
    "wcag": "1.1.1",
    "weight": 2
  },
  "linkTextsSame": {
    "summary": "links named identically",
    "why": "User cannot get help differentiating links",
    "wcag": "2.4.4",
    "weight": 2
  },
  "linkConfusionRisk": {
    "summary": "links dubiously share name",
    "why": "User may be unable to get help differentiating links",
    "wcag": "2.4.4",
    "weight": 1
  },
  "linksNoNav": {
    "summary": "links not grouped as nav",
    "why": "User cannot get help identifying links as a navigation tool",
    "wcag": "1.3.1",
    "weight": 2
  },
  "linkPair": {
    "summary": "adjacent links not combined",
    "why": "Keyboard-only user expends extra effort to skip a link",
    "wcag": "2.4.4",
    "weight": 2
  },
  "linkPairRisk": {
    "summary": "text and image link may merit combination",
    "why": "Keyboard-only user may expend extra effort to skip a link",
    "wcag": "2.4.4",
    "weight": 1
  },
  "linkNameRisk": {
    "summary": "image link text suspect",
    "why": "Keyboard-only user may misunderstand the effect of following a link",
    "wcag": "2.4.4",
    "weight": 1
  },
  "pageNewWindow": {
    "summary": "page immediately opens window",
    "why": "User promised a document gets another document, too",
    "wcag": "3.2.5",
    "weight": 3,
    "max": 1
  },
  "newTabSurprise": {
    "summary": "tab-opening link action unstated",
    "why": "Following a link opens a new window, surprising a user",
    "wcag": "3.2.5",
    "weight": 3
  },
  "newTabSurpriseRisk": {
    "summary": "tab-opening link action unstated?",
    "why": "Following a link opens a new window, possibly surprising a user",
    "wcag": "3.2.5",
    "weight": 1
  },
  "selectNavSurpriseRisk": {
    "summary": "navigating selection-change action unstated?",
    "why": "Changing a selected option opens a new window, possibly surprising a user",
    "wcag": "3.2.5",
    "weight": 1
  },
  "preselectedOption": {
    "summary": "no default option",
    "why": "User may risk erroneously submitting a form",
    "wcag": "4.1.2",
    "weight": 1
  },
  "selectBad": {
    "summary": "select element invalid",
    "why": "User cannot properly select among options",
    "wcag": "4.1.2",
    "weight": 4
  },
  "buttonAlt": {
    "summary": "button has alt",
    "why": "User cannot get help explaing a button",
    "wcag": "4.1.2",
    "weight": 4
  },
  "buttonNoContent": {
    "summary": "button name not visible",
    "why": "User cannot get help explaining a button",
    "wcag": "4.1.2",
    "weight": 1
  },
  "buttonNoText": {
    "summary": "button not named",
    "why": "User cannot get help explaining a button",
    "wcag": "4.1.2",
    "weight": 4
  },
  "menuItemNoText": {
    "summary": "menu item not named",
    "why": "User cannot get help explaing a menu item",
    "wcag": "4.1.2",
    "weight": 4
  },
  "parentMissing": {
    "summary": "parent missing",
    "why": "Keyboard-only user cannot operate a custom tool",
    "wcag": "1.3.1",
    "weight": 4
  },
  "descendantMissing": {
    "summary": "descendant missing",
    "why": "Keyboard-only user cannot operate a custom tool",
    "wcag": "1.3.1",
    "weight": 4
  },
  "presentationChild": {
    "summary": "presentation element has child",
    "why": "Keyboard-only user cannot reach an item intended to be reachable",
    "wcag": "1.3.1",
    "weight": 4
  },
  "svgImageNoText": {
    "summary": "svg image not named",
    "why": "User cannot get help understanding an image",
    "wcag": "1.1.1",
    "weight": 4
  },
  "svgLabelID": {
    "summary": "svg label referent invalid",
    "why": "User cannot get help understanding an image",
    "wcag": "1.1.1",
    "weight": 4
  },
  "cssBansPageRotate": {
    "summary": "CSS bans page rotation",
    "why": "User must read sideways after rotating a device",
    "wcag": "1.3.4",
    "weight": 4
  },
  "cssBansElementRotate": {
    "summary": "CSS bans element rotation",
    "why": "User must read sideways after rotating a device",
    "wcag": "1.3.4",
    "weight": 4
  },
  "orientationRisk": {
    "summary": "orientation issues not testable",
    "why": "User may need to read sideways after rotating a device",
    "wcag": "1.3.4",
    "weight": 1,
    "max": 1
  },
  "metaBansZoom": {
    "summary": "meta bans zoom",
    "why": "User cannot adjust the document size for readability",
    "wcag": "1.4.4",
    "weight": 4,
    "max": 1
  },
  "fontSizeAbsolute": {
    "summary": "font size absolute",
    "why": "User cannot adjust the text size for readability",
    "wcag": "1.4.4",
    "weight": 2
  },
  "fontSmall": {
    "summary": "font small",
    "why": "Text is difficult to read",
    "wcag": "1.4",
    "weight": 3
  },
  "horizontalSpacingFrozen": {
    "summary": "horizontal text spacing frozen",
    "why": "User cannot adjust the horizontal text spacing for readability",
    "wcag": "1.4.12",
    "weight": 4
  },
  "verticalSpacingFrozen": {
    "summary": "vertical text spacing frozen",
    "why": "User cannot adjust the vertical text spacing for readability",
    "wcag": "1.4.12",
    "weight": 4
  },
  "lineHeightAbsolute": {
    "summary": "line height absolute",
    "why": "User cannot adjust the line height of text for readability",
    "wcag": "1.4.12",
    "weight": 2
  },
  "lineHeightLow": {
    "summary": "line height low",
    "why": "Text is difficult to read",
    "wcag": "1.4.8",
    "weight": 2
  },
  "lineHeightBad": {
    "summary": "line height misdefined",
    "why": "Text is difficult to read",
    "wcag": "1.4.8",
    "weight": 4
  },
  "overflowHidden": {
    "summary": "overflow hidden",
    "why": "User cannot enlarge the text for readability",
    "wcag": "1.4.4",
    "weight": 4
  },
  "overflowHiddenRisk": {
    "summary": "overflow hidden?",
    "why": "User may be unable to enlarge the text for readability",
    "wcag": "1.4.4",
    "weight": 1
  },
  "boxSizeAbsolute": {
    "summary": "box size absolute",
    "why": "User cannot enlarge the content of an item for readability",
    "wcag": "1.4.4",
    "weight": 3
  },
  "elementBad": {
    "summary": "nonexistent element",
    "why": "User cannot understand the content",
    "wcag": "4.1.2",
    "weight": 4
  },
  "titleBad": {
    "summary": "title attribute invalid",
    "why": "User gets too little, too much, or repeated help explaining an item",
    "wcag": "1.3.1",
    "weight": 1
  },
  "baseElementMissing": {
    "summary": "base element missing where required",
    "why": "Browser cannot find a needed external resource",
    "wcag": "1.3.1",
    "weight": 4
  },
  "linkElementMisplaced": {
    "summary": "link element invalid",
    "why": "Document fails to get a needed external resource",
    "wcag": "1.3.1",
    "weight": 4
  },
  "linkElementBad": {
    "summary": "link element invalid",
    "why": "Document fails to get a needed external resource",
    "wcag": "1.3.1",
    "weight": 4
  },
  "metaBad": {
    "summary": "meta invalid",
    "why": "Document fails to include needed data",
    "wcag": "1.3.1",
    "weight": 3
  },
  "metaMisplaced": {
    "summary": "meta element in invalid location",
    "why": "Document fails to provide needed data",
    "wcag": "1.3.1",
    "weight": 4
  },
  "stylesheetBanned": {
    "summary": "stylesheet prohibited",
    "why": "Browser displays the document improperly",
    "wcag": "1.4",
    "weight": 3
  },
  "scriptNotDeferrable": {
    "summary": "script element invalidly deferred",
    "why": "Browser processes the document improperly",
    "wcag": "1.3.1",
    "weight": 4
  },
  "scriptBanned": {
    "summary": "script prohibited",
    "why": "Browser processes the document improperly",
    "wcag": "4.1",
    "weight": 3
  },
  "scriptElementBad": {
    "summary": "script element invalid",
    "why": "Browser processes the document improperly",
    "wcag": "1.3.1",
    "weight": 4
  },
  "specRulesScriptBad": {
    "summary": "speculation rules script element invalid",
    "why": "Document navigation performs poorly",
    "wcag": "1.3.1",
    "weight": 1
  },
  "itemIDBad": {
    "summary": "itemid invalid",
    "why": "User cannot get help to identify a referent",
    "wcag": "1.3.1",
    "weight": 4
  },
  "itemTypeBad": {
    "summary": "itemtype invalid",
    "why": "User cannot get help on the definition of a term",
    "wcag": "1.3.1",
    "weight": 4
  },
  "iframeTitleBad": {
    "summary": "iframe not named",
    "why": "User cannot get help on the topic of an embedded document",
    "wcag": "4.1.2",
    "weight": 4
  },
  "roleBad": {
    "summary": "role invalid",
    "why": "User cannot get help on the nature of an item",
    "wcag": "4.1.2",
    "weight": 3
  },
  "roleHierarchyBad": {
    "summary": "ancestor and descendant roles incompatible",
    "why": "User may misunderstand or be blocked from exposure to an item",
    "wcag": "4.1.2",
    "weight": 4
  },
  "roleRedundant": {
    "summary": "role redundant",
    "why": "Document includes unnecessary code",
    "wcag": "4.1.2",
    "weight": 1
  },
  "roleConfusion": {
    "summary": "role assigned instead of implicit",
    "why": "User may misunderstand the purpose of an item",
    "wcag": "4.1.2",
    "weight": 1
  },
  "dirBad": {
    "summary": "dir invalid",
    "why": "Item may behave improperly",
    "wcag": "4.1.2",
    "weight": 1
  },
  "attributeBad": {
    "summary": "attribute invalid",
    "why": "Item behaves improperly",
    "wcag": "1.3.1",
    "weight": 4
  },
  "sizesAttributeBad": {
    "summary": "sizes attribute invalid",
    "why": "Item behaves improperly",
    "wcag": "1.3.1",
    "weight": 4
  },
  "attributeValueBad": {
    "summary": "attribute value invalid",
    "why": "Item behaves improperly",
    "wcag": "1.3.1",
    "weight": 4
  },
  "attributeValueRisk": {
    "summary": "attribute value bad?",
    "why": "Item may behave improperly",
    "wcag": "4.1.2",
    "weight": 1
  },
  "attributeMissing": {
    "summary": "attribute missing",
    "why": "Item behaves improperly",
    "wcag": "4.1.2",
    "weight": 4
  },
  "roleMissing": {
    "summary": "role missing",
    "why": "Item behaves improperly",
    "wcag": "4.1.2",
    "weight": 3
  },
  "roleMissingRisk": {
    "summary": "role missing?",
    "why": "Item may behave improperly",
    "wcag": "4.1.2",
    "weight": 1
  },
  "ariaMissing": {
    "summary": "aria attribute missing",
    "why": "Item behaves improperly",
    "wcag": "4.1.2",
    "weight": 4
  },
  "ariaMissingRisk": {
    "summary": "aria attribute missing?",
    "why": "Item may behave improperly",
    "wcag": "4.1.2",
    "weight": 2
  },
  "ariaAttributeBad": {
    "summary": "aria attribute invalid",
    "why": "Item behavior violates user expectations",
    "wcag": "4.1.2",
    "weight": 4
  },
  "ariaRedundant": {
    "summary": "aria attribute redundant",
    "why": "Document includes unnecessary code",
    "wcag": "4.1.2",
    "weight": 1
  },
  "ariaVersusHTML": {
    "summary": "aria and HTML attributes have conflicting value",
    "why": "User gets erroneous help with content",
    "wcag": "4.1.2",
    "weight": 4
  },
  "ariaReferenceBad": {
    "summary": "aria reference invalid",
    "why": "Item behavior violates user expectations",
    "wcag": "1.3.1",
    "weight": 4
  },
  "autocompleteBad": {
    "summary": "autocomplete invalid",
    "why": "User cannot get help entering personal information in a form item",
    "wcag": "1.3.5",
    "weight": 3
  },
  "autocompleteNone": {
    "summary": "autocomplete missing",
    "why": "User cannot get help entering personal information in a form",
    "wcag": "1.3.5",
    "weight": 4
  },
  "autocompleteRisk": {
    "summary": "autocomplete dubious",
    "why": "User may fail to get help entering personal information in a form item",
    "wcag": "1.3.5",
    "weight": 1
  },
  "requirementBad": {
    "summary": "requirement invalid",
    "why": "User may fail to get help determining whether a form item must be completed",
    "wcag": "1.3.5",
    "weight": 4
  },
  "requirementRedundant": {
    "summary": "requirement redundant",
    "why": "Help determining whether a form item must be completed is at risk of corruption",
    "wcag": "1.3.5",
    "weight": 1
  },
  "contrastAA": {
    "summary": "contrast poor",
    "why": "Content is difficult to understand",
    "wcag": "1.4.3",
    "weight": 4
  },
  "contrastAAA": {
    "summary": "text contrast improvable",
    "why": "Content is not easy to understand",
    "wcag": "1.4.6",
    "weight": 1
  },
  "contrastRisk": {
    "summary": "text contrast not testable",
    "why": "Text may be difficult to read",
    "wcag": "1.4.3",
    "weight": 1
  },
  "infoNeedsColor": {
    "summary": "color the only classifier?",
    "why": "Categories are indistinguishable",
    "wcag": "1.4.1",
    "weight": 1
  },
  "colorNamedRisk": {
    "summary": "color perception required?",
    "why": "Content is impossible to perceive under some conditions",
    "wcag": "1.4.1",
    "weight": 1
  },
  "sensoryDependenceRisk": {
    "summary": "instruction requires particular sense?",
    "why": "Content is impossible to perceive under some conditions",
    "wcag": "1.4.1",
    "weight": 1
  },
  "idEmpty": {
    "summary": "ID empty",
    "why": "Item behaves improperly",
    "wcag": "1.3.1",
    "weight": 4
  },
  "targetEmpty": {
    "summary": "target empty",
    "why": "Item is displayed improperly",
    "wcag": "1.3.1",
    "weight": 4
  },
  "headingsEmbedded": {
    "summary": "heading within a heading",
    "why": "User cannot understand the page organization",
    "wcag": "4.1.2",
    "weight": 4
  },
  "headingEmpty": {
    "summary": "heading empty",
    "why": "User cannot get help on the topic of a part of the document",
    "wcag": "2.4.6",
    "weight": 3
  },
  "headingOfNothing": {
    "summary": "heading heads nothing",
    "why": "Helper misdescribes the document",
    "wcag": "1.3.1",
    "weight": 2
  },
  "typeBad": {
    "summary": "type invalid",
    "why": "Document styles are at risk of corruption",
    "wcag": "1.3.1",
    "weight": 4
  },
  "typeRedundant": {
    "summary": "type redundant",
    "why": "Document includes unnecessary code",
    "wcag": "1.3.1",
    "weight": 1
  },
  "imageTextRedundant": {
    "summary": "image name redundant",
    "why": "Helper repeats the explanation of an image",
    "wcag": "1.1.1",
    "weight": 1
  },
  "decorativeTitle": {
    "summary": "decorative element has title",
    "why": "Hovering-produced information is denied to a keyboard-only user",
    "wcag": "1.3.1",
    "weight": 2
  },
  "titleRedundant": {
    "summary": "title attribute redundant",
    "why": "Helper repeats the explanation of an item",
    "wcag": "1.3.1",
    "weight": 1
  },
  "titleEmpty": {
    "summary": "title attribute empty",
    "why": "Hovering does not get the promised explanation of an item",
    "wcag": "1.3.1",
    "weight": 1
  },
  "docTypeMissing": {
    "summary": "DOCTYPE missing",
    "why": "Browser processes the document improperly",
    "wcag": "1.3.1",
    "weight": 4,
    "max": 1
  },
  "docTypeMisplaced": {
    "summary": "DOCTYPE in invalid location",
    "why": "Browser processes the document improperly",
    "wcag": "1.3.1",
    "weight": 4,
    "max": 1
  },
  "docTypeBad": {
    "summary": "DOCTYPE invalid",
    "why": "Browser processes the document improperly",
    "wcag": "1.3.1",
    "weight": 3,
    "max": 1
  },
  "pageTitleBad": {
    "summary": "page title invalid",
    "why": "Browser processes the document improperly",
    "wcag": "1.3.1",
    "weight": 3,
    "max": 1
  },
  "pageTitle": {
    "summary": "page title missing",
    "why": "User is not informed of the topic of the document",
    "wcag": "2.4.2",
    "weight": 4,
    "max": 1
  },
  "headElementsBad": {
    "summary": "element in head invalid",
    "why": "Browser processes the document improperly",
    "wcag": "4.1.1",
    "weight": 3
  },
  "headingLevelSkip": {
    "summary": "heading level skipped",
    "why": "Helper misdescribes the document",
    "wcag": "1.3.1",
    "weight": 2
  },
  "headingStructure": {
    "summary": "heading structure illogical",
    "why": "Helper misdescribes the document",
    "wcag": "1.3.1",
    "weight": 2
  },
  "headingConfusion": {
    "summary": "heading names repeated",
    "why": "User cannot differentiate parts of the document",
    "wcag": "1.3.1",
    "weight": 2
  },
  "headingMisuseRisk": {
    "summary": "heading used for styling?",
    "why": "User cannot understand the document structure",
    "wcag": "1.3.1",
    "weight": 2
  },
  "headingNone": {
    "summary": "headings missing",
    "why": "User cannot survey parts of the document",
    "wcag": "1.3.1",
    "weight": 3,
    "max": 1
  },
  "h1Not1": {
    "summary": "not exactly 1 h1 heading",
    "why": "User cannot understand the topic of the document",
    "wcag": "1.3.1",
    "weight": 2,
    "max": 1
  },
  "h1Not1st": {
    "summary": "h1 not 1st heading",
    "why": "User cannot understand the topic of the document",
    "wcag": "1.3.1",
    "weight": 3,
    "max": 1
  },
  "docHeadingNotH1": {
    "summary": "primary heading not h1",
    "why": "User cannot understand the topic of the document",
    "wcag": "1.3.1",
    "weight": 2,
    "max": 1
  },
  "articleHeadingless": {
    "summary": "article heading missing",
    "why": "User cannot understand the topic of a part of the document",
    "wcag": "1.3.1",
    "weight": 1
  },
  "sectionHeadingless": {
    "summary": "section heading missing",
    "why": "User cannot understand the topic of a part of the document",
    "wcag": "1.3.1",
    "weight": 1
  },
  "headingLength": {
    "summary": "heading abnormally long",
    "why": "User has difficulty understanding the topic of a part of the document",
    "wcag": "1.3.1",
    "weight": 1
  },
  "blockQuoteShort": {
    "summary": "block quote abnormally short",
    "why": "Content can be made easier to read",
    "wcag": "1.4.8",
    "weight": 1
  },
  "justification": {
    "summary": "text fully justified",
    "why": "Text is difficult to read",
    "wcag": "1.4.8",
    "weight": 2
  },
  "justificationRisk": {
    "summary": "justification undefined?",
    "why": "Text may be difficult to read",
    "wcag": "1.4.8",
    "weight": 1
  },
  "nonSemanticText": {
    "summary": "semantic properties represented with styles",
    "why": "User cannot get help to fully understand the text",
    "wcag": "1.3.1",
    "weight": 2
  },
  "hrConfusionRisk": {
    "summary": "hr misused",
    "why": "User cannot get help on the nature of segments of the document",
    "wcag": "1.3.1",
    "weight": 1
  },
  "pseudoCodeRisk": {
    "summary": "pre use dubious",
    "why": "User may be unable to get help to fully understand the text",
    "wcag": "1.3.1",
    "weight": 1
  },
  "pseudoParagraphRisk": {
    "summary": "double br use dubious",
    "why": "User may be unable to get help to fully understand the text",
    "wcag": "1.3.1",
    "weight": 1
  },
  "pseudoHeadingRisk": {
    "summary": "heading-like styles dubious",
    "why": "User may be unable to understand the topic of a part of the document",
    "wcag": "1.3.1",
    "weight": 1
  },
  "pseudoLinkScriptRisk": {
    "summary": "script used instead of link",
    "why": "Link may misbehave",
    "wcag": "1.3.1",
    "weight": 1
  },
  "pseudoLinkUnderlineRisk": {
    "summary": "underlining dubious",
    "why": "User may be misled into believing some text is a link",
    "wcag": "1.3.1",
    "weight": 1
  },
  "listChild": {
    "summary": "list child invalid",
    "why": "User cannot get help on which items are in a list",
    "wcag": "1.3.1",
    "weight": 4
  },
  "listItemOrphan": {
    "summary": "list item orphan",
    "why": "User cannot get help on whether an item is in a list",
    "wcag": "1.3.1",
    "weight": 4
  },
  "descriptionOrphan": {
    "summary": "description list orphan",
    "why": "User cannot get help on whether an item is in a list",
    "wcag": "1.3.1",
    "weight": 4
  },
  "descriptionOrder": {
    "summary": "description list misordered",
    "why": "User cannot get help on the structure of a list",
    "wcag": "1.3.1",
    "weight": 4
  },
  "pseudoList": {
    "summary": "list-like br use dubious",
    "why": "User cannot get help recognizing a list of items",
    "wcag": "1.3.1",
    "weight": 1
  },
  "pseudoListRisk": {
    "summary": "list not marked as such?",
    "why": "User may be unable to get help on which items are in lists",
    "wcag": "1.3.1",
    "weight": 1
  },
  "pseudoOrderedListRisk": {
    "summary": "ordered list not coded as such?",
    "why": "User may be unable to get help on whether a list is ordered",
    "wcag": "1.3.1",
    "weight": 1
  },
  "pseudoNavList": {
    "summary": "nav links not list",
    "why": "User cannot get help recognizing a list of navigation links",
    "wcag": "1.3.1",
    "weight": 2
  },
  "pseudoQuoteRisk": {
    "summary": "quotation miscoded?",
    "why": "User may be unable to get help identifying a quotation",
    "wcag": "3.2.4",
    "weight": 1
  },
  "nonQuoteRisk": {
    "summary": "nonquotation coded as block quote?",
    "why": "User may misunderstand text as a quotation",
    "wcag": "3.2.4",
    "weight": 1
  },
  "selectNoText": {
    "summary": "select not named",
    "why": "User cannot get help on the topic of a list of options",
    "wcag": "4.1.2",
    "weight": 3
  },
  "optionNoText": {
    "summary": "option not named",
    "why": "User cannot get help to understand an option",
    "wcag": "4.1.2",
    "weight": 4
  },
  "selectFlatRisk": {
    "summary": "option groups not marked?",
    "why": "User may be unable to get help recognizing groups of options",
    "wcag": "1.3.1",
    "weight": 1
  },
  "noOptionFocusable": {
    "summary": "no option focusable",
    "why": "Keyboard-only user cannot choose an option",
    "wcag": "2.1.1",
    "weight": 1
  },
  "accessKeyDuplicate": {
    "summary": "duplicate access key",
    "why": "Keyboard shortcut does not reliably trigger the intended action",
    "wcag": "1.3.1",
    "weight": 3
  },
  "fieldSetMissing": {
    "summary": "fieldset missing",
    "why": "User cannot get help recognizing a group of related form items",
    "wcag": "1.3.1",
    "weight": 2
  },
  "fieldSetRisk": {
    "summary": "fieldset missing?",
    "why": "User may be unable to get help recognizing a group of related form items",
    "wcag": "1.3.1",
    "weight": 1
  },
  "legendMisplaced": {
    "summary": "legend location invalid",
    "why": "User cannot get help on the topic of a group of form items",
    "wcag": "4.1.2",
    "weight": 4
  },
  "legendMissing": {
    "summary": "legend missing",
    "why": "User cannot get help on the topic of a group of form items",
    "wcag": "4.1.2",
    "weight": 2
  },
  "groupName": {
    "summary": "group not named",
    "why": "User cannot get help on the topic of a group of form items",
    "wcag": "4.1.2",
    "weight": 3
  },
  "layoutTable": {
    "summary": "table misused",
    "why": "Helper misinforms a user about whether items are cells of a table",
    "wcag": "1.3.1",
    "weight": 2
  },
  "tabularTableless": {
    "summary": "table not marked as such",
    "why": "Helper misinforms a user about whether items are cells of a table",
    "wcag": "1.3.1",
    "weight": 3
  },
  "tableColumnsVary": {
    "summary": "table column counts vary",
    "why": "User cannot get help on the dimensions of a table",
    "wcag": "1.3.1",
    "weight": 3
  },
  "tableCaption": {
    "summary": "table caption missing",
    "why": "User cannot get help on the topic of a table",
    "wcag": "1.3.1",
    "weight": 1
  },
  "tableCaptionLoc": {
    "summary": "table caption location invalid",
    "why": "User cannot get help on the topic of a table",
    "wcag": "1.3.1",
    "weight": 3
  },
  "tableCapSum": {
    "summary": "table summary duplicative",
    "why": "Helper informs a user repetitively about the topic of a table",
    "wcag": "1.3.1",
    "weight": 2
  },
  "tableSum": {
    "summary": "table summary empty",
    "why": "User cannot get help summarizing a table",
    "wcag": "1.3.1",
    "weight": 4
  },
  "tableLabelID": {
    "summary": "table aria-labelledby invalid",
    "why": "User cannot get help on the topic of a table",
    "wcag": "1.3.1",
    "weight": 4
  },
  "tableDescriptionID": {
    "summary": "table aria-describedby invalid",
    "why": "User cannot get help on the topic of a table",
    "wcag": "1.3.1",
    "weight": 4
  },
  "cellHeadersNotInferrable": {
    "summary": "cell headers not inferrable",
    "why": "User cannot get help on relationships in a table",
    "wcag": "1.3.1",
    "weight": 4
  },
  "cellHeadersOutsideTable": {
    "summary": "cell headers outside table",
    "why": "User cannot get help on relationships in a table",
    "wcag": "1.3.1",
    "weight": 4
  },
  "cellHeadersAmbiguityRisk": {
    "summary": "cell headers ambiguous?",
    "why": "User may be unable to get help on relationships in a table",
    "wcag": "1.3.1",
    "weight": 2
  },
  "tableHeaderless": {
    "summary": "table headers missing",
    "why": "User cannot get help on relationships in a table",
    "wcag": "1.3.1",
    "weight": 3
  },
  "tableCellHeaderless": {
    "summary": "table-cell header missing",
    "why": "User cannot get help on the topic of a table cell",
    "wcag": "1.3.1",
    "weight": 3
  },
  "tableHeaderCellless": {
    "summary": "table-header cell missing",
    "why": "User cannot get help on relationships in a table",
    "wcag": "1.3.1",
    "weight": 4
  },
  "TableHeaderScopeRisk": {
    "summary": "Table scope ambiguous?",
    "why": "User may be unable to get help on relationships in a table",
    "wcag": "1.3.1",
    "weight": 1
  },
  "tableHeaderEmpty": {
    "summary": "table header empty",
    "why": "User cannot get help on relationships in a table",
    "wcag": "1.3.1",
    "weight": 2
  },
  "tableHead": {
    "summary": "thead missing",
    "why": "User cannot get help on parts of a table",
    "wcag": "1.3.1",
    "weight": 1
  },
  "tableBody": {
    "summary": "tbody missing",
    "why": "User cannot get help on parts of a table",
    "wcag": "1.3.1",
    "weight": 1
  },
  "tableEmbedded": {
    "summary": "table embedded in table",
    "why": "User cannot get help on relationships in a table",
    "wcag": "1.3.1",
    "weight": 2
  },
  "divInTable": {
    "summary": "div embedded in table",
    "why": "Blocks of content within a table cell may confuse a user",
    "wcag": "1.4",
    "weight": 1
  },
  "formInTable": {
    "summary": "form embedded in table",
    "why": "Navigation in a form may confuse a keyboard-only user",
    "wcag": "2.1.1",
    "weight": 1
  },
  "inputInTable": {
    "summary": "input embedded in table",
    "why": "Entry of data in a form may confuse a keyboard-only user",
    "wcag": "2.1.1",
    "weight": 1
  },
  "tableHeading": {
    "summary": "heading located in table",
    "why": "Complex relationships in a table may confuse a user",
    "wcag": "1.3.1",
    "weight": 1
  },
  "controlNoText": {
    "summary": "control not named",
    "why": "User cannot get help on how to operate a form item",
    "wcag": "1.3.1",
    "weight": 4
  },
  "controlLabelInvisible": {
    "summary": "control label invisible",
    "why": "User cannot understand how to operate a form item",
    "wcag": "2.4.6",
    "weight": 4
  },
  "inputLabelInvisibleRisk": {
    "summary": "input label invisible?",
    "why": "User cannot understand where to enter information",
    "wcag": "2.4.6",
    "weight": 1
  },
  "titleAsLabel": {
    "summary": "control has title instead of label",
    "why": "User cannot get help on how to operate a form item",
    "wcag": "2.4.6",
    "weight": 3
  },
  "visibleLabelNotInName": {
    "summary": "visible label not in name",
    "why": "User cannot get help choosing a form control to operate",
    "wcag": "2.5.3",
    "weight": 3
  },
  "targetSmall": {
    "summary": "target small",
    "why": "User cannot reliably choose an item to click or tap",
    "wcag": "2.5.5",
    "weight": 1
  },
  "targetTiny": {
    "summary": "target very small",
    "why": "User cannot reliably choose an item to click or tap",
    "wcag": "2.5.8",
    "weight": 3
  },
  "targetsNear": {
    "summary": "small targets too near to each other",
    "why": "User cannot reliably choose an item to click or tap",
    "wcag": "2.5.8",
    "weight": 3
  },
  "visibleBulk": {
    "summary": "large visible-element count",
    "why": "User cannot easily find items in the document",
    "wcag": "2.4",
    "weight": 1,
    "max": 1
  },
  "activeEmbedding": {
    "summary": "control child of link or button",
    "why": "User cannot reliably choose an item to click or tap",
    "wcag": "2.5.5",
    "weight": 3
  },
  "unfocusability": {
    "summary": "element not focusable",
    "why": "Keyboard-only user cannot choose an item to operate",
    "wcag": "2.1.1",
    "weight": 4
  },
  "focusDiscrepancy": {
    "summary": "Tab-focusable elements wrong",
    "why": "Item selections by a keyboard-only user are useless or impossible",
    "wcag": "2.1.1",
    "weight": 4
  },
  "focusIndicationBad": {
    "summary": "focus indication poor",
    "why": "Keyboard-only user cannot choose an item to operate",
    "wcag": "2.4.7",
    "weight": 4
  },
  "focusIndicationImprovable": {
    "summary": "focus indication improvable",
    "why": "Keyboard-only user cannot easily choose an item to operate",
    "wcag": "2.4.7",
    "weight": 2
  },
  "focusIndicationRisk": {
    "summary": "focus indication poor?",
    "why": "Keyboard-only user cannot choose an item to operate",
    "wcag": "2.4.7",
    "weight": 1
  },
  "boxInvisibleRisk": {
    "summary": "border or outline invisible?",
    "why": "User cannot perceive the boundary of an item",
    "wcag": "2.5.8",
    "weight": 1
  },
  "allCaps": {
    "summary": "all-capital text",
    "why": "Text is difficult to read",
    "wcag": "3.1.5",
    "weight": 1
  },
  "allItalics": {
    "summary": "all-italic text",
    "why": "Text is difficult to read",
    "wcag": "3.1.5",
    "weight": 1
  },
  "textDistortion": {
    "summary": "text distortion",
    "why": "Text is difficult to read",
    "wcag": "3.1.5",
    "weight": 1
  },
  "noLandmarks": {
    "summary": "no landmarks",
    "why": "User cannot get help on how the document is organized",
    "wcag": "1.3.6",
    "weight": 2,
    "max": 1
  },
  "contentBeyondLandmarks": {
    "summary": "content beyond landmarks",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 1
  },
  "footerNotTop": {
    "summary": "footer child of landmark",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 1
  },
  "asideNotTop": {
    "summary": "aside child of landmark",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 2
  },
  "mainNotTop": {
    "summary": "main child of landmark",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 2
  },
  "mainConfusion": {
    "summary": "mains not distinctly named",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 3
  },
  "mainNone": {
    "summary": "main missing",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 2,
    "max": 1
  },
  "mainNot1": {
    "summary": "multiple mains",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 2,
    "max": 1
  },
  "bannerNot1": {
    "summary": "multiple banners",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 2,
    "max": 1
  },
  "bannerNotTop": {
    "summary": "banner child of landmark",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 2
  },
  "footerConfusion": {
    "summary": "contentinfos not distinctly named",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 3
  },
  "footerNot1": {
    "summary": "multiple contentinfos",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 2,
    "max": 1
  },
  "landmarkConfusion": {
    "summary": "landmarks not distinctly named",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 3
  },
  "documentConfusion": {
    "summary": "document elements not distinctly named",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 3
  },
  "formsNested": {
    "summary": "form nested in another form",
    "why": "User cannot predict effect of actions in a form",
    "wcag": "4.1",
    "weight": 4
  },
  "formConfusion": {
    "summary": "forms not distinctly named",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 3
  },
  "applicationNoText": {
    "summary": "application not named",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 4
  },
  "applicationConfusion": {
    "summary": "applications not distinctly named",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 3
  },
  "asideConfusion": {
    "summary": "asides not distinctly named",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 3
  },
  "bannerConfusion": {
    "summary": "banners not distinctly named",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 3
  },
  "navConfusion": {
    "summary": "navigations not distinctly named",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 3
  },
  "landmarkInNav": {
    "summary": "invalid landmark child of navigation role",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 4
  },
  "regionConfusion": {
    "summary": "regions not distinctly named",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 3
  },
  "searchConfusion": {
    "summary": "searches not distinctly named",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 3
  },
  "complementaryNoText": {
    "summary": "complementary not named",
    "why": "User cannot get help on how some of the document is organized",
    "wcag": "1.3.6",
    "weight": 1
  },
  "labelNoText": {
    "summary": "label not named",
    "why": "User cannot get help on the topic of a form item",
    "wcag": "1.3.1",
    "weight": 4
  },
  "focusableOperable": {
    "summary": "element focusability and operability conflict",
    "why": "Keyboard-only user cannot operate an item",
    "wcag": "2.1.1",
    "weight": 3
  },
  "focusableRole": {
    "summary": "focusable element not active",
    "why": "Keyboard-only user cannot navigate properly to the operable items",
    "wcag": "4.1.2",
    "weight": 3
  },
  "focusableHidden": {
    "summary": "focusable element hidden",
    "why": "Keyboard-only user cannot navigate properly to the operable items",
    "wcag": "4.1.2",
    "weight": 4
  },
  "focusedAway": {
    "summary": "element beyond display when focused",
    "why": "Keyboard-only user cannot navigate properly to the operable items",
    "wcag": "1.4.10",
    "weight": 3
  },
  "focusableDescendants": {
    "summary": "presentational child focusable",
    "why": "Keyboard-only user cannot navigate properly to the operable items",
    "wcag": "4.1.2",
    "weight": 4
  },
  "datalistRef": {
    "summary": "ambiguous or missing datalist reference",
    "why": "User cannot get help on the permitted input values",
    "wcag": "3.3.2",
    "weight": 4
  },
  "multipleLabelees": {
    "summary": "labeled element ambiguous",
    "why": "User cannot get help on the topic of a form item",
    "wcag": "1.3.1",
    "weight": 4
  },
  "labeledHidden": {
    "summary": "control hidden but labeled",
    "why": "Document includes unnecessary code",
    "wcag": "1.3.1",
    "weight": 1
  },
  "contentHidden": {
    "summary": "page hidden",
    "why": "User cannot get the document content",
    "wcag": "2.4.7",
    "weight": 4,
    "max": 1
  },
  "hideFailureRisk": {
    "summary": "false aria-hidden value risky",
    "why": "User may be misled by erroneously hidden or revealed document content",
    "wcag": "2.4.6",
    "weight": 1
  },
  "negativeIndent": {
    "summary": "negative text-indent",
    "why": "Helper may hide content from a user",
    "wcag": "4.1",
    "weight": 3
  },
  "frameSandboxRisk": {
    "summary": "iframe sandbox attributes risky",
    "why": "Document may be unsafe to use",
    "wcag": "4.1",
    "weight": 2
  },
  "hoverIndication": {
    "summary": "hover indication poor",
    "why": "User cannot explore the document reliably with a mouse",
    "wcag": "3.3.2",
    "weight": 3
  },
  "hoverSurprise": {
    "summary": "hovering changes content",
    "why": "User cannot explore the document reliably with a mouse",
    "wcag": "3.2.5",
    "weight": 1
  },
  "formSurpriseRisk": {
    "summary": "form interaction changes content?",
    "why": "User experiences unexpected document change when using a form",
    "wcag": "3.2.5",
    "weight": 1
  },
  "labelClash": {
    "summary": "label types incompatible",
    "why": "User cannot get reliable help on the topics of form items",
    "wcag": "1.3.1",
    "weight": 2
  },
  "labelNot1": {
    "summary": "element referenced by multiple labels",
    "why": "User cannot get reliable help on the topics of form items",
    "wcag": "1.3.1",
    "weight": 1
  },
  "labelEmpty": {
    "summary": "label empty",
    "why": "User cannot get help on the topics of form items",
    "wcag": "1.3.1",
    "weight": 3
  },
  "labelRisk": {
    "summary": "labeling risky",
    "why": "User may misunderstand a form control",
    "wcag": "3.3.2",
    "weight": 1
  },
  "linkVaguenessRisk": {
    "summary": "link name vague",
    "why": "User may misunderstand what a link points to",
    "wcag": "2.4.4",
    "weight": 1
  },
  "linkFileName": {
    "summary": "link names a file instead of a purpose",
    "why": "User may fail to understand what a link points to",
    "wcag": "2.4.4",
    "weight": 1
  },
  "nonWebLink": {
    "summary": "link to non-web resource",
    "why": "Document points to harder-to-use resources",
    "wcag": "1.3.3",
    "weight": 1
  },
  "linkIndication": {
    "summary": "link indication poor",
    "why": "User cannot differentiate a link from plain text",
    "wcag": "1.3.3",
    "weight": 2
  },
  "menuNavigation": {
    "summary": "menu navigation nonstandard",
    "why": "Menus behave improperly for a keyboard-only user",
    "wcag": "2.1.1",
    "weight": 2
  },
  "menuItemless": {
    "summary": "menu items missing",
    "why": "User cannot reach promised menu items",
    "wcag": "1.3.1",
    "weight": 4
  },
  "tabNavigation": {
    "summary": "tablist navigation nonstandard",
    "why": "Tablist items behave improperly for a keyboard-only user",
    "wcag": "2.1.1",
    "weight": 2
  },
  "spontaneousMotion": {
    "summary": "page content moves spontaneously",
    "why": "Motion-sensitive user may suffer harm",
    "wcag": "2.2.2",
    "weight": 2,
    "max": 1
  },
  "animationLong": {
    "summary": "animation long or repetitive",
    "why": "Motion-sensitive user may suffer harm",
    "wcag": "2.2.2",
    "weight": 3
  },
  "blink": {
    "summary": "blink element",
    "why": "Motion-sensitive user may suffer harm",
    "wcag": "2.2.2",
    "weight": 4
  },
  "autoplay": {
    "summary": "autoplay",
    "why": "Motion- or noise-sensitive user may suffer harm",
    "wcag": "1.4.2",
    "weight": 2
  },
  "autoplayLong": {
    "summary": "autoplay long",
    "why": "Motion- or noise-sensitive user may suffer harm",
    "wcag": "1.4.2",
    "weight": 2
  },
  "autoplayControl": {
    "summary": "autoplay control",
    "why": "Motion- or noise-sensitive user may suffer harm",
    "wcag": "1.4.2",
    "weight": 2
  },
  "refresh": {
    "summary": "element reloads or redirects",
    "why": "Document change may surprise a user",
    "wcag": "2.2.1",
    "weight": 3
  },
  "parentBad": {
    "summary": "parent invalid",
    "why": "User cannot properly operate an item",
    "wcag": "1.3.1",
    "weight": 4
  },
  "inconsistentStyles": {
    "summary": "inconsistent heading, link, or button styles",
    "why": "User cannot easily distinguish items of different types",
    "wcag": "3.2.4",
    "weight": 1
  },
  "zIndexNotZero": {
    "summary": "z-index not zero",
    "why": "User cannot predict the effect of clicking",
    "wcag": "1.4",
    "weight": 1
  },
  "tabIndexPositive": {
    "summary": "tabindex positive",
    "why": "Keyboard-only user cannot predict the navigation sequence",
    "wcag": "2.4.3",
    "weight": 1
  },
  "tabIndexEmpty": {
    "summary": "tabindex empty",
    "why": "Keyboard-only user cannot follow the intended navigation sequence",
    "wcag": "1.3.1",
    "weight": 4
  },
  "tabIndexInt": {
    "summary": "tabindex not integer",
    "why": "Keyboard-only user cannot follow the intended navigation sequence",
    "wcag": "1.3.1",
    "weight": 4
  },
  "tabIndexExtra": {
    "summary": "tabindex redundant",
    "why": "Revision risks interfering with navigation by a keyboard-only user",
    "wcag": "1.3.1",
    "weight": 1
  },
  "presentationGlobal": {
    "summary": "global ARIA attribute nullifies presentation role",
    "why": "User encounters content intended to be hidden",
    "wcag": "1.3.1",
    "weight": 1
  },
  "presentationTabIndexed": {
    "summary": "tabindex attribute nullifies presentation role",
    "why": "User encounters content intended to be hidden",
    "wcag": "1.3.1",
    "weight": 1
  },
  "avNoText": {
    "summary": "audio or video caption track missing",
    "why": "User cannot get help reading speech as text",
    "wcag": "1.2.1",
    "weight": 4
  },
  "audioNoText": {
    "summary": "audio track missing",
    "why": "User cannot get help reading speech as text",
    "wcag": "1.2.1",
    "weight": 4
  },
  "audioTextRisk": {
    "summary": "audio not named?",
    "why": "User may be unable to get help reading speech as text",
    "wcag": "1.2.1",
    "weight": 1
  },
  "videoNoText": {
    "summary": "video not named",
    "why": "User cannot get help reading video content as text",
    "wcag": "1.2.2",
    "weight": 4
  },
  "videoNoTranscript": {
    "summary": "video transcript missing",
    "why": "User cannot get help reading video content as text",
    "wcag": "1.2.2",
    "weight": 4
  },
  "videoCaptionRisk": {
    "summary": "audio or video alternatives missing?",
    "why": "User may be unable to get help reading video content as text",
    "wcag": "1.2.2",
    "weight": 1
  },
  "videoNoAudioDescription": {
    "summary": "video audio description missing",
    "why": "User cannot get help hearing video content as speech",
    "wcag": "1.2.1",
    "weight": 4
  },
  "videoNoAudioTrack": {
    "summary": "video audio track missing",
    "why": "User cannot get help hearing video content as speech",
    "wcag": "1.2.1",
    "weight": 4
  },
  "videoAlternative": {
    "summary": "video alternative missing",
    "why": "User cannot get help consuming a video recording as text or speech",
    "wcag": "1.2.1",
    "weight": 4
  },
  "keyboardScroll": {
    "summary": "element not scrollable",
    "why": "Keyboard-only user cannot scroll an item",
    "wcag": "2.1.1",
    "weight": 4
  },
  "positionSticky": {
    "summary": "position sticky",
    "why": "User may be unable to see needed content or may be forced to scroll in both dimensions",
    "wcag": "1.4.10",
    "weight": 1
  },
  "scrollFocus": {
    "summary": "scrollable element and children nonfocusable",
    "why": "User may be unable to see all of an item without scrolling in both dimensions",
    "wcag": "2.1.1",
    "weight": 3
  },
  "scrollRisk": {
    "summary": "container size unit not percentage",
    "why": "User may be unable to see all of an item without scrolling in both dimensions",
    "wcag": "1.4.10",
    "weight": 1
  },
  "skipRepeatedContent": {
    "summary": "skip method missing or invalid",
    "why": "Keyboard-only user cannot easily reach the specific content of the document",
    "wcag": "2.4.1",
    "weight": 3,
    "max": 2
  },
  "repeatedContentRisk": {
    "summary": "skip method missing or invalid?",
    "why": "Keyboard-only user may be unable easily to reach the specific content of the document",
    "wcag": "2.4.1",
    "weight": 1,
    "max": 2
  },
  "submitButton": {
    "summary": "form submission button missing",
    "why": "User cannot easily submit a form",
    "wcag": "3.2.2",
    "weight": 3
  },
  "fragmentaryNoticeRisk": {
    "summary": "assertive region not atomic",
    "why": "User may be unable to get help on what content has changed",
    "wcag": "4.1.3",
    "weight": 2
  },
  "errorReferenceBad": {
    "summary": "error reference invalid",
    "why": "User cannot correct a form error",
    "wcag": "3.3.1",
    "weight": 4
  },
  "noScriptRisk": {
    "summary": "noscript element not equivalent?",
    "why": "User who has disabled JavaScript may be denied some content",
    "wcag": "4.1",
    "weight": 1
  },
  "flash": {
    "summary": "flash content",
    "why": "Document includes code that may not work and may jeopardize user security",
    "wcag": "4.1",
    "weight": 1,
    "max": 1
  },
  "browserSupportRisk": {
    "summary": "inputmode attribute",
    "why": "Document may include code that the browser cannot process",
    "wcag": "4.1",
    "weight": 1
  },
  "attributeObsolete": {
    "summary": "attribute obsolete",
    "why": "Document includes obsolete code that the browser may fail to process",
    "wcag": "4.1",
    "weight": 3
  },
  "nonElement": {
    "summary": "element unknown",
    "why": "Document includes an unknown element that the browser cannot process",
    "wcag": "4.1",
    "weight": 4
  },
  "elementObsolete": {
    "summary": "element obsolete",
    "why": "Document includes obsolete code that the browser may fail to process",
    "wcag": "4.1",
    "weight": 3
  },
  "obsolete": {
    "summary": "code obsolete",
    "why": "Document contains code that is no longer standard",
    "wcag": "4.1",
    "weight": 3
  },
  "atRuleInvalid": {
    "summary": "invalid at-rule",
    "why": "Document cannot be properly displayed in particular contexts",
    "wcag": "4.1",
    "weight": 3
  },
  "cssInvalid": {
    "summary": "CSS invalid",
    "why": "Document cannot be properly displayed",
    "wcag": "4.1",
    "weight": 3
  },
  "elementClosure": {
    "summary": "element closure invalid",
    "why": "Document contains invalid code",
    "wcag": "4.1.1",
    "weight": 3
  },
  "nestingBad": {
    "summary": "nesting invalid",
    "why": "Document contains invalid code",
    "wcag": "4.1.1",
    "weight": 3
  },
  "characterBad": {
    "summary": "invalid character",
    "why": "Invalid character makes the document behave incorrectly",
    "wcag": "4.1",
    "weight": 3
  },
  "entityBad": {
    "summary": "named character reference invalid",
    "why": "User may be unable to read all the document text",
    "wcag": "4.1",
    "weight": 4
  },
  "textContentBad": {
    "summary": "element text content invalid",
    "why": "User may be unable to read all the document text",
    "wcag": "4.1",
    "weight": 3
  },
  "parseError": {
    "summary": "code invalid",
    "why": "Invalid code in the document may prevent a helper from working",
    "wcag": "4.1",
    "weight": 3
  },
  "encodingMisdeclared": {
    "summary": "text encoding wrongly declared",
    "why": "User cannot read all of the text",
    "wcag": "3.1.3",
    "weight": 4,
    "max": 1
  },
  "encodingBad": {
    "summary": "text not Unicode-compliant",
    "why": "User cannot read all of the text",
    "wcag": "3.1.3",
    "weight": 4
  },
  "encodingPrivate": {
    "summary": "text in Private Use Area",
    "why": "User cannot read all of the text",
    "wcag": "3.1.3",
    "weight": 4,
    "max": 1
  },
  "captcha2": {
    "summary": "captcha2",
    "why": "User is prevented from consuming the document",
    "wcag": "1.1.1",
    "weight": 1,
    "max": 1
  },
  "fatalError": {
    "summary": "fatal error",
    "why": "Document prevents testing for accessibility",
    "wcag": "4.1",
    "weight": 4,
    "max": 1
  },
  "notValidatable": {
    "summary": "item makes testing inconclusive",
    "why": "Item prevents a conclusive accessibility test",
    "wcag": "4.1",
    "weight": 1
  },
  "svgNotValidatable": {
    "summary": "SVG version not 1.1",
    "why": "Item prevents testing image for accessibility",
    "wcag": "4.1",
    "weight": 1
  }
} as const;

const rulesData = {
  "alfa": {
    "invariant": {
      "cantTellTextContrast": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Test of text contrast could not give a conclusive result [invalid]"
      },
      "r73": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Text line height is not at least 1.5 [invalid]"
      },
      "r87": {
        "issueID": "ignorable",
        "quality": 0.5,
        "what": "First focusable element is not a link to the main content [invalid]"
      },
      "r3": {
        "issueID": "duplicateID",
        "quality": 1,
        "what": "Element id attribute value is not unique"
      },
      "r40": {
        "issueID": "regionNoText",
        "quality": 1,
        "what": "Region has no accessible name"
      },
      "r28": {
        "issueID": "imageInputNoText",
        "quality": 1,
        "what": "Element is an image input but has no accessible name"
      },
      "r2": {
        "issueID": "imageNoText",
        "quality": 1,
        "what": "Image has no accessible name"
      },
      "r39": {
        "issueID": "imageTextBad",
        "quality": 1,
        "what": "Image text alternative is the filename instead"
      },
      "r67": {
        "issueID": "decorativeElementExposed",
        "quality": 1,
        "what": "Image marked as decorative is in the accessibility tree or has no none/presentation role"
      },
      "r86": {
        "issueID": "decorativeElementExposed",
        "quality": 1,
        "what": "Element marked as decorative is in the accessibility tree or has no none/presentation role"
      },
      "r4": {
        "issueID": "pageLanguage",
        "quality": 1,
        "what": "lang attribute missing, empty, or only whitespace"
      },
      "r5": {
        "issueID": "pageLanguageBad",
        "quality": 1,
        "what": "lang attribute has no valid primary language tag"
      },
      "r7": {
        "issueID": "languageChange",
        "quality": 1,
        "what": "lang attribute has no valid primary language subtag"
      },
      "r63": {
        "issueID": "objectNoText",
        "quality": 1,
        "what": "object element has no accessible name"
      },
      "r11": {
        "issueID": "linkNoText",
        "quality": 1,
        "what": "Link has no accessible name"
      },
      "r12": {
        "issueID": "buttonNoText",
        "quality": 1,
        "what": "button element has no accessible name"
      },
      "r94": {
        "issueID": "menuItemNoText",
        "quality": 1,
        "what": "Element with a menuitem role has no accessible name"
      },
      "r42": {
        "issueID": "parentMissing",
        "quality": 1,
        "what": "Element is not owned by an element of its required context role"
      },
      "r68": {
        "issueID": "descendantMissing",
        "quality": 1,
        "what": "Element owns no element required by its semantic role"
      },
      "r43": {
        "issueID": "svgImageNoText",
        "quality": 1,
        "what": "Element has no accessible name"
      },
      "r47": {
        "issueID": "metaBansZoom",
        "quality": 1,
        "what": "Element restricts zooming"
      },
      "r74": {
        "issueID": "fontSizeAbsolute",
        "quality": 1,
        "what": "Paragraph text has an absolute font size"
      },
      "r75": {
        "issueID": "fontSmall",
        "quality": 1,
        "what": "Font size is smaller than 9 pixels"
      },
      "r91": {
        "issueID": "horizontalSpacingFrozen",
        "quality": 1,
        "what": "Style attribute with !important makes letter spacing insufficient"
      },
      "r93": {
        "issueID": "verticalSpacingFrozen",
        "quality": 1,
        "what": "Style attribute with !important prevents adjusting line height"
      },
      "r80": {
        "issueID": "lineHeightAbsolute",
        "quality": 1,
        "what": "Paragraph text has an absolute line height"
      },
      "r83": {
        "issueID": "overflowHidden",
        "quality": 1,
        "what": "Overflow is hidden or clipped if the text is enlarged"
      },
      "r13": {
        "issueID": "iframeTitleBad",
        "quality": 1,
        "what": "iframe has no accessible name"
      },
      "r21": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "Element has no valid role"
      },
      "r110": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "No token in the value of the role attribute is valid"
      },
      "r16": {
        "issueID": "ariaMissing",
        "quality": 1,
        "what": "Element does not have all required states and properties"
      },
      "r18": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "ARIA state or property is not allowed for the element on which it is specified"
      },
      "r19": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "ARIA state or property has an invalid value"
      },
      "r20": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "ARIA attribute is not defined"
      },
      "r10": {
        "issueID": "autocompleteBad",
        "quality": 1,
        "what": "autocomplete attribute has no valid value"
      },
      "r69": {
        "issueID": "contrastAA",
        "quality": 1,
        "what": "Text outside widget has subminimum contrast"
      },
      "r66": {
        "issueID": "contrastAAA",
        "quality": 1,
        "what": "Text contrast less than AAA requires"
      },
      "r64": {
        "issueID": "headingEmpty",
        "quality": 1,
        "what": "Heading has no non-empty accessible name"
      },
      "r78": {
        "issueID": "headingOfNothing",
        "quality": 1,
        "what": "No content between two headings of the same level"
      },
      "r1": {
        "issueID": "pageTitle",
        "quality": 1,
        "what": "Document has no valid title element"
      },
      "r53": {
        "issueID": "headingLevelSkip",
        "quality": 1,
        "what": "Heading skips one or more levels"
      },
      "r59": {
        "issueID": "headingNone",
        "quality": 1,
        "what": "Document has no headings"
      },
      "r61": {
        "issueID": "h1Not1st",
        "quality": 1,
        "what": "First heading is not h1"
      },
      "r71": {
        "issueID": "justification",
        "quality": 1,
        "what": "Paragraph text is fully justified"
      },
      "r79": {
        "issueID": "pseudoCodeRisk",
        "quality": 1,
        "what": "pre element is not used for a figure or for code, kbd, and samp elements"
      },
      "r60": {
        "issueID": "groupName",
        "quality": 1,
        "what": "Form-control group has no accessible name"
      },
      "r77": {
        "issueID": "tableCellHeaderless",
        "quality": 1,
        "what": "Table cell has no header"
      },
      "r46": {
        "issueID": "tableHeaderCellless",
        "quality": 1,
        "what": "Header cell is not assigned to any cell"
      },
      "r8": {
        "issueID": "controlNoText",
        "quality": 1,
        "what": "Form field has no accessible name"
      },
      "r14": {
        "issueID": "visibleLabelNotInName",
        "quality": 1,
        "what": "Visible label is not in the accessible name"
      },
      "r111": {
        "issueID": "targetSmall",
        "quality": 1,
        "what": "Target size is suboptimal"
      },
      "r113": {
        "issueID": "targetTiny",
        "quality": 1,
        "what": "Target size is substandard"
      },
      "r95": {
        "issueID": "unfocusability",
        "quality": 1,
        "what": "iframe element with a negative tabindex attribute contains an interactive element"
      },
      "r65": {
        "issueID": "focusIndicationBad",
        "quality": 1,
        "what": "Element in the sequential focus order has no visible focus"
      },
      "r72": {
        "issueID": "allCaps",
        "quality": 1,
        "what": "Paragraph text is uppercased"
      },
      "r85": {
        "issueID": "allItalics",
        "quality": 1,
        "what": "Text of the paragraph is all italic"
      },
      "r57": {
        "issueID": "contentBeyondLandmarks",
        "quality": 1,
        "what": "Perceivable text content is not included in any landmark"
      },
      "r17": {
        "issueID": "focusableHidden",
        "quality": 1,
        "what": "Tab-focusable element is or has an ancestor that is aria-hidden"
      },
      "r90": {
        "issueID": "focusableDescendants",
        "quality": 1,
        "what": "Element has a role making its children presentational but contains a focusable element"
      },
      "r62": {
        "issueID": "linkIndication",
        "quality": 1,
        "what": "Inline link is not distinct from the surrounding text except by color"
      },
      "r84": {
        "issueID": "keyboardScroll",
        "quality": 1,
        "what": "Element is scrollable but not by keyboard"
      },
      "r54": {
        "issueID": "fragmentaryNoticeRisk",
        "quality": 1,
        "what": "Assertive region is not atomic"
      },
      "r70": {
        "issueID": "elementObsolete",
        "quality": 1,
        "what": "Element is obsolete or deprecated"
      },
      "cantTell": {
        "issueID": "notValidatable",
        "quality": 1,
        "what": "Test could not give a conclusive result"
      }
    },
    "variable": {}
  },
  "aslint": {
    "invariant": {
      "capital_letters_words": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Element or its title has entirely upper-case words [invalid]"
      },
      "color_contrast_aa": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Text has contrast less than 4.5:1 [speculative]"
      },
      "color_contrast_aaa": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Text contrast may be less than enhanced but the element is invisible [invalid]"
      },
      "css_images_convey_information": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Background image may be informative [speculative]"
      },
      "empty_link_element": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Element has no visible and accessible name [invalid]"
      },
      "fieldset_no_legend": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "First child element of the element is not a legend [duplicative]"
      },
      "flickering": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Excessive flashing may exist [speculative]"
      },
      "links_language_destination": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Link destination has a named host and may be in an unexpected language [speculative]"
      },
      "links_not_visually_evident_without_color_vision": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Element is a link, but its style properties do not differentiate it from its parent [irrelevant]"
      },
      "links_same_content_different_url": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Links with the same text content have different destination URLs [invalid]"
      },
      "meaningful_content_sequence": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "The content sequence may fail to be meaningful [speculative]"
      },
      "missing_alt_attribute": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Image has no alt attribute [invalid]"
      },
      "motion_actuation": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Document listens for device motion or rotation [speculative]"
      },
      "overlay": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Document contains a commercial overlay modifier that may fail or invalidate test results [unreliable]"
      },
      "object_missing_body": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "object element has no body to act as a text alternative [invalid]"
      },
      "reflow": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Page may require horizontal scrolling [speculative]"
      },
      "text_color_convey_information": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Color may give information not given also by text [speculative]"
      },
      "duplicated_id_attribute": {
        "issueID": "duplicateID",
        "quality": 1,
        "what": "Element id attribute value is not unique"
      },
      "input_image_missing_alt": {
        "issueID": "imageInputNoText",
        "quality": 1,
        "what": "Element is an image input but its text alternative is missing or empty"
      },
      "alt_text_include_filename": {
        "issueID": "imageTextBad",
        "quality": 1,
        "what": "Image text alternative includes a filename"
      },
      "general_alt": {
        "issueID": "imageTextRisk",
        "quality": 1,
        "what": "Image may be better described by a revised text alternative and an aria-label attribute"
      },
      "alt_color_convey_information": {
        "issueID": "imageTextRisk",
        "quality": 1,
        "what": "Text alternative fails to give information provided by colors?"
      },
      "html_lang_attrN": {
        "issueID": "pageLanguage",
        "quality": 1,
        "what": "lang attribute missing from the html element"
      },
      "html_lang_attrE": {
        "issueID": "pageLanguage",
        "quality": 1,
        "what": "lang attribute of the html element is empty"
      },
      "html_lang_attrP": {
        "issueID": "pageLanguageBad",
        "quality": 1,
        "what": "value of the lang attribute of the html element has too many segments"
      },
      "aria_role_dialog": {
        "issueID": "dialogNoText",
        "quality": 1,
        "what": "Element has a dialog role but has no accessible name"
      },
      "object_general_alt": {
        "issueID": "objectTextRisk",
        "quality": 1,
        "what": "Text of the object may better explain it if revised"
      },
      "audio_alternative": {
        "issueID": "objectAudioRisk",
        "quality": 1,
        "what": "Element is inferior to an audio element if it plays audio"
      },
      "applet_missing_alt": {
        "issueID": "appletNoText",
        "quality": 1,
        "what": "Text alternative of the applet is missing or empty"
      },
      "applet_missing_body": {
        "issueID": "appletNoText",
        "quality": 1,
        "what": "Content of the applet is missing or empty"
      },
      "a_area_missing_alt": {
        "issueID": "imageMapAreaNoText",
        "quality": 1,
        "what": "Text alternative of the element is missing or empty"
      },
      "link_button_space_key": {
        "issueID": "customKeyboardRisk",
        "quality": 1,
        "what": "Element has a button role but fails to be keyboard-operable?"
      },
      "broken_same_page_link": {
        "issueID": "internalLinkBroken",
        "quality": 1,
        "what": "Same-page destination of the link does not exist"
      },
      "label_inappropriate_associationN": {
        "issueID": "labelForBad",
        "quality": 1,
        "what": "Element referenced by the for attribute is not a form control"
      },
      "aria_describedby_association": {
        "issueID": "descriptionBadID",
        "quality": 1,
        "what": "aria-describedby attribute references a missing or empty element"
      },
      "incorrect_label_placement": {
        "issueID": "labelConfusionRisk",
        "quality": 1,
        "what": "label element precedes the labeled radio button or checkbox"
      },
      "label_inappropriate_associationM": {
        "issueID": "labelBadID",
        "quality": 1,
        "what": "Element referenced by the for attribute is missing"
      },
      "aria_labelledby_associationN": {
        "issueID": "labelBadID",
        "quality": 1,
        "what": "Element referenced by the aria-labelledby attribute is missing"
      },
      "aria_labelledby_associationE": {
        "issueID": "labelBadID",
        "quality": 1,
        "what": "aria-labelledby attribute refers to no element"
      },
      "role_application": {
        "issueID": "applicationRisk",
        "quality": 1,
        "what": "Element has an application role"
      },
      "rtl_content": {
        "issueID": "directionRisk",
        "quality": 1,
        "what": "Direction specified as right to left"
      },
      "click_verb": {
        "issueID": "clickOnly",
        "quality": 1,
        "what": "Mouse-specific word click is in the element text"
      },
      "img_empty_alt_in_link": {
        "issueID": "imageLinkNoText",
        "quality": 1,
        "what": "Element is an image in a link but has no text alternative"
      },
      "unclear_anchor_uri": {
        "issueID": "destinationNotURL",
        "quality": 1,
        "what": "Link destination is #, a script, or empty"
      },
      "unclear_uri_on_a": {
        "issueID": "destinationNotURL",
        "quality": 1,
        "what": "Link destination is #, a script, or empty"
      },
      "missing_href_on_a": {
        "issueID": "destinationLink",
        "quality": 1,
        "what": "Link has no href attribute"
      },
      "title_for_abbr": {
        "issueID": "abbreviationNoTitle",
        "quality": 1,
        "what": "Element is an abbr but its defining title attribute is missing or empty"
      },
      "content_editable_missing_attributes": {
        "issueID": "editableHow",
        "quality": 1,
        "what": "Element has a true contenteditable attribute but no aria-multiline or labeling attribute"
      },
      "img_adjacent_duplicate_text_link": {
        "issueID": "linkPair",
        "quality": 1,
        "what": "Link and an adjacent link are logically 1 link but are not combined"
      },
      "links_new_window_mark": {
        "issueID": "newTabSurpriseRisk",
        "quality": 1,
        "what": "Indicator that the link opens a new window or tab is missing?"
      },
      "select_initial_option": {
        "issueID": "preselectedOption",
        "quality": 1,
        "what": "No option has been made the default with a selected attribute"
      },
      "empty_button_description": {
        "issueID": "buttonNoContent",
        "quality": 1,
        "what": "button element has no visible accessible name"
      },
      "accessible_svg": {
        "issueID": "svgImageNoText",
        "quality": 1,
        "what": "Element has no title, description, text, attribute label, or role description"
      },
      "accessible_svgI": {
        "issueID": "svgLabelID",
        "quality": 1,
        "what": "Element references a nonexisting element as its label"
      },
      "orientation": {
        "issueID": "cssBansPageRotate",
        "quality": 1,
        "what": "CSS media query specifies an orientation"
      },
      "orientationT": {
        "issueID": "orientationRisk",
        "quality": 1,
        "what": "Failure to read a stylesheet prevents testing for orientation violations"
      },
      "zoom_disabled": {
        "issueID": "metaBansZoom",
        "quality": 1,
        "what": "Element specifies a minimum or maximum scale or prohibits zooming"
      },
      "minimum_font_size": {
        "issueID": "fontSmall",
        "quality": 1,
        "what": "Font size is smaller than 10 pixels"
      },
      "title_iframe": {
        "issueID": "iframeTitleBad",
        "quality": 1,
        "what": "Element is an iframe or object but its title attribute is missing or empty"
      },
      "unsupported_role_on_element": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "Element has a role that is not valid for it"
      },
      "invalid_attribute_dir_value": {
        "issueID": "dirBad",
        "quality": 1,
        "what": "Element has a dir attribute with a value other than rtl, ltr, or auto"
      },
      "misused_input_attribute": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "Element has an attribute that is not valid for input elements"
      },
      "identify_input_purpose": {
        "issueID": "autocompleteBad",
        "quality": 1,
        "what": "autocomplete attribute has an invalid value"
      },
      "misused_required_attribute": {
        "issueID": "requirementBad",
        "quality": 1,
        "what": "Requirement status of the element is invalid"
      },
      "misused_required_attributeR": {
        "issueID": "requirementRedundant",
        "quality": 1,
        "what": "Requirement status of the element is stated twice"
      },
      "color_contrast_state_pseudo_classes_abstract3": {
        "issueID": "contrastAA",
        "quality": 1,
        "what": "Text has contrast less than 3:1"
      },
      "color_contrast_state_pseudo_classes_abstract4": {
        "issueID": "contrastAA",
        "quality": 1,
        "what": "Text has contrast less than 4.5:1"
      },
      "color_contrast_aaa4": {
        "issueID": "contrastAAA",
        "quality": 1,
        "what": "Text has contrast less than 4.5:1"
      },
      "color_contrast_aaa7": {
        "issueID": "contrastAAA",
        "quality": 1,
        "what": "Text has contrast less than 7:1"
      },
      "color_contrast_state_pseudo_classes_abstractF": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Fixed position of the element prevents contrast measurement"
      },
      "color_contrast_state_pseudo_classes_abstractB": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Transparent background color of the element prevents contrast measurement"
      },
      "color_contrast_aaaB": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Transparent background color of the element prevents contrast measurement"
      },
      "empty_heading": {
        "issueID": "headingEmpty",
        "quality": 1,
        "what": "Element is a heading but is empty"
      },
      "img_alt_duplicate_text_link": {
        "issueID": "imageTextRedundant",
        "quality": 1,
        "what": "Text alternative of the image duplicates the text of the enclosing link"
      },
      "img_empty_alt_with_empty_title": {
        "issueID": "decorativeTitle",
        "quality": 1,
        "what": "Element has an empty alt attribute but a nonempty title attribute"
      },
      "label_duplicated_content_title": {
        "issueID": "titleRedundant",
        "quality": 1,
        "what": "Element has an accessible name identical to the value of its title attribute"
      },
      "empty_title_attribute": {
        "issueID": "titleEmpty",
        "quality": 0.5,
        "what": "title attribute of the element is empty or only whitespace"
      },
      "page_titleU": {
        "issueID": "pageTitleBad",
        "quality": 1,
        "what": "Page title does not identify the contents or purpose of the page"
      },
      "page_titleN": {
        "issueID": "pageTitle",
        "quality": 1,
        "what": "Page title is missing or empty"
      },
      "elements_not_allowed_in_head": {
        "issueID": "headElementsBad",
        "quality": 1,
        "what": "Elements in the head are not allowed there"
      },
      "headings_hierarchy": {
        "issueID": "headingStructure",
        "quality": 1,
        "what": "Heading level is illogical in its context"
      },
      "headings_sibling_unique": {
        "issueID": "headingConfusion",
        "quality": 1,
        "what": "Sibling headings have the same accessible name"
      },
      "no_headings": {
        "issueID": "headingNone",
        "quality": 1,
        "what": "Document has no headings"
      },
      "h1_must_be": {
        "issueID": "h1Not1",
        "quality": 1,
        "what": "Page contains no h1 element"
      },
      "horizontal_rule": {
        "issueID": "hrConfusionRisk",
        "quality": 1,
        "what": "hr element has neither a true aria-hidden attribute nor a presentation role"
      },
      "group_elements_name_attribute": {
        "issueID": "fieldSetRisk",
        "quality": 1,
        "what": "Element is an input with a name attribute but has no fieldset parent"
      },
      "legend_first_child_of_fieldset": {
        "issueID": "legendMissing",
        "quality": 1,
        "what": "First child element of the element is not a legend"
      },
      "table_missing_descriptionC": {
        "issueID": "tableCaption",
        "quality": 1,
        "what": "Element contains no caption element"
      },
      "table_missing_descriptionE": {
        "issueID": "tableCaption",
        "quality": 1,
        "what": "Element contains a caption element, but it is empty"
      },
      "table_caption_summary_identical": {
        "issueID": "tableCapSum",
        "quality": 1,
        "what": "Element has a summary attribute identical to its caption element"
      },
      "table_missing_descriptionS": {
        "issueID": "tableSum",
        "quality": 1,
        "what": "Element has a summary attribute, but it is empty"
      },
      "table_missing_descriptionLM": {
        "issueID": "tableLabelID",
        "quality": 1,
        "what": "Element has a broken aria-labelledby ID"
      },
      "table_missing_descriptionLE": {
        "issueID": "tableLabelID",
        "quality": 1,
        "what": "Element has an aria-labelledby attribute, but it is empty"
      },
      "table_missing_descriptionDM": {
        "issueID": "tableDescriptionID",
        "quality": 1,
        "what": "Element has a broken aria-describedby ID"
      },
      "table_missing_descriptionDE": {
        "issueID": "tableDescriptionID",
        "quality": 1,
        "what": "Element has an aria-describedby attribute, but it is empty"
      },
      "table_row_and_column_headersRC": {
        "issueID": "tableHeaderless",
        "quality": 1,
        "what": "None of the cells in the table is a header"
      },
      "table_row_and_column_headersH": {
        "issueID": "tableHead",
        "quality": 1,
        "what": "Element contains no thead element"
      },
      "table_row_and_column_headersB": {
        "issueID": "tableBody",
        "quality": 1,
        "what": "Element contains no tbody element"
      },
      "label_visually_hidden_only": {
        "issueID": "controlLabelInvisible",
        "quality": 1,
        "what": "Form control has a label but it is not visible"
      },
      "outline_zero": {
        "issueID": "focusIndicationBad",
        "quality": 1,
        "what": "Element may get invisibly focused because its outline has no thickness"
      },
      "font_style_italic": {
        "issueID": "allItalics",
        "quality": 1,
        "what": "Text longer than 80 characters has an italic font style"
      },
      "main_landmark_must_be_top_level": {
        "issueID": "mainNotTop",
        "quality": 1,
        "what": "Element with a main role is not at the top level"
      },
      "main_element_only_one": {
        "issueID": "mainNot1",
        "quality": 1,
        "what": "Document has more than 1 main landmark"
      },
      "contentinfo_landmark_only_one": {
        "issueID": "footerNot1",
        "quality": 1,
        "what": "Page has more than 1 contentinfo landmark (footer)"
      },
      "navigation_landmark_restrictions": {
        "issueID": "landmarkInNav",
        "quality": 1,
        "what": "Element with a navigation role contains a landmark other than region and search"
      },
      "misused_aria_on_focusable_element": {
        "issueID": "focusableHidden",
        "quality": 1,
        "what": "Visible focusable element has a true aria-hidden attribute or a presentation role"
      },
      "label_implicitly_associatedM": {
        "issueID": "multipleLabelees",
        "quality": 1,
        "what": "Element contains more than 1 labelable element."
      },
      "aria_hidden": {
        "issueID": "hideFailureRisk",
        "quality": 1,
        "what": "aria-hidden attribute has the value false"
      },
      "aria_hidden_false": {
        "issueID": "hideFailureRisk",
        "quality": 1,
        "what": "aria-hidden attribute has the value false"
      },
      "incorrect_technique_for_hiding_content": {
        "issueID": "negativeIndent",
        "quality": 1,
        "what": "Element has a text-indent style with a negative value"
      },
      "duplicated_for_attribute": {
        "issueID": "labelNot1",
        "quality": 1,
        "what": "More than 1 label element has the same for attribute"
      },
      "missing_labelM": {
        "issueID": "labelNot1",
        "quality": 1,
        "what": "More than 1 label element refers to the element"
      },
      "empty_label_element": {
        "issueID": "labelEmpty",
        "quality": 1,
        "what": "Element has no content"
      },
      "label_implicitly_associatedW": {
        "issueID": "labelEmpty",
        "quality": 1,
        "what": "Element has no labeling content except whitespace"
      },
      "aria_labelledby_association_empty_element": {
        "issueID": "labelEmpty",
        "quality": 1,
        "what": "Referenced label has no content"
      },
      "missing_label": {
        "issueID": "labelRisk",
        "quality": 1,
        "what": "Element has no explicit label and may have no other accessible name"
      },
      "missing_labelI": {
        "issueID": "labelRisk",
        "quality": 1,
        "what": "Element has no id attribute for an explicit label to reference"
      },
      "missing_labelN": {
        "issueID": "labelRisk",
        "quality": 1,
        "what": "Element has an id attribute but no explicit label references it"
      },
      "link_with_unclear_purpose": {
        "issueID": "linkVaguenessRisk",
        "quality": 1,
        "what": "Element is a link but has vague or generic content"
      },
      "animationM": {
        "issueID": "spontaneousMotion",
        "quality": 1,
        "what": "Animation fails to provide a pause, stop, or hide mechanism?"
      },
      "animationD": {
        "issueID": "animationLong",
        "quality": 1,
        "what": "Animation lasts more than 5 seconds"
      },
      "animationI": {
        "issueID": "animationLong",
        "quality": 1,
        "what": "Animation is repetitive"
      },
      "blink_element": {
        "issueID": "blink",
        "quality": 1,
        "what": "Element is blink"
      },
      "autoplay_audio_video": {
        "issueID": "autoplay",
        "quality": 1,
        "what": "Element plays automatically"
      },
      "no_meta_http_equiv_refresh": {
        "issueID": "refresh",
        "quality": 1,
        "what": "Element forces a page reload"
      },
      "positive_tabindex": {
        "issueID": "tabIndexPositive",
        "quality": 1,
        "what": "Element has a positive tabIndex value"
      },
      "accessible_svgT": {
        "issueID": "tabIndexInt",
        "quality": 1,
        "what": "Element has a non-integer tabindex attribute"
      },
      "misused_tabindex_attribute": {
        "issueID": "tabIndexExtra",
        "quality": 1,
        "what": "Element has an implicit tabIndex value 0, but also has a tabindex attribute"
      },
      "audio_video_captions": {
        "issueID": "avNoText",
        "quality": 1,
        "what": "Element is audio or video but contains no caption track element"
      },
      "audio_alternativeT": {
        "issueID": "audioNoText",
        "quality": 1,
        "what": "Element contains no track element"
      },
      "audio_alternativeA": {
        "issueID": "audioTextRisk",
        "quality": 1,
        "what": "Referenced description or another text alternative is missing?"
      },
      "video_audio_descriptions": {
        "issueID": "videoAlternative",
        "quality": 1,
        "what": "Element has neither an audio source nor a description track"
      },
      "position_sticky": {
        "issueID": "positionSticky",
        "quality": 1,
        "what": "Element has a sticky position"
      },
      "missing_submit_button": {
        "issueID": "submitButton",
        "quality": 1,
        "what": "Element is a form but contains no input or button element for submission"
      },
      "flash_content": {
        "issueID": "flash",
        "quality": 1,
        "what": "Document contains Adobe Flash content"
      },
      "obsolete_html_attributes": {
        "issueID": "attributeObsolete",
        "quality": 1,
        "what": "Element has an obsolete attribute"
      },
      "obsolete_html_elements": {
        "issueID": "elementObsolete",
        "quality": 1,
        "what": "Element is obsolete"
      },
      "audio_alternativeB": {
        "issueID": "elementObsolete",
        "quality": 1,
        "what": "Element is obsolete and inferior to an audio element"
      },
      "captcha_google": {
        "issueID": "captcha2",
        "quality": 1,
        "what": "Document employs Google CAPTCHA version 2"
      }
    },
    "variable": {}
  },
  "axe": {
    "invariant": {
      "css-orientation-lock": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "CSS media query locks display orientation [unreliable]"
      },
      "frame-tested": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Some content is in an iframe and so may not be testable for accessibility [speculative]"
      },
      "hidden-content": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Some content is hidden and so may not be testable for accessibility [speculative]"
      },
      "duplicate-id": {
        "issueID": "duplicateID",
        "quality": 1,
        "what": "id attribute value is not unique"
      },
      "duplicate-id-active": {
        "issueID": "duplicateID",
        "quality": 1,
        "what": "id attribute value of the active element is not unique"
      },
      "duplicate-id-aria": {
        "issueID": "duplicateID",
        "quality": 1,
        "what": "id attribute used in ARIA or in a label has a value that is not unique"
      },
      "aria-progressbar-name": {
        "issueID": "progressNoText",
        "quality": 1,
        "what": "Progress bar has no accessible name"
      },
      "aria-input-field-name": {
        "issueID": "inputNoText",
        "quality": 1,
        "what": "ARIA input field has no accessible name"
      },
      "aria-toggle-field-name": {
        "issueID": "inputNoText",
        "quality": 1,
        "what": "Toggle field has no accessible name"
      },
      "input-image-alt": {
        "issueID": "imageButtonNoText",
        "quality": 1,
        "what": "Image button has no text alternative"
      },
      "image-alt": {
        "issueID": "imageNoText",
        "quality": 1,
        "what": "Image has no text alternative"
      },
      "role-img-alt": {
        "issueID": "imageNoText",
        "quality": 1,
        "what": "Element with role img has no text alternative"
      },
      "html-has-lang": {
        "issueID": "pageLanguage",
        "quality": 1,
        "what": "html element has no lang attribute"
      },
      "html-lang-valid": {
        "issueID": "pageLanguageBad",
        "quality": 1,
        "what": "html element has no valid value for the lang attribute"
      },
      "valid-lang": {
        "issueID": "languageChange",
        "quality": 1,
        "what": "lang attribute has no valid value"
      },
      "aria-dialog-name": {
        "issueID": "dialogNoText",
        "quality": 1,
        "what": "ARIA dialog or alertdialog node has no accessible name"
      },
      "object-alt": {
        "issueID": "objectNoText",
        "quality": 1,
        "what": "object element has no text alternative"
      },
      "area-alt": {
        "issueID": "imageMapAreaNoText",
        "quality": 1,
        "what": "Element is an active area element but has no text alternative"
      },
      "link-name": {
        "issueID": "linkNoText",
        "quality": 1,
        "what": "Link has no discernible text"
      },
      "identical-links-same-purpose": {
        "issueID": "linkConfusionRisk",
        "quality": 1,
        "what": "Links with the same accessible name serve dissimilar purposes?"
      },
      "aria-command-name": {
        "issueID": "buttonNoText",
        "quality": 1,
        "what": "ARIA command has no accessible name"
      },
      "button-name": {
        "issueID": "buttonNoText",
        "quality": 1,
        "what": "button element has no discernible text"
      },
      "input-button-name": {
        "issueID": "buttonNoText",
        "quality": 1,
        "what": "Input button has no discernible text"
      },
      "aria-required-parent": {
        "issueID": "parentMissing",
        "quality": 1,
        "what": "ARIA role is not contained by a required parent"
      },
      "aria-required-children": {
        "issueID": "descendantMissing",
        "quality": 1,
        "what": "ARIA role contains no required child"
      },
      "svg-img-alt": {
        "issueID": "svgImageNoText",
        "quality": 1,
        "what": "Element is svg and has an img role but has no text alternative"
      },
      "meta-viewport": {
        "issueID": "metaBansZoom",
        "quality": 1,
        "what": "Zooming and scaling are disabled"
      },
      "meta-viewport-large": {
        "issueID": "metaBansZoom",
        "quality": 1,
        "what": "User cannot zoom and scale the text up to 500%"
      },
      "avoid-inline-spacing": {
        "issueID": "horizontalSpacingFrozen",
        "quality": 1,
        "what": "Inline text spacing is not adjustable with a custom stylesheet"
      },
      "frame-title": {
        "issueID": "iframeTitleBad",
        "quality": 1,
        "what": "Frame has no accessible name"
      },
      "frame-title-unique": {
        "issueID": "iframeTitleBad",
        "quality": 1,
        "what": "Frame title attribute is not unique"
      },
      "aria-roles": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "ARIA role has an invalid value"
      },
      "aria-allowed-role": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "ARIA role is not appropriate for the element"
      },
      "aria-prohibited-attr": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "Element has an attribute that is not valid for the role of the element"
      },
      "aria-required-attr": {
        "issueID": "ariaMissing",
        "quality": 1,
        "what": "Required ARIA attribute is not provided"
      },
      "aria-valid-attr": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "ARIA attribute has an invalid name"
      },
      "aria-valid-attr-value": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "ARIA attribute has an invalid value"
      },
      "aria-allowed-attr": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "ARIA attribute is invalid for the role of its element"
      },
      "aria-roledescription": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "aria-roledescription is on an element with no semantic role"
      },
      "autocomplete-valid": {
        "issueID": "autocompleteBad",
        "quality": 1,
        "what": "autocomplete attribute is used incorrectly"
      },
      "color-contrast": {
        "issueID": "contrastAA",
        "quality": 1,
        "what": "Element has insufficient color contrast"
      },
      "color-contrast-enhanced": {
        "issueID": "contrastAAA",
        "quality": 1,
        "what": "Element has insufficient color contrast (Level AAA)"
      },
      "empty-heading": {
        "issueID": "headingEmpty",
        "quality": 1,
        "what": "Heading is empty"
      },
      "image-redundant-alt": {
        "issueID": "imageTextRedundant",
        "quality": 1,
        "what": "Text of a button or link is repeated in the image alternative"
      },
      "document-title": {
        "issueID": "pageTitle",
        "quality": 1,
        "what": "Document contains no title element"
      },
      "heading-order": {
        "issueID": "headingLevelSkip",
        "quality": 1,
        "what": "Heading levels do not increase by only one or their order is ambiguous"
      },
      "page-has-heading-one": {
        "issueID": "h1Not1",
        "quality": 1,
        "what": "Document contains no level-one heading"
      },
      "p-as-heading": {
        "issueID": "pseudoHeadingRisk",
        "quality": 1,
        "what": "Styled p element is misused as a heading?"
      },
      "list": {
        "issueID": "listChild",
        "quality": 1,
        "what": "List element ul or ol has a child element other than li, script, or template"
      },
      "definition-list": {
        "issueID": "listChild",
        "quality": 1,
        "what": "List element dl has a child element other than properly ordered dt or dt group, script, template, or div"
      },
      "listitem": {
        "issueID": "listItemOrphan",
        "quality": 1,
        "what": "Element is not contained by a ul or ol element"
      },
      "select-name": {
        "issueID": "selectNoText",
        "quality": 1,
        "what": "Element is select but has no accessible name"
      },
      "accesskeys": {
        "issueID": "accessKeyDuplicate",
        "quality": 1,
        "what": "accesskey attribute value is not unique"
      },
      "table-fake-caption": {
        "issueID": "tableCaption",
        "quality": 1,
        "what": "Data or header cells are used for a table caption instead of a caption element"
      },
      "td-has-header": {
        "issueID": "tableCellHeaderless",
        "quality": 1,
        "what": "Cell in table larger than 3 by 3 has no header"
      },
      "th-has-data-cells": {
        "issueID": "tableHeaderCellless",
        "quality": 1,
        "what": "Table header refers to no cell"
      },
      "empty-table-header": {
        "issueID": "tableHeaderEmpty",
        "quality": 1,
        "what": "Element is a table header but has no text"
      },
      "label": {
        "issueID": "controlNoText",
        "quality": 1,
        "what": "Form element has no label"
      },
      "label-title-only": {
        "issueID": "controlLabelInvisible",
        "quality": 1,
        "what": "Form control has no visible label"
      },
      "label-content-name-mismatch": {
        "issueID": "visibleLabelNotInName",
        "quality": 1,
        "what": "Element visible text is not part of its accessible name"
      },
      "nested-interactive": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "Interactive controls are nested"
      },
      "region": {
        "issueID": "contentBeyondLandmarks",
        "quality": 1,
        "what": "Some page content is not contained by landmarks"
      },
      "landmark-contentinfo-is-top-level": {
        "issueID": "footerNotTop",
        "quality": 1,
        "what": "contentinfo landmark (footer) is contained in another landmark"
      },
      "landmark-complementary-is-top-level": {
        "issueID": "asideNotTop",
        "quality": 1,
        "what": "complementary landmark (aside) is contained in another landmark"
      },
      "landmark-main-is-top-level": {
        "issueID": "mainNotTop",
        "quality": 1,
        "what": "main landmark is contained in another landmark"
      },
      "landmark-one-main": {
        "issueID": "mainNone",
        "quality": 1,
        "what": "page has no main landmark"
      },
      "landmark-no-duplicate-main": {
        "issueID": "mainNot1",
        "quality": 1,
        "what": "Page has more than 1 main landmark"
      },
      "landmark-no-duplicate-banner": {
        "issueID": "bannerNot1",
        "quality": 1,
        "what": "Page has more than 1 banner landmark"
      },
      "landmark-banner-is-top-level": {
        "issueID": "bannerNotTop",
        "quality": 1,
        "what": "banner landmark is contained in another landmark"
      },
      "landmark-no-duplicate-contentinfo": {
        "issueID": "footerNot1",
        "quality": 1,
        "what": "Page has more than 1 contentinfo landmark (footer)"
      },
      "landmark-unique": {
        "issueID": "landmarkConfusion",
        "quality": 1,
        "what": "Landmark has a role and an accessible name that are identical to another"
      },
      "focus-order-semantics": {
        "issueID": "focusableRole",
        "quality": 1,
        "what": "Focusable element has no active role"
      },
      "aria-hidden-focus": {
        "issueID": "focusableHidden",
        "quality": 1,
        "what": "ARIA hidden element is focusable or contains a focusable element"
      },
      "form-field-multiple-labels": {
        "issueID": "labelNot1",
        "quality": 1,
        "what": "Form field has multiple label elements"
      },
      "link-in-text-block": {
        "issueID": "linkIndication",
        "quality": 1,
        "what": "Element is not distinct from surrounding text without reliance on color"
      },
      "blink": {
        "issueID": "blink",
        "quality": 1,
        "what": "Element, blink, is deprecated"
      },
      "no-autoplay-audio": {
        "issueID": "autoplay",
        "quality": 1,
        "what": "Element plays automatically"
      },
      "meta-refresh": {
        "issueID": "refresh",
        "quality": 1,
        "what": "Delayed refresh under 20 hours is used"
      },
      "tabindex": {
        "issueID": "tabIndexPositive",
        "quality": 1,
        "what": "Positive tabIndex risks creating a confusing focus order"
      },
      "presentation-role-conflict": {
        "issueID": "presentationGlobal",
        "quality": 1,
        "what": "Element has a none/presentation role but is focusable or has a global ARIA state or property"
      },
      "audio-caption": {
        "issueID": "audioNoText",
        "quality": 1,
        "what": "Element has no captions track"
      },
      "video-caption": {
        "issueID": "videoNoText",
        "quality": 1,
        "what": "Element has no captions"
      },
      "scrollable-region-focusable": {
        "issueID": "keyboardScroll",
        "quality": 1,
        "what": "Element is scrollable but has no keyboard access"
      },
      "bypass": {
        "issueID": "skipRepeatedContent",
        "quality": 1,
        "what": "Page has no means to bypass repeated blocks"
      },
      "skip-link": {
        "issueID": "skipRepeatedContent",
        "quality": 1,
        "what": "Skip-link target is not focusable or does not exist"
      }
    },
    "variable": {}
  },
  "ed11y": {
    "invariant": {
      "altNull": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "img element not inside a link has an empty alt attribute [speculative]"
      },
      "altPartOfLinkWithText": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Name of the link enclosing the img element includes its alt attribute, so may be unclear [speculative]"
      },
      "embedAudio": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Element is audio, so may lack an accurate transcript [speculative]"
      },
      "embedCustom": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Embedded custom element may fail to be accessible [speculative]"
      },
      "embedTwitter": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Element is a Twitter feed, so may add many items on scroll and thus be impractical to exit by keyboard [speculative]"
      },
      "embedVideo": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Element is video, so may lack captions [speculative]"
      },
      "embedVisualization": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Element is a visualization, so may lack a nonvisual equivalent [speculative]"
      },
      "altMissing": {
        "issueID": "imageNoText",
        "quality": 1,
        "what": "img element has no alt attribute"
      },
      "altDeadspace": {
        "issueID": "imageTextSpaces",
        "quality": 1,
        "what": "alt attribute of the element contains only spacing characters"
      },
      "altImageOf": {
        "issueID": "imageTextImage",
        "quality": 1,
        "what": "alt attribute of the element states the image is an image"
      },
      "altImageOfLinked": {
        "issueID": "imageTextImage",
        "quality": 1,
        "what": "alt attribute of the intra-link element states the image is an image instead of describing the link purpose"
      },
      "altURL": {
        "issueID": "imageTextBad",
        "quality": 1,
        "what": "Image text alternative is a URL instead"
      },
      "altMeaningless": {
        "issueID": "imageTextBad",
        "quality": 1,
        "what": "Image text alternative is a common placeholder"
      },
      "altMeaninglessLinked": {
        "issueID": "imageTextBad",
        "quality": 1,
        "what": "Image text alternative may describe the image but not the destination of its containing link"
      },
      "altLong": {
        "issueID": "imageTextLong",
        "quality": 1,
        "what": "img alt value longer than 160 characters"
      },
      "altLongLinked": {
        "issueID": "imageTextLong",
        "quality": 1,
        "what": "Linked img alt value longer than 160 characters"
      },
      "linkNoText": {
        "issueID": "linkNoText",
        "quality": 1,
        "what": "Link has no text"
      },
      "altEmptyLinked": {
        "issueID": "imageLinkNoText",
        "quality": 1,
        "what": "Link name is only an image with no text alternative"
      },
      "altURLLinked": {
        "issueID": "linkImageTextURL",
        "quality": 1,
        "what": "Text alternative of the link image is a URL"
      },
      "safeLinks": {
        "issueID": "emailLinkBad",
        "quality": 1,
        "what": "Email link addresses messages that Microsoft will bounce"
      },
      "linkNewWindow": {
        "issueID": "newTabSurprise",
        "quality": 0.5,
        "what": "Link opens a new window or tab without prior notice"
      },
      "headingEmpty": {
        "issueID": "headingEmpty",
        "quality": 1,
        "what": "Heading is empty"
      },
      "headingLevelSkipped": {
        "issueID": "headingLevelSkip",
        "quality": 1,
        "what": "Heading level is more than 1 greater than that of the previous heading"
      },
      "headingIsLong": {
        "issueID": "headingLength",
        "quality": 1,
        "what": "Heading is longer than 160 characters"
      },
      "blockquoteIsShort": {
        "issueID": "blockQuoteShort",
        "quality": 1,
        "what": "Block quote is shorter than 25 characters"
      },
      "textPossibleHeading": {
        "issueID": "pseudoHeadingRisk",
        "quality": 1,
        "what": "Styled p element is misused as a heading?"
      },
      "textPossibleList": {
        "issueID": "pseudoListRisk",
        "quality": 1,
        "what": "List is miscoded as a paragraph sequence?"
      },
      "tableNoHeaderCells": {
        "issueID": "tableHeaderless",
        "quality": 1,
        "what": "None of the cells in the table is a th element"
      },
      "tableEmptyHeaderCell": {
        "issueID": "tableHeaderEmpty",
        "quality": 1,
        "what": "Element is a table header but has no text"
      },
      "tableContainsContentHeading": {
        "issueID": "tableHeading",
        "quality": 1,
        "what": "element is a heading within a cell of a table"
      },
      "textUppercase": {
        "issueID": "allCaps",
        "quality": 1,
        "what": "Element contains more than 4 consecutive upper-case words"
      },
      "linkTextIsGeneric": {
        "issueID": "linkVaguenessRisk",
        "quality": 1,
        "what": "Element is a link but has generic content"
      },
      "linkTextIsURL": {
        "issueID": "linkFileName",
        "quality": 1,
        "what": "Name of the element is a file reference instead of a link purpose"
      },
      "linkDocument": {
        "issueID": "nonWebLink",
        "quality": 1,
        "what": "Element links to a PDF, Word, PowerPoint, or Google Docs document"
      }
    },
    "variable": {}
  },
  "htmlcs": {
    "invariant": {
      "W-WCAG2AAA.Principle1.Guideline1_3.1_3_1.H48": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "If element contains a navigation section, it is recommended that it be marked up as a list [speculative]"
      },
      "E-AAA.4_1_1.F77": {
        "issueID": "duplicateID",
        "quality": 1,
        "what": "Duplicate id attribute value"
      },
      "E-WCAG2AAA.Principle4.Guideline4_1.4_1_1.F77": {
        "issueID": "duplicateID",
        "quality": 1,
        "what": "Duplicate id attribute value"
      },
      "E-WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.InputCheckbox.Name": {
        "issueID": "inputNoText",
        "quality": 1,
        "what": "checkbox input has no label element or title, aria-label, or aria-labelledby attribute"
      },
      "E-WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.InputEmail.Name": {
        "issueID": "inputNoText",
        "quality": 1,
        "what": "email input has no label element or title, aria-label, or aria-labelledby attribute"
      },
      "E-WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.InputFile.Name": {
        "issueID": "inputNoText",
        "quality": 1,
        "what": "file input has no label element or title, aria-label, or aria-labelledby attribute"
      },
      "E-WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.InputRange.Name": {
        "issueID": "inputNoText",
        "quality": 1,
        "what": "range input has no label element or title, aria-label, or aria-labelledby attribute"
      },
      "E-WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.InputSearch.Name": {
        "issueID": "inputNoText",
        "quality": 1,
        "what": "search input has no label element or title, aria-label, or aria-labelledby attribute"
      },
      "E-WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.InputTel.Name": {
        "issueID": "inputNoText",
        "quality": 1,
        "what": "tel input has no label element or title, aria-label, or aria-labelledby attribute"
      },
      "E-WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.InputText.Name": {
        "issueID": "inputNoText",
        "quality": 1,
        "what": "text input has no label element or title, aria-label, or aria-labelledby attribute"
      },
      "E-AAA.4_1_2.H91.Input.Name": {
        "issueID": "inputNoText",
        "quality": 1,
        "what": "Text input has no accessible name"
      },
      "E-H36": {
        "issueID": "imageButtonNoText",
        "quality": 1,
        "what": "Image submit button has no alt attribute"
      },
      "E-AAA.1_1_1.H36": {
        "issueID": "imageButtonNoText",
        "quality": 1,
        "what": "Image submit button has no alt attribute"
      },
      "E-AAA.4_1_2.H91.InputImage.Name": {
        "issueID": "imageInputNoText",
        "quality": 1,
        "what": "Element is an image input but has no accessible name"
      },
      "E-AAA.1_1_1.H37": {
        "issueID": "imageNoText",
        "quality": 1,
        "what": "img element has no alt attribute"
      },
      "E-WCAG2AAA.Principle1.Guideline1_1.1_1_1.H37": {
        "issueID": "imageNoText",
        "quality": 1,
        "what": "img element has no alt attribute"
      },
      "E-AAA.4_1_2.H91.Svg.Name": {
        "issueID": "svgNoText",
        "quality": 1,
        "what": "Element is svg but has no accessible name"
      },
      "W-AAA.1_1_1.H67.2": {
        "issueID": "decorativeImageRisk",
        "quality": 1,
        "what": "Image marked as decorative is informative?"
      },
      "W-WCAG2AAA.Principle1.Guideline1_1.1_1_1.H67.2": {
        "issueID": "decorativeImageRisk",
        "quality": 1,
        "what": "img element is mismarked so that it is ignored by assistive technology?"
      },
      "E-AAA.3_1_1.H57.2": {
        "issueID": "pageLanguage",
        "quality": 1,
        "what": "html element has no lang or xml:lang attribute"
      },
      "E-WCAG2AAA.Principle3.Guideline3_1.3_1_1.H57.2": {
        "issueID": "pageLanguage",
        "quality": 1,
        "what": "html element has no lang or xml:lang attribute"
      },
      "E-AAA.3_1_1.H57.3.Lang": {
        "issueID": "pageLanguageBad",
        "quality": 1,
        "what": "Language specified in the lang attribute of the document does not appear to be well-formed"
      },
      "E-AAA.3_1_2.H58.1.Lang": {
        "issueID": "elementLanguageBad",
        "quality": 1,
        "what": "Language specified in the lang attribute of the element does not appear to be well-formed"
      },
      "E-WCAG2AAA.Principle3.Guideline3_1.3_1_2.H58": {
        "issueID": "languageChange",
        "quality": 1,
        "what": "Change in language is not marked"
      },
      "E-ARIA6+H53": {
        "issueID": "objectNoText",
        "quality": 1,
        "what": "object element contains no text alternative"
      },
      "E-AAA.1_1_1.H53,ARIA6": {
        "issueID": "objectNoText",
        "quality": 1,
        "what": "object element contains no text alternative after all other alternatives are exhausted"
      },
      "E-AAA.1_1_1.H24": {
        "issueID": "imageMapAreaNoText",
        "quality": 1,
        "what": "Element is an area in an image map but has no alt attribute"
      },
      "W-AAA.2_1_2.F10": {
        "issueID": "objectBlurKeyboardRisk",
        "quality": 1,
        "what": "Applet or plugin fails to enable moving the focus away with the keyboard?"
      },
      "W-AAA.2_1_1.G90": {
        "issueID": "eventKeyboardRisk",
        "quality": 1,
        "what": "Event handler functionality is not available by keyboard?"
      },
      "W-WCAG2AAA.Principle2.Guideline2_1.2_1_1.G90": {
        "issueID": "eventKeyboardRisk",
        "quality": 1,
        "what": "Event handler functionality is not available by keyboard?"
      },
      "W-AAA.2_1_1.SCR20.MouseOut": {
        "issueID": "eventKeyboardRisk",
        "quality": 1,
        "what": "Mousing-out functionality is not available by keyboard?"
      },
      "W-WCAG2AAA.Principle2.Guideline2_1.2_1_1.SCR20.MouseOut": {
        "issueID": "eventKeyboardRisk",
        "quality": 1,
        "what": "Mousing-out functionality is not available by keyboard?"
      },
      "W-AAA.2_1_1.SCR20.MouseOver": {
        "issueID": "eventKeyboardRisk",
        "quality": 1,
        "what": "Mousing-over functionality is not available by keyboard?"
      },
      "W-WCAG2AAA.Principle2.Guideline2_1.2_1_1.SCR20.MouseOver": {
        "issueID": "eventKeyboardRisk",
        "quality": 1,
        "what": "Mousing-over functionality is not available by keyboard?"
      },
      "W-AAA.2_1_1.SCR20.MouseDown": {
        "issueID": "eventKeyboardRisk",
        "quality": 1,
        "what": "Mousing-down functionality is not available by keyboard?"
      },
      "W-AAA.2_1_1.SCR20.MouseUp": {
        "issueID": "eventKeyboardRisk",
        "quality": 1,
        "what": "Mousing-up functionality is not available by keyboard?"
      },
      "E-AAA.2_4_1.G1,G123,G124.NoSuchID": {
        "issueID": "internalLinkBroken",
        "quality": 1,
        "what": "Internal link references a nonexistent destination"
      },
      "E-WCAG2AAA.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchID": {
        "issueID": "internalLinkBroken",
        "quality": 1,
        "what": "Internal link references a nonexistent destination"
      },
      "E-AAA.1_3_1.H44.NotFormControl": {
        "issueID": "labelForBad",
        "quality": 1,
        "what": "Referent of the for attribute of the label is not a form control, so is wrong?"
      },
      "E-AAA.1_3_1.H44.NonExistentFragment": {
        "issueID": "labelBadID",
        "quality": 1,
        "what": "Label for attribute references a nonexistent element"
      },
      "W-WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment": {
        "issueID": "labelBadID",
        "quality": 1,
        "what": "Label for attribute references an element missing from the document fragment"
      },
      "E-AAA.1_3_1.ARIA16,ARIA9": {
        "issueID": "labelBadID",
        "quality": 1,
        "what": "aria-labelledby attribute references a nonexistent element"
      },
      "W-WCAG2AAA.Principle1.Guideline1_3.1_3_1.ARIA16,ARIA9": {
        "issueID": "labelBadID",
        "quality": 1,
        "what": "aria-labelledby attribute references a nonexistent element"
      },
      "E-AAA.4_1_2.ARIA16,ARIA9": {
        "issueID": "labelBadID",
        "quality": 1,
        "what": "aria-labelledby attribute references a nonexistent element"
      },
      "E-AAA.4_1_2.H91.A.Empty": {
        "issueID": "linkNoText",
        "quality": 1,
        "what": "a element has an id attribute but no href attribute or text"
      },
      "W-WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.Empty": {
        "issueID": "linkNoText",
        "quality": 1,
        "what": "a element has an id attribute but no href attribute or text"
      },
      "E-AAA.4_1_2.H91.A.EmptyNoId": {
        "issueID": "linkNoText",
        "quality": 1,
        "what": "Link has no name or id attribute or value"
      },
      "E-WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId": {
        "issueID": "linkNoText",
        "quality": 1,
        "what": "Link has no name or id attribute or value"
      },
      "E-AAA.4_1_2.H91.A.EmptyWithName": {
        "issueID": "linkNoText",
        "quality": 1,
        "what": "Link has a name attribute but no href attribute or text"
      },
      "E-AAA.4_1_2.H91.A.NoContent": {
        "issueID": "linkNoText",
        "quality": 1,
        "what": "Link has an href attribute but not named"
      },
      "E-WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.NoContent": {
        "issueID": "linkNoText",
        "quality": 1,
        "what": "Anchor element has a valid href attribute, but no link content"
      },
      "E-AAA.1_1_1.H30.2": {
        "issueID": "imageLinkNoText",
        "quality": 1,
        "what": "img element is the only link content but has no text alternative"
      },
      "E-WCAG2AAA.Principle1.Guideline1_1.1_1_1.H30.2": {
        "issueID": "imageLinkNoText",
        "quality": 1,
        "what": "img element is the only link content but has no text alternative"
      },
      "E-AAA.4_1_2.H91.A.Placeholder": {
        "issueID": "linkBrokenRisk",
        "quality": 1,
        "what": "Link has text but no href, id, or name attribute"
      },
      "W-WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder": {
        "issueID": "linkBrokenRisk",
        "quality": 1,
        "what": "Link has text but no href, id, or name attribute"
      },
      "E-AAA.2_4_8.H59.2b": {
        "issueID": "linkElNoHref",
        "quality": 1,
        "what": "link element is missing a non-empty href for the linked resource"
      },
      "E-WCAG2AAA.Principle2.Guideline2_4.2_4_8.H59.2b": {
        "issueID": "linkElNoHref",
        "quality": 1,
        "what": "link element is missing a non-empty href for the linked resource"
      },
      "E-AAA.4_1_2.H91.A.NoHref": {
        "issueID": "destinationLink",
        "quality": 1,
        "what": "Link is misused as a link destination"
      },
      "W-WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.NoHref": {
        "issueID": "destinationLink",
        "quality": 1,
        "what": "Link is misused as an in-page link destination"
      },
      "E-AAA.4_1_2.H91.Textarea.Name": {
        "issueID": "textAreaNoText",
        "quality": 1,
        "what": "textarea element has no accessible name"
      },
      "E-WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Textarea.Name": {
        "issueID": "textAreaNoText",
        "quality": 1,
        "what": "textarea element has no accessible name"
      },
      "E-AAA.1_1_1.H2.EG3": {
        "issueID": "linkAltSame",
        "quality": 1,
        "what": "alt value of the link img element duplicates the text of a link beside it"
      },
      "E-WCAG2AAA.Principle1.Guideline1_1.1_1_1.H2.EG3": {
        "issueID": "linkAltSame",
        "quality": 1,
        "what": "alt value of the link img element duplicates the text of a link beside it"
      },
      "W-AAA.1_1_1.H2.EG4": {
        "issueID": "linkPairRisk",
        "quality": 1,
        "what": "Adjacent links, one with text and the other with a textless image, merit combination?"
      },
      "W-WCAG2AAA.Principle3.Guideline3_2.3_2_5.H83.3": {
        "issueID": "newTabSurpriseRisk",
        "quality": 1,
        "what": "Link opens in a new window without notice?"
      },
      "W-AAA.3_2_5.H83.3": {
        "issueID": "newTabSurpriseRisk",
        "quality": 1,
        "what": "Link text fails to indicate that the link will open in a new window?"
      },
      "E-AAA.4_1_2.H91.A.Name": {
        "issueID": "buttonNoText",
        "quality": 1,
        "what": "Link with button role has no accessible name"
      },
      "E-AAA.4_1_2.H91.Div.Name": {
        "issueID": "buttonNoText",
        "quality": 1,
        "what": "div element with button role has no accessible name"
      },
      "E-WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Div.Name": {
        "issueID": "buttonNoText",
        "quality": 1,
        "what": "div element with button role has no accessible name"
      },
      "E-AAA.4_1_2.H91.Button.Name": {
        "issueID": "buttonNoText",
        "quality": 1,
        "what": "button element has no accessible name"
      },
      "E-WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Button.Name": {
        "issueID": "buttonNoText",
        "quality": 1,
        "what": "button element has no title attribute, element content, aria-label attribute, or aria-labelledby attribute"
      },
      "E-AAA.4_1_2.H91.Img.Name": {
        "issueID": "buttonNoText",
        "quality": 1,
        "what": "img element with button role has no accessible name"
      },
      "E-AAA.4_1_2.H91.InputButton.Name": {
        "issueID": "buttonNoText",
        "quality": 1,
        "what": "Button input element has no accessible name"
      },
      "E-AAA.4_1_2.H91.Span.Name": {
        "issueID": "buttonNoText",
        "quality": 1,
        "what": "Element with button role has no accessible name"
      },
      "E-AAA.1_3_1.F92,ARIA4": {
        "issueID": "presentationChild",
        "quality": 1,
        "what": "Element has presentation role but semantic child"
      },
      "E-WCAG2AAA.Principle1.Guideline1_3.1_3_1.F92,ARIA4": {
        "issueID": "presentationChild",
        "quality": 1,
        "what": "Element has presentation role but semantic child"
      },
      "E-AAA.2_4_8.H59.1": {
        "issueID": "linkElementMisplaced",
        "quality": 1,
        "what": "Element is not in the document head"
      },
      "E-WCAG2AAA.Principle2.Guideline2_4.2_4_8.H59.1": {
        "issueID": "linkElementMisplaced",
        "quality": 1,
        "what": "Element is a link element but is not located in the head of the document"
      },
      "E-AAA.2_4_8.H59.2a": {
        "issueID": "linkElementBad",
        "quality": 1,
        "what": "Element has no nonempty rel attribute for the type"
      },
      "E-WCAG2AAA.Principle2.Guideline2_4.2_4_8.H59.2a": {
        "issueID": "linkElementBad",
        "quality": 1,
        "what": "Element has no nonempty rel attribute for the type"
      },
      "E-A link element with an as attribute must have a rel attribute that contains the value preload or the value modulepreload or the value prefetch.": {
        "issueID": "linkElementBad",
        "quality": 1,
        "what": "Element with an as attribute has no rel attribute with preload, modulepreload, or prefetch as its value"
      },
      "E-WCAG2AAA.Principle2.Guideline2_4.2_4_1.H64.1": {
        "issueID": "iframeTitleBad",
        "quality": 1,
        "what": "iframe element is missing a non-empty title attribute that identifies the frame"
      },
      "E-AAA.2_4_1.H64.1": {
        "issueID": "iframeTitleBad",
        "quality": 1,
        "what": "iframe element has no non-empty title attribute"
      },
      "E-AAA.1_3_5.H98": {
        "issueID": "autocompleteBad",
        "quality": 1,
        "what": "autocomplete attribute and the input type are mismatched"
      },
      "E-WCAG2AAA.Principle1.Guideline1_3.1_3_5.H98": {
        "issueID": "autocompleteBad",
        "quality": 1,
        "what": "autocomplete attribute and the input type are mismatched"
      },
      "W-AAA.1_3_5.H98": {
        "issueID": "autocompleteRisk",
        "quality": 1,
        "what": "Element contains a potentially faulty value in its autocomplete attribute"
      },
      "E-AAA.1_4_3.G145.Fail": {
        "issueID": "contrastAA",
        "quality": 1,
        "what": "Contrast between the text and its background is less than 3:1"
      },
      "E-AAA.1_4_3.G18.Fail": {
        "issueID": "contrastAA",
        "quality": 1,
        "what": "Contrast between the text and its background is less than 4.5:1"
      },
      "E-AAA.1_4_6.G18.Fail": {
        "issueID": "contrastAA",
        "quality": 1,
        "what": "Contrast between the text and its background is less than 4.5:1"
      },
      "E-WCAG2AAA.Principle1.Guideline1_4.1_4_6.G18.Fail": {
        "issueID": "contrastAA",
        "quality": 1,
        "what": "Element has insufficient contrast at conformance level AA; expected a contrast ratio of at least 4.5:1"
      },
      "W-WCAG2AAA.Principle1.Guideline1_4.1_4_3.G18": {
        "issueID": "contrastAAA",
        "quality": 1,
        "what": "Insufficient contrast"
      },
      "W-AAA.1_4_6.G17.Fail": {
        "issueID": "contrastAAA",
        "quality": 1,
        "what": "Text has insufficient contrast"
      },
      "E-WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail": {
        "issueID": "contrastAAA",
        "quality": 1,
        "what": "Element has insufficient contrast at conformance level AAA; expected a contrast ratio of at least 7:1"
      },
      "W-AAA.1_4_3_F24.F24.BGColour": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Inline background color lacks a complementary foreground color?"
      },
      "W-WCAG2AAA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Element has no inherited foreground color?"
      },
      "W-WCAG2AAA.Principle1.Guideline1_4.1_4_6.G18.BgImage": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Contrast between the text and the background image is less than 4.5:1?"
      },
      "W-AAA.1_4_6.G18.BgImage": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Contrast between the text and some part of its background image is less than 4.5:1?"
      },
      "W-AAA.1_4_3_F24.F24.FGColour": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Inline foreground color lacks a complementary background color?"
      },
      "W-WCAG2AAA.Principle1.Guideline1_4.1_4_3_F24.F24.FGColour": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Inline foreground color lacks a complementary inherited background color or image?"
      },
      "W-AAA.1_4_3.G18.Abs": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Contrast between the absolutely positioned text and its background is inadequate?"
      },
      "W-AAA.1_4_6.G18.Abs": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Contrast between the absolutely positioned text and its background is less than 4.5:1?"
      },
      "W-AAA.1_4_3.G18.Alpha": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Contrast between the text and its background is less than 4.5:1, given the transparency?"
      },
      "W-AAA.1_4_3.G145.Abs": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Contrast between the absolutely positioned large text and its background is less than 3:1?"
      },
      "W-AAA.1_4_3.G145.Alpha": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Contrast between the text and its background is less than 3:1, given the transparency?"
      },
      "W-AAA.1_4_3.G145.BgImage": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Contrast between the text and its background image is less than 3:1?"
      },
      "W-AAA.1_4_3.G18.BgImage": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Contrast between the text and its background image is less than 4.5:1?"
      },
      "W-WCAG2AAA.Principle1.Guideline1_4.1_4_6.G18.Abs": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Background color of the absolutely positioned element can not be determined; the contrast ratio between the text and all covered parts of the background is not at least 4.5:1?"
      },
      "W-AAA.1_4_6.G17.Abs": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Contrast between the absolutely positioned text and its background is less than 7:1?"
      },
      "W-WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Background color of the absolutely positioned element can not be determined; the contrast ratio between the text and all covered parts of the background is not at least 7:1?"
      },
      "W-WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.BgImage": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Contrast between the text and some part of its background image is less than 7:1?"
      },
      "W-AAA.1_4_6.G17.BgImage": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Contrast between the text and its background image is less than 7:1?"
      },
      "E-AAA.1_3_1.H42.2": {
        "issueID": "headingEmpty",
        "quality": 1,
        "what": "Heading is empty"
      },
      "E-WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42.2": {
        "issueID": "headingEmpty",
        "quality": 1,
        "what": "Heading is empty"
      },
      "E-AAA.1_1_1.H67.1": {
        "issueID": "decorativeTitle",
        "quality": 1,
        "what": "Element has an empty alt attribute but has a nonempty title attribute"
      },
      "E-WCAG2AAA.Principle1.Guideline1_1.1_1_1.H67.1": {
        "issueID": "decorativeTitle",
        "quality": 1,
        "what": "img element with empty alt attribute must have absent or empty title attribute"
      },
      "W-AAA.1_3_1.H65": {
        "issueID": "titleEmpty",
        "quality": 0.5,
        "what": "title attribute of the form control is empty or only whitespace"
      },
      "W-AAA.4_1_2.H65": {
        "issueID": "titleEmpty",
        "quality": 0.5,
        "what": "title attribute of the form control is empty or only whitespace"
      },
      "E-AAA.2_4_2.H25.1.NoTitleEl": {
        "issueID": "pageTitle",
        "quality": 1,
        "what": "Document head element contains no title element"
      },
      "E-AAA.2_4_2.H25.1.EmptyTitle": {
        "issueID": "pageTitle",
        "quality": 1,
        "what": "Document head element contains an empty title element"
      },
      "E-AAA.1_3_1_AAA.G141": {
        "issueID": "headingStructure",
        "quality": 1,
        "what": "Heading level is incorrect"
      },
      "E-WCAG2AAA.Principle1.Guideline1_3.1_3_1_AAA.G141": {
        "issueID": "headingStructure",
        "quality": 1,
        "what": "Heading structure is not logically nested"
      },
      "E-AAA.1_3_1.H49.B": {
        "issueID": "nonSemanticText",
        "quality": 1,
        "what": "Special text is bolded nonsemantically"
      },
      "E-AAA.1_3_1.H49.I": {
        "issueID": "nonSemanticText",
        "quality": 1,
        "what": "Special text is italicized nonsemantically"
      },
      "W-WCAG2AAA.Principle1.Guideline1_3.1_3_1.H49.I": {
        "issueID": "nonSemanticText",
        "quality": 1,
        "what": "Special text is italicized nonsemantically"
      },
      "E-AAA.1_3_1.H49.Big": {
        "issueID": "nonSemanticText",
        "quality": 1,
        "what": "Special text is enlarged nonsemantically"
      },
      "E-AAA.1_3_1.H49.Small": {
        "issueID": "nonSemanticText",
        "quality": 1,
        "what": "Special text is made small nonsemantically"
      },
      "W-WCAG2AAA.Principle1.Guideline1_3.1_3_1.H49.Small": {
        "issueID": "nonSemanticText",
        "quality": 1,
        "what": "Special text is made small nonsemantically"
      },
      "E-AAA.1_3_1.H49.U": {
        "issueID": "nonSemanticText",
        "quality": 1,
        "what": "Special text is underlined nonsemantically"
      },
      "W-AAA.1_3_1.H42": {
        "issueID": "pseudoHeadingRisk",
        "quality": 1,
        "what": "Heading coding is not used but the element is intended as a heading?"
      },
      "W-WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42": {
        "issueID": "pseudoHeadingRisk",
        "quality": 1,
        "what": "Heading coding is not used but the element is intended as a heading?"
      },
      "W-AAA.1_3_1.H48.1": {
        "issueID": "pseudoListRisk",
        "quality": 1,
        "what": "Content simulates an unordered list without a ul?"
      },
      "W-WCAG2AAA.Principle1.Guideline1_3.1_3_1.H48.1": {
        "issueID": "pseudoListRisk",
        "quality": 1,
        "what": "Content simulates an unordered list without a ul?"
      },
      "W-AAA.1_3_1.H48.2": {
        "issueID": "pseudoOrderedListRisk",
        "quality": 1,
        "what": "Ordered list fails to be coded as such?"
      },
      "W-WCAG2AAA.Principle1.Guideline1_3.1_3_1.H48.2": {
        "issueID": "pseudoOrderedListRisk",
        "quality": 1,
        "what": "Ordered list fails to be coded as such?"
      },
      "E-AAA.1_3_1.H48": {
        "issueID": "pseudoNavList",
        "quality": 1,
        "what": "Navigation links are not coded as a list"
      },
      "E-AAA.4_1_2.H91.Select.Name": {
        "issueID": "selectNoText",
        "quality": 1,
        "what": "Element is select but has no accessible name"
      },
      "E-WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Select.Name": {
        "issueID": "selectNoText",
        "quality": 1,
        "what": "select element has no accessible name"
      },
      "E-AAA.4_1_2.H91.Select.Value": {
        "issueID": "selectNoText",
        "quality": 1,
        "what": "Element is select but its value has no accessible name"
      },
      "W-WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Select.Value": {
        "issueID": "selectNoText",
        "quality": 1,
        "what": "Element is select but its value has no accessible name"
      },
      "W-AAA.1_3_1.H85.2": {
        "issueID": "selectFlatRisk",
        "quality": 1,
        "what": "Selection list contains groups of related options not grouped with optgroup?"
      },
      "W-WCAG2AAA.Principle1.Guideline1_3.1_3_1.H85.2": {
        "issueID": "selectFlatRisk",
        "quality": 1,
        "what": "Selection list contains groups of related options not grouped with optgroup?"
      },
      "W-AAA.1_3_1.H71.SameName": {
        "issueID": "fieldSetRisk",
        "quality": 1,
        "what": "Radio buttons or check boxes require a fieldset element?"
      },
      "W-WCAG2AAA.Principle1.Guideline1_3.1_3_1.H71.SameName": {
        "issueID": "fieldSetRisk",
        "quality": 1,
        "what": "If radio buttons or check boxes require a further group-level description, they should be contained within a fieldset element"
      },
      "E-AAA.1_3_1.H71.NoLegend": {
        "issueID": "legendMissing",
        "quality": 1,
        "what": "Element has no legend element"
      },
      "E-WCAG2AAA.Principle1.Guideline1_3.1_3_1.H71.NoLegend": {
        "issueID": "legendMissing",
        "quality": 1,
        "what": "Element has no legend element"
      },
      "E-AAA.4_1_2.H91.Fieldset.Name": {
        "issueID": "groupName",
        "quality": 1,
        "what": "fieldset element has no accessible name"
      },
      "E-WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Fieldset.Name": {
        "issueID": "groupName",
        "quality": 1,
        "what": "fieldset element has no accessible name"
      },
      "W-AAA.1_3_1.H39.3.NoCaption": {
        "issueID": "tableCaption",
        "quality": 1,
        "what": "Element contains no caption element"
      },
      "E-AAA.1_3_1.H43.HeadersRequired": {
        "issueID": "cellHeadersNotInferrable",
        "quality": 1,
        "what": "Complex table is missing headers attributes of cells"
      },
      "E-AAA.1_3_1.H43,H63": {
        "issueID": "cellHeadersNotInferrable",
        "quality": 1,
        "what": "Relationship among td and th elements of the table is not defined"
      },
      "E-AAA.1_3_1.H43.ScopeAmbiguous": {
        "issueID": "cellHeadersAmbiguityRisk",
        "quality": 1,
        "what": "Complex table requires headers attributes of cells instead of header scopes"
      },
      "W-AAA.1_3_1.H63.1": {
        "issueID": "TableHeaderScopeRisk",
        "quality": 1,
        "what": "Not all th elements in the table have a scope attribute, so an inferred scope may be incorrect"
      },
      "E-AAA.1_3_1.F68": {
        "issueID": "controlNoText",
        "quality": 1,
        "what": "Form control has no label"
      },
      "E-WCAG2AAA.Principle1.Guideline1_3.1_3_1.F68": {
        "issueID": "controlNoText",
        "quality": 1,
        "what": "Form field is not labeled"
      },
      "E-AAA.2_5_3.F96": {
        "issueID": "visibleLabelNotInName",
        "quality": 1,
        "what": "Visible label is not in the accessible name"
      },
      "W-WCAG2AAA.Principle2.Guideline2_5.2_5_3.F96": {
        "issueID": "visibleLabelNotInName",
        "quality": 1,
        "what": "Accessible name of the element does not contain the visible label text"
      },
      "W-AAA.1_3_1.F68.Hidden": {
        "issueID": "labeledHidden",
        "quality": 1,
        "what": "Hidden form field is needlessly labeled"
      },
      "W-AAA.1_3_1.F68.HiddenAttr": {
        "issueID": "labeledHidden",
        "quality": 1,
        "what": "Form field with a hidden attribute is needlessly labeled"
      },
      "E-AAA.1_3_1.ARIA6": {
        "issueID": "labelEmpty",
        "quality": 1,
        "what": "Value of the aria-label attribute of the form control is empty or only whitespace"
      },
      "E-AAA.4_1_2.ARIA6": {
        "issueID": "labelEmpty",
        "quality": 1,
        "what": "Value of the aria-label attribute of the form control is empty or only whitespace"
      },
      "E-WCAG2AAA.Principle2.Guideline2_2.2_2_2.F47": {
        "issueID": "blink",
        "quality": 1,
        "what": "Element is blink, so cannot be stopped within five seconds"
      },
      "W-AAA.1_4_10.C32,C31,C33,C38,SCR34,G206": {
        "issueID": "positionSticky",
        "quality": 1,
        "what": "Fixed-position element forces bidirectional scrolling?"
      },
      "W-WCAG2AAA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206": {
        "issueID": "positionSticky",
        "quality": 1,
        "what": "Fixed-position element requires scrolling in two dimensions?"
      },
      "E-AAA.3_2_2.H32.2": {
        "issueID": "submitButton",
        "quality": 1,
        "what": "Form has no submit button"
      },
      "E-WCAG2AAA.Principle3.Guideline3_2.3_2_2.H32.2": {
        "issueID": "submitButton",
        "quality": 1,
        "what": "Form has no submit button"
      },
      "E-AAA.1_3_1.H49.AlignAttr": {
        "issueID": "attributeObsolete",
        "quality": 1,
        "what": "align attribute is obsolete"
      },
      "W-WCAG2AAA.Principle1.Guideline1_3.1_3_1.H49.AlignAttr": {
        "issueID": "attributeObsolete",
        "quality": 1,
        "what": "align attribute is obsolete"
      },
      "E-WCAG2AAA.Principle1.Guideline1_3.1_3_1.H49.AlignAttr": {
        "issueID": "attributeObsolete",
        "quality": 1,
        "what": "align attribute is obsolete"
      },
      "E-AAA.1_3_1.H63.2": {
        "issueID": "attributeObsolete",
        "quality": 1,
        "what": "scope attribute on a td element, instead of a th element, is obsolete"
      },
      "E-AAA.1_3_1.H49.Center": {
        "issueID": "elementObsolete",
        "quality": 1,
        "what": "center element is obsolete"
      },
      "E-AAA.1_3_1.H49.Font": {
        "issueID": "elementObsolete",
        "quality": 1,
        "what": "font element is obsolete"
      },
      "E-WCAG2AAA.Principle1.Guideline1_3.1_3_1.H49.Font": {
        "issueID": "elementObsolete",
        "quality": 1,
        "what": "font element is obsolete"
      }
    },
    "variable": {
      "E-^AAA.4_1_2.H91.Input[-a-zA-Z]+.Name": {
        "issueID": "inputNoText",
        "quality": 1,
        "what": "input element has no accessible name"
      }
    }
  },
  "ibm": {
    "invariant": {
      "aria_child_valid": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Child element has a role not allowed for the role of the parent [invalid]"
      },
      "aria_landmark_name_unique": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Multiple landmarks with the same parent region are not distinguished from one another [invalid on invisible elements]"
      },
      "html_lang_exists": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Page detected as HTML, but has no lang attribute [invalid]"
      },
      "style_background_decorative": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "CSS background image may be informative [speculative]"
      },
      "element_id_unique": {
        "issueID": "duplicateID",
        "quality": 1,
        "what": "Element has an id attribute value that is already in use"
      },
      "aria_accessiblename_exists": {
        "issueID": "roleNoText",
        "quality": 1,
        "what": "Element has no accessible name, although its role requires one"
      },
      "aria_widget_labelled": {
        "issueID": "componentNoText",
        "quality": 1,
        "what": "Interactive component has no programmatically associated name"
      },
      "aria_region_labelled": {
        "issueID": "regionNoText",
        "quality": 1,
        "what": "Element with a region role has no label"
      },
      "imagebutton_alt_exists": {
        "issueID": "imageInputNoText",
        "quality": 1,
        "what": "Element is an input of type image but has no text alternative"
      },
      "figure_label_exists": {
        "issueID": "figureNoText",
        "quality": 1,
        "what": "figure element has no associated label"
      },
      "aria_img_labelled": {
        "issueID": "imageNoText",
        "quality": 1,
        "what": "Element with an img role has no label or an empty label"
      },
      "img_alt_valid": {
        "issueID": "imageNoText",
        "quality": 1,
        "what": "Image has neither an alt attribute nor an ARIA label or title"
      },
      "img_alt_null": {
        "issueID": "imageNoText",
        "quality": 1,
        "what": "Image has a title attribute but an empty alt attribute"
      },
      "img_alt_decorative": {
        "issueID": "decorativeAlt",
        "quality": 1,
        "what": "element is marked as an uninformative image but has an alt attribute"
      },
      "html_lang_valid": {
        "issueID": "pageLanguageBad",
        "quality": 1,
        "what": "lang attribute of the html element includes no valid primary language"
      },
      "element_lang_valid": {
        "issueID": "elementLanguageBad",
        "quality": 1,
        "what": "Element lang attribute includes no valid primary language"
      },
      "object_text_exists": {
        "issueID": "objectNoText",
        "quality": 1,
        "what": "object element has no text alternative"
      },
      "aria_keyboard_handler_exists": {
        "issueID": "eventKeyboardRisk",
        "quality": 1,
        "what": "Interactive WAI_ARIA UI components must provide keyboard access"
      },
      "label_ref_valid": {
        "issueID": "labelForBad",
        "quality": 1,
        "what": "Value of the for attribute of the label element is not the id of a valid input element"
      },
      "aria_activedescendant_valid": {
        "issueID": "activeDescendantBadID",
        "quality": 1,
        "what": "aria-activedescendant property does not reference the id of a non-empty, non-hidden active child element"
      },
      "combobox_popup_reference": {
        "issueID": "governedBadID",
        "quality": 1,
        "what": "aria-controls or aria-owns attribute of an expanded combobox does not reference a popup"
      },
      "input_label_before": {
        "issueID": "labelConfusionRisk",
        "quality": 1,
        "what": "Label text is after its text input or select element"
      },
      "input_label_after": {
        "issueID": "labelConfusionRisk",
        "quality": 1,
        "what": "Label text is located before its associated checkbox or radio button element"
      },
      "combobox_haspopup": {
        "issueID": "haspopupBad",
        "quality": 1,
        "what": "aria-haspopup value is invalid for the role of the controlled or owned element"
      },
      "a_text_purpose": {
        "issueID": "linkNoText",
        "quality": 1,
        "what": "Hyperlink has no link text, label, or image with a text alternative"
      },
      "svg_graphics_labelled": {
        "issueID": "svgImageNoText",
        "quality": 1,
        "what": "Element is svg but has no accessible name"
      },
      "element_orientation_unlocked": {
        "issueID": "cssBansElementRotate",
        "quality": 1,
        "what": "Element orientation is restricted by a CSS transform"
      },
      "style_viewport_resizable": {
        "issueID": "fontSizeAbsolute",
        "quality": 1,
        "what": "Font size is specified in viewport units, preventing text resizing"
      },
      "text_spacing_valid": {
        "issueID": "horizontalSpacingFrozen",
        "quality": 1,
        "what": "CSS !important is used in an inline letter-spacing style"
      },
      "frame_title_exists": {
        "issueID": "iframeTitleBad",
        "quality": 1,
        "what": "Inline frame has no title attribute"
      },
      "aria_role_valid": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "ARIA role is not valid for its element"
      },
      "aria_semantics_role": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "ARIA role is not valid for the element to which it is assigned"
      },
      "element_tabbable_role_valid": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "Tabbable element has a non-widget role"
      },
      "widget_tabbable_exists": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "Components with a widget role must have at least one tabbable element"
      },
      "widget_tabbable_single": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "Components with a widget role must have no more than one tabbable element"
      },
      "Rpt_Aria_ContentinfoWithNoMain_Implicit": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "Element has a contentinfo role when no element has a main role"
      },
      "aria_contentinfo_misuse": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "Element with a contentinfo role is present without an element with a main role"
      },
      "Rpt_Aria_ValidRole": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "Element has an invalid role"
      },
      "aria_role_allowed": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "Element has an invalid role"
      },
      "aria_eventhandler_role_valid": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "Element with an onclick, onmouseout, or onmouseover attribute has no valid ARIA role"
      },
      "Rpt_Aria_EventHandlerMissingRole_Native_Host_Sematics": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "Element has an event handler but no valid ARIA role"
      },
      "combobox_haspopup_valid": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "Element has a combobox role but controls an element that has no listbox, grid, tree, or dialog role"
      },
      "aria_descendant_valid": {
        "issueID": "roleHierarchyBad",
        "quality": 1,
        "what": "Element and descendant roles make browsers ignore a descendant"
      },
      "table_aria_descendants": {
        "issueID": "roleHierarchyBad",
        "quality": 1,
        "what": "Table structure element specifies an explicit role within the table container"
      },
      "aria_role_redundant": {
        "issueID": "roleRedundant",
        "quality": 1,
        "what": "Explicitly assigned ARIA role is redundant with the implicit role of the element"
      },
      "aria_attribute_valid": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "ARIA attribute is invalid for the role of its element"
      },
      "aria_attribute_value_valid": {
        "issueID": "attributeValueBad",
        "quality": 1,
        "what": "Value of an attribute on the element is not valid"
      },
      "aria_attribute_required": {
        "issueID": "ariaMissing",
        "quality": 1,
        "what": "Element does not have all ARIA attributes required by its role"
      },
      "aria_semantics_attribute": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "ARIA attribute is invalid for the element or ARIA role to which it is assigned"
      },
      "Rpt_Aria_ValidProperty": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "ARIA attribute is invalid for the role"
      },
      "aria_attribute_allowed": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "ARIA attribute is invalid for the role"
      },
      "aria_attribute_exists": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "ARIA attribute has an empty value"
      },
      "Rpt_Aria_ValidPropertyValue": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "ARIA property value is invalid"
      },
      "aria_attribute_redundant": {
        "issueID": "ariaRedundant",
        "quality": 1,
        "what": "ARIA attribute is used when there is a corresponding HTML attribute"
      },
      "aria_attribute_conflict": {
        "issueID": "ariaVersusHTML",
        "quality": 1,
        "what": "ARIA and HTML attributes on the same element have conflicting values"
      },
      "aria_id_unique": {
        "issueID": "ariaReferenceBad",
        "quality": 1,
        "what": "ARIA attribute has an invalid or duplicated id as its value"
      },
      "input_autocomplete_valid": {
        "issueID": "autocompleteBad",
        "quality": 1,
        "what": "autocomplete attribute has an incorrect value"
      },
      "text_contrast_sufficient": {
        "issueID": "contrastAA",
        "quality": 1,
        "what": "Text has a contrast with its background less than the WCAG AA minimum for its size and weight"
      },
      "style_color_misuse": {
        "issueID": "infoNeedsColor",
        "quality": 1,
        "what": "Color is the only classifier?"
      },
      "text_sensory_misuse": {
        "issueID": "sensoryDependenceRisk",
        "quality": 1,
        "what": "Instructions should be meaningful without relying solely on shape, size, or location words"
      },
      "heading_content_exists": {
        "issueID": "headingEmpty",
        "quality": 1,
        "what": "Heading element has no descriptive content"
      },
      "img_alt_redundant": {
        "issueID": "imageTextRedundant",
        "quality": 1,
        "what": "Text alternative of the link image duplicates text in the same or an adjacent link"
      },
      "page_title_exists": {
        "issueID": "pageTitle",
        "quality": 1,
        "what": "Page has no title"
      },
      "heading_markup_misuse": {
        "issueID": "headingMisuseRisk",
        "quality": 1,
        "what": "Heading elements must not be used for presentation"
      },
      "text_block_heading": {
        "issueID": "pseudoHeadingRisk",
        "quality": 1,
        "what": "Heading text should use a heading element or role"
      },
      "script_onclick_misuse": {
        "issueID": "pseudoLinkScriptRisk",
        "quality": 1,
        "what": "Script is used to emulate a link"
      },
      "list_children_valid": {
        "issueID": "listChild",
        "quality": 1,
        "what": "Element has a group role but has a child whose role is not listitem"
      },
      "list_markup_review": {
        "issueID": "pseudoListRisk",
        "quality": 1,
        "what": "List not using proper HTML elements?"
      },
      "text_quoted_correctly": {
        "issueID": "pseudoQuoteRisk",
        "quality": 1,
        "what": "Text not marked with a q or blockquote element is a quotation?"
      },
      "blockquote_cite_exists": {
        "issueID": "nonQuoteRisk",
        "quality": 1,
        "what": "blockquote element is a nonquotation?"
      },
      "aria_child_tabbable": {
        "issueID": "noOptionFocusable",
        "quality": 1,
        "what": "No descendent element with an option role is tabbable"
      },
      "element_accesskey_unique": {
        "issueID": "accessKeyDuplicate",
        "quality": 1,
        "what": "accesskey attribute value is not unique"
      },
      "input_checkboxes_grouped": {
        "issueID": "fieldSetMissing",
        "quality": 1,
        "what": "checkbox input is not grouped with others with the same name"
      },
      "fieldset_legend_valid": {
        "issueID": "legendMissing",
        "quality": 1,
        "what": "Element has no legend element"
      },
      "group_withInputs_hasName": {
        "issueID": "groupName",
        "quality": 1,
        "what": "Group with nested inputs has no unique accessible name"
      },
      "fieldset_label_valid": {
        "issueID": "groupName",
        "quality": 1,
        "what": "Group or fieldset has no accessible name"
      },
      "table_structure_misuse": {
        "issueID": "layoutTable",
        "quality": 1,
        "what": "table has a presentation or none role but has a summary attribute or structural elements"
      },
      "table_headers_related": {
        "issueID": "cellHeadersNotInferrable",
        "quality": 1,
        "what": "Element is a cell in a complex table but has no headers associated with headers or scope attributes"
      },
      "table_headers_exists": {
        "issueID": "tableHeaderless",
        "quality": 1,
        "what": "No cell in the table is a th element or has a scope or headers attribute"
      },
      "input_label_exists": {
        "issueID": "controlNoText",
        "quality": 1,
        "what": "Element with the role of a form control has no associated label"
      },
      "input_label_visible": {
        "issueID": "inputLabelInvisibleRisk",
        "quality": 1,
        "what": "input element label invisible?"
      },
      "label_name_visible": {
        "issueID": "visibleLabelNotInName",
        "quality": 1,
        "what": "Accessible name does not match or contain the visible label text"
      },
      "WCAG21_Label_Accessible": {
        "issueID": "visibleLabelNotInName",
        "quality": 1,
        "what": "Accessible name does not match or contain the visible label text"
      },
      "target_spacing_sufficient": {
        "issueID": "targetsNear",
        "quality": 1,
        "what": "Small targets are not far enough apart"
      },
      "element_tabbable_unobscured": {
        "issueID": "focusIndicationRisk",
        "quality": 1,
        "what": "Tabbable element obscured by another element when focused?"
      },
      "element_tabbable_visible": {
        "issueID": "focusIndicationRisk",
        "quality": 1,
        "what": "Tabbable element invisible when focused?"
      },
      "style_focus_visible": {
        "issueID": "boxInvisibleRisk",
        "quality": 1,
        "what": "CSS-specified border or outline invisible?"
      },
      "aria_content_in_landmark": {
        "issueID": "contentBeyondLandmarks",
        "quality": 1,
        "what": "Content is not within a landmark element"
      },
      "aria_main_label_visible": {
        "issueID": "mainConfusion",
        "quality": 1,
        "what": "Element with a main role has no unique visible label among the main-role elements"
      },
      "aria_main_label_unique": {
        "issueID": "mainConfusion",
        "quality": 1,
        "what": "Element with a main role has no unique label among the main-role elements"
      },
      "aria_banner_single": {
        "issueID": "bannerNot1",
        "quality": 1,
        "what": "More than one element with a banner role is on the page"
      },
      "aria_contentinfo_label_unique": {
        "issueID": "footerConfusion",
        "quality": 1,
        "what": "Multiple elements with a contentinfo role have no unique labels"
      },
      "aria_contentinfo_single": {
        "issueID": "footerNot1",
        "quality": 1,
        "what": "Multiple elements with a contentinfo role are on the page"
      },
      "landmark_name_unique": {
        "issueID": "landmarkConfusion",
        "quality": 1,
        "what": "Landmark has no unique aria-labelledby or aria-label among landmarks in the same parent region"
      },
      "aria_document_label_unique": {
        "issueID": "documentConfusion",
        "quality": 1,
        "what": "Multiple elements with a document role have no unique labels"
      },
      "aria_form_label_unique": {
        "issueID": "formConfusion",
        "quality": 1,
        "what": "Multiple elements with a form role do not have unique labels"
      },
      "aria_application_labelled": {
        "issueID": "applicationNoText",
        "quality": 1,
        "what": "Element with an application role has no purpose label"
      },
      "aria_application_label_unique": {
        "issueID": "applicationConfusion",
        "quality": 1,
        "what": "Element with an application role has no unique purpose label among the application-role elements"
      },
      "aria_complementary_label_unique": {
        "issueID": "asideConfusion",
        "quality": 1,
        "what": "Multiple elements with a complementary role have no unique labels"
      },
      "aria_banner_label_unique": {
        "issueID": "bannerConfusion",
        "quality": 1,
        "what": "Multiple elements with a banner role have no unique labels"
      },
      "aria_navigation_label_unique": {
        "issueID": "navConfusion",
        "quality": 1,
        "what": "Multiple elements with the navigation role do not have unique labels"
      },
      "aria_region_label_unique": {
        "issueID": "regionConfusion",
        "quality": 1,
        "what": "Multiple elements with a region role do not have unique labels"
      },
      "aria_search_label_unique": {
        "issueID": "searchConfusion",
        "quality": 1,
        "what": "Multiple elements with the search role do not have unique labels"
      },
      "aria_complementary_labelled": {
        "issueID": "complementaryNoText",
        "quality": 1,
        "what": "Element with a complementary role has no label"
      },
      "aria_complementary_label_visible": {
        "issueID": "complementaryNoText",
        "quality": 1,
        "what": "Element with a complementary role has no visible label"
      },
      "label_content_exists": {
        "issueID": "labelNoText",
        "quality": 1,
        "what": "label element has no descriptive text identifying the expected input"
      },
      "aria_hidden_focus_misuse": {
        "issueID": "focusableHidden",
        "quality": 1,
        "what": "Focusable element is within the subtree of an element with aria-hidden set to true"
      },
      "aria_hidden_nontabbable": {
        "issueID": "focusableHidden",
        "quality": 1,
        "what": "Element has an ancestor with a true aria-hidden attribute but is focusable"
      },
      "form_interaction_review": {
        "issueID": "formSurpriseRisk",
        "quality": 1,
        "what": "User should be informed in advance when interacting with content changes context"
      },
      "form_label_unique": {
        "issueID": "labelNot1",
        "quality": 1,
        "what": "Form control has more than one label"
      },
      "blink_elem_deprecated": {
        "issueID": "blink",
        "quality": 1,
        "what": "Element, blink, is deprecated"
      },
      "aria_parent_required": {
        "issueID": "parentBad",
        "quality": 1,
        "what": "Element is not contained in or owned by an element with a required role"
      },
      "caption_track_exists": {
        "issueID": "videoCaptionRisk",
        "quality": 1,
        "what": "video element has no text alternative for any meaningful audio content?"
      },
      "element_scrollable_tabbable": {
        "issueID": "scrollFocus",
        "quality": 1,
        "what": "Element and its children are not focusable, but the element is scrollable"
      },
      "skip_main_exists": {
        "issueID": "skipRepeatedContent",
        "quality": 0.5,
        "what": "Page provides no way to quickly navigate to the main content"
      },
      "html_skipnav_exists": {
        "issueID": "repeatedContentRisk",
        "quality": 1,
        "what": "Provide a way to bypass blocks of content repeated on multiple pages"
      },
      "error_message_exists": {
        "issueID": "errorReferenceBad",
        "quality": 1,
        "what": "Element has an aria-errormessage attribute whose value is an invalid id"
      },
      "aria_attribute_deprecated": {
        "issueID": "attributeObsolete",
        "quality": 1,
        "what": "ARIA role or attribute is deprecated"
      },
      "frame_src_valid": {
        "issueID": "elementObsolete",
        "quality": 1,
        "what": "frame element is obsolete, and a frame with non-HTML content must be made accessible"
      },
      "combobox_design_valid": {
        "issueID": "obsolete",
        "quality": 1,
        "what": "combobox design pattern is ARIA 1.1, not allowed by ARIA 1.2"
      },
      "combobox_version": {
        "issueID": "obsolete",
        "quality": 1,
        "what": "combobox design pattern is invalid for ARIA 1.2"
      },
      "element_attribute_deprecated": {
        "issueID": "obsolete",
        "quality": 1,
        "what": "Element or attribute is obsolete"
      }
    },
    "variable": {}
  },
  "nuVal": {
    "invariant": {
      "Element head is missing a required instance of child element title.": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "head element has no child title element [invalid]"
      },
      "Element img is missing required attribute src.": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "img element has no src attribute [invalid]"
      },
      "Element mediaelementwrapper not allowed as child of element div in this context. (Suppressing further errors from this subtree.)": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Element contains a prohibited mediaelementwrapper element [invalid]"
      },
      "Trailing slash on void elements has no effect and interacts badly with unquoted attribute values.": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Void element has a useless trailing slash. [invalid]"
      },
      "The aria-placeholder attribute must not be specified on elements that have a placeholder attribute.": {
        "issueID": "placeholderPlusAria",
        "quality": 1,
        "what": "Element has both placeholder and aria-placeholder attributes"
      },
      "An img element must have an alt attribute, except under certain conditions. For details, consult guidance on providing text alternatives for images.": {
        "issueID": "imageNoText",
        "quality": 1,
        "what": "img element has no alt attribute"
      },
      "An img element with a role attribute must also have an accessible name (e.g., an alt attribute).": {
        "issueID": "imageNoText",
        "quality": 1,
        "what": "img element with a role attribute has no alt attribute"
      },
      "An img element which has an alt attribute whose value is the empty string must not have a role attribute.": {
        "issueID": "decorativeElementExposed",
        "quality": 1,
        "what": "img element with alt=\"\" has a role attribute"
      },
      "An img element with a role attribute must not have an alt attribute whose value is the empty string.": {
        "issueID": "decorativeElementExposed",
        "quality": 1,
        "what": "img element with a role attribute has alt=\"\""
      },
      "Consider adding a lang attribute to the html start tag to declare the language of this document.": {
        "issueID": "pageLanguage",
        "quality": 1,
        "what": "html start tag has no lang attribute to declare the language of the page"
      },
      "When the attribute xml:lang in no namespace is specified, the element must also have the attribute lang present with the same value.": {
        "issueID": "elementLanguageBad",
        "quality": 1,
        "what": "Element has no lang attrbute matching its xml:lang attribute"
      },
      "The value of the for attribute of the label element must be the ID of a non-hidden form control.": {
        "issueID": "labelForBad",
        "quality": 1,
        "what": "for attribute of the label element does not reference a non-hidden form control"
      },
      "Possible misuse of aria-label. (If you disagree with this warning, file an issue report or send e-mail to www-validator@w3.org.)": {
        "issueID": "ariaLabelWrongRisk",
        "quality": 1,
        "what": "aria-label attribute is misused?"
      },
      "Attribute aria-activedescendant value should either refer to a descendant element, or should be accompanied by attribute aria-owns.": {
        "issueID": "activeDescendantBadID",
        "quality": 1,
        "what": "Element has no aria-owns attribute but its aria-activedescendant attribute references a non-descendant"
      },
      "The aria-controls attribute must point to an element in the same document.": {
        "issueID": "governedBadID",
        "quality": 1,
        "what": "aria-controls attribute references an element not in the document"
      },
      "The aria-owns attribute must point to an element in the same document.": {
        "issueID": "governedBadID",
        "quality": 1,
        "what": "aria-owns attribute references an element not in the document"
      },
      "The aria-describedby attribute must point to an element in the same document.": {
        "issueID": "descriptionBadID",
        "quality": 1,
        "what": "aria-describedby attribute references an element not in the document"
      },
      "Any input descendant of a label element with a for attribute must have an ID value that matches that for attribute.": {
        "issueID": "labelBadID",
        "quality": 1,
        "what": "input id differs from the value of the for attribute of the enclosing label element"
      },
      "The aria-labelledby attribute must point to an element in the same document.": {
        "issueID": "labelBadID",
        "quality": 1,
        "what": "aria-labelledby attribute references an element not in the document"
      },
      "Bad value  for attribute href on element link: Must be non-empty.": {
        "issueID": "linkElNoHref",
        "quality": 1,
        "what": "link element has an empty href attribute"
      },
      "Attribute href without an explicit value seen. The attribute may be dropped by IE7.": {
        "issueID": "linkElNoHref",
        "quality": 1,
        "what": "Element has an empty href attribute"
      },
      "A link element must have an href or imagesrcset attribute, or both.": {
        "issueID": "linkElNoSource",
        "quality": 1,
        "what": "link element has neither an href nor an imagesrcset attribute"
      },
      "Element a is missing required attribute href.": {
        "issueID": "destinationLink",
        "quality": 1,
        "what": "a element has no href attribute"
      },
      "The document role is not allowed for element select without a multiple attribute and without a size attribute whose value is greater than 1.": {
        "issueID": "selectBad",
        "quality": 1,
        "what": "select element is not multiple or has no size greater than 1 but has a document role"
      },
      "The first child option element of a select element with a required attribute, and without a multiple attribute, and without a size attribute whose value is greater than 1, must have either an empty value attribute, or must have no text content. Consider either adding a placeholder option label, or adding a size attribute with a value equal to the number of option elements.": {
        "issueID": "selectBad",
        "quality": 1,
        "what": "option element has a nonempty value"
      },
      "The select element cannot have more than one selected option descendant unless the multiple attribute is specified.": {
        "issueID": "selectBad",
        "quality": 1,
        "what": "Element is select and has no multiple attribute, but has more than 1 selected option"
      },
      "A select element with a required attribute, and without a multiple attribute, and without a size attribute whose value is greater than 1, must have a child option element.": {
        "issueID": "selectBad",
        "quality": 1,
        "what": "Element is select and has no child option element, but its attributes require one"
      },
      "Attribute alt not allowed on element button at this point.": {
        "issueID": "buttonAlt",
        "quality": 1,
        "what": "button element has an alt attribute"
      },
      "Element input with attribute type whose value is button must have non-empty attribute value.": {
        "issueID": "buttonNoText",
        "quality": 1,
        "what": "input element with type=button has no nonempty value attribute"
      },
      "Consider avoiding viewport values that prevent users from resizing documents.": {
        "issueID": "metaBansZoom",
        "quality": 1,
        "what": "viewport value prevents users from resizing the document"
      },
      "The base element must come before any link or script elements in the document.": {
        "issueID": "baseElementMissing",
        "quality": 1,
        "what": "Element is a link or script element requiring a preceding base element but has none"
      },
      "A link element must not appear as a descendant of a body element unless the link element has an itemprop attribute or has a rel attribute whose value contains dns-prefetch, modulepreload, pingback, preconnect, prefetch, preload, prerender, or stylesheet.": {
        "issueID": "linkElementMisplaced",
        "quality": 1,
        "what": "Element has a body ancestor but no itemprop or valid rel attribute"
      },
      "A link element with an as attribute must have a rel attribute that contains the value preload or the value modulepreload or the value prefetch.": {
        "issueID": "linkElementBad",
        "quality": 1,
        "what": "Element has an as attribute but no rel attribute with preload, modulepreload, or prefetch as its value"
      },
      "A link element with an as attribute must have a rel attribute that contains the value preload or the value modulepreload.": {
        "issueID": "linkElementBad",
        "quality": 1,
        "what": "Element has an as attribute but no rel attribute with preload or modulepreload as its value"
      },
      "A link element with a color attribute must have a rel attribute that contains the value mask-icon.": {
        "issueID": "linkElementBad",
        "quality": 1,
        "what": "Element has a color attribute but no rel attribute with mask-icon as its value"
      },
      "A document must not include more than one meta element with its name attribute set to the value description.": {
        "issueID": "metaBad",
        "quality": 1,
        "what": "Element with name=\"description\" is not the only meta element with that name"
      },
      "A document must not include both a meta element with an http-equiv attribute whose value is content-type, and a meta element with a charset attribute.": {
        "issueID": "metaBad",
        "quality": 1,
        "what": "Element with http-equiv=\"content-type\" is incompatible with the meta element with a charset attribute"
      },
      "A document must not include more than one meta element with a http-equiv attribute whose value is content-type.": {
        "issueID": "metaBad",
        "quality": 1,
        "what": "Page has more than 1 meta element with http-equiv=\"content-type\""
      },
      "A meta element with an http-equiv attribute whose value is X-UA-Compatible must have a content attribute with the value IE=edge.": {
        "issueID": "metaBad",
        "quality": 1,
        "what": "Element with http-equiv=\"X-UA-Compatible\" has no content=\"IE=edge\""
      },
      "A document must not include more than one meta element with a charset attribute.": {
        "issueID": "metaBad",
        "quality": 1,
        "what": "More than 1 meta element has a charset attribute"
      },
      "A charset attribute on a meta element found after the first 1024 bytes.": {
        "issueID": "metaBad",
        "quality": 1,
        "what": "charset attribute on a meta element appears after 1024 bytes"
      },
      "meta element between head and body.": {
        "issueID": "metaMisplaced",
        "quality": 1,
        "what": "meta element is between the head and body elements"
      },
      "Element script must not have attribute defer unless attribute src is also specified.": {
        "issueID": "scriptNotDeferrable",
        "quality": 1,
        "what": "Element is script and has a defer attribute but no src attribute"
      },
      "An inline script element (i.e., a script element without a src attribute and with a type attribute that is either unspecified, empty, or a JavaScript MIME type) must not have a defer attribute.": {
        "issueID": "scriptNotDeferrable",
        "quality": 1,
        "what": "Element is not eligible for a defer attribute but has one"
      },
      "A script element with a type attribute whose value is neither a JavaScript MIME type, module, importmap, nor speculationrules (i.e., a data block) must not have a defer attribute.": {
        "issueID": "scriptNotDeferrable",
        "quality": 1,
        "what": "Element is not eligible for a defer attribute but has one"
      },
      "A script element with type=module must not have a defer attribute.": {
        "issueID": "scriptNotDeferrable",
        "quality": 1,
        "what": "Element has a module type but has a defer attribute"
      },
      "Element script should not have attribute fetchpriority unless attribute src is also specified.": {
        "issueID": "scriptElementBad",
        "quality": 1,
        "what": "Element is script and has a fetchpriority attribute but no src attribute"
      },
      "A script element with a src attribute must not have a type attribute whose value is anything other than the empty string, a JavaScript MIME type, or module.": {
        "issueID": "scriptElementBad",
        "quality": 1,
        "what": "Element is script and has a src attribute but its type is not empty, a JS MIME type, or module"
      },
      "A script element with a type attribute whose value is neither a JavaScript MIME type, module, importmap, nor speculationrules (i.e., a data block) must not have an async attribute.": {
        "issueID": "scriptElementBad",
        "quality": 1,
        "what": "Element is not eligible for an async attribute but has one"
      },
      "A script element with a type attribute whose value is neither a JavaScript MIME type, module, importmap, nor speculationrules (i.e., a data block) must not have a src attribute.": {
        "issueID": "scriptElementBad",
        "quality": 1,
        "what": "Element is not eligible for a src attribute but has one"
      },
      "The href_matches property in a document rule must be a string.": {
        "issueID": "specRulesScriptBad",
        "quality": 1,
        "what": "Element is script with type=speculationrules but its href_matches value is not a string"
      },
      "Each rule in the prefetch array must only contain the properties source, urls, where, and eagerness.": {
        "issueID": "specRulesScriptBad",
        "quality": 1,
        "what": "Element is script with type=speculationrules but its prefetch array has invalid property names"
      },
      "A script element with a type attribute whose value is speculationrules must contain a JSON object with at least one of the properties prefetch or prerender.": {
        "issueID": "specRulesScriptBad",
        "quality": 1,
        "what": "Element is script with type=speculationrules but has no JSON object with a prefetch or prerender property"
      },
      "The itemid attribute must not be specified on elements that do not have both an itemscope attribute and an itemtype attribute specified.": {
        "issueID": "itemIDBad",
        "quality": 1,
        "what": "Element has an itemid attribute without both an itemscope and an itemtype attribute"
      },
      "The itemtype attribute must not be specified on elements that do not have an itemscope attribute specified.": {
        "issueID": "itemTypeBad",
        "quality": 1,
        "what": "Element has an itemtype attribute without an itemscope attribute"
      },
      "Bad value dialog for attribute role on element li.": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "dialog role is not valid for an li element"
      },
      "An img element with no alt attribute must not have a role attribute.": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "img element has a role attribute but no alt attribute"
      },
      "A figure element with a figcaption descendant must not have a role attribute.": {
        "issueID": "roleHierarchyBad",
        "quality": 1,
        "what": "figure element has a figcaption descendant but has a role attribute"
      },
      "An li element that is a descendant of a ul, ol, or menu element with no explicit role value, or a descendant of a role=list element, must not have any role value other than listitem.": {
        "issueID": "roleHierarchyBad",
        "quality": 1,
        "what": "element is li in a list but has no listitem role"
      },
      "An li element that is a descendant of a role=listbox element or role=list element must not have any role value other than group or option.": {
        "issueID": "roleHierarchyBad",
        "quality": 1,
        "what": "element is li in a listbox or list but has no group or option role"
      },
      "An element with role=group must not be a descendant of an element with role=list.": {
        "issueID": "roleHierarchyBad",
        "quality": 1,
        "what": "element has a group role but has an ancestor with a list role"
      },
      "The searchbox role is unnecessary for an input element that has no list attribute and whose type is search.": {
        "issueID": "roleRedundant",
        "quality": 1,
        "what": "explicit role is redundant for a search-type input element without a list attribute"
      },
      "The textbox role is unnecessary for an input element that has no list attribute and whose type is text.": {
        "issueID": "roleRedundant",
        "quality": 1,
        "what": "explicit role is redundant for a text-type input element without a list attribute"
      },
      "The itemprop attribute was specified, but the element is not a property of any item.": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "itemprop attribute is on an element that is not a property of an item"
      },
      "An aria-disabled attribute whose value is true should not be specified on an a element that has an href attribute.": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "a element has aria-disabled=true but has an href attribute"
      },
      "A document must not include more than one autofocus attribute.": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "Page includes more than one autofocus attribute"
      },
      "An input element with a type attribute whose value is hidden must not have any aria-* attributes.": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "hidden-type input element has an ARIA attribute"
      },
      "The name attribute is never allowed on the a element.": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "element is a but has a name attribute"
      },
      "A link element with a sizes attribute must have a rel attribute that contains the value icon or the value apple-touch-icon or the value apple-touch-icon-precomposed.": {
        "issueID": "sizesAttributeBad",
        "quality": 1,
        "what": "link element has a sizes attribute but no icon-type rel attribute"
      },
      "The sizes attribute may be specified only if the srcset attribute is also present.": {
        "issueID": "sizesAttributeBad",
        "quality": 1,
        "what": "Element has a sizes attribute but no srcset attribute"
      },
      "The sizes attribute must only be specified if the srcset attribute is also specified.": {
        "issueID": "sizesAttributeBad",
        "quality": 1,
        "what": "Element has a sizes attribute but no srcset attribute"
      },
      "When the srcset attribute has any image candidate string with a width descriptor, the sizes attribute must also be present.": {
        "issueID": "sizesAttributeBad",
        "quality": 1,
        "what": "Element with a srcset attribute with a width has no sizes attribute"
      },
      "When the srcset attribute has any image candidate string with a width descriptor, the sizes attribute must also be specified.": {
        "issueID": "sizesAttributeBad",
        "quality": 1,
        "what": "Element with a srcset attribute with a width has no valid sizes attribute"
      },
      "The sizes attribute value starting with auto is only valid for lazy-loaded images. Add loading=lazy to this element.": {
        "issueID": "sizesAttributeBad",
        "quality": 1,
        "what": "Element with a sizes=auto… attribute has no loading=lazy attribute"
      },
      "A script element with a defer attribute must not have a type attribute with the value module.": {
        "issueID": "attributeValueBad",
        "quality": 1,
        "what": "script element with a defer attribute has type=\"module\""
      },
      "A link element with a rel attribute that contains the value preload must have an as attribute.": {
        "issueID": "attributeMissing",
        "quality": 1,
        "what": "link element with rel=\"preload\" is missing an as attribute"
      },
      "A source element that has a following sibling source element or img element with a srcset attribute must have a media attribute and/or type attribute.": {
        "issueID": "attributeMissing",
        "quality": 1,
        "what": "source or img element is missing a media or type attribute"
      },
      "The aria-hidden attribute must not be specified on the noscript element.": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "noscript element has an aria-hidden attribute"
      },
      "The aria-checked attribute should not be used on an input element which has a type attribute whose value is radio.": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "input element with type=\"radio\" has an aria-checked attribute"
      },
      "The aria-checked attribute must not be used on an input element which has a type attribute whose value is radio.": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "input element with type=\"radio\" has an aria-checked attribute"
      },
      "The form attribute must refer to a form element.": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "form attribute does not reference a form element"
      },
      "The aria-checked attribute should not be used on an input element which has a type attribute whose value is checkbox.": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "input element with type checkbox has an aria-checked attribute"
      },
      "The aria-checked attribute must not be used on an input element which has a type attribute whose value is checkbox.": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "input element with type checkbox has an aria-checked attribute"
      },
      "An img element with no alt attribute must not have any aria-* attributes other than aria-hidden.": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "img element has no alt attribute but has an ARIA attribute other than aria-hidden"
      },
      "An input element with a type attribute whose value is checkbox and with a role attribute whose value is button must have an aria-pressed attribute whose value is true.": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "input element with a button role and type=\"checkbox\" has no aria-pressed=\"true\""
      },
      "The aria-valuemax attribute must not be used on an element which has a max attribute.": {
        "issueID": "ariaRedundant",
        "quality": 1,
        "what": "Element has the max attribute but also the aria-valuemax attribute"
      },
      "The aria-valuemin attribute must not be used on an element which has a min attribute.": {
        "issueID": "ariaRedundant",
        "quality": 1,
        "what": "Element has the min attribute but also the aria-valuemin attribute"
      },
      "Bad value  for attribute autocomplete on element input: Must not be empty.": {
        "issueID": "autocompleteBad",
        "quality": 1,
        "what": "autocomplete attribute has an empty value"
      },
      "An input element with a type attribute whose value is hidden must not have an autocomplete attribute whose value is on or off.": {
        "issueID": "autocompleteBad",
        "quality": 1,
        "what": "autocomplete attribute belongs to a hidden element but has an on or off value"
      },
      "Bad value  for attribute target on element a: Browsing context name must be at least one character long.": {
        "issueID": "targetEmpty",
        "quality": 1,
        "what": "target attribute on an a element is empty"
      },
      "Heading cannot be a child of another heading.": {
        "issueID": "headingsEmbedded",
        "quality": 1,
        "what": "Heading is within a heading"
      },
      "Empty heading.": {
        "issueID": "headingEmpty",
        "quality": 1,
        "what": "Empty heading"
      },
      "The only allowed value for the type attribute for the style element is text/css (with no parameters). (But the attribute is not needed and should be omitted altogether.)": {
        "issueID": "typeBad",
        "quality": 1,
        "what": "type attribute is invalid"
      },
      "The type attribute is unnecessary for JavaScript resources.": {
        "issueID": "typeRedundant",
        "quality": 1,
        "what": "type attribute is unnecessary for a JavaScript resource"
      },
      "The type attribute for the style element is not needed and should be omitted.": {
        "issueID": "typeRedundant",
        "quality": 1,
        "what": "type attribute is unnecessary for a style element"
      },
      "Element title must not be empty.": {
        "issueID": "titleEmpty",
        "quality": 1,
        "what": "Element has an empty title attribute"
      },
      "Start tag seen without seeing a doctype first. Expected <!DOCTYPE html>.": {
        "issueID": "docTypeMissing",
        "quality": 1,
        "what": "Page does not start with <!DOCTYPE html>"
      },
      "End of file seen without seeing a doctype first. Expected <!DOCTYPE html>.": {
        "issueID": "docTypeMissing",
        "quality": 1,
        "what": "Page does not include <!DOCTYPE html>"
      },
      "Stray doctype.": {
        "issueID": "docTypeMisplaced",
        "quality": 1,
        "what": "DOCTYPE is in an invalid location"
      },
      "Almost standards mode doctype. Expected <!DOCTYPE html>.": {
        "issueID": "docTypeBad",
        "quality": 1,
        "what": "document type declaration differs from <!DOCTYPE html>"
      },
      "This document has heading elements but none of them has a computed heading level of 1.": {
        "issueID": "h1Not1",
        "quality": 1,
        "what": "Page contains no h1 element"
      },
      "Consider using the h1 element as a top-level heading only (all h1 elements are treated as top-level headings by many screen readers and other tools).": {
        "issueID": "h1Not1",
        "quality": 1,
        "what": "Page contains more than 1 h1 element"
      },
      "Consider using the h1 element as a top-level heading only — or else use the headingoffset attribute (otherwise, all h1 elements are treated as top-level headings by many screen readers and other tools).": {
        "issueID": "h1Not1",
        "quality": 1,
        "what": "Page contains more than 1 h1 element"
      },
      "Article lacks heading. Consider using h2-h6 elements to add identifying headings to all articles.": {
        "issueID": "articleHeadingless",
        "quality": 1,
        "what": "article has no heading"
      },
      "Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.": {
        "issueID": "sectionHeadingless",
        "quality": 1,
        "what": "section has no heading"
      },
      "Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections, or else use a div element instead for any cases where no heading is needed.": {
        "issueID": "sectionHeadingless",
        "quality": 1,
        "what": "section has no heading"
      },
      "Element dl is missing a required child element.": {
        "issueID": "listChild",
        "quality": 1,
        "what": "dl element has no child element"
      },
      "Element option without attribute label must not be empty.": {
        "issueID": "optionNoText",
        "quality": 1,
        "what": "Element is option with no label attribute but is empty"
      },
      "Start tag div seen in table.": {
        "issueID": "divInTable",
        "quality": 1,
        "what": "div element is inside a table element"
      },
      "Start tag form seen in table.": {
        "issueID": "formInTable",
        "quality": 1,
        "what": "form element is inside a table element"
      },
      "Start tag input seen in table.": {
        "issueID": "inputInTable",
        "quality": 1,
        "what": "input element is inside a table element"
      },
      "The element a must not appear as a descendant of an element with the attribute role=link.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "a element is a descendant of an element with a link role"
      },
      "The element a must not appear as a descendant of an element with the attribute role=button.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "a element is a descendant of an element with a button role"
      },
      "The element a with the attribute href must not appear as a descendant of an element with the attribute role=button.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "a element with a destination is a descendant of an element with a button role"
      },
      "The element button must not appear as a descendant of the a element.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "button element is a descendant of an a element"
      },
      "An element with the attribute role=button must not appear as a descendant of the a element.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "Element with a button role is a descendant of an a element"
      },
      "The element button must not appear as a descendant of an element with the attribute role=button.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "button element is a descendant of an element with a button role"
      },
      "An element with the attribute role=button must not appear as a descendant of an element with the attribute role=button.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "Element with a button role is a descendant of an element with a button role"
      },
      "An element with the attribute role=button must not appear as a descendant of the button element.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "Element with a button role is a descendant of a button element"
      },
      "The element label must not appear as a descendant of an element with the attribute role=button.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "label element is a descendant of an element with a button role"
      },
      "The element select must not appear as a descendant of an element with the attribute role=button.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "select element is a descendant of an element with a button role"
      },
      "The element input must not appear as a descendant of an element with the attribute role=progressbar.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "input element is a descendant of an element with a progressbar role"
      },
      "An element with the attribute tabindex must not appear as a descendant of the a element.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "descendant of an a element has a tabindex attribute"
      },
      "An element with the attribute tabindex must not appear as a descendant of an element with the attribute role=link.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "descendant of an element with a link role has a tabindex attribute"
      },
      "An element with the attribute tabindex must not appear as a descendant of the button element.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "descendant of a button element has a tabindex attribute"
      },
      "An element with the attribute tabindex must not appear as a descendant of an element with the attribute role=button.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "descendant of an element with a button role has a tabindex attribute"
      },
      "An element with the attribute role=menu must not appear as a descendant of the a element.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "Element with a menu role is a descendant of an a element"
      },
      "An element with the attribute role=menuitem must not appear as a descendant of the a element.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "Element with a menuitem role is a descendant of an a element"
      },
      "An element with the attribute role=option must not appear as a descendant of the a element.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "Element with an option role is a descendant of an a element"
      },
      "An element with the attribute role=menu must not appear as a descendant of an element with the attribute role=button.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "Element with a menu role is a descendant of an element with a button role"
      },
      "The element a should not appear as a descendant of an element with the attribute role=menuitem.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "a element is a descendant of an element with a menuitem role"
      },
      "The element a with the attribute href should not appear as a descendant of an element with the attribute role=menuitem.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "a element with an href attribute is a descendant of an element with a menuitem role"
      },
      "A document must not include more than one visible main element.": {
        "issueID": "mainNot1",
        "quality": 1,
        "what": "Page includes more than 1 visible main element"
      },
      "A document should not include more than one visible element with role=main.": {
        "issueID": "mainNot1",
        "quality": 1,
        "what": "Page includes more than 1 visible element with a main role"
      },
      "Saw a form start tag, but there was already an active form element. Nested forms are not allowed. Ignoring the tag.": {
        "issueID": "formsNested",
        "quality": 1,
        "what": "form element nested within another form element"
      },
      "The label element may contain at most one button, input, meter, output, progress, select, or textarea descendant.": {
        "issueID": "multipleLabelees",
        "quality": 1,
        "what": "Element has more than 1 labelable descendant."
      },
      "label element with multiple labelable descendants.": {
        "issueID": "multipleLabelees",
        "quality": 1,
        "what": "Element has multiple labelable descendants."
      },
      "The aria-label attribute must not be used on any label element that is associated with a labelable element.": {
        "issueID": "labelClash",
        "quality": 1,
        "what": "Element is a label but has a label"
      },
      "The aria-labelledby attribute must not be used on any label element that is an ancestor of a labelable element.": {
        "issueID": "labelClash",
        "quality": 1,
        "what": "Element is a label with a labelable descendant but has is an aria-labelledby attribute"
      },
      "The blink element is obsolete. Use CSS instead.": {
        "issueID": "blink",
        "quality": 1,
        "what": "Element, blink, is obsolete"
      },
      "The presentation role does not affect elements that have global ARIA attributes.": {
        "issueID": "presentationGlobal",
        "quality": 1,
        "what": "Element has a presentation role but also a global ARIA attribute that nullifies the role"
      },
      "The presentation role does not affect elements that have a tabindex attribute.": {
        "issueID": "presentationTabIndexed",
        "quality": 1,
        "what": "Element has a presentation role but also a tabindex attribute that nullifies the role"
      },
      "The inputmode attribute is not supported in all browsers. Please be sure to test, and consider using a polyfill.": {
        "issueID": "browserSupportRisk",
        "quality": 1,
        "what": "inputmode attribute is unsupported by some browsers"
      },
      "The border attribute is obsolete. Consider specifying img { border: 0; } in CSS instead.": {
        "issueID": "attributeObsolete",
        "quality": 1,
        "what": "border element is obsolete"
      },
      "The only allowed value for the charset attribute for the script element is utf-8. (But the attribute is not needed and should be omitted altogether.)": {
        "issueID": "attributeObsolete",
        "quality": 1,
        "what": "charset attribute has a value other than utf-8 and is unnecessary"
      },
      "The only allowed value for the charset attribute for the meta element is utf-8.": {
        "issueID": "attributeObsolete",
        "quality": 1,
        "what": "charset attribute has a value other than utf-8 and is unnecessary"
      },
      "The name attribute is obsolete. Consider putting an id attribute on the nearest container instead.": {
        "issueID": "attributeObsolete",
        "quality": 1,
        "what": "name attribute is obsolete"
      },
      "The center element is obsolete. Use CSS instead.": {
        "issueID": "elementObsolete",
        "quality": 1,
        "what": "center element is obsolete"
      },
      "The font element is obsolete. Use CSS instead.": {
        "issueID": "elementObsolete",
        "quality": 1,
        "what": "font element is obsolete"
      },
      "Using the meta element to specify the document-wide default language is obsolete. Consider specifying the language on the root element instead.": {
        "issueID": "elementObsolete",
        "quality": 1,
        "what": "Language declaration in a meta element is obsolete"
      },
      "Legacy doctype. Expected <!DOCTYPE html>.": {
        "issueID": "obsolete",
        "quality": 1,
        "what": "doctype is obsolete"
      },
      "Obsolete doctype. Expected <!DOCTYPE html>.": {
        "issueID": "obsolete",
        "quality": 1,
        "what": "DOCTYPE is obsolete instead of html"
      },
      "CSS: This profile has a very specific syntax for @charset: @charset followed by exactly one space, followed by the name of the encoding in quotes, followed immediately by a semicolon.": {
        "issueID": "atRuleInvalid",
        "quality": 1,
        "what": "CSS @charset at-rule has an invalid format"
      },
      "CSS: The @charset rule may only occur at the start of the style sheet. Please check that there are no spaces before it.": {
        "issueID": "atRuleInvalid",
        "quality": 1,
        "what": "CSS @charset at-rule is not at the start of its style sheet"
      },
      "CSS: @import are not allowed after any valid statement other than @charset and @import.": {
        "issueID": "atRuleInvalid",
        "quality": 1,
        "what": "CSS @import at-rule is after an at-rule other than @charset or @import"
      },
      "CSS: z-index: This number should be an integer.": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "z-index style property has a non-integer value"
      },
      "CSS: Parse Error. Style sheets should not include HTML syntax.": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "CSS style sheet includes HTML syntax"
      },
      "CSS: font-size: One operand must be a number.": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "CSS font-size property has no numeric operand"
      },
      "CSS: Parse Error.": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Invalid CSS"
      },
      "CSS: -webkit-mask: too few values for the property linear-gradient.": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "CSS webkit-mask linear-gradient property has too few values"
      },
      "CSS: --solidHeaderNavigationColor: Cannot invoke \"org.w3c.css.values.CssValue.getType()\" because \"val\" is null.": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "CSS solidHeaderNavigationColor property is null"
      },
      "CSS: --gradientHeaderBackgroundColor: Cannot invoke \"org.w3c.css.values.CssValue.getType()\" because \"val\" is null.": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "CSS gradientHeaderBackgroundColor property is null"
      },
      "End tag had attributes.": {
        "issueID": "elementClosure",
        "quality": 1,
        "what": "End tag has an attribute"
      },
      "Non-space character inside noscript inside head.": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "noscript element inside the head element has a nonspace text-node child"
      },
      "A numeric character reference expanded to carriage return.": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "Numeric character entity represents a carriage return"
      },
      "Named character reference was not terminated by a semicolon. (Or & should have been escaped as &amp;.)": {
        "issueID": "entityBad",
        "quality": 1,
        "what": "& not escaped or used in an unterminated character reference"
      },
      "The text content of element time was not in the required format: The literal did not satisfy the time-datetime format.": {
        "issueID": "textContentBad",
        "quality": 1,
        "what": "time element has text content that is not in the time-datetime format"
      },
      "No space between attributes.": {
        "issueID": "parseError",
        "quality": 1,
        "what": "No space between attributes"
      },
      "Saw <?. Probable cause: Attempt to use an XML processing instruction in HTML. (XML processing instructions are not supported in HTML.)": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Left angle bracket is followed by a question mark"
      },
      "The aria-hidden attribute must not be specified on an input element whose type attribute has the value hidden.": {
        "issueID": "parseError",
        "quality": 1,
        "what": "aria-hidden attribute is invalid for an input element with type=\"hidden\""
      },
      "Saw <!-- within a comment. Probable cause: Nested comment (not allowed).": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Comment is nested within a comment"
      },
      "The document is not mappable to XML 1.0 due to two consecutive hyphens in a comment.": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Comment contains --"
      },
      "The document is not mappable to XML 1.0 due to a trailing hyphen in a comment.": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Comment ends with -"
      },
      "Bogus comment.": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Comment is missing a valid termination"
      },
      "Element script must not have attribute async unless attribute src is also specified or unless attribute type is specified with value module.": {
        "issueID": "parseError",
        "quality": 1,
        "what": "script element has an async attribute but has no src or value=module attribute"
      },
      "Element script must not have attribute charset unless attribute src is also specified.": {
        "issueID": "parseError",
        "quality": 1,
        "what": "script element has a charset attribute but no src attribute"
      },
      "style element between head and body.": {
        "issueID": "parseError",
        "quality": 1,
        "what": "style element exists between the head and the body elements"
      },
      "A slash was not immediately followed by >.": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Element start tag contains a nonfinal slash"
      },
      "Document uses the Unicode Private Use Area(s), which should not be used in publicly exchanged documents. (Charmod C073)": {
        "issueID": "encodingPrivate",
        "quality": 1,
        "what": "Page includes a Unicode PUA character"
      },
      "Cannot recover after last error. Any further errors will be ignored.": {
        "issueID": "fatalError",
        "quality": 1,
        "what": "Testing was interrupted by a fatal error"
      },
      "Oops. That was not supposed to happen. A bug manifested itself in the application internals. Unable to continue. Sorry. The admin was notified.": {
        "issueID": "fatalError",
        "quality": 1,
        "what": "Testing was interrupted by a fatal application-internal error"
      },
      "Too many messages.": {
        "issueID": "fatalError",
        "quality": 1,
        "what": "Testing was interrupted by a fatal excess of the message count"
      },
      "Unsupported SVG version specified. This validator only supports SVG 1.1. The recommended way to suppress this warning is to remove the version attribute altogether.": {
        "issueID": "svgNotValidatable",
        "quality": 1,
        "what": "SVG version specified is not 1.1 and so nuVal cannot validate it"
      }
    },
    "variable": {
      "Duplicate attribute.*": {
        "issueID": "duplicateAttribute",
        "quality": 1,
        "what": "Source code of the element contains 2 or more of the same attribute"
      },
      "Duplicate ID .+$|^The first occurrence of ID .* was here.*": {
        "issueID": "duplicateID",
        "quality": 1,
        "what": "Duplicate id"
      },
      "Bad value  for attribute src on element .+: Must be non-empty.*": {
        "issueID": "sourceEmpty",
        "quality": 1,
        "what": "src attribute is empty"
      },
      "CSS: border-.+ negative values are not allowed.*": {
        "issueID": "borderBad",
        "quality": 1,
        "what": "CSS border includes a negative-valued property"
      },
      "CSS: flex: .+ negative values are not allowed.*": {
        "issueID": "flexBad",
        "quality": 1,
        "what": "CSS flex value is negative"
      },
      "CSS: padding[-a-z]*: .+ negative values are not allowed.*": {
        "issueID": "paddingBad",
        "quality": 1,
        "what": "One of the CSS padding values is negative"
      },
      "CSS: gap: .+ negative values are not allowed.*": {
        "issueID": "gapBad",
        "quality": 1,
        "what": "CSS gap value is negative"
      },
      "CSS: background: .+ is not a color value.*": {
        "issueID": "backgroundBad",
        "quality": 1,
        "what": "CSS background color is misdefined"
      },
      "CSS: background: The .+ argument to the .+ function should be .+, not .+": {
        "issueID": "backgroundBad",
        "quality": 1,
        "what": "CSS background function has an invalid argument"
      },
      "CSS: _background: url.+ is an incorrect URL.*": {
        "issueID": "backgroundBad",
        "quality": 1,
        "what": "CSS background URL is invalid"
      },
      "CSS: background-image: .+ is not a background-image value.*": {
        "issueID": "backgroundImageBad",
        "quality": 1,
        "what": "CSS background image is misdefined"
      },
      "CSS: background-image: url.+ is an incorrect URL.*": {
        "issueID": "backgroundImageBad",
        "quality": 1,
        "what": "CSS background image is misdefined"
      },
      "Resource violates Content Security Policy \\(meta tag\\): image .+ blocked by img-src directive.*": {
        "issueID": "imageBanned",
        "quality": 1,
        "what": "img-src content attribute blocks an image"
      },
      "This document appears to be written in .+ Consider .+ing lang=.+": {
        "issueID": "pageLanguage",
        "quality": 1,
        "what": "html start tag has no lang attribute to declare the language of the page"
      },
      "Any .+ descendant of a label element with a for attribute must have an ID value that matches that for attribute.*": {
        "issueID": "controlIDInLabelBad",
        "quality": 1,
        "what": "label element has a labelable descendant whose ID differs from the for attribute of the label"
      },
      "The aria-label.* attribute must not be specified on any .* element unless the element has a role value other than caption, code, deletion, emphasis, generic, insertion, paragraph, presentation, strong, subscript, or superscript.*": {
        "issueID": "nonLabelableRole",
        "quality": 1,
        "what": "Element with a non-labelable role has an aria-label attribute"
      },
      "The aria-describedby attribute references .+, which is not the ID of any element in this document.+": {
        "issueID": "descriptionBadID",
        "quality": 1,
        "what": "aria-describedby attribute references an element not in the document"
      },
      "The aria-labelledby attribute references .+, which is not the ID of any element in this document.+": {
        "issueID": "labelBadID",
        "quality": 1,
        "what": "aria-labelledby attribute references an element not in the document"
      },
      "An element with role=.+ must be contained in, or owned by, an element with .*role.+": {
        "issueID": "parentMissing",
        "quality": 1,
        "what": "Element has no required container or owner"
      },
      "Element .+ is missing a required instance of child element .+": {
        "issueID": "descendantMissing",
        "quality": 1,
        "what": "Element is missing a required child"
      },
      "CSS: line-height: .* negative values are not allowed.*": {
        "issueID": "lineHeightBad",
        "quality": 1,
        "what": "Text line height is negative"
      },
      "Saw a start tag [a-z]+.*": {
        "issueID": "elementBad",
        "quality": 1,
        "what": "Element does not exist in HTML"
      },
      "Attribute .+ not allowed on element meta at this point.*": {
        "issueID": "metaBad",
        "quality": 1,
        "what": "Attribute is not allowed on a meta element here"
      },
      "Element meta is missing one or more of the following attributes: .+": {
        "issueID": "metaBad",
        "quality": 1,
        "what": "Element is missing a required attribute"
      },
      "Bad value .+ for attribute .+ on element meta.*": {
        "issueID": "metaBad",
        "quality": 1,
        "what": "Attribute of a meta element has an invalid value"
      },
      "Resource violates Content Security Policy \\(meta tag\\): external stylesheet .+ blocked by style-src directive.*": {
        "issueID": "stylesheetBanned",
        "quality": 1,
        "what": "style-src content attribute blocks an external stylesheet"
      },
      "Resource violates Content Security Policy \\(meta tag\\): external script .+ blocked by script-src directive.*": {
        "issueID": "scriptBanned",
        "quality": 1,
        "what": "script-src content attribute blocks a script"
      },
      "Discarding unrecognized token .+ from value of attribute role. Browsers ignore any token that is not a defined ARIA non-abstract role.*": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "Invalid role"
      },
      "The role attribute must not be used on a .+ element which has a table ancestor with no role attribute, or with a role attribute whose value is table, grid, or treegrid.*": {
        "issueID": "roleHierarchyBad",
        "quality": 1,
        "what": "Table cell has a role attribute"
      },
      "The .+ role is unnecessary for element .+": {
        "issueID": "roleRedundant",
        "quality": 1,
        "what": "explicit role is redundant for its element"
      },
      "Element .+ does not need a role attribute.*": {
        "issueID": "roleRedundant",
        "quality": 1,
        "what": "Element needs no role attribute"
      },
      "Attribute .+ not allowed on element .+ at this point.*": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "Attribute not allowed on this element"
      },
      "Attribute .+ not allowed here.*": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "Attribute not allowed here"
      },
      "Attribute .+ is not serializable as XML 1[.]0.*": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "Attribute is invalidly nonserializable"
      },
      "Attribute .+ is only allowed when .+": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "Attribute is invalid here"
      },
      "Bad value .* for attribute .+ on element .+": {
        "issueID": "attributeValueBad",
        "quality": 1,
        "what": "Attribute on this element has an invalid value"
      },
      "Bad value .+ for the attribute .+": {
        "issueID": "attributeValueBad",
        "quality": 1,
        "what": "Attribute has an invalid value"
      },
      "Bad value  for attribute .+ on element .+: Must not be empty.*": {
        "issueID": "attributeValueBad",
        "quality": 1,
        "what": "Attribute has an invalidly empty value"
      },
      "Bad value  for attribute (?:width|height) on element img: The empty string is not a valid non-negative integer.*": {
        "issueID": "attributeValueBad",
        "quality": 1,
        "what": "Attribute has an empty value"
      },
      "Potentially bad value .+ for attribute .+ on element .+Typo for .+?.*": {
        "issueID": "attributeValueRisk",
        "quality": 1,
        "what": "Attribute value may be a typographical error"
      },
      "Element image is missing required attribute (?:height|width).*": {
        "issueID": "attributeMissing",
        "quality": 1,
        "what": "image element has no height attribute or has no width attribute"
      },
      "Element .+ is missing one or more of the following attributes: .+": {
        "issueID": "attributeMissing",
        "quality": 1,
        "what": "Element is missing a required attribute"
      },
      "Element .+ is missing required attribute .+": {
        "issueID": "attributeMissing",
        "quality": 1,
        "what": "Element is missing a required attribute"
      },
      "Element .+ is missing required attribute role.*": {
        "issueID": "roleMissing",
        "quality": 1,
        "what": "Element has no role attribute"
      },
      "Element .+ is missing one or more of the following attributes: role.*": {
        "issueID": "roleMissingRisk",
        "quality": 1,
        "what": "Element has no role attribute but needs one?"
      },
      "Element .+ is missing required attribute aria-.+": {
        "issueID": "ariaMissing",
        "quality": 1,
        "what": "Element is missing a required ARIA attribute"
      },
      "Bad value  for attribute .+ on element .+: Must be non-empty.*": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "Attribute value is empty"
      },
      "Bad value  for attribute aria-hidden on element .+": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "aria-hidden attribute has an empty value"
      },
      "Attribute aria-.+ is unnecessary for elements that have attribute .+": {
        "issueID": "ariaRedundant",
        "quality": 1,
        "what": "ARIA attribute is redundant with the synonymous native attribute"
      },
      "Bad value  for attribute .+ on element .+: An ID must not be the empty string.*": {
        "issueID": "idEmpty",
        "quality": 1,
        "what": "id attribute has an empty value"
      },
      "Bad value  for attribute aria-owns on element .+: An IDREFS value must contain at least one non-whitespace character.*": {
        "issueID": "idEmpty",
        "quality": 1,
        "what": "aria-owns attribute has an empty value"
      },
      "The heading h. \\(with computed level .\\) follows the heading h. \\(with computed level .\\), skipping . heading level.+": {
        "issueID": "headingLevelSkip",
        "quality": 1,
        "what": "Heading level is more than 1 level inferior to the previous heading"
      },
      "A table row was .+ columns wide, which is less than the column count established by the first row.*": {
        "issueID": "tableColumnsVary",
        "quality": 1,
        "what": "Table row has a column count smaller than that of the first row"
      },
      "A table row was .+ columns wide and exceeded the column count established by the first row.*": {
        "issueID": "tableColumnsVary",
        "quality": 1,
        "what": "Table row has a column count larger than that of the first row"
      },
      "Table column [0-9]+ established by element td has no cells beginning in it.*": {
        "issueID": "tableColumnsVary",
        "quality": 1,
        "what": "Element is td but the prior cells in its table column do not exist"
      },
      "Potentially bad value .+ for attribute sandbox on element iframe: Setting both allow-scripts and allow-same-origin is not recommended, because it effectively enables an embedded page to break out of all sandboxing.*": {
        "issueID": "frameSandboxRisk",
        "quality": 1,
        "what": "iframe element has a vulnerable sandbox value containing both allow-scripts and allow-same-origin"
      },
      "Element .+ not allowed as child of element .+ in this context.*": {
        "issueID": "parentBad",
        "quality": 1,
        "what": "Element has an invalid parent"
      },
      "Bad value  for attribute tabindex on element .+: The empty string is not a valid integer.*": {
        "issueID": "tabIndexEmpty",
        "quality": 1,
        "what": "tabindex attribute has an empty value instead of an integer"
      },
      "The .+ attribute on the .+ element is obsolete.*": {
        "issueID": "attributeObsolete",
        "quality": 1,
        "what": "Attribute is obsolete on its element"
      },
      "Potentially bad value .+ for attribute .+ on element .+: The language subtag .+ is deprecated.*": {
        "issueID": "attributeObsolete",
        "quality": 1,
        "what": "Attribute value is a deprecated language subtag"
      },
      "The .+ element is a completely-unknown element that is not allowed anywhere in any HTML content.+": {
        "issueID": "nonElement",
        "quality": 1,
        "what": "Element is unknown"
      },
      "CSS: Deprecated media feature .+": {
        "issueID": "obsolete",
        "quality": 1,
        "what": "Media feature is deprecated"
      },
      "CSS: Unrecognized at-rule @.+": {
        "issueID": "atRuleInvalid",
        "quality": 1,
        "what": "At-rule not recognized by CSS"
      },
      "CSS: .+: Character .+ is neither a decimal digit number.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Nonnumeric character in a numeric style property"
      },
      "CSS: column-count: .+ is not valid, only values greater than 0 allowed.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "CSS column-count property has a nonpositive value"
      },
      "CSS: font-weight: .+ is not valid, only values greater than or equal to 1.0 are allowed.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "CSS font-weight property has a value smaller than 1"
      },
      "CSS: font-weight: .+ is not valid, only values lower than or equal to 1000.0 are allowed.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "CSS font-weight property has a value greater than 1000"
      },
      "CSS: .+: Parse Error.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Invalid CSS"
      },
      "CSS: .+: .+ is not a valid color 3 or 6 hexadecimals numbers.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Invalid hexadecimal color in CSS"
      },
      "CSS: .+: .+ is not a .+ value.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Invalid value in CSS"
      },
      "CSS: .+: Property .+ doesn't exist.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Invalid property in CSS"
      },
      "CSS: .+: only 0 can be a length. You must put a unit after your number.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Length in CSS is nonzero but has no unit"
      },
      "CSS: .*only 0 can be a unit. You must put a unit after your number.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Number in CSS is nonzero but has no unit"
      },
      "CSS: .+: Too many values or values are not recognized.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Invalid CSS value or too many values"
      },
      "CSS: .+: Invalid type: .+": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Invalid type of CSS value"
      },
      "CSS: .+: The types are incompatible.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Incompatible types of CSS values"
      },
      "CSS: .+: Unknown dimension.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Unknown CSS dimension"
      },
      "CSS: .+: Character array is missing \"e\" notation exponential mark.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Character array has no exponent mark e"
      },
      "CSS: .+:   is an incorrect operator.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Space is misused as a CSS operator"
      },
      "CSS: .+: , is an incorrect operator.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Comma is misused as a CSS operator"
      },
      "CSS: Unknown pseudo-element or pseudo-class :.+": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Unknown pseudo-element or pseudo-class"
      },
      "CSS: unrecognized media .+": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Unrecognized media value"
      },
      "CSS: .+ is not a :lang.+ value.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "CSS pseudo-class :lang() has an invalid value"
      },
      "CSS: .+: Missing a semicolon before the .+": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "semicolon missing in CSS"
      },
      "CSS: perspective: .+ is not valid, only values greater than 0 allowed.*": {
        "issueID": "cssInvalid",
        "quality": 0.5,
        "what": "CSS perspective property has a nonpositive value"
      },
      "CSS: .*Lexical error at line .+, column .+ Encountered: .+": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "CSS property has a value with a lexical error"
      },
      "CSS: transition: .+ is not valid, only values lower than or equal to 1.0 are allowed.*": {
        "issueID": "cssInvalid",
        "quality": 0.5,
        "what": "CSS transition property has a value greater than 1"
      },
      "CSS: In CSS1, a class name could start with a digit .+, unless it was a dimension .+ In CSS2, such classes are parsed as unknown dimensions .+ To make .+ a valid class, CSS2 requires the first digit to be escaped: .+": {
        "issueID": "cssInvalid",
        "quality": 0.5,
        "what": "CSS class name starts with an unescaped digit"
      },
      "Stray start tag .+": {
        "issueID": "elementClosure",
        "quality": 1,
        "what": "Invalid start tag"
      },
      "Stray end tag .+": {
        "issueID": "elementClosure",
        "quality": 1,
        "what": "Invalid closing tag"
      },
      "End tag [a-z]+.": {
        "issueID": "elementClosure",
        "quality": 1,
        "what": "Closing tag of an ineligible element"
      },
      "Start tag .+ seen but an element of the same type was already open.*": {
        "issueID": "elementClosure",
        "quality": 1,
        "what": "Element is invalidly a descendant of another such element"
      },
      "End tag for .+ seen, but there were unclosed elements.*": {
        "issueID": "elementClosure",
        "quality": 1,
        "what": "Element is closed while an element within it is unclosed"
      },
      "End tag .+ seen, but there were open elements.*": {
        "issueID": "elementClosure",
        "quality": 1,
        "what": "Element is closed while an element within it is unclosed"
      },
      "End tag .+ implied, but there were open elements.*": {
        "issueID": "elementClosure",
        "quality": 1,
        "what": "Element is implicitly closed while an element within it is unclosed"
      },
      "Unclosed element .+": {
        "issueID": "elementClosure",
        "quality": 1,
        "what": "Element is unclosed"
      },
      "No .+ element in scope but a .+ end tag seen.*": {
        "issueID": "elementClosure",
        "quality": 1,
        "what": "End tag for an element that is not in scope"
      },
      "End tag .+ violates nesting rules.*": {
        "issueID": "nestingBad",
        "quality": 1,
        "what": "End tag violates nesting rules"
      },
      "Bad value [^`]+ Tab, new line or carriage return found.*": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "Attribute value contains an illegal spacing character"
      },
      "Bad character . after <. Probable cause: Unescaped <. Try escaping it as &lt;.*": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "Left angle bracket is followed by an invalid character"
      },
      "Saw .+ when expecting an attribute name. Probable cause: (?:.+ missing|Missing .+) immediately before.*": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "Invalid character appears where an attribute name must appear"
      },
      "Bad element name .*: Code point .* is not allowed*": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "Element name contains an invalid character"
      },
      "Bad value .* for attribute href on element .+: Illegal character in path segment: .+ is not allowed.*": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "href attribute path value contains an invalid character in a segment"
      },
      "Bad value .* for attribute src on element .+: Illegal character in path segment: .+ is not allowed.*": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "src attribute path value contains an invalid character in a segment"
      },
      "Bad value .* for attribute href on element .+: Illegal character in query: .+ is not allowed.*": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "href attribute query value contains an invalid character"
      },
      "Bad value .* for attribute src on element .+: Illegal character in query: .+ is not allowed.*": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "src attribute query value contains an invalid character"
      },
      "Bad value .+ for attribute src on element .+: Tab, new line or carriage return found.*": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "src attribute value contains a tab, newline, or return character"
      },
      ".+ in an unquoted attribute value. Probable causes: Attributes running together or a URL query string in an unquoted attribute value.*": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "Attribute has a value containing invalid punctuation"
      },
      "The text content of element .+ was not in the required format: Expected .+ but found .+ instead.*": {
        "issueID": "textContentBad",
        "quality": 1,
        "what": "Element has text content with invalid format"
      },
      "End tag .+ did not match the name of the current open element .*": {
        "issueID": "parseError",
        "quality": 1,
        "what": "End tag conflicts with the current open element."
      },
      "Self-closing syntax .+ used on a non-void HTML element.*": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Self-closing syntax used on a non-void element"
      },
      "The aria-hidden attribute must not be specified on the .+ element.*": {
        "issueID": "parseError",
        "quality": 1,
        "what": "aria-hidden attribute is invalid for its element"
      },
      "Bad start tag in .+": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Invalid start tag"
      },
      "Element name .+ cannot be represented as XML 1[.]0.*": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Invalid element name"
      },
      "Quote . in attribute name[.] Probable cause: Matching quote missing somewhere earlier.*": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Attribute name includes an apostrophe or double quotation mark"
      },
      "Text not allowed in element .+ in this context.*": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Element contains text, which is not allowed here"
      },
      "The .+ element must not appear as a descendant of the .+ element.*": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Element has an invalid ancestor"
      },
      "The element .+ must not appear as a descendant of the .+ element.*": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Element has an invalid ancestor"
      },
      "java.util.concurrent.TimeoutException: Idle timeout expired: .+ ms.*": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Idle timeout expired"
      },
      "HTML start tag .+ in a foreign namespace context.*": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Element is invalid because its namespace is not HTML"
      },
      "Internal encoding declaration .+ disagrees with the actual encoding of the document.*": {
        "issueID": "encodingMisdeclared",
        "quality": 1,
        "what": "Encoding declaration disagrees with the actual encoding of the page"
      },
      "Internal encoding declaration named an unsupported chararacter encoding .*": {
        "issueID": "encodingBad",
        "quality": 1,
        "what": "Encoding declaration names an unsupported character encoding"
      },
      "Text run is not in Unicode Normalization Form C.+": {
        "issueID": "encodingBad",
        "quality": 1,
        "what": "Text run is not in Unicode Normalization Form C"
      },
      "The value of attribute .+ on element .+ from namespace .+ is not in Unicode Normalization Form C.*": {
        "issueID": "encodingBad",
        "quality": 1,
        "what": "Value of attribute is not in Unicode Normalization Form C"
      },
      "Forbidden code point U+.*": {
        "issueID": "encodingBad",
        "quality": 1,
        "what": "Invalid Unicode code point"
      }
    }
  },
  "nuVnu": {
    "invariant": {
      "Element head is missing a required instance of child element title.": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "head element has no child title element [invalid]"
      },
      "Element img is missing required attribute src.": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "img element has no src attribute [invalid]"
      },
      "Element mediaelementwrapper not allowed as child of element div in this context. (Suppressing further errors from this subtree.)": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Element contains a prohibited mediaelementwrapper element [invalid]"
      },
      "Trailing slash on void elements has no effect and interacts badly with unquoted attribute values.": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Void element has a useless trailing slash. [invalid]"
      },
      "The aria-placeholder attribute must not be specified on elements that have a placeholder attribute.": {
        "issueID": "placeholderPlusAria",
        "quality": 1,
        "what": "Element has both placeholder and aria-placeholder attributes"
      },
      "An img element must have an alt attribute, except under certain conditions. For details, consult guidance on providing text alternatives for images.": {
        "issueID": "imageNoText",
        "quality": 1,
        "what": "img element has no alt attribute"
      },
      "An img element with a role attribute must also have an accessible name (e.g., an alt attribute).": {
        "issueID": "imageNoText",
        "quality": 1,
        "what": "img element with a role attribute has no alt attribute"
      },
      "An img element which has an alt attribute whose value is the empty string must not have a role attribute.": {
        "issueID": "decorativeElementExposed",
        "quality": 1,
        "what": "img element with alt=\"\" has a role attribute"
      },
      "An img element with a role attribute must not have an alt attribute whose value is the empty string.": {
        "issueID": "decorativeElementExposed",
        "quality": 1,
        "what": "img element with a role attribute has alt=\"\""
      },
      "Consider adding a lang attribute to the html start tag to declare the language of this document.": {
        "issueID": "pageLanguage",
        "quality": 1,
        "what": "html start tag has no lang attribute to declare the language of the page"
      },
      "When the attribute xml:lang in no namespace is specified, the element must also have the attribute lang present with the same value.": {
        "issueID": "elementLanguageBad",
        "quality": 1,
        "what": "Element has no lang attrbute matching its xml:lang attribute"
      },
      "The value of the for attribute of the label element must be the ID of a non-hidden form control.": {
        "issueID": "labelForBad",
        "quality": 1,
        "what": "for attribute of the label element does not reference a non-hidden form control"
      },
      "Possible misuse of aria-label. (If you disagree with this warning, file an issue report or send e-mail to www-validator@w3.org.)": {
        "issueID": "ariaLabelWrongRisk",
        "quality": 1,
        "what": "aria-label attribute is misused?"
      },
      "Attribute aria-activedescendant value should either refer to a descendant element, or should be accompanied by attribute aria-owns.": {
        "issueID": "activeDescendantBadID",
        "quality": 1,
        "what": "Element has no aria-owns attribute but its aria-activedescendant attribute references a non-descendant"
      },
      "The aria-controls attribute must point to an element in the same document.": {
        "issueID": "governedBadID",
        "quality": 1,
        "what": "aria-controls attribute references an element not in the document"
      },
      "The aria-owns attribute must point to an element in the same document.": {
        "issueID": "governedBadID",
        "quality": 1,
        "what": "aria-owns attribute references an element not in the document"
      },
      "The aria-describedby attribute must point to an element in the same document.": {
        "issueID": "descriptionBadID",
        "quality": 1,
        "what": "aria-describedby attribute references an element not in the document"
      },
      "Any input descendant of a label element with a for attribute must have an ID value that matches that for attribute.": {
        "issueID": "labelBadID",
        "quality": 1,
        "what": "input id differs from the value of the for attribute of the enclosing label element"
      },
      "The aria-labelledby attribute must point to an element in the same document.": {
        "issueID": "labelBadID",
        "quality": 1,
        "what": "aria-labelledby attribute references an element not in the document"
      },
      "Bad value  for attribute href on element link: Must be non-empty.": {
        "issueID": "linkElNoHref",
        "quality": 1,
        "what": "link element has an empty href attribute"
      },
      "Attribute href without an explicit value seen. The attribute may be dropped by IE7.": {
        "issueID": "linkElNoHref",
        "quality": 1,
        "what": "Element has an empty href attribute"
      },
      "A link element must have an href or imagesrcset attribute, or both.": {
        "issueID": "linkElNoSource",
        "quality": 1,
        "what": "link element has neither an href nor an imagesrcset attribute"
      },
      "Element a is missing required attribute href.": {
        "issueID": "destinationLink",
        "quality": 1,
        "what": "a element has no href attribute"
      },
      "The document role is not allowed for element select without a multiple attribute and without a size attribute whose value is greater than 1.": {
        "issueID": "selectBad",
        "quality": 1,
        "what": "select element is not multiple or has no size greater than 1 but has a document role"
      },
      "The first child option element of a select element with a required attribute, and without a multiple attribute, and without a size attribute whose value is greater than 1, must have either an empty value attribute, or must have no text content. Consider either adding a placeholder option label, or adding a size attribute with a value equal to the number of option elements.": {
        "issueID": "selectBad",
        "quality": 1,
        "what": "option element has a nonempty value"
      },
      "The select element cannot have more than one selected option descendant unless the multiple attribute is specified.": {
        "issueID": "selectBad",
        "quality": 1,
        "what": "Element is select and has no multiple attribute, but has more than 1 selected option"
      },
      "A select element with a required attribute, and without a multiple attribute, and without a size attribute whose value is greater than 1, must have a child option element.": {
        "issueID": "selectBad",
        "quality": 1,
        "what": "Element is select and has no child option element, but its attributes require one"
      },
      "Attribute alt not allowed on element button at this point.": {
        "issueID": "buttonAlt",
        "quality": 1,
        "what": "button element has an alt attribute"
      },
      "Element input with attribute type whose value is button must have non-empty attribute value.": {
        "issueID": "buttonNoText",
        "quality": 1,
        "what": "input element with type=button has no nonempty value attribute"
      },
      "Consider avoiding viewport values that prevent users from resizing documents.": {
        "issueID": "metaBansZoom",
        "quality": 1,
        "what": "viewport value prevents users from resizing the document"
      },
      "The base element must come before any link or script elements in the document.": {
        "issueID": "baseElementMissing",
        "quality": 1,
        "what": "Element is a link or script element requiring a preceding base element but has none"
      },
      "A link element must not appear as a descendant of a body element unless the link element has an itemprop attribute or has a rel attribute whose value contains dns-prefetch, modulepreload, pingback, preconnect, prefetch, preload, prerender, or stylesheet.": {
        "issueID": "linkElementMisplaced",
        "quality": 1,
        "what": "Element has a body ancestor but no itemprop or valid rel attribute"
      },
      "A link element with an as attribute must have a rel attribute that contains the value preload or the value modulepreload or the value prefetch.": {
        "issueID": "linkElementBad",
        "quality": 1,
        "what": "Element has an as attribute but no rel attribute with preload, modulepreload, or prefetch as its value"
      },
      "A link element with an as attribute must have a rel attribute that contains the value preload or the value modulepreload.": {
        "issueID": "linkElementBad",
        "quality": 1,
        "what": "Element has an as attribute but no rel attribute with preload or modulepreload as its value"
      },
      "A link element with a color attribute must have a rel attribute that contains the value mask-icon.": {
        "issueID": "linkElementBad",
        "quality": 1,
        "what": "Element has a color attribute but no rel attribute with mask-icon as its value"
      },
      "A document must not include more than one meta element with its name attribute set to the value description.": {
        "issueID": "metaBad",
        "quality": 1,
        "what": "Element with name=\"description\" is not the only meta element with that name"
      },
      "A document must not include both a meta element with an http-equiv attribute whose value is content-type, and a meta element with a charset attribute.": {
        "issueID": "metaBad",
        "quality": 1,
        "what": "Element with http-equiv=\"content-type\" is incompatible with the meta element with a charset attribute"
      },
      "A document must not include more than one meta element with a http-equiv attribute whose value is content-type.": {
        "issueID": "metaBad",
        "quality": 1,
        "what": "Page has more than 1 meta element with http-equiv=\"content-type\""
      },
      "A meta element with an http-equiv attribute whose value is X-UA-Compatible must have a content attribute with the value IE=edge.": {
        "issueID": "metaBad",
        "quality": 1,
        "what": "Element with http-equiv=\"X-UA-Compatible\" has no content=\"IE=edge\""
      },
      "A document must not include more than one meta element with a charset attribute.": {
        "issueID": "metaBad",
        "quality": 1,
        "what": "More than 1 meta element has a charset attribute"
      },
      "A charset attribute on a meta element found after the first 1024 bytes.": {
        "issueID": "metaBad",
        "quality": 1,
        "what": "charset attribute on a meta element appears after 1024 bytes"
      },
      "meta element between head and body.": {
        "issueID": "metaMisplaced",
        "quality": 1,
        "what": "meta element is between the head and body elements"
      },
      "Element script must not have attribute defer unless attribute src is also specified.": {
        "issueID": "scriptNotDeferrable",
        "quality": 1,
        "what": "Element is script and has a defer attribute but no src attribute"
      },
      "An inline script element (i.e., a script element without a src attribute and with a type attribute that is either unspecified, empty, or a JavaScript MIME type) must not have a defer attribute.": {
        "issueID": "scriptNotDeferrable",
        "quality": 1,
        "what": "Element is not eligible for a defer attribute but has one"
      },
      "A script element with a type attribute whose value is neither a JavaScript MIME type, module, importmap, nor speculationrules (i.e., a data block) must not have a defer attribute.": {
        "issueID": "scriptNotDeferrable",
        "quality": 1,
        "what": "Element is not eligible for a defer attribute but has one"
      },
      "A script element with type=module must not have a defer attribute.": {
        "issueID": "scriptNotDeferrable",
        "quality": 1,
        "what": "Element has a module type but has a defer attribute"
      },
      "Element script should not have attribute fetchpriority unless attribute src is also specified.": {
        "issueID": "scriptElementBad",
        "quality": 1,
        "what": "Element is script and has a fetchpriority attribute but no src attribute"
      },
      "A script element with a src attribute must not have a type attribute whose value is anything other than the empty string, a JavaScript MIME type, or module.": {
        "issueID": "scriptElementBad",
        "quality": 1,
        "what": "Element is script and has a src attribute but its type is not empty, a JS MIME type, or module"
      },
      "A script element with a type attribute whose value is neither a JavaScript MIME type, module, importmap, nor speculationrules (i.e., a data block) must not have an async attribute.": {
        "issueID": "scriptElementBad",
        "quality": 1,
        "what": "Element is not eligible for an async attribute but has one"
      },
      "A script element with a type attribute whose value is neither a JavaScript MIME type, module, importmap, nor speculationrules (i.e., a data block) must not have a src attribute.": {
        "issueID": "scriptElementBad",
        "quality": 1,
        "what": "Element is not eligible for a src attribute but has one"
      },
      "The href_matches property in a document rule must be a string.": {
        "issueID": "specRulesScriptBad",
        "quality": 1,
        "what": "Element is script with type=speculationrules but its href_matches value is not a string"
      },
      "Each rule in the prefetch array must only contain the properties source, urls, where, and eagerness.": {
        "issueID": "specRulesScriptBad",
        "quality": 1,
        "what": "Element is script with type=speculationrules but its prefetch array has invalid property names"
      },
      "A script element with a type attribute whose value is speculationrules must contain a JSON object with at least one of the properties prefetch or prerender.": {
        "issueID": "specRulesScriptBad",
        "quality": 1,
        "what": "Element is script with type=speculationrules but has no JSON object with a prefetch or prerender property"
      },
      "The itemid attribute must not be specified on elements that do not have both an itemscope attribute and an itemtype attribute specified.": {
        "issueID": "itemIDBad",
        "quality": 1,
        "what": "Element has an itemid attribute without both an itemscope and an itemtype attribute"
      },
      "The itemtype attribute must not be specified on elements that do not have an itemscope attribute specified.": {
        "issueID": "itemTypeBad",
        "quality": 1,
        "what": "Element has an itemtype attribute without an itemscope attribute"
      },
      "Bad value dialog for attribute role on element li.": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "dialog role is not valid for an li element"
      },
      "An img element with no alt attribute must not have a role attribute.": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "img element has a role attribute but no alt attribute"
      },
      "A figure element with a figcaption descendant must not have a role attribute.": {
        "issueID": "roleHierarchyBad",
        "quality": 1,
        "what": "figure element has a figcaption descendant but has a role attribute"
      },
      "An li element that is a descendant of a ul, ol, or menu element with no explicit role value, or a descendant of a role=list element, must not have any role value other than listitem.": {
        "issueID": "roleHierarchyBad",
        "quality": 1,
        "what": "element is li in a list but has no listitem role"
      },
      "An li element that is a descendant of a role=listbox element or role=list element must not have any role value other than group or option.": {
        "issueID": "roleHierarchyBad",
        "quality": 1,
        "what": "element is li in a listbox or list but has no group or option role"
      },
      "An element with role=group must not be a descendant of an element with role=list.": {
        "issueID": "roleHierarchyBad",
        "quality": 1,
        "what": "element has a group role but has an ancestor with a list role"
      },
      "The searchbox role is unnecessary for an input element that has no list attribute and whose type is search.": {
        "issueID": "roleRedundant",
        "quality": 1,
        "what": "explicit role is redundant for a search-type input element without a list attribute"
      },
      "The textbox role is unnecessary for an input element that has no list attribute and whose type is text.": {
        "issueID": "roleRedundant",
        "quality": 1,
        "what": "explicit role is redundant for a text-type input element without a list attribute"
      },
      "The itemprop attribute was specified, but the element is not a property of any item.": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "itemprop attribute is on an element that is not a property of an item"
      },
      "An aria-disabled attribute whose value is true should not be specified on an a element that has an href attribute.": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "a element has aria-disabled=true but has an href attribute"
      },
      "A document must not include more than one autofocus attribute.": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "Page includes more than one autofocus attribute"
      },
      "An input element with a type attribute whose value is hidden must not have any aria-* attributes.": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "hidden-type input element has an ARIA attribute"
      },
      "The name attribute is never allowed on the a element.": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "element is a but has a name attribute"
      },
      "A link element with a sizes attribute must have a rel attribute that contains the value icon or the value apple-touch-icon or the value apple-touch-icon-precomposed.": {
        "issueID": "sizesAttributeBad",
        "quality": 1,
        "what": "link element has a sizes attribute but no icon-type rel attribute"
      },
      "The sizes attribute may be specified only if the srcset attribute is also present.": {
        "issueID": "sizesAttributeBad",
        "quality": 1,
        "what": "Element has a sizes attribute but no srcset attribute"
      },
      "The sizes attribute must only be specified if the srcset attribute is also specified.": {
        "issueID": "sizesAttributeBad",
        "quality": 1,
        "what": "Element has a sizes attribute but no srcset attribute"
      },
      "When the srcset attribute has any image candidate string with a width descriptor, the sizes attribute must also be present.": {
        "issueID": "sizesAttributeBad",
        "quality": 1,
        "what": "Element with a srcset attribute with a width has no sizes attribute"
      },
      "When the srcset attribute has any image candidate string with a width descriptor, the sizes attribute must also be specified.": {
        "issueID": "sizesAttributeBad",
        "quality": 1,
        "what": "Element with a srcset attribute with a width has no valid sizes attribute"
      },
      "The sizes attribute value starting with auto is only valid for lazy-loaded images. Add loading=lazy to this element.": {
        "issueID": "sizesAttributeBad",
        "quality": 1,
        "what": "Element with a sizes=auto… attribute has no loading=lazy attribute"
      },
      "A script element with a defer attribute must not have a type attribute with the value module.": {
        "issueID": "attributeValueBad",
        "quality": 1,
        "what": "script element with a defer attribute has type=\"module\""
      },
      "A link element with a rel attribute that contains the value preload must have an as attribute.": {
        "issueID": "attributeMissing",
        "quality": 1,
        "what": "link element with rel=\"preload\" is missing an as attribute"
      },
      "A source element that has a following sibling source element or img element with a srcset attribute must have a media attribute and/or type attribute.": {
        "issueID": "attributeMissing",
        "quality": 1,
        "what": "source or img element is missing a media or type attribute"
      },
      "The aria-hidden attribute must not be specified on the noscript element.": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "noscript element has an aria-hidden attribute"
      },
      "The aria-checked attribute should not be used on an input element which has a type attribute whose value is radio.": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "input element with type=\"radio\" has an aria-checked attribute"
      },
      "The aria-checked attribute must not be used on an input element which has a type attribute whose value is radio.": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "input element with type=\"radio\" has an aria-checked attribute"
      },
      "The form attribute must refer to a form element.": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "form attribute does not reference a form element"
      },
      "The aria-checked attribute should not be used on an input element which has a type attribute whose value is checkbox.": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "input element with type checkbox has an aria-checked attribute"
      },
      "The aria-checked attribute must not be used on an input element which has a type attribute whose value is checkbox.": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "input element with type checkbox has an aria-checked attribute"
      },
      "An img element with no alt attribute must not have any aria-* attributes other than aria-hidden.": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "img element has no alt attribute but has an ARIA attribute other than aria-hidden"
      },
      "An input element with a type attribute whose value is checkbox and with a role attribute whose value is button must have an aria-pressed attribute whose value is true.": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "input element with a button role and type=\"checkbox\" has no aria-pressed=\"true\""
      },
      "The aria-valuemax attribute must not be used on an element which has a max attribute.": {
        "issueID": "ariaRedundant",
        "quality": 1,
        "what": "Element has the max attribute but also the aria-valuemax attribute"
      },
      "The aria-valuemin attribute must not be used on an element which has a min attribute.": {
        "issueID": "ariaRedundant",
        "quality": 1,
        "what": "Element has the min attribute but also the aria-valuemin attribute"
      },
      "Bad value  for attribute autocomplete on element input: Must not be empty.": {
        "issueID": "autocompleteBad",
        "quality": 1,
        "what": "autocomplete attribute has an empty value"
      },
      "An input element with a type attribute whose value is hidden must not have an autocomplete attribute whose value is on or off.": {
        "issueID": "autocompleteBad",
        "quality": 1,
        "what": "autocomplete attribute belongs to a hidden element but has an on or off value"
      },
      "Bad value  for attribute target on element a: Browsing context name must be at least one character long.": {
        "issueID": "targetEmpty",
        "quality": 1,
        "what": "target attribute on an a element is empty"
      },
      "Heading cannot be a child of another heading.": {
        "issueID": "headingsEmbedded",
        "quality": 1,
        "what": "Heading is within a heading"
      },
      "Empty heading.": {
        "issueID": "headingEmpty",
        "quality": 1,
        "what": "Empty heading"
      },
      "The only allowed value for the type attribute for the style element is text/css (with no parameters). (But the attribute is not needed and should be omitted altogether.)": {
        "issueID": "typeBad",
        "quality": 1,
        "what": "type attribute is invalid"
      },
      "The type attribute is unnecessary for JavaScript resources.": {
        "issueID": "typeRedundant",
        "quality": 1,
        "what": "type attribute is unnecessary for a JavaScript resource"
      },
      "The type attribute for the style element is not needed and should be omitted.": {
        "issueID": "typeRedundant",
        "quality": 1,
        "what": "type attribute is unnecessary for a style element"
      },
      "Element title must not be empty.": {
        "issueID": "titleEmpty",
        "quality": 1,
        "what": "Element has an empty title attribute"
      },
      "Start tag seen without seeing a doctype first. Expected <!DOCTYPE html>.": {
        "issueID": "docTypeMissing",
        "quality": 1,
        "what": "Page does not start with <!DOCTYPE html>"
      },
      "End of file seen without seeing a doctype first. Expected <!DOCTYPE html>.": {
        "issueID": "docTypeMissing",
        "quality": 1,
        "what": "Page does not include <!DOCTYPE html>"
      },
      "Stray doctype.": {
        "issueID": "docTypeMisplaced",
        "quality": 1,
        "what": "DOCTYPE is in an invalid location"
      },
      "Almost standards mode doctype. Expected <!DOCTYPE html>.": {
        "issueID": "docTypeBad",
        "quality": 1,
        "what": "document type declaration differs from <!DOCTYPE html>"
      },
      "This document has heading elements but none of them has a computed heading level of 1.": {
        "issueID": "h1Not1",
        "quality": 1,
        "what": "Page contains no h1 element"
      },
      "Consider using the h1 element as a top-level heading only (all h1 elements are treated as top-level headings by many screen readers and other tools).": {
        "issueID": "h1Not1",
        "quality": 1,
        "what": "Page contains more than 1 h1 element"
      },
      "Consider using the h1 element as a top-level heading only — or else use the headingoffset attribute (otherwise, all h1 elements are treated as top-level headings by many screen readers and other tools).": {
        "issueID": "h1Not1",
        "quality": 1,
        "what": "Page contains more than 1 h1 element"
      },
      "Article lacks heading. Consider using h2-h6 elements to add identifying headings to all articles.": {
        "issueID": "articleHeadingless",
        "quality": 1,
        "what": "article has no heading"
      },
      "Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.": {
        "issueID": "sectionHeadingless",
        "quality": 1,
        "what": "section has no heading"
      },
      "Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections, or else use a div element instead for any cases where no heading is needed.": {
        "issueID": "sectionHeadingless",
        "quality": 1,
        "what": "section has no heading"
      },
      "Element dl is missing a required child element.": {
        "issueID": "listChild",
        "quality": 1,
        "what": "dl element has no child element"
      },
      "Element option without attribute label must not be empty.": {
        "issueID": "optionNoText",
        "quality": 1,
        "what": "Element is option with no label attribute but is empty"
      },
      "Start tag div seen in table.": {
        "issueID": "divInTable",
        "quality": 1,
        "what": "div element is inside a table element"
      },
      "Start tag form seen in table.": {
        "issueID": "formInTable",
        "quality": 1,
        "what": "form element is inside a table element"
      },
      "Start tag input seen in table.": {
        "issueID": "inputInTable",
        "quality": 1,
        "what": "input element is inside a table element"
      },
      "The element a must not appear as a descendant of an element with the attribute role=link.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "a element is a descendant of an element with a link role"
      },
      "The element a must not appear as a descendant of an element with the attribute role=button.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "a element is a descendant of an element with a button role"
      },
      "The element a with the attribute href must not appear as a descendant of an element with the attribute role=button.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "a element with a destination is a descendant of an element with a button role"
      },
      "The element button must not appear as a descendant of the a element.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "button element is a descendant of an a element"
      },
      "An element with the attribute role=button must not appear as a descendant of the a element.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "Element with a button role is a descendant of an a element"
      },
      "The element button must not appear as a descendant of an element with the attribute role=button.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "button element is a descendant of an element with a button role"
      },
      "An element with the attribute role=button must not appear as a descendant of an element with the attribute role=button.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "Element with a button role is a descendant of an element with a button role"
      },
      "An element with the attribute role=button must not appear as a descendant of the button element.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "Element with a button role is a descendant of a button element"
      },
      "The element label must not appear as a descendant of an element with the attribute role=button.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "label element is a descendant of an element with a button role"
      },
      "The element select must not appear as a descendant of an element with the attribute role=button.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "select element is a descendant of an element with a button role"
      },
      "The element input must not appear as a descendant of an element with the attribute role=progressbar.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "input element is a descendant of an element with a progressbar role"
      },
      "An element with the attribute tabindex must not appear as a descendant of the a element.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "descendant of an a element has a tabindex attribute"
      },
      "An element with the attribute tabindex must not appear as a descendant of an element with the attribute role=link.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "descendant of an element with a link role has a tabindex attribute"
      },
      "An element with the attribute tabindex must not appear as a descendant of the button element.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "descendant of a button element has a tabindex attribute"
      },
      "An element with the attribute tabindex must not appear as a descendant of an element with the attribute role=button.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "descendant of an element with a button role has a tabindex attribute"
      },
      "An element with the attribute role=menu must not appear as a descendant of the a element.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "Element with a menu role is a descendant of an a element"
      },
      "An element with the attribute role=menuitem must not appear as a descendant of the a element.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "Element with a menuitem role is a descendant of an a element"
      },
      "An element with the attribute role=option must not appear as a descendant of the a element.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "Element with an option role is a descendant of an a element"
      },
      "An element with the attribute role=menu must not appear as a descendant of an element with the attribute role=button.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "Element with a menu role is a descendant of an element with a button role"
      },
      "The element a should not appear as a descendant of an element with the attribute role=menuitem.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "a element is a descendant of an element with a menuitem role"
      },
      "The element a with the attribute href should not appear as a descendant of an element with the attribute role=menuitem.": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "a element with an href attribute is a descendant of an element with a menuitem role"
      },
      "A document must not include more than one visible main element.": {
        "issueID": "mainNot1",
        "quality": 1,
        "what": "Page includes more than 1 visible main element"
      },
      "A document should not include more than one visible element with role=main.": {
        "issueID": "mainNot1",
        "quality": 1,
        "what": "Page includes more than 1 visible element with a main role"
      },
      "Saw a form start tag, but there was already an active form element. Nested forms are not allowed. Ignoring the tag.": {
        "issueID": "formsNested",
        "quality": 1,
        "what": "form element nested within another form element"
      },
      "The label element may contain at most one button, input, meter, output, progress, select, or textarea descendant.": {
        "issueID": "multipleLabelees",
        "quality": 1,
        "what": "Element has more than 1 labelable descendant."
      },
      "label element with multiple labelable descendants.": {
        "issueID": "multipleLabelees",
        "quality": 1,
        "what": "Element has multiple labelable descendants."
      },
      "The aria-label attribute must not be used on any label element that is associated with a labelable element.": {
        "issueID": "labelClash",
        "quality": 1,
        "what": "Element is a label but has a label"
      },
      "The aria-labelledby attribute must not be used on any label element that is an ancestor of a labelable element.": {
        "issueID": "labelClash",
        "quality": 1,
        "what": "Element is a label with a labelable descendant but has is an aria-labelledby attribute"
      },
      "The blink element is obsolete. Use CSS instead.": {
        "issueID": "blink",
        "quality": 1,
        "what": "Element, blink, is obsolete"
      },
      "The presentation role does not affect elements that have global ARIA attributes.": {
        "issueID": "presentationGlobal",
        "quality": 1,
        "what": "Element has a presentation role but also a global ARIA attribute that nullifies the role"
      },
      "The presentation role does not affect elements that have a tabindex attribute.": {
        "issueID": "presentationTabIndexed",
        "quality": 1,
        "what": "Element has a presentation role but also a tabindex attribute that nullifies the role"
      },
      "The inputmode attribute is not supported in all browsers. Please be sure to test, and consider using a polyfill.": {
        "issueID": "browserSupportRisk",
        "quality": 1,
        "what": "inputmode attribute is unsupported by some browsers"
      },
      "The border attribute is obsolete. Consider specifying img { border: 0; } in CSS instead.": {
        "issueID": "attributeObsolete",
        "quality": 1,
        "what": "border element is obsolete"
      },
      "The only allowed value for the charset attribute for the script element is utf-8. (But the attribute is not needed and should be omitted altogether.)": {
        "issueID": "attributeObsolete",
        "quality": 1,
        "what": "charset attribute has a value other than utf-8 and is unnecessary"
      },
      "The only allowed value for the charset attribute for the meta element is utf-8.": {
        "issueID": "attributeObsolete",
        "quality": 1,
        "what": "charset attribute has a value other than utf-8 and is unnecessary"
      },
      "The name attribute is obsolete. Consider putting an id attribute on the nearest container instead.": {
        "issueID": "attributeObsolete",
        "quality": 1,
        "what": "name attribute is obsolete"
      },
      "The center element is obsolete. Use CSS instead.": {
        "issueID": "elementObsolete",
        "quality": 1,
        "what": "center element is obsolete"
      },
      "The font element is obsolete. Use CSS instead.": {
        "issueID": "elementObsolete",
        "quality": 1,
        "what": "font element is obsolete"
      },
      "Using the meta element to specify the document-wide default language is obsolete. Consider specifying the language on the root element instead.": {
        "issueID": "elementObsolete",
        "quality": 1,
        "what": "Language declaration in a meta element is obsolete"
      },
      "Legacy doctype. Expected <!DOCTYPE html>.": {
        "issueID": "obsolete",
        "quality": 1,
        "what": "doctype is obsolete"
      },
      "Obsolete doctype. Expected <!DOCTYPE html>.": {
        "issueID": "obsolete",
        "quality": 1,
        "what": "DOCTYPE is obsolete instead of html"
      },
      "CSS: This profile has a very specific syntax for @charset: @charset followed by exactly one space, followed by the name of the encoding in quotes, followed immediately by a semicolon.": {
        "issueID": "atRuleInvalid",
        "quality": 1,
        "what": "CSS @charset at-rule has an invalid format"
      },
      "CSS: The @charset rule may only occur at the start of the style sheet. Please check that there are no spaces before it.": {
        "issueID": "atRuleInvalid",
        "quality": 1,
        "what": "CSS @charset at-rule is not at the start of its style sheet"
      },
      "CSS: @import are not allowed after any valid statement other than @charset and @import.": {
        "issueID": "atRuleInvalid",
        "quality": 1,
        "what": "CSS @import at-rule is after an at-rule other than @charset or @import"
      },
      "CSS: z-index: This number should be an integer.": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "z-index style property has a non-integer value"
      },
      "CSS: Parse Error. Style sheets should not include HTML syntax.": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "CSS style sheet includes HTML syntax"
      },
      "CSS: font-size: One operand must be a number.": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "CSS font-size property has no numeric operand"
      },
      "CSS: Parse Error.": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Invalid CSS"
      },
      "CSS: -webkit-mask: too few values for the property linear-gradient.": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "CSS webkit-mask linear-gradient property has too few values"
      },
      "CSS: --solidHeaderNavigationColor: Cannot invoke \"org.w3c.css.values.CssValue.getType()\" because \"val\" is null.": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "CSS solidHeaderNavigationColor property is null"
      },
      "CSS: --gradientHeaderBackgroundColor: Cannot invoke \"org.w3c.css.values.CssValue.getType()\" because \"val\" is null.": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "CSS gradientHeaderBackgroundColor property is null"
      },
      "End tag had attributes.": {
        "issueID": "elementClosure",
        "quality": 1,
        "what": "End tag has an attribute"
      },
      "Non-space character inside noscript inside head.": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "noscript element inside the head element has a nonspace text-node child"
      },
      "A numeric character reference expanded to carriage return.": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "Numeric character entity represents a carriage return"
      },
      "Named character reference was not terminated by a semicolon. (Or & should have been escaped as &amp;.)": {
        "issueID": "entityBad",
        "quality": 1,
        "what": "& not escaped or used in an unterminated character reference"
      },
      "The text content of element time was not in the required format: The literal did not satisfy the time-datetime format.": {
        "issueID": "textContentBad",
        "quality": 1,
        "what": "time element has text content that is not in the time-datetime format"
      },
      "No space between attributes.": {
        "issueID": "parseError",
        "quality": 1,
        "what": "No space between attributes"
      },
      "Saw <?. Probable cause: Attempt to use an XML processing instruction in HTML. (XML processing instructions are not supported in HTML.)": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Left angle bracket is followed by a question mark"
      },
      "The aria-hidden attribute must not be specified on an input element whose type attribute has the value hidden.": {
        "issueID": "parseError",
        "quality": 1,
        "what": "aria-hidden attribute is invalid for an input element with type=\"hidden\""
      },
      "Saw <!-- within a comment. Probable cause: Nested comment (not allowed).": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Comment is nested within a comment"
      },
      "The document is not mappable to XML 1.0 due to two consecutive hyphens in a comment.": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Comment contains --"
      },
      "The document is not mappable to XML 1.0 due to a trailing hyphen in a comment.": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Comment ends with -"
      },
      "Bogus comment.": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Comment is missing a valid termination"
      },
      "Element script must not have attribute async unless attribute src is also specified or unless attribute type is specified with value module.": {
        "issueID": "parseError",
        "quality": 1,
        "what": "script element has an async attribute but has no src or value=module attribute"
      },
      "Element script must not have attribute charset unless attribute src is also specified.": {
        "issueID": "parseError",
        "quality": 1,
        "what": "script element has a charset attribute but no src attribute"
      },
      "style element between head and body.": {
        "issueID": "parseError",
        "quality": 1,
        "what": "style element exists between the head and the body elements"
      },
      "A slash was not immediately followed by >.": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Element start tag contains a nonfinal slash"
      },
      "Document uses the Unicode Private Use Area(s), which should not be used in publicly exchanged documents. (Charmod C073)": {
        "issueID": "encodingPrivate",
        "quality": 1,
        "what": "Page includes a Unicode PUA character"
      },
      "Cannot recover after last error. Any further errors will be ignored.": {
        "issueID": "fatalError",
        "quality": 1,
        "what": "Testing was interrupted by a fatal error"
      },
      "Oops. That was not supposed to happen. A bug manifested itself in the application internals. Unable to continue. Sorry. The admin was notified.": {
        "issueID": "fatalError",
        "quality": 1,
        "what": "Testing was interrupted by a fatal application-internal error"
      },
      "Too many messages.": {
        "issueID": "fatalError",
        "quality": 1,
        "what": "Testing was interrupted by a fatal excess of the message count"
      },
      "Unsupported SVG version specified. This validator only supports SVG 1.1. The recommended way to suppress this warning is to remove the version attribute altogether.": {
        "issueID": "svgNotValidatable",
        "quality": 1,
        "what": "SVG version specified is not 1.1 and so nuVal cannot validate it"
      }
    },
    "variable": {
      "Duplicate attribute.*": {
        "issueID": "duplicateAttribute",
        "quality": 1,
        "what": "Source code of the element contains 2 or more of the same attribute"
      },
      "Duplicate ID .+$|^The first occurrence of ID .* was here.*": {
        "issueID": "duplicateID",
        "quality": 1,
        "what": "Duplicate id"
      },
      "Bad value  for attribute src on element .+: Must be non-empty.*": {
        "issueID": "sourceEmpty",
        "quality": 1,
        "what": "src attribute is empty"
      },
      "CSS: border-.+ negative values are not allowed.*": {
        "issueID": "borderBad",
        "quality": 1,
        "what": "CSS border includes a negative-valued property"
      },
      "CSS: flex: .+ negative values are not allowed.*": {
        "issueID": "flexBad",
        "quality": 1,
        "what": "CSS flex value is negative"
      },
      "CSS: padding[-a-z]*: .+ negative values are not allowed.*": {
        "issueID": "paddingBad",
        "quality": 1,
        "what": "One of the CSS padding values is negative"
      },
      "CSS: gap: .+ negative values are not allowed.*": {
        "issueID": "gapBad",
        "quality": 1,
        "what": "CSS gap value is negative"
      },
      "CSS: background: .+ is not a color value.*": {
        "issueID": "backgroundBad",
        "quality": 1,
        "what": "CSS background color is misdefined"
      },
      "CSS: background: The .+ argument to the .+ function should be .+, not .+": {
        "issueID": "backgroundBad",
        "quality": 1,
        "what": "CSS background function has an invalid argument"
      },
      "CSS: _background: url.+ is an incorrect URL.*": {
        "issueID": "backgroundBad",
        "quality": 1,
        "what": "CSS background URL is invalid"
      },
      "CSS: background-image: .+ is not a background-image value.*": {
        "issueID": "backgroundImageBad",
        "quality": 1,
        "what": "CSS background image is misdefined"
      },
      "CSS: background-image: url.+ is an incorrect URL.*": {
        "issueID": "backgroundImageBad",
        "quality": 1,
        "what": "CSS background image is misdefined"
      },
      "Resource violates Content Security Policy \\(meta tag\\): image .+ blocked by img-src directive.*": {
        "issueID": "imageBanned",
        "quality": 1,
        "what": "img-src content attribute blocks an image"
      },
      "This document appears to be written in .+ Consider .+ing lang=.+": {
        "issueID": "pageLanguage",
        "quality": 1,
        "what": "html start tag has no lang attribute to declare the language of the page"
      },
      "Any .+ descendant of a label element with a for attribute must have an ID value that matches that for attribute.*": {
        "issueID": "controlIDInLabelBad",
        "quality": 1,
        "what": "label element has a labelable descendant whose ID differs from the for attribute of the label"
      },
      "The aria-label.* attribute must not be specified on any .* element unless the element has a role value other than caption, code, deletion, emphasis, generic, insertion, paragraph, presentation, strong, subscript, or superscript.*": {
        "issueID": "nonLabelableRole",
        "quality": 1,
        "what": "Element with a non-labelable role has an aria-label attribute"
      },
      "The aria-describedby attribute references .+, which is not the ID of any element in this document.+": {
        "issueID": "descriptionBadID",
        "quality": 1,
        "what": "aria-describedby attribute references an element not in the document"
      },
      "The aria-labelledby attribute references .+, which is not the ID of any element in this document.+": {
        "issueID": "labelBadID",
        "quality": 1,
        "what": "aria-labelledby attribute references an element not in the document"
      },
      "An element with role=.+ must be contained in, or owned by, an element with .*role.+": {
        "issueID": "parentMissing",
        "quality": 1,
        "what": "Element has no required container or owner"
      },
      "Element .+ is missing a required instance of child element .+": {
        "issueID": "descendantMissing",
        "quality": 1,
        "what": "Element is missing a required child"
      },
      "CSS: line-height: .* negative values are not allowed.*": {
        "issueID": "lineHeightBad",
        "quality": 1,
        "what": "Text line height is negative"
      },
      "Saw a start tag [a-z]+.*": {
        "issueID": "elementBad",
        "quality": 1,
        "what": "Element does not exist in HTML"
      },
      "Attribute .+ not allowed on element meta at this point.*": {
        "issueID": "metaBad",
        "quality": 1,
        "what": "Attribute is not allowed on a meta element here"
      },
      "Element meta is missing one or more of the following attributes: .+": {
        "issueID": "metaBad",
        "quality": 1,
        "what": "Element is missing a required attribute"
      },
      "Bad value .+ for attribute .+ on element meta.*": {
        "issueID": "metaBad",
        "quality": 1,
        "what": "Attribute of a meta element has an invalid value"
      },
      "Resource violates Content Security Policy \\(meta tag\\): external stylesheet .+ blocked by style-src directive.*": {
        "issueID": "stylesheetBanned",
        "quality": 1,
        "what": "style-src content attribute blocks an external stylesheet"
      },
      "Resource violates Content Security Policy \\(meta tag\\): external script .+ blocked by script-src directive.*": {
        "issueID": "scriptBanned",
        "quality": 1,
        "what": "script-src content attribute blocks a script"
      },
      "Discarding unrecognized token .+ from value of attribute role. Browsers ignore any token that is not a defined ARIA non-abstract role.*": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "Invalid role"
      },
      "The role attribute must not be used on a .+ element which has a table ancestor with no role attribute, or with a role attribute whose value is table, grid, or treegrid.*": {
        "issueID": "roleHierarchyBad",
        "quality": 1,
        "what": "Table cell has a role attribute"
      },
      "The .+ role is unnecessary for element .+": {
        "issueID": "roleRedundant",
        "quality": 1,
        "what": "explicit role is redundant for its element"
      },
      "Element .+ does not need a role attribute.*": {
        "issueID": "roleRedundant",
        "quality": 1,
        "what": "Element needs no role attribute"
      },
      "Attribute .+ not allowed on element .+ at this point.*": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "Attribute not allowed on this element"
      },
      "Attribute .+ not allowed here.*": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "Attribute not allowed here"
      },
      "Attribute .+ is not serializable as XML 1[.]0.*": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "Attribute is invalidly nonserializable"
      },
      "Attribute .+ is only allowed when .+": {
        "issueID": "attributeBad",
        "quality": 1,
        "what": "Attribute is invalid here"
      },
      "Bad value .* for attribute .+ on element .+": {
        "issueID": "attributeValueBad",
        "quality": 1,
        "what": "Attribute on this element has an invalid value"
      },
      "Bad value .+ for the attribute .+": {
        "issueID": "attributeValueBad",
        "quality": 1,
        "what": "Attribute has an invalid value"
      },
      "Bad value  for attribute .+ on element .+: Must not be empty.*": {
        "issueID": "attributeValueBad",
        "quality": 1,
        "what": "Attribute has an invalidly empty value"
      },
      "Bad value  for attribute (?:width|height) on element img: The empty string is not a valid non-negative integer.*": {
        "issueID": "attributeValueBad",
        "quality": 1,
        "what": "Attribute has an empty value"
      },
      "Potentially bad value .+ for attribute .+ on element .+Typo for .+?.*": {
        "issueID": "attributeValueRisk",
        "quality": 1,
        "what": "Attribute value may be a typographical error"
      },
      "Element image is missing required attribute (?:height|width).*": {
        "issueID": "attributeMissing",
        "quality": 1,
        "what": "image element has no height attribute or has no width attribute"
      },
      "Element .+ is missing one or more of the following attributes: .+": {
        "issueID": "attributeMissing",
        "quality": 1,
        "what": "Element is missing a required attribute"
      },
      "Element .+ is missing required attribute .+": {
        "issueID": "attributeMissing",
        "quality": 1,
        "what": "Element is missing a required attribute"
      },
      "Element .+ is missing required attribute role.*": {
        "issueID": "roleMissing",
        "quality": 1,
        "what": "Element has no role attribute"
      },
      "Element .+ is missing one or more of the following attributes: role.*": {
        "issueID": "roleMissingRisk",
        "quality": 1,
        "what": "Element has no role attribute but needs one?"
      },
      "Element .+ is missing required attribute aria-.+": {
        "issueID": "ariaMissing",
        "quality": 1,
        "what": "Element is missing a required ARIA attribute"
      },
      "Bad value  for attribute .+ on element .+: Must be non-empty.*": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "Attribute value is empty"
      },
      "Bad value  for attribute aria-hidden on element .+": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "aria-hidden attribute has an empty value"
      },
      "Attribute aria-.+ is unnecessary for elements that have attribute .+": {
        "issueID": "ariaRedundant",
        "quality": 1,
        "what": "ARIA attribute is redundant with the synonymous native attribute"
      },
      "Bad value  for attribute .+ on element .+: An ID must not be the empty string.*": {
        "issueID": "idEmpty",
        "quality": 1,
        "what": "id attribute has an empty value"
      },
      "Bad value  for attribute aria-owns on element .+: An IDREFS value must contain at least one non-whitespace character.*": {
        "issueID": "idEmpty",
        "quality": 1,
        "what": "aria-owns attribute has an empty value"
      },
      "The heading h. \\(with computed level .\\) follows the heading h. \\(with computed level .\\), skipping . heading level.+": {
        "issueID": "headingLevelSkip",
        "quality": 1,
        "what": "Heading level is more than 1 level inferior to the previous heading"
      },
      "A table row was .+ columns wide, which is less than the column count established by the first row.*": {
        "issueID": "tableColumnsVary",
        "quality": 1,
        "what": "Table row has a column count smaller than that of the first row"
      },
      "A table row was .+ columns wide and exceeded the column count established by the first row.*": {
        "issueID": "tableColumnsVary",
        "quality": 1,
        "what": "Table row has a column count larger than that of the first row"
      },
      "Table column [0-9]+ established by element td has no cells beginning in it.*": {
        "issueID": "tableColumnsVary",
        "quality": 1,
        "what": "Element is td but the prior cells in its table column do not exist"
      },
      "Potentially bad value .+ for attribute sandbox on element iframe: Setting both allow-scripts and allow-same-origin is not recommended, because it effectively enables an embedded page to break out of all sandboxing.*": {
        "issueID": "frameSandboxRisk",
        "quality": 1,
        "what": "iframe element has a vulnerable sandbox value containing both allow-scripts and allow-same-origin"
      },
      "Element .+ not allowed as child of element .+ in this context.*": {
        "issueID": "parentBad",
        "quality": 1,
        "what": "Element has an invalid parent"
      },
      "Bad value  for attribute tabindex on element .+: The empty string is not a valid integer.*": {
        "issueID": "tabIndexEmpty",
        "quality": 1,
        "what": "tabindex attribute has an empty value instead of an integer"
      },
      "The .+ attribute on the .+ element is obsolete.*": {
        "issueID": "attributeObsolete",
        "quality": 1,
        "what": "Attribute is obsolete on its element"
      },
      "Potentially bad value .+ for attribute .+ on element .+: The language subtag .+ is deprecated.*": {
        "issueID": "attributeObsolete",
        "quality": 1,
        "what": "Attribute value is a deprecated language subtag"
      },
      "The .+ element is a completely-unknown element that is not allowed anywhere in any HTML content.+": {
        "issueID": "nonElement",
        "quality": 1,
        "what": "Element is unknown"
      },
      "CSS: Deprecated media feature .+": {
        "issueID": "obsolete",
        "quality": 1,
        "what": "Media feature is deprecated"
      },
      "CSS: Unrecognized at-rule @.+": {
        "issueID": "atRuleInvalid",
        "quality": 1,
        "what": "At-rule not recognized by CSS"
      },
      "CSS: .+: Character .+ is neither a decimal digit number.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Nonnumeric character in a numeric style property"
      },
      "CSS: column-count: .+ is not valid, only values greater than 0 allowed.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "CSS column-count property has a nonpositive value"
      },
      "CSS: font-weight: .+ is not valid, only values greater than or equal to 1.0 are allowed.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "CSS font-weight property has a value smaller than 1"
      },
      "CSS: font-weight: .+ is not valid, only values lower than or equal to 1000.0 are allowed.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "CSS font-weight property has a value greater than 1000"
      },
      "CSS: .+: Parse Error.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Invalid CSS"
      },
      "CSS: .+: .+ is not a valid color 3 or 6 hexadecimals numbers.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Invalid hexadecimal color in CSS"
      },
      "CSS: .+: .+ is not a .+ value.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Invalid value in CSS"
      },
      "CSS: .+: Property .+ doesn't exist.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Invalid property in CSS"
      },
      "CSS: .+: only 0 can be a length. You must put a unit after your number.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Length in CSS is nonzero but has no unit"
      },
      "CSS: .*only 0 can be a unit. You must put a unit after your number.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Number in CSS is nonzero but has no unit"
      },
      "CSS: .+: Too many values or values are not recognized.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Invalid CSS value or too many values"
      },
      "CSS: .+: Invalid type: .+": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Invalid type of CSS value"
      },
      "CSS: .+: The types are incompatible.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Incompatible types of CSS values"
      },
      "CSS: .+: Unknown dimension.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Unknown CSS dimension"
      },
      "CSS: .+: Character array is missing \"e\" notation exponential mark.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Character array has no exponent mark e"
      },
      "CSS: .+:   is an incorrect operator.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Space is misused as a CSS operator"
      },
      "CSS: .+: , is an incorrect operator.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Comma is misused as a CSS operator"
      },
      "CSS: Unknown pseudo-element or pseudo-class :.+": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Unknown pseudo-element or pseudo-class"
      },
      "CSS: unrecognized media .+": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "Unrecognized media value"
      },
      "CSS: .+ is not a :lang.+ value.*": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "CSS pseudo-class :lang() has an invalid value"
      },
      "CSS: .+: Missing a semicolon before the .+": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "semicolon missing in CSS"
      },
      "CSS: perspective: .+ is not valid, only values greater than 0 allowed.*": {
        "issueID": "cssInvalid",
        "quality": 0.5,
        "what": "CSS perspective property has a nonpositive value"
      },
      "CSS: .*Lexical error at line .+, column .+ Encountered: .+": {
        "issueID": "cssInvalid",
        "quality": 1,
        "what": "CSS property has a value with a lexical error"
      },
      "CSS: transition: .+ is not valid, only values lower than or equal to 1.0 are allowed.*": {
        "issueID": "cssInvalid",
        "quality": 0.5,
        "what": "CSS transition property has a value greater than 1"
      },
      "CSS: In CSS1, a class name could start with a digit .+, unless it was a dimension .+ In CSS2, such classes are parsed as unknown dimensions .+ To make .+ a valid class, CSS2 requires the first digit to be escaped: .+": {
        "issueID": "cssInvalid",
        "quality": 0.5,
        "what": "CSS class name starts with an unescaped digit"
      },
      "Stray start tag .+": {
        "issueID": "elementClosure",
        "quality": 1,
        "what": "Invalid start tag"
      },
      "Stray end tag .+": {
        "issueID": "elementClosure",
        "quality": 1,
        "what": "Invalid closing tag"
      },
      "End tag [a-z]+.": {
        "issueID": "elementClosure",
        "quality": 1,
        "what": "Closing tag of an ineligible element"
      },
      "Start tag .+ seen but an element of the same type was already open.*": {
        "issueID": "elementClosure",
        "quality": 1,
        "what": "Element is invalidly a descendant of another such element"
      },
      "End tag for .+ seen, but there were unclosed elements.*": {
        "issueID": "elementClosure",
        "quality": 1,
        "what": "Element is closed while an element within it is unclosed"
      },
      "End tag .+ seen, but there were open elements.*": {
        "issueID": "elementClosure",
        "quality": 1,
        "what": "Element is closed while an element within it is unclosed"
      },
      "End tag .+ implied, but there were open elements.*": {
        "issueID": "elementClosure",
        "quality": 1,
        "what": "Element is implicitly closed while an element within it is unclosed"
      },
      "Unclosed element .+": {
        "issueID": "elementClosure",
        "quality": 1,
        "what": "Element is unclosed"
      },
      "No .+ element in scope but a .+ end tag seen.*": {
        "issueID": "elementClosure",
        "quality": 1,
        "what": "End tag for an element that is not in scope"
      },
      "End tag .+ violates nesting rules.*": {
        "issueID": "nestingBad",
        "quality": 1,
        "what": "End tag violates nesting rules"
      },
      "Bad value [^`]+ Tab, new line or carriage return found.*": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "Attribute value contains an illegal spacing character"
      },
      "Bad character . after <. Probable cause: Unescaped <. Try escaping it as &lt;.*": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "Left angle bracket is followed by an invalid character"
      },
      "Saw .+ when expecting an attribute name. Probable cause: (?:.+ missing|Missing .+) immediately before.*": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "Invalid character appears where an attribute name must appear"
      },
      "Bad element name .*: Code point .* is not allowed*": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "Element name contains an invalid character"
      },
      "Bad value .* for attribute href on element .+: Illegal character in path segment: .+ is not allowed.*": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "href attribute path value contains an invalid character in a segment"
      },
      "Bad value .* for attribute src on element .+: Illegal character in path segment: .+ is not allowed.*": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "src attribute path value contains an invalid character in a segment"
      },
      "Bad value .* for attribute href on element .+: Illegal character in query: .+ is not allowed.*": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "href attribute query value contains an invalid character"
      },
      "Bad value .* for attribute src on element .+: Illegal character in query: .+ is not allowed.*": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "src attribute query value contains an invalid character"
      },
      "Bad value .+ for attribute src on element .+: Tab, new line or carriage return found.*": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "src attribute value contains a tab, newline, or return character"
      },
      ".+ in an unquoted attribute value. Probable causes: Attributes running together or a URL query string in an unquoted attribute value.*": {
        "issueID": "characterBad",
        "quality": 1,
        "what": "Attribute has a value containing invalid punctuation"
      },
      "The text content of element .+ was not in the required format: Expected .+ but found .+ instead.*": {
        "issueID": "textContentBad",
        "quality": 1,
        "what": "Element has text content with invalid format"
      },
      "End tag .+ did not match the name of the current open element .*": {
        "issueID": "parseError",
        "quality": 1,
        "what": "End tag conflicts with the current open element."
      },
      "Self-closing syntax .+ used on a non-void HTML element.*": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Self-closing syntax used on a non-void element"
      },
      "The aria-hidden attribute must not be specified on the .+ element.*": {
        "issueID": "parseError",
        "quality": 1,
        "what": "aria-hidden attribute is invalid for its element"
      },
      "Bad start tag in .+": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Invalid start tag"
      },
      "Element name .+ cannot be represented as XML 1[.]0.*": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Invalid element name"
      },
      "Quote . in attribute name[.] Probable cause: Matching quote missing somewhere earlier.*": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Attribute name includes an apostrophe or double quotation mark"
      },
      "Text not allowed in element .+ in this context.*": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Element contains text, which is not allowed here"
      },
      "The .+ element must not appear as a descendant of the .+ element.*": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Element has an invalid ancestor"
      },
      "The element .+ must not appear as a descendant of the .+ element.*": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Element has an invalid ancestor"
      },
      "java.util.concurrent.TimeoutException: Idle timeout expired: .+ ms.*": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Idle timeout expired"
      },
      "HTML start tag .+ in a foreign namespace context.*": {
        "issueID": "parseError",
        "quality": 1,
        "what": "Element is invalid because its namespace is not HTML"
      },
      "Internal encoding declaration .+ disagrees with the actual encoding of the document.*": {
        "issueID": "encodingMisdeclared",
        "quality": 1,
        "what": "Encoding declaration disagrees with the actual encoding of the page"
      },
      "Internal encoding declaration named an unsupported chararacter encoding .*": {
        "issueID": "encodingBad",
        "quality": 1,
        "what": "Encoding declaration names an unsupported character encoding"
      },
      "Text run is not in Unicode Normalization Form C.+": {
        "issueID": "encodingBad",
        "quality": 1,
        "what": "Text run is not in Unicode Normalization Form C"
      },
      "The value of attribute .+ on element .+ from namespace .+ is not in Unicode Normalization Form C.*": {
        "issueID": "encodingBad",
        "quality": 1,
        "what": "Value of attribute is not in Unicode Normalization Form C"
      },
      "Forbidden code point U+.*": {
        "issueID": "encodingBad",
        "quality": 1,
        "what": "Invalid Unicode code point"
      }
    }
  },
  "qualWeb": {
    "invariant": {
      "QW-ACT-R10": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "iframe elements with identical accessible names have different purposes [invalid on invisible elements]"
      },
      "QW-ACT-R13": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Element with aria-hidden has focusable content [invalid]"
      },
      "QW-ACT-R41": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Error message describes no invalid form field value [speculative]"
      },
      "QW-ACT-R52": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "video element visual-only content has no description track [description tracks and this ACT rule have been deprecated]"
      },
      "QW-ACT-R57": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "video element visual content has no description track [description tracks and this ACT rule have been deprecated]"
      },
      "QW-ACT-R62": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Element in the sequential focus order may have no visible focus [speculative]"
      },
      "QW-ACT-R63": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Document has no landmark with non-repeated content [invalid]"
      },
      "QW-ACT-R64": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Document has no heading for non-repeated content [invalid]"
      },
      "QW-ACT-R73": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Block of repeated content is not collapsible [invalid]"
      },
      "QW-ACT-R74": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Document has no instrument to move focus to non-repeated content [invalid]"
      },
      "QW-ACT-R75": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Blocks of repeated content cannot be bypassed [invalid]"
      },
      "QW-BP1": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "h1-h6 may fail to be used to identify headings [speculative]"
      },
      "QW-BP2": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Image text alternative is not concise [invalid]"
      },
      "QW-BP17": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "No link at the beginning of a block of repeated content goes to the end of the block [invalid]"
      },
      "QW-BP20": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Document has more than 1 banner landmark [invalid; counts hidden elements]"
      },
      "QW-BP22": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Document has more than 1 element with a main role [invalid]"
      },
      "QW-BP23": {
        "issueID": "ignorable",
        "quality": 0.1,
        "what": "Element is not in a true list [invalid]"
      },
      "QW-BP24": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "ul or ol element has a child other than li, script, or template [invalid]"
      },
      "QW-BP28": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "h1 element missing or used more than once [invalid]"
      },
      "QW-BP29": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "lang and xml:lang attribute of html element differ [invalid]"
      },
      "QW-WCAG-T4": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "summary attribute is not used to give an overview of a data table [invalid]"
      },
      "QW-WCAG-T8": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Text alternative is suspect [invalid]"
      },
      "QW-WCAG-T9": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Page may fail to be organized using headings [speculative]"
      },
      "QW-WCAG-T15": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "link element may be used for navigation but not in the head [invalid]"
      },
      "QW-WCAG-T20": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "Link title may fail to describe the link correctly [speculative]"
      },
      "QW-WCAG-T23": {
        "issueID": "ignorable",
        "quality": 0,
        "what": "No link at the top of the page goes directly to the main content area [invalid]"
      },
      "QW-WCAG-T24": {
        "issueID": "ignorable",
        "quality": 0.5,
        "what": "Script removes the focus when focus is received [invalid]"
      },
      "QW-WCAG-T28": {
        "issueID": "ignorable",
        "quality": 0.8,
        "what": "Font size set to an absolute unit value [invalid]"
      },
      "QW-WCAG-T31": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Foreground or background color is specified but not both [invalid on invisible elements"
      },
      "QW-WCAG-T32": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "ol, ul or dl may fail to be used for a list or group of links [speculative]"
      },
      "QW-WCAG-T35": {
        "issueID": "ignorable",
        "quality": 1,
        "what": "Several elements have this id attribute value [invalid]"
      },
      "QW-ACT-R18": {
        "issueID": "duplicateID",
        "quality": 1,
        "what": "id attribute value is not unique"
      },
      "QW-BP30": {
        "issueID": "duplicateID",
        "quality": 1,
        "what": "id attribute value is shared with another element"
      },
      "QW-BP8": {
        "issueID": "headingImageNoText",
        "quality": 1,
        "what": "Heading with an image has no accessible name"
      },
      "QW-ACT-R6": {
        "issueID": "imageButtonNoText",
        "quality": 1,
        "what": "Image button has no accessible name"
      },
      "QW-WCAG-T5": {
        "issueID": "imageButtonNoText",
        "quality": 1,
        "what": "alt attribute not used on an image used as a submit button"
      },
      "QW-ACT-R17": {
        "issueID": "imageNoText",
        "quality": 1,
        "what": "Image has no accessible name"
      },
      "QW-BP6": {
        "issueID": "titleLong",
        "quality": 1,
        "what": "title element is too long (more than 64 characters)"
      },
      "QW-BP7": {
        "issueID": "titleNotText",
        "quality": 1,
        "what": "Title element contains ASCII-art"
      },
      "QW-ACT-R48": {
        "issueID": "decorativeElementExposed",
        "quality": 1,
        "what": "Element marked as decorative is exposed"
      },
      "QW-ACT-R2": {
        "issueID": "pageLanguage",
        "quality": 1,
        "what": "HTML page has no lang attribute"
      },
      "QW-ACT-R5": {
        "issueID": "pageLanguageBad",
        "quality": 1,
        "what": "HTML lang attribute is invalid"
      },
      "QW-ACT-R3": {
        "issueID": "pageLanguageBad",
        "quality": 1,
        "what": "HTML lang and xml:lang do not match"
      },
      "QW-ACT-R22": {
        "issueID": "elementLanguageBad",
        "quality": 1,
        "what": "Element within the body has no valid lang attribute"
      },
      "QW-ACT-R42": {
        "issueID": "objectNoText",
        "quality": 1,
        "what": "Object element has no non-empty accessible name"
      },
      "QW-WCAG-T11": {
        "issueID": "appletNoText",
        "quality": 1,
        "what": "Text alternative not provided on an applet element"
      },
      "QW-WCAG-T1": {
        "issueID": "imageMapAreaNoText",
        "quality": 1,
        "what": "Text alternative for an area element of an image map is not provided"
      },
      "QW-WCAG-T6": {
        "issueID": "eventKeyboardRisk",
        "quality": 1,
        "what": "Both keyboard and other device-specific functions are not used"
      },
      "QW-WCAG-T17": {
        "issueID": "labelConfusionRisk",
        "quality": 1,
        "what": "label not positioned to maximize the predictability of the relationship"
      },
      "QW-ACT-R12": {
        "issueID": "linkNoText",
        "quality": 1,
        "what": "Link has no accessible name"
      },
      "QW-WCAG-T21": {
        "issueID": "imageLinkNoText",
        "quality": 1,
        "what": "Accessible name is not provided for an image which is the only content in a link"
      },
      "QW-WCAG-T7": {
        "issueID": "abbreviationNoTitle",
        "quality": 1,
        "what": "Definition for an abbreviation not provided with an abbr element"
      },
      "QW-ACT-R9": {
        "issueID": "linkTextsSame",
        "quality": 1,
        "what": "Links with identical accessible names have different purposes"
      },
      "QW-ACT-R44": {
        "issueID": "linkTextsSame",
        "quality": 1,
        "what": "Links with identical accessible names and context serve different purposes"
      },
      "QW-BP4": {
        "issueID": "linksNoNav",
        "quality": 1,
        "what": "Grouped links are not within a nav element"
      },
      "QW-BP13": {
        "issueID": "linkPair",
        "quality": 1,
        "what": "Consecutive links have the same href and one contains an image"
      },
      "QW-WCAG-T10": {
        "issueID": "linkNameRisk",
        "quality": 0.8,
        "what": "Link name repeats its image name and/or that name is suspect"
      },
      "QW-WCAG-T22": {
        "issueID": "pageNewWindow",
        "quality": 1,
        "what": "New window opens as soon as a new page is loaded"
      },
      "QW-ACT-R11": {
        "issueID": "buttonNoText",
        "quality": 1,
        "what": "button element has no accessible name"
      },
      "QW-ACT-R66": {
        "issueID": "menuItemNoText",
        "quality": 1,
        "what": "menuitem element has no non-empty accessible name"
      },
      "QW-ACT-R33": {
        "issueID": "parentMissing",
        "quality": 1,
        "what": "Element has no ARIA required context role"
      },
      "QW-ACT-R38": {
        "issueID": "descendantMissing",
        "quality": 1,
        "what": "Element has no ARIA required owned element"
      },
      "QW-ACT-R21": {
        "issueID": "svgImageNoText",
        "quality": 1,
        "what": "Element with an explicit role has no accessible name"
      },
      "QW-ACT-R7": {
        "issueID": "cssBansPageRotate",
        "quality": 1,
        "what": "Orientation of the page is restricted by a CSS transform property"
      },
      "QW-ACT-R14": {
        "issueID": "metaBansZoom",
        "quality": 1,
        "what": "meta viewport prevents zoom"
      },
      "QW-ACT-R67": {
        "issueID": "horizontalSpacingFrozen",
        "quality": 1,
        "what": "Letter spacing in a style attribute is !important"
      },
      "QW-ACT-R69": {
        "issueID": "horizontalSpacingFrozen",
        "quality": 1,
        "what": "Word spacing in a style attribute is !important"
      },
      "QW-ACT-R68": {
        "issueID": "verticalSpacingFrozen",
        "quality": 1,
        "what": "Line height in a style attribute is !important"
      },
      "QW-ACT-R40": {
        "issueID": "overflowHiddenRisk",
        "quality": 1,
        "what": "Zoomed text node is clipped by a CSS overflow declaration?"
      },
      "QW-BP14": {
        "issueID": "boxSizeAbsolute",
        "quality": 1,
        "what": "Container width is specified in px"
      },
      "QW-BP15": {
        "issueID": "boxSizeAbsolute",
        "quality": 1,
        "what": "Element width is specified in an absolute value"
      },
      "QW-ACT-R19": {
        "issueID": "iframeTitleBad",
        "quality": 1,
        "what": "iframe element has no accessible name"
      },
      "QW-ACT-R20": {
        "issueID": "roleBad",
        "quality": 1,
        "what": "role attribute has an invalid value"
      },
      "QW-ACT-R28": {
        "issueID": "ariaMissing",
        "quality": 1,
        "what": "Element with a role attribute does not have the required states and properties"
      },
      "QW-ACT-R25": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "ARIA state or property is not permitted"
      },
      "QW-ACT-R27": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "aria- attribute is not defined in ARIA 1.1"
      },
      "QW-ACT-R34": {
        "issueID": "ariaAttributeBad",
        "quality": 1,
        "what": "ARIA state or property has an invalid value"
      },
      "QW-ACT-R24": {
        "issueID": "autocompleteBad",
        "quality": 1,
        "what": "autocomplete attribute has no valid value"
      },
      "QW-ACT-R76": {
        "issueID": "contrastAAA",
        "quality": 1,
        "what": "Text has less than the enhanced minimum contrast"
      },
      "QW-ACT-R37": {
        "issueID": "contrastRisk",
        "quality": 1,
        "what": "Text has less than the minimum contrast or has an image background"
      },
      "text-color-convey-information": {
        "issueID": "colorNamedRisk",
        "quality": 1,
        "what": "Text naming a color requires the ability to distinguish colors?"
      },
      "QW-ACT-R35": {
        "issueID": "headingEmpty",
        "quality": 1,
        "what": "Heading has no accessible name"
      },
      "QW-BP3": {
        "issueID": "titleRedundant",
        "quality": 1,
        "what": "Link text content is equal to the title attribute"
      },
      "QW-ACT-R1": {
        "issueID": "pageTitle",
        "quality": 1,
        "what": "HTML page has no title"
      },
      "QW-WCAG-T27": {
        "issueID": "justification",
        "quality": 1,
        "what": "Text is justified (aligned to both the left and the right margins)"
      },
      "QW-WCAG-T29": {
        "issueID": "justificationRisk",
        "quality": 1,
        "what": "Alignment either to the left or right is not specified in CSS"
      },
      "QW-WCAG-T33": {
        "issueID": "descriptionOrphan",
        "quality": 1,
        "what": "Element is not contained by a valid dl element"
      },
      "QW-WCAG-T34": {
        "issueID": "descriptionOrder",
        "quality": 1,
        "what": "Description list element is not ordered correctly"
      },
      "QW-BP11": {
        "issueID": "pseudoList",
        "quality": 1,
        "what": "br is used to make a list"
      },
      "QW-WCAG-T3": {
        "issueID": "legendMissing",
        "quality": 1,
        "what": "Description for a group of form controls using fieldset and legend elements is not provided"
      },
      "QW-WCAG-T12": {
        "issueID": "layoutTable",
        "quality": 1,
        "what": "th or caption element or non-empty summary attribute used in a layout table"
      },
      "QW-BP9": {
        "issueID": "layoutTable",
        "quality": 1,
        "what": "Table element without header cells has a caption"
      },
      "QW-WCAG-T18": {
        "issueID": "tabularTableless",
        "quality": 1,
        "what": "Table markup not used to present tabular information"
      },
      "QW-WCAG-T2": {
        "issueID": "tableCaption",
        "quality": 1,
        "what": "caption element not used to associate a caption with a data table"
      },
      "QW-ACT-R36": {
        "issueID": "cellHeadersOutsideTable",
        "quality": 1,
        "what": "Headers attribute does not refer to a cell in the same table element"
      },
      "QW-WCAG-T14": {
        "issueID": "cellHeadersAmbiguityRisk",
        "quality": 1,
        "what": "id and headers attributes not used to associate data cells with header cells in a data table"
      },
      "QW-WCAG-T25": {
        "issueID": "cellHeadersAmbiguityRisk",
        "quality": 1,
        "what": "scope attribute not used to associate header cells and data cells in a data table"
      },
      "QW-BP12": {
        "issueID": "cellHeadersAmbiguityRisk",
        "quality": 1,
        "what": "scope col and row are not used"
      },
      "QW-ACT-R39": {
        "issueID": "tableHeaderCellless",
        "quality": 1,
        "what": "Table header cell has no assigned data cell"
      },
      "QW-BP5": {
        "issueID": "tableEmbedded",
        "quality": 1,
        "what": "table element is inside another table element"
      },
      "QW-ACT-R16": {
        "issueID": "controlNoText",
        "quality": 1,
        "what": "Form control has no accessible name"
      },
      "QW-ACT-R30": {
        "issueID": "visibleLabelNotInName",
        "quality": 1,
        "what": "Visible label is not part of the accessible name"
      },
      "QW-ACT-R70": {
        "issueID": "unfocusability",
        "quality": 1,
        "what": "iframe with negative tabindex has interactive elements"
      },
      "QW-BP25": {
        "issueID": "asideNotTop",
        "quality": 1,
        "what": "complementary landmark is not at the top level"
      },
      "QW-BP26": {
        "issueID": "asideNotTop",
        "quality": 1,
        "what": "complementary landmark is not at the top level"
      },
      "QW-BP27": {
        "issueID": "mainNotTop",
        "quality": 1,
        "what": "main landmark is not at the top level"
      },
      "QW-BP19": {
        "issueID": "bannerNotTop",
        "quality": 1,
        "what": "banner landmark is not at the top level"
      },
      "QW-BP21": {
        "issueID": "footerNot1",
        "quality": 0.5,
        "what": "There are multiple contentinfo or banner landmarks"
      },
      "QW-WCAG-T26": {
        "issueID": "focusableRole",
        "quality": 1,
        "what": "Script makes a div or span a user interface control without providing a role for the control"
      },
      "QW-ACT-R65": {
        "issueID": "focusableDescendants",
        "quality": 1,
        "what": "Element with presentational children has focusable content"
      },
      "QW-WCAG-T13": {
        "issueID": "blink",
        "quality": 1,
        "what": "Element is blink"
      },
      "QW-WCAG-T30": {
        "issueID": "blink",
        "quality": 1,
        "what": "text-decoration:blink is used without a mechanism to stop it in less than five seconds"
      },
      "QW-ACT-R15": {
        "issueID": "autoplay",
        "quality": 1,
        "what": "Element has audio that plays automatically"
      },
      "QW-ACT-R49": {
        "issueID": "autoplayLong",
        "quality": 1,
        "what": "Element that plays automatically has audio lasting more than 3 seconds"
      },
      "QW-ACT-R50": {
        "issueID": "autoplayControl",
        "quality": 1,
        "what": "audio or video that plays automatically has no control mechanism"
      },
      "QW-ACT-R4": {
        "issueID": "refresh",
        "quality": 1,
        "what": "Element refreshes or redirects with delay"
      },
      "QW-ACT-R71": {
        "issueID": "refresh",
        "quality": 1,
        "what": "Element has a refresh delay (no exception)"
      },
      "QW-ACT-R26": {
        "issueID": "audioNoText",
        "quality": 1,
        "what": "Auditory content of the element has no accessible alternative"
      },
      "QW-ACT-R29": {
        "issueID": "audioNoText",
        "quality": 1,
        "what": "Content of the element has no text alternative"
      },
      "QW-ACT-R58": {
        "issueID": "audioNoText",
        "quality": 1,
        "what": "Content of the element has no transcript"
      },
      "QW-ACT-R59": {
        "issueID": "audioNoText",
        "quality": 1,
        "what": "Element content is not a media alternative for text"
      },
      "QW-ACT-R60": {
        "issueID": "audioNoText",
        "quality": 1,
        "what": "Auditory content of the element has no captions"
      },
      "QW-ACT-R23": {
        "issueID": "videoNoText",
        "quality": 1,
        "what": "video element visual content has no accessible alternative"
      },
      "QW-ACT-R31": {
        "issueID": "videoNoText",
        "quality": 1,
        "what": "video element visual-only content has no accessible alternative"
      },
      "QW-ACT-R32": {
        "issueID": "videoNoText",
        "quality": 1,
        "what": "video element visual-only content has no strict accessible alternative"
      },
      "QW-ACT-R51": {
        "issueID": "videoNoText",
        "quality": 1,
        "what": "video element visual-only content is not a media alternative for text"
      },
      "QW-ACT-R56": {
        "issueID": "videoNoText",
        "quality": 1,
        "what": "video element content is not a media alternative for text"
      },
      "QW-ACT-R61": {
        "issueID": "videoNoText",
        "quality": 1,
        "what": "video element visual content has no transcript"
      },
      "QW-ACT-R53": {
        "issueID": "videoNoTranscript",
        "quality": 1,
        "what": "video element visual-only content has no transcript"
      },
      "QW-ACT-R55": {
        "issueID": "videoNoAudioDescription",
        "quality": 1,
        "what": "video element visual content has no audio description"
      },
      "QW-ACT-R54": {
        "issueID": "videoNoAudioTrack",
        "quality": 1,
        "what": "Visual-only content of the element has no audio track alternative"
      },
      "QW-ACT-R43": {
        "issueID": "keyboardScroll",
        "quality": 1,
        "what": "Scrollable element is not keyboard accessible"
      },
      "QW-BP18": {
        "issueID": "scrollRisk",
        "quality": 1,
        "what": "Percentage is not used in CSS for a container size"
      },
      "QW-ACT-R72": {
        "issueID": "repeatedContentRisk",
        "quality": 1,
        "what": "First focusable element is not a link to the non-repeated content"
      },
      "QW-WCAG-T19": {
        "issueID": "submitButton",
        "quality": 1,
        "what": "Submit button not provided"
      },
      "QW-BP10": {
        "issueID": "elementObsolete",
        "quality": 1,
        "what": "HTML element is used to control the visual presentation of content"
      },
      "QW-WCAG-T16": {
        "issueID": "parseError",
        "quality": 1,
        "what": "HTML is not used according to spec"
      }
    },
    "variable": {}
  },
  "testaro": {
    "invariant": {
      "dupAtt": {
        "issueID": "duplicateAttribute",
        "quality": 0.7,
        "what": "Source code of the element contains 2 or more of the same attribute"
      },
      "phOnly": {
        "issueID": "inputOnlyPlaceholder",
        "quality": 1,
        "what": "input element has a placeholder but no accessible name"
      },
      "altScheme": {
        "issueID": "imageTextBad",
        "quality": 1,
        "what": "Image text alternative is a URL"
      },
      "adbID": {
        "issueID": "descriptionBadID",
        "quality": 1,
        "what": "aria-describedby attribute references an invalid or duplicate ID"
      },
      "linkTo": {
        "issueID": "destinationLink",
        "quality": 1,
        "what": "Link has no href attribute"
      },
      "linkAmb": {
        "issueID": "linkTextsSame",
        "quality": 1,
        "what": "Links with the same text content have different destinations"
      },
      "linkExt": {
        "issueID": "newTabSurpriseRisk",
        "quality": 1,
        "what": "Link opens a new window or tab"
      },
      "miniText": {
        "issueID": "fontSmall",
        "quality": 1,
        "what": "Text node has a font smaller than 11 pixels"
      },
      "lineHeight": {
        "issueID": "lineHeightLow",
        "quality": 1,
        "what": "Text has a line height less than 1.5 times its font size"
      },
      "titledEl": {
        "issueID": "titleBad",
        "quality": 1,
        "what": "title attribute is likely ineffective on its element type"
      },
      "role": {
        "issueID": "roleConfusion",
        "quality": 1,
        "what": "Explicitly assigned ARIA role is also an implicit element role"
      },
      "optRoleSel": {
        "issueID": "ariaMissingRisk",
        "quality": 1,
        "what": "Non-option element with an explicit option role has no aria-selected attribute"
      },
      "autocomplete": {
        "issueID": "autocompleteNone",
        "quality": 0.5,
        "what": "Name or email input is missing its required autocomplete attribute"
      },
      "docType": {
        "issueID": "docTypeMissing",
        "quality": 1,
        "what": "document has no valid doctype property"
      },
      "headEl": {
        "issueID": "headElementsBad",
        "quality": 1,
        "what": "Elements in the head are not allowed there"
      },
      "secHeading": {
        "issueID": "headingStructure",
        "quality": 1,
        "what": "Sectioning container heading level is incorrect"
      },
      "headingAmb": {
        "issueID": "headingConfusion",
        "quality": 1,
        "what": "Heading has the same text as a previous sibling heading at the same level"
      },
      "textSem": {
        "issueID": "nonSemanticText",
        "quality": 1,
        "what": "Element is a nonsemantic i, b, or small element"
      },
      "hr": {
        "issueID": "hrConfusionRisk",
        "quality": 1,
        "what": "hr instead of styles is used for vertical segmentation"
      },
      "pseudoP": {
        "issueID": "pseudoParagraphRisk",
        "quality": 1,
        "what": "Element contains sequential br elements instead of p"
      },
      "radioSet": {
        "issueID": "fieldSetMissing",
        "quality": 1,
        "what": "No or invalid grouping of radio buttons in fieldsets"
      },
      "legendLoc": {
        "issueID": "legendMisplaced",
        "quality": 1,
        "what": "legend element is not the first child of its fieldset element"
      },
      "nonTable": {
        "issueID": "layoutTable",
        "quality": 1,
        "what": "table element fails the structural requirements for tabular data"
      },
      "captionLoc": {
        "issueID": "tableCaptionLoc",
        "quality": 1,
        "what": "caption element is not the first child of a table element"
      },
      "targetSmall": {
        "issueID": "targetSmall",
        "quality": 1,
        "what": "Target is not inline but is smaller than 44px by 44px [retired 2026-04]"
      },
      "targetsNear": {
        "issueID": "targetsNear",
        "quality": 1,
        "what": "Label, button, input, or link has substandard distance from another"
      },
      "bulk": {
        "issueID": "visibleBulk",
        "quality": 1,
        "what": "Page contains many visible elements"
      },
      "embAc": {
        "issueID": "activeEmbedding",
        "quality": 1,
        "what": "Active element is embedded in a link or button"
      },
      "focAll": {
        "issueID": "focusDiscrepancy",
        "quality": 0.5,
        "what": "Discrepancy between elements that should be and that are Tab-focusable"
      },
      "focInd": {
        "issueID": "focusIndicationImprovable",
        "quality": 1,
        "what": "Outline identification of when the element is focused is improvable"
      },
      "allCaps": {
        "issueID": "allCaps",
        "quality": 1,
        "what": "Element has a text substring of at least 8 upper-case characters"
      },
      "allSlanted": {
        "issueID": "allItalics",
        "quality": 1,
        "what": "Element has a text substring of at least 40 italic or oblique characters"
      },
      "distortion": {
        "issueID": "textDistortion",
        "quality": 1,
        "what": "Element text is distorted by a transform style property"
      },
      "focAndOp": {
        "issueID": "focusableOperable",
        "quality": 1,
        "what": "Tab-focusable element is not operable or vice versa"
      },
      "focVis": {
        "issueID": "focusedAway",
        "quality": 1,
        "what": "Element when focused is off the display"
      },
      "datalistRef": {
        "issueID": "datalistRef",
        "quality": 1,
        "what": "Datalist reference is ambiguous or missing"
      },
      "allHidden": {
        "issueID": "contentHidden",
        "quality": 1,
        "what": "Content is entirely or mainly hidden"
      },
      "hovInd": {
        "issueID": "hoverIndication",
        "quality": 1,
        "what": "Hovering is unclearly indicated"
      },
      "hover": {
        "issueID": "hoverSurprise",
        "quality": 1,
        "what": "Hovering changes the page content"
      },
      "labClash": {
        "issueID": "labelClash",
        "quality": 1,
        "what": "Incompatible label types"
      },
      "imageLink": {
        "issueID": "nonWebLink",
        "quality": 1,
        "what": "Element has an href attribute set to an image file reference"
      },
      "linkUl": {
        "issueID": "linkIndication",
        "quality": 1,
        "what": "Inline links are not underlined"
      },
      "buttonMenu": {
        "issueID": "menuNavigation",
        "quality": 1,
        "what": "Menu buttons and menus behave nonstandardly"
      },
      "tabNav": {
        "issueID": "tabNavigation",
        "quality": 1,
        "what": "Nonstandard keyboard navigation among tabs"
      },
      "motion": {
        "issueID": "spontaneousMotion",
        "quality": 1,
        "what": "Change of visible content not requested by user"
      },
      "styleDiff": {
        "issueID": "inconsistentStyles",
        "quality": 1,
        "what": "Heading, link, and button style inconsistencies"
      },
      "zIndex": {
        "issueID": "zIndexNotZero",
        "quality": 1,
        "what": "Element has a nondefault z-index value"
      },
      "linkOldAtt": {
        "issueID": "attributeObsolete",
        "quality": 1,
        "what": "Element has a deprecated attribute"
      }
    },
    "variable": {}
  },
  "wave": {
    "invariant": {
      "alt_input_missing": {
        "issueID": "imageButtonNoText",
        "quality": 1,
        "what": "Image button has no alternative text"
      },
      "alt_missing": {
        "issueID": "imageNoText",
        "quality": 1,
        "what": "Text alternative is missing"
      },
      "alt_spacer_missing": {
        "issueID": "imageNoText",
        "quality": 1,
        "what": "Spacer image has no text alternative"
      },
      "alt_suspicious": {
        "issueID": "imageTextRisk",
        "quality": 1,
        "what": "Image text alternative is suspect"
      },
      "alt_duplicate": {
        "issueID": "imagesSameAlt",
        "quality": 1,
        "what": "Two images near each other have the same text alternative"
      },
      "alt_long": {
        "issueID": "imageTextLong",
        "quality": 1,
        "what": "Long text alternative"
      },
      "language_missing": {
        "issueID": "pageLanguage",
        "quality": 1,
        "what": "Language missing or invalid"
      },
      "plugin": {
        "issueID": "objectNoText",
        "quality": 1,
        "what": "An unidentified plugin is present"
      },
      "alt_map_missing": {
        "issueID": "imageMapNoText",
        "quality": 1,
        "what": "Image that has hot spots has no alt attribute"
      },
      "alt_area_missing": {
        "issueID": "imageMapAreaNoText",
        "quality": 1,
        "what": "Image map area has no alternative text"
      },
      "event_handler": {
        "issueID": "eventKeyboardRisk",
        "quality": 0.5,
        "what": "Device-dependent event handler"
      },
      "link_internal_broken": {
        "issueID": "internalLinkBroken",
        "quality": 1,
        "what": "Broken same-page link"
      },
      "label_orphaned": {
        "issueID": "labelBadID",
        "quality": 1,
        "what": "Orphaned form label"
      },
      "link_empty": {
        "issueID": "linkNoText",
        "quality": 1,
        "what": "Link contents not named"
      },
      "alt_link_missing": {
        "issueID": "imageLinkNoText",
        "quality": 1,
        "what": "Linked image has no text alternative"
      },
      "link_redundant": {
        "issueID": "linkPair",
        "quality": 1,
        "what": "Adjacent links go to the same URL"
      },
      "javascript_jumpmenu": {
        "issueID": "selectNavSurpriseRisk",
        "quality": 1,
        "what": "Selection change navigates to another page without notice?"
      },
      "button_empty": {
        "issueID": "buttonNoText",
        "quality": 1,
        "what": "button element is empty or has no value text"
      },
      "text_small": {
        "issueID": "fontSmall",
        "quality": 1,
        "what": "Text is very small"
      },
      "aria_reference_broken": {
        "issueID": "ariaReferenceBad",
        "quality": 1,
        "what": "Broken ARIA reference"
      },
      "contrast": {
        "issueID": "contrastAA",
        "quality": 1,
        "what": "Very low contrast"
      },
      "heading_empty": {
        "issueID": "headingEmpty",
        "quality": 1,
        "what": "Empty heading"
      },
      "alt_redundant": {
        "issueID": "imageTextRedundant",
        "quality": 1,
        "what": "Redundant text alternative"
      },
      "image_title": {
        "issueID": "decorativeTitle",
        "quality": 1,
        "what": "Image has a title attribute value but no alt value"
      },
      "title_redundant": {
        "issueID": "titleRedundant",
        "quality": 1,
        "what": "Title attribute text is the same as the text or alternative text"
      },
      "title_invalid": {
        "issueID": "pageTitleBad",
        "quality": 1,
        "what": "Missing or uninformative page title"
      },
      "heading_skipped": {
        "issueID": "headingLevelSkip",
        "quality": 1,
        "what": "Skipped heading level"
      },
      "heading_missing": {
        "issueID": "headingNone",
        "quality": 1,
        "what": "Page has no headings"
      },
      "h1_missing": {
        "issueID": "h1Not1",
        "quality": 1,
        "what": "Missing first level heading"
      },
      "text_justified": {
        "issueID": "justification",
        "quality": 1,
        "what": "Text is justified"
      },
      "heading_possible": {
        "issueID": "pseudoHeadingRisk",
        "quality": 1,
        "what": "Possible heading"
      },
      "underline": {
        "issueID": "pseudoLinkUnderlineRisk",
        "quality": 1,
        "what": "CSS underline on text that is not a link"
      },
      "list_possible": {
        "issueID": "pseudoListRisk",
        "quality": 1,
        "what": "List fails to be coded as such?"
      },
      "select_missing_label": {
        "issueID": "selectNoText",
        "quality": 1,
        "what": "Element is select but has no label"
      },
      "accesskey": {
        "issueID": "accessKeyDuplicate",
        "quality": 1,
        "what": "accesskey invalid"
      },
      "fieldset_missing": {
        "issueID": "fieldSetMissing",
        "quality": 1,
        "what": "fieldset element is missing"
      },
      "legend_missing": {
        "issueID": "legendMissing",
        "quality": 1,
        "what": "fieldset element has no legend element"
      },
      "table_layout": {
        "issueID": "layoutTable",
        "quality": 1,
        "what": "table element is misused to arrange content"
      },
      "table_caption_possible": {
        "issueID": "tableCaption",
        "quality": 1,
        "what": "table cell apparently misused as the table caption"
      },
      "th_empty": {
        "issueID": "tableHeaderEmpty",
        "quality": 1,
        "what": "Element not named"
      },
      "label_missing": {
        "issueID": "controlNoText",
        "quality": 1,
        "what": "form element has no label"
      },
      "label_title": {
        "issueID": "titleAsLabel",
        "quality": 1,
        "what": "Form control has a title but no label"
      },
      "region_missing": {
        "issueID": "noLandmarks",
        "quality": 1,
        "what": "Page has no regions or ARIA landmarks"
      },
      "label_multiple": {
        "issueID": "labelNot1",
        "quality": 1,
        "what": "Form control has more than one label associated with it"
      },
      "label_empty": {
        "issueID": "labelEmpty",
        "quality": 1,
        "what": "Empty form label"
      },
      "link_suspicious": {
        "issueID": "linkVaguenessRisk",
        "quality": 1,
        "what": "Suspicious link text"
      },
      "link_excel": {
        "issueID": "nonWebLink",
        "quality": 1,
        "what": "Link to Microsoft Excel workbook"
      },
      "link_pdf": {
        "issueID": "nonWebLink",
        "quality": 1,
        "what": "Link to PDF document"
      },
      "link_word": {
        "issueID": "nonWebLink",
        "quality": 1,
        "what": "Link to Microsoft Word document"
      },
      "aria_menu_broken": {
        "issueID": "menuItemless",
        "quality": 1,
        "what": "ARIA menu does not contain required menu items"
      },
      "blink": {
        "issueID": "blink",
        "quality": 1,
        "what": "Element, blink, is deprecated"
      },
      "meta_refresh": {
        "issueID": "refresh",
        "quality": 1,
        "what": "Page refreshes or redirects"
      },
      "tabindex": {
        "issueID": "tabIndexPositive",
        "quality": 1,
        "what": "tabIndex value positive"
      },
      "html5_video_audio": {
        "issueID": "videoCaptionRisk",
        "quality": 1,
        "what": "video or audio element has no or incorrect captions, transcript, or audio description?"
      },
      "audio_video": {
        "issueID": "videoCaptionRisk",
        "quality": 1,
        "what": "audio or video file or link has no or incorrect captions, transcript, or audio description?"
      },
      "youtube_video": {
        "issueID": "videoCaptionRisk",
        "quality": 1,
        "what": "YouTube video has no or incorrect captions?"
      },
      "link_skip_broken": {
        "issueID": "skipRepeatedContent",
        "quality": 1,
        "what": "Skip-navigation link has no target or is not keyboard accessible"
      },
      "noscript": {
        "issueID": "noScriptRisk",
        "quality": 1,
        "what": "noscript element fails to contain an accessible equivalent or alternative?"
      },
      "flash": {
        "issueID": "flash",
        "quality": 1,
        "what": "Flash content is present"
      },
      "longdesc": {
        "issueID": "attributeObsolete",
        "quality": 1,
        "what": "longdesc attribute is obsolete"
      },
      "longdesc_invalid": {
        "issueID": "parseError",
        "quality": 1,
        "what": "longdesc attribute has a value that is not a URL (and is obsolete)"
      }
    },
    "variable": {}
  }
};
