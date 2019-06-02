"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNameOfEmoji = exports.getMyShortcuts = exports.makeMarkdownFromRichText = exports.getMapsURL = exports.getLastImport = exports.getLatestLivePhotos = exports.getLatestBursts = exports.getLatestVideos = exports.getLatestScreenshots = exports.getLatestPhotos = exports.getType = exports.getName = exports.getItemFromList = exports.getCurrentIPAddress = exports.makeHTMLFromRichText = exports.getHalfwayPoint = exports.getFramesFromImage = exports.getDistance = exports.showDirections = exports.getDeviceDetails = exports.getCurrentSong = exports.getCurrentLocation = exports.getClipboard = exports.getBatteryLevel = exports.getDiffbotArticleFromWebPage = exports.getPlaylist = exports.generateQRCode = exports.formatNumber = exports.formatFileSize = exports.formatDate = exports.findReminders = exports.findPhotos = exports.findMusic = exports.filterLocations = exports.filterImages = exports.findHealthSamples = exports.filterFiles = exports.filterEventAttendees = exports.findContacts = exports.findCalendarEvents = exports.filterArticles = exports.getLinkToFile = exports.deleteFiles = exports.createFolder = exports.appendToFile = exports.selectMusic = exports.exitShortcut = exports.createNewNote = exports.getNoteLink = exports.getNotes = exports.deleteNotes = exports.appendToNote = exports.encodeMedia = exports.emailAddress = exports.getContentsOfURL = exports.saveFile = exports.getFile = exports.setDoNotDisturb = exports.dictionary = exports.dictateText = exports.detectLanguageWithMicrosoft = exports.getTextFromInput = exports.getPhoneNumbersFromInput = exports.getURLsFromInput = exports.getImagesFromInput = exports.getEmailAddressesFromInput = exports.getDictionaryFromInput = exports.getDatesFromInput = exports.getContactsFromInput = exports.getAddressesFromInput = exports.deletePhotos = exports.wait = exports.date = exports.count = exports.correctSpelling = exports.contacts = exports.conditional = exports.comment = exports.uploadToCloudApp = exports.clearUpNext = exports.chooseFromMenu = exports.chooseFromList = exports.setCellularData = exports.setBluetooth = exports.base64Encode = exports.markup = exports.askForInput = exports.addToVariable = exports.showAlert = exports.setAirplaneMode = exports.airDrop = exports.adjustDate = exports.addToPlaylist = exports.streetAddress = exports.addNewReminder = exports.addNewEvent = exports.addToUpNext = exports.addFrameToGIF = exports.call = exports.faceTime = void 0;
exports.setBrightness = exports.sendMessage = exports.sendEmail = exports.selectPhotos = exports.selectPhoneNumber = exports.selectEmailAddress = exports.selectContact = exports.searchWeb = exports.showInMaps = exports.searchLocalBusinesses = exports.searchITunesStore = exports.searchAppStore = exports.saveToPhotoAlbum = exports.runShortcut = exports.runScriptOverSSH = exports.runHomeScene = exports.runJavaScriptOnWebPage = exports.shareWithExtensions = exports.getRSSFeedsFromPage = exports.getItemsFromRSSFeed = exports.roundNumber = exports.repeatWithEach = exports.repeat = exports.removeReminders = exports.removeEvents = exports.recordAudio = exports.addToReadingList = exports.getDetailsOfWeatherConditions = exports.getDetailsOfUlyssesSheet = exports.getDetailsOfTrelloItem = exports.getDetailsOfSafariWebPage = exports.getDetailsOfReminders = exports.getDetailsOfMusic = exports.getDetailsOfLocations = exports.getDetailsOfITunesProduct = exports.getDetailsOfITunesArtist = exports.getDetailsOfImages = exports.getDetailsOfHealthSample = exports.getDetailsOfFiles = exports.getDetailsOfEventAttendees = exports.getDetailsOfContacts = exports.getDetailsOfCalendarEvents = exports.getDetailsOfDiffbotArticle = exports.getDetailsOfAppStoreApp = exports.print = exports.quickLook = exports.getItemsFromPocket = exports.addToPocket = exports.playSound = exports.playMusic = exports.getPinboardBookmarks = exports.addToPinboard = exports.phoneNumber = exports.pauseMusic = exports.overlayImage = exports.openXCallbackURL = exports.openURLs = exports.openIn = exports.openApp = exports.randomNumber = exports.number = exports.showNotification = exports.nothing = exports.measurement = exports.convertMeasurement = exports.calculate = exports.makeArchive = exports.makeVideoFromGIF = exports.makePDF = exports.makeGIF = exports.setLowPowerMode = exports.list = exports.getInstapaperBookmarks = exports.addToInstapaper = exports.uploadToImgur = exports.rotateImage = exports.resizeImage = exports.maskImage = exports.flipImage = exports.cropImage = exports.convertImage = exports.combineImages = exports.logWorkout = exports.logHealthSample = exports.generateHash = exports.continueShortcutInApp = exports.openInGoodReader = exports.searchGiphy = exports.getNetworkDetails = exports.getContentsOfWebPage = exports.getVariable = exports.getDictionaryValue = exports.getComponentOfURL = exports.getUpcomingReminders = exports.getUpcomingEvents = exports.getTravelTime = exports.getTimeBetweenDates = exports.text = exports.makeRichTextFromMarkdown = exports.makeRichTextFromHTML = void 0;
exports.addWunderlistTask = exports.postToWordPress = exports.setWiFi = exports.getWeatherForecast = exports.getCurrentWeather = exports.waitToReturn = exports.viewContentGraph = exports.vibrateDevice = exports.requestPayment = exports.sendPayment = exports.URLEncode = exports.getHeadersOfURL = exports.expandURL = exports.URL = exports.extractArchive = exports.postToTumblr = exports.trimMedia = exports.getTrelloItems = exports.createTrelloList = exports.addTrelloCard = exports.createTrelloBoard = exports.addTodoistItem = exports.translateTextWithMicrosoft = exports.splitText = exports.replaceText = exports.getGroupFromMatchedText = exports.matchText = exports.combineText = exports.changeCase = exports.takeVideo = exports.takePhoto = exports.calculateStatistics = exports.speakText = exports.skipForward = exports.skipBack = exports.showWebPage = exports.showResult = exports.showInITunesStore = exports.showInCalendar = exports.showInBlindSquare = exports.showDefinition = exports.share = exports.setVolume = exports.setVariable = exports.setDictionaryValue = exports.setName = exports.copyToClipboard = void 0;

var faceTime = _interopRequireWildcard(require("./faceTime"));

exports.faceTime = faceTime;

var call = _interopRequireWildcard(require("./call"));

exports.call = call;

var addFrameToGIF = _interopRequireWildcard(require("./addFrameToGIF"));

exports.addFrameToGIF = addFrameToGIF;

var addToUpNext = _interopRequireWildcard(require("./addToUpNext"));

exports.addToUpNext = addToUpNext;

var addNewEvent = _interopRequireWildcard(require("./addNewEvent"));

exports.addNewEvent = addNewEvent;

var addNewReminder = _interopRequireWildcard(require("./addNewReminder"));

exports.addNewReminder = addNewReminder;

var streetAddress = _interopRequireWildcard(require("./streetAddress"));

exports.streetAddress = streetAddress;

var addToPlaylist = _interopRequireWildcard(require("./addToPlaylist"));

exports.addToPlaylist = addToPlaylist;

var adjustDate = _interopRequireWildcard(require("./adjustDate"));

exports.adjustDate = adjustDate;

var airDrop = _interopRequireWildcard(require("./airDrop"));

exports.airDrop = airDrop;

var setAirplaneMode = _interopRequireWildcard(require("./setAirplaneMode"));

exports.setAirplaneMode = setAirplaneMode;

var showAlert = _interopRequireWildcard(require("./showAlert"));

exports.showAlert = showAlert;

var addToVariable = _interopRequireWildcard(require("./addToVariable"));

exports.addToVariable = addToVariable;

var askForInput = _interopRequireWildcard(require("./askForInput"));

exports.askForInput = askForInput;

var markup = _interopRequireWildcard(require("./markup"));

exports.markup = markup;

var base64Encode = _interopRequireWildcard(require("./base64Encode"));

exports.base64Encode = base64Encode;

var setBluetooth = _interopRequireWildcard(require("./setBluetooth"));

exports.setBluetooth = setBluetooth;

var setCellularData = _interopRequireWildcard(require("./setCellularData"));

exports.setCellularData = setCellularData;

var chooseFromList = _interopRequireWildcard(require("./chooseFromList"));

exports.chooseFromList = chooseFromList;

var chooseFromMenu = _interopRequireWildcard(require("./chooseFromMenu"));

exports.chooseFromMenu = chooseFromMenu;

var clearUpNext = _interopRequireWildcard(require("./clearUpNext"));

exports.clearUpNext = clearUpNext;

var uploadToCloudApp = _interopRequireWildcard(require("./uploadToCloudApp"));

exports.uploadToCloudApp = uploadToCloudApp;

var comment = _interopRequireWildcard(require("./comment"));

exports.comment = comment;

var conditional = _interopRequireWildcard(require("./conditional"));

exports.conditional = conditional;

var contacts = _interopRequireWildcard(require("./contacts"));

exports.contacts = contacts;

var correctSpelling = _interopRequireWildcard(require("./correctSpelling"));

exports.correctSpelling = correctSpelling;

var count = _interopRequireWildcard(require("./count"));

exports.count = count;

var date = _interopRequireWildcard(require("./date"));

exports.date = date;

var wait = _interopRequireWildcard(require("./wait"));

exports.wait = wait;

var deletePhotos = _interopRequireWildcard(require("./deletePhotos"));

exports.deletePhotos = deletePhotos;

var getAddressesFromInput = _interopRequireWildcard(require("./getAddressesFromInput"));

exports.getAddressesFromInput = getAddressesFromInput;

var getContactsFromInput = _interopRequireWildcard(require("./getContactsFromInput"));

exports.getContactsFromInput = getContactsFromInput;

var getDatesFromInput = _interopRequireWildcard(require("./getDatesFromInput"));

exports.getDatesFromInput = getDatesFromInput;

var getDictionaryFromInput = _interopRequireWildcard(require("./getDictionaryFromInput"));

exports.getDictionaryFromInput = getDictionaryFromInput;

var getEmailAddressesFromInput = _interopRequireWildcard(require("./getEmailAddressesFromInput"));

exports.getEmailAddressesFromInput = getEmailAddressesFromInput;

var getImagesFromInput = _interopRequireWildcard(require("./getImagesFromInput"));

exports.getImagesFromInput = getImagesFromInput;

var getURLsFromInput = _interopRequireWildcard(require("./getURLsFromInput"));

exports.getURLsFromInput = getURLsFromInput;

var getPhoneNumbersFromInput = _interopRequireWildcard(require("./getPhoneNumbersFromInput"));

exports.getPhoneNumbersFromInput = getPhoneNumbersFromInput;

var getTextFromInput = _interopRequireWildcard(require("./getTextFromInput"));

exports.getTextFromInput = getTextFromInput;

var detectLanguageWithMicrosoft = _interopRequireWildcard(require("./detectLanguageWithMicrosoft"));

exports.detectLanguageWithMicrosoft = detectLanguageWithMicrosoft;

var dictateText = _interopRequireWildcard(require("./dictateText"));

exports.dictateText = dictateText;

var dictionary = _interopRequireWildcard(require("./dictionary"));

exports.dictionary = dictionary;

var setDoNotDisturb = _interopRequireWildcard(require("./setDoNotDisturb"));

exports.setDoNotDisturb = setDoNotDisturb;

var getFile = _interopRequireWildcard(require("./getFile"));

exports.getFile = getFile;

var saveFile = _interopRequireWildcard(require("./saveFile"));

exports.saveFile = saveFile;

var getContentsOfURL = _interopRequireWildcard(require("./getContentsOfURL"));

exports.getContentsOfURL = getContentsOfURL;

var emailAddress = _interopRequireWildcard(require("./emailAddress"));

exports.emailAddress = emailAddress;

var encodeMedia = _interopRequireWildcard(require("./encodeMedia"));

exports.encodeMedia = encodeMedia;

var appendToNote = _interopRequireWildcard(require("./appendToNote"));

exports.appendToNote = appendToNote;

var deleteNotes = _interopRequireWildcard(require("./deleteNotes"));

exports.deleteNotes = deleteNotes;

var getNotes = _interopRequireWildcard(require("./getNotes"));

exports.getNotes = getNotes;

var getNoteLink = _interopRequireWildcard(require("./getNoteLink"));

exports.getNoteLink = getNoteLink;

var createNewNote = _interopRequireWildcard(require("./createNewNote"));

exports.createNewNote = createNewNote;

var exitShortcut = _interopRequireWildcard(require("./exitShortcut"));

exports.exitShortcut = exitShortcut;

var selectMusic = _interopRequireWildcard(require("./selectMusic"));

exports.selectMusic = selectMusic;

var appendToFile = _interopRequireWildcard(require("./appendToFile"));

exports.appendToFile = appendToFile;

var createFolder = _interopRequireWildcard(require("./createFolder"));

exports.createFolder = createFolder;

var deleteFiles = _interopRequireWildcard(require("./deleteFiles"));

exports.deleteFiles = deleteFiles;

var getLinkToFile = _interopRequireWildcard(require("./getLinkToFile"));

exports.getLinkToFile = getLinkToFile;

var filterArticles = _interopRequireWildcard(require("./filterArticles"));

exports.filterArticles = filterArticles;

var findCalendarEvents = _interopRequireWildcard(require("./findCalendarEvents"));

exports.findCalendarEvents = findCalendarEvents;

var findContacts = _interopRequireWildcard(require("./findContacts"));

exports.findContacts = findContacts;

var filterEventAttendees = _interopRequireWildcard(require("./filterEventAttendees"));

exports.filterEventAttendees = filterEventAttendees;

var filterFiles = _interopRequireWildcard(require("./filterFiles"));

exports.filterFiles = filterFiles;

var findHealthSamples = _interopRequireWildcard(require("./findHealthSamples"));

exports.findHealthSamples = findHealthSamples;

var filterImages = _interopRequireWildcard(require("./filterImages"));

exports.filterImages = filterImages;

var filterLocations = _interopRequireWildcard(require("./filterLocations"));

exports.filterLocations = filterLocations;

var findMusic = _interopRequireWildcard(require("./findMusic"));

exports.findMusic = findMusic;

var findPhotos = _interopRequireWildcard(require("./findPhotos"));

exports.findPhotos = findPhotos;

var findReminders = _interopRequireWildcard(require("./findReminders"));

exports.findReminders = findReminders;

var formatDate = _interopRequireWildcard(require("./formatDate"));

exports.formatDate = formatDate;

var formatFileSize = _interopRequireWildcard(require("./formatFileSize"));

exports.formatFileSize = formatFileSize;

var formatNumber = _interopRequireWildcard(require("./formatNumber"));

exports.formatNumber = formatNumber;

var generateQRCode = _interopRequireWildcard(require("./generateQRCode"));

exports.generateQRCode = generateQRCode;

var getPlaylist = _interopRequireWildcard(require("./getPlaylist"));

exports.getPlaylist = getPlaylist;

var getDiffbotArticleFromWebPage = _interopRequireWildcard(require("./getDiffbotArticleFromWebPage"));

exports.getDiffbotArticleFromWebPage = getDiffbotArticleFromWebPage;

var getBatteryLevel = _interopRequireWildcard(require("./getBatteryLevel"));

exports.getBatteryLevel = getBatteryLevel;

var getClipboard = _interopRequireWildcard(require("./getClipboard"));

exports.getClipboard = getClipboard;

var getCurrentLocation = _interopRequireWildcard(require("./getCurrentLocation"));

exports.getCurrentLocation = getCurrentLocation;

var getCurrentSong = _interopRequireWildcard(require("./getCurrentSong"));

exports.getCurrentSong = getCurrentSong;

var getDeviceDetails = _interopRequireWildcard(require("./getDeviceDetails"));

exports.getDeviceDetails = getDeviceDetails;

var showDirections = _interopRequireWildcard(require("./showDirections"));

exports.showDirections = showDirections;

var getDistance = _interopRequireWildcard(require("./getDistance"));

exports.getDistance = getDistance;

var getFramesFromImage = _interopRequireWildcard(require("./getFramesFromImage"));

exports.getFramesFromImage = getFramesFromImage;

var getHalfwayPoint = _interopRequireWildcard(require("./getHalfwayPoint"));

exports.getHalfwayPoint = getHalfwayPoint;

var makeHTMLFromRichText = _interopRequireWildcard(require("./makeHTMLFromRichText"));

exports.makeHTMLFromRichText = makeHTMLFromRichText;

var getCurrentIPAddress = _interopRequireWildcard(require("./getCurrentIPAddress"));

exports.getCurrentIPAddress = getCurrentIPAddress;

var getItemFromList = _interopRequireWildcard(require("./getItemFromList"));

exports.getItemFromList = getItemFromList;

var getName = _interopRequireWildcard(require("./getName"));

exports.getName = getName;

var getType = _interopRequireWildcard(require("./getType"));

exports.getType = getType;

var getLatestPhotos = _interopRequireWildcard(require("./getLatestPhotos"));

exports.getLatestPhotos = getLatestPhotos;

var getLatestScreenshots = _interopRequireWildcard(require("./getLatestScreenshots"));

exports.getLatestScreenshots = getLatestScreenshots;

var getLatestVideos = _interopRequireWildcard(require("./getLatestVideos"));

exports.getLatestVideos = getLatestVideos;

var getLatestBursts = _interopRequireWildcard(require("./getLatestBursts"));

exports.getLatestBursts = getLatestBursts;

var getLatestLivePhotos = _interopRequireWildcard(require("./getLatestLivePhotos"));

exports.getLatestLivePhotos = getLatestLivePhotos;

var getLastImport = _interopRequireWildcard(require("./getLastImport"));

exports.getLastImport = getLastImport;

var getMapsURL = _interopRequireWildcard(require("./getMapsURL"));

exports.getMapsURL = getMapsURL;

var makeMarkdownFromRichText = _interopRequireWildcard(require("./makeMarkdownFromRichText"));

exports.makeMarkdownFromRichText = makeMarkdownFromRichText;

var getMyShortcuts = _interopRequireWildcard(require("./getMyShortcuts"));

exports.getMyShortcuts = getMyShortcuts;

var getNameOfEmoji = _interopRequireWildcard(require("./getNameOfEmoji"));

exports.getNameOfEmoji = getNameOfEmoji;

var makeRichTextFromHTML = _interopRequireWildcard(require("./makeRichTextFromHTML"));

exports.makeRichTextFromHTML = makeRichTextFromHTML;

var makeRichTextFromMarkdown = _interopRequireWildcard(require("./makeRichTextFromMarkdown"));

exports.makeRichTextFromMarkdown = makeRichTextFromMarkdown;

var text = _interopRequireWildcard(require("./text"));

exports.text = text;

var getTimeBetweenDates = _interopRequireWildcard(require("./getTimeBetweenDates"));

exports.getTimeBetweenDates = getTimeBetweenDates;

var getTravelTime = _interopRequireWildcard(require("./getTravelTime"));

exports.getTravelTime = getTravelTime;

var getUpcomingEvents = _interopRequireWildcard(require("./getUpcomingEvents"));

exports.getUpcomingEvents = getUpcomingEvents;

var getUpcomingReminders = _interopRequireWildcard(require("./getUpcomingReminders"));

exports.getUpcomingReminders = getUpcomingReminders;

var getComponentOfURL = _interopRequireWildcard(require("./getComponentOfURL"));

exports.getComponentOfURL = getComponentOfURL;

var getDictionaryValue = _interopRequireWildcard(require("./getDictionaryValue"));

exports.getDictionaryValue = getDictionaryValue;

var getVariable = _interopRequireWildcard(require("./getVariable"));

exports.getVariable = getVariable;

var getContentsOfWebPage = _interopRequireWildcard(require("./getContentsOfWebPage"));

exports.getContentsOfWebPage = getContentsOfWebPage;

var getNetworkDetails = _interopRequireWildcard(require("./getNetworkDetails"));

exports.getNetworkDetails = getNetworkDetails;

var searchGiphy = _interopRequireWildcard(require("./searchGiphy"));

exports.searchGiphy = searchGiphy;

var openInGoodReader = _interopRequireWildcard(require("./openInGoodReader"));

exports.openInGoodReader = openInGoodReader;

var continueShortcutInApp = _interopRequireWildcard(require("./continueShortcutInApp"));

exports.continueShortcutInApp = continueShortcutInApp;

var generateHash = _interopRequireWildcard(require("./generateHash"));

exports.generateHash = generateHash;

var logHealthSample = _interopRequireWildcard(require("./logHealthSample"));

exports.logHealthSample = logHealthSample;

var logWorkout = _interopRequireWildcard(require("./logWorkout"));

exports.logWorkout = logWorkout;

var combineImages = _interopRequireWildcard(require("./combineImages"));

exports.combineImages = combineImages;

var convertImage = _interopRequireWildcard(require("./convertImage"));

exports.convertImage = convertImage;

var cropImage = _interopRequireWildcard(require("./cropImage"));

exports.cropImage = cropImage;

var flipImage = _interopRequireWildcard(require("./flipImage"));

exports.flipImage = flipImage;

var maskImage = _interopRequireWildcard(require("./maskImage"));

exports.maskImage = maskImage;

var resizeImage = _interopRequireWildcard(require("./resizeImage"));

exports.resizeImage = resizeImage;

var rotateImage = _interopRequireWildcard(require("./rotateImage"));

exports.rotateImage = rotateImage;

var uploadToImgur = _interopRequireWildcard(require("./uploadToImgur"));

exports.uploadToImgur = uploadToImgur;

var addToInstapaper = _interopRequireWildcard(require("./addToInstapaper"));

exports.addToInstapaper = addToInstapaper;

var getInstapaperBookmarks = _interopRequireWildcard(require("./getInstapaperBookmarks"));

exports.getInstapaperBookmarks = getInstapaperBookmarks;

var list = _interopRequireWildcard(require("./list"));

exports.list = list;

var setLowPowerMode = _interopRequireWildcard(require("./setLowPowerMode"));

exports.setLowPowerMode = setLowPowerMode;

var makeGIF = _interopRequireWildcard(require("./makeGIF"));

exports.makeGIF = makeGIF;

var makePDF = _interopRequireWildcard(require("./makePDF"));

exports.makePDF = makePDF;

var makeVideoFromGIF = _interopRequireWildcard(require("./makeVideoFromGIF"));

exports.makeVideoFromGIF = makeVideoFromGIF;

var makeArchive = _interopRequireWildcard(require("./makeArchive"));

exports.makeArchive = makeArchive;

var calculate = _interopRequireWildcard(require("./calculate"));

exports.calculate = calculate;

var convertMeasurement = _interopRequireWildcard(require("./convertMeasurement"));

exports.convertMeasurement = convertMeasurement;

var measurement = _interopRequireWildcard(require("./measurement"));

exports.measurement = measurement;

var nothing = _interopRequireWildcard(require("./nothing"));

exports.nothing = nothing;

var showNotification = _interopRequireWildcard(require("./showNotification"));

exports.showNotification = showNotification;

var number = _interopRequireWildcard(require("./number"));

exports.number = number;

var randomNumber = _interopRequireWildcard(require("./randomNumber"));

exports.randomNumber = randomNumber;

var openApp = _interopRequireWildcard(require("./openApp"));

exports.openApp = openApp;

var openIn = _interopRequireWildcard(require("./openIn"));

exports.openIn = openIn;

var openURLs = _interopRequireWildcard(require("./openURLs"));

exports.openURLs = openURLs;

var openXCallbackURL = _interopRequireWildcard(require("./openXCallbackURL"));

exports.openXCallbackURL = openXCallbackURL;

var overlayImage = _interopRequireWildcard(require("./overlayImage"));

exports.overlayImage = overlayImage;

var pauseMusic = _interopRequireWildcard(require("./pauseMusic"));

exports.pauseMusic = pauseMusic;

var phoneNumber = _interopRequireWildcard(require("./phoneNumber"));

exports.phoneNumber = phoneNumber;

var addToPinboard = _interopRequireWildcard(require("./addToPinboard"));

exports.addToPinboard = addToPinboard;

var getPinboardBookmarks = _interopRequireWildcard(require("./getPinboardBookmarks"));

exports.getPinboardBookmarks = getPinboardBookmarks;

var playMusic = _interopRequireWildcard(require("./playMusic"));

exports.playMusic = playMusic;

var playSound = _interopRequireWildcard(require("./playSound"));

exports.playSound = playSound;

var addToPocket = _interopRequireWildcard(require("./addToPocket"));

exports.addToPocket = addToPocket;

var getItemsFromPocket = _interopRequireWildcard(require("./getItemsFromPocket"));

exports.getItemsFromPocket = getItemsFromPocket;

var quickLook = _interopRequireWildcard(require("./quickLook"));

exports.quickLook = quickLook;

var print = _interopRequireWildcard(require("./print"));

exports.print = print;

var getDetailsOfAppStoreApp = _interopRequireWildcard(require("./getDetailsOfAppStoreApp"));

exports.getDetailsOfAppStoreApp = getDetailsOfAppStoreApp;

var getDetailsOfDiffbotArticle = _interopRequireWildcard(require("./getDetailsOfDiffbotArticle"));

exports.getDetailsOfDiffbotArticle = getDetailsOfDiffbotArticle;

var getDetailsOfCalendarEvents = _interopRequireWildcard(require("./getDetailsOfCalendarEvents"));

exports.getDetailsOfCalendarEvents = getDetailsOfCalendarEvents;

var getDetailsOfContacts = _interopRequireWildcard(require("./getDetailsOfContacts"));

exports.getDetailsOfContacts = getDetailsOfContacts;

var getDetailsOfEventAttendees = _interopRequireWildcard(require("./getDetailsOfEventAttendees"));

exports.getDetailsOfEventAttendees = getDetailsOfEventAttendees;

var getDetailsOfFiles = _interopRequireWildcard(require("./getDetailsOfFiles"));

exports.getDetailsOfFiles = getDetailsOfFiles;

var getDetailsOfHealthSample = _interopRequireWildcard(require("./getDetailsOfHealthSample"));

exports.getDetailsOfHealthSample = getDetailsOfHealthSample;

var getDetailsOfImages = _interopRequireWildcard(require("./getDetailsOfImages"));

exports.getDetailsOfImages = getDetailsOfImages;

var getDetailsOfITunesArtist = _interopRequireWildcard(require("./getDetailsOfITunesArtist"));

exports.getDetailsOfITunesArtist = getDetailsOfITunesArtist;

var getDetailsOfITunesProduct = _interopRequireWildcard(require("./getDetailsOfITunesProduct"));

exports.getDetailsOfITunesProduct = getDetailsOfITunesProduct;

var getDetailsOfLocations = _interopRequireWildcard(require("./getDetailsOfLocations"));

exports.getDetailsOfLocations = getDetailsOfLocations;

var getDetailsOfMusic = _interopRequireWildcard(require("./getDetailsOfMusic"));

exports.getDetailsOfMusic = getDetailsOfMusic;

var getDetailsOfReminders = _interopRequireWildcard(require("./getDetailsOfReminders"));

exports.getDetailsOfReminders = getDetailsOfReminders;

var getDetailsOfSafariWebPage = _interopRequireWildcard(require("./getDetailsOfSafariWebPage"));

exports.getDetailsOfSafariWebPage = getDetailsOfSafariWebPage;

var getDetailsOfTrelloItem = _interopRequireWildcard(require("./getDetailsOfTrelloItem"));

exports.getDetailsOfTrelloItem = getDetailsOfTrelloItem;

var getDetailsOfUlyssesSheet = _interopRequireWildcard(require("./getDetailsOfUlyssesSheet"));

exports.getDetailsOfUlyssesSheet = getDetailsOfUlyssesSheet;

var getDetailsOfWeatherConditions = _interopRequireWildcard(require("./getDetailsOfWeatherConditions"));

exports.getDetailsOfWeatherConditions = getDetailsOfWeatherConditions;

var addToReadingList = _interopRequireWildcard(require("./addToReadingList"));

exports.addToReadingList = addToReadingList;

var recordAudio = _interopRequireWildcard(require("./recordAudio"));

exports.recordAudio = recordAudio;

var removeEvents = _interopRequireWildcard(require("./removeEvents"));

exports.removeEvents = removeEvents;

var removeReminders = _interopRequireWildcard(require("./removeReminders"));

exports.removeReminders = removeReminders;

var repeat = _interopRequireWildcard(require("./repeat"));

exports.repeat = repeat;

var repeatWithEach = _interopRequireWildcard(require("./repeatWithEach"));

exports.repeatWithEach = repeatWithEach;

var roundNumber = _interopRequireWildcard(require("./roundNumber"));

exports.roundNumber = roundNumber;

var getItemsFromRSSFeed = _interopRequireWildcard(require("./getItemsFromRSSFeed"));

exports.getItemsFromRSSFeed = getItemsFromRSSFeed;

var getRSSFeedsFromPage = _interopRequireWildcard(require("./getRSSFeedsFromPage"));

exports.getRSSFeedsFromPage = getRSSFeedsFromPage;

var shareWithExtensions = _interopRequireWildcard(require("./shareWithExtensions"));

exports.shareWithExtensions = shareWithExtensions;

var runJavaScriptOnWebPage = _interopRequireWildcard(require("./runJavaScriptOnWebPage"));

exports.runJavaScriptOnWebPage = runJavaScriptOnWebPage;

var runHomeScene = _interopRequireWildcard(require("./runHomeScene"));

exports.runHomeScene = runHomeScene;

var runScriptOverSSH = _interopRequireWildcard(require("./runScriptOverSSH"));

exports.runScriptOverSSH = runScriptOverSSH;

var runShortcut = _interopRequireWildcard(require("./runShortcut"));

exports.runShortcut = runShortcut;

var saveToPhotoAlbum = _interopRequireWildcard(require("./saveToPhotoAlbum"));

exports.saveToPhotoAlbum = saveToPhotoAlbum;

var searchAppStore = _interopRequireWildcard(require("./searchAppStore"));

exports.searchAppStore = searchAppStore;

var searchITunesStore = _interopRequireWildcard(require("./searchITunesStore"));

exports.searchITunesStore = searchITunesStore;

var searchLocalBusinesses = _interopRequireWildcard(require("./searchLocalBusinesses"));

exports.searchLocalBusinesses = searchLocalBusinesses;

var showInMaps = _interopRequireWildcard(require("./showInMaps"));

exports.showInMaps = showInMaps;

var searchWeb = _interopRequireWildcard(require("./searchWeb"));

exports.searchWeb = searchWeb;

var selectContact = _interopRequireWildcard(require("./selectContact"));

exports.selectContact = selectContact;

var selectEmailAddress = _interopRequireWildcard(require("./selectEmailAddress"));

exports.selectEmailAddress = selectEmailAddress;

var selectPhoneNumber = _interopRequireWildcard(require("./selectPhoneNumber"));

exports.selectPhoneNumber = selectPhoneNumber;

var selectPhotos = _interopRequireWildcard(require("./selectPhotos"));

exports.selectPhotos = selectPhotos;

var sendEmail = _interopRequireWildcard(require("./sendEmail"));

exports.sendEmail = sendEmail;

var sendMessage = _interopRequireWildcard(require("./sendMessage"));

exports.sendMessage = sendMessage;

var setBrightness = _interopRequireWildcard(require("./setBrightness"));

exports.setBrightness = setBrightness;

var copyToClipboard = _interopRequireWildcard(require("./copyToClipboard"));

exports.copyToClipboard = copyToClipboard;

var setName = _interopRequireWildcard(require("./setName"));

exports.setName = setName;

var setDictionaryValue = _interopRequireWildcard(require("./setDictionaryValue"));

exports.setDictionaryValue = setDictionaryValue;

var setVariable = _interopRequireWildcard(require("./setVariable"));

exports.setVariable = setVariable;

var setVolume = _interopRequireWildcard(require("./setVolume"));

exports.setVolume = setVolume;

var share = _interopRequireWildcard(require("./share"));

exports.share = share;

var showDefinition = _interopRequireWildcard(require("./showDefinition"));

exports.showDefinition = showDefinition;

var showInBlindSquare = _interopRequireWildcard(require("./showInBlindSquare"));

exports.showInBlindSquare = showInBlindSquare;

var showInCalendar = _interopRequireWildcard(require("./showInCalendar"));

exports.showInCalendar = showInCalendar;

var showInITunesStore = _interopRequireWildcard(require("./showInITunesStore"));

exports.showInITunesStore = showInITunesStore;

var showResult = _interopRequireWildcard(require("./showResult"));

exports.showResult = showResult;

var showWebPage = _interopRequireWildcard(require("./showWebPage"));

exports.showWebPage = showWebPage;

var skipBack = _interopRequireWildcard(require("./skipBack"));

exports.skipBack = skipBack;

var skipForward = _interopRequireWildcard(require("./skipForward"));

exports.skipForward = skipForward;

var speakText = _interopRequireWildcard(require("./speakText"));

exports.speakText = speakText;

var calculateStatistics = _interopRequireWildcard(require("./calculateStatistics"));

exports.calculateStatistics = calculateStatistics;

var takePhoto = _interopRequireWildcard(require("./takePhoto"));

exports.takePhoto = takePhoto;

var takeVideo = _interopRequireWildcard(require("./takeVideo"));

exports.takeVideo = takeVideo;

var changeCase = _interopRequireWildcard(require("./changeCase"));

exports.changeCase = changeCase;

var combineText = _interopRequireWildcard(require("./combineText"));

exports.combineText = combineText;

var matchText = _interopRequireWildcard(require("./matchText"));

exports.matchText = matchText;

var getGroupFromMatchedText = _interopRequireWildcard(require("./getGroupFromMatchedText"));

exports.getGroupFromMatchedText = getGroupFromMatchedText;

var replaceText = _interopRequireWildcard(require("./replaceText"));

exports.replaceText = replaceText;

var splitText = _interopRequireWildcard(require("./splitText"));

exports.splitText = splitText;

var translateTextWithMicrosoft = _interopRequireWildcard(require("./translateTextWithMicrosoft"));

exports.translateTextWithMicrosoft = translateTextWithMicrosoft;

var addTodoistItem = _interopRequireWildcard(require("./addTodoistItem"));

exports.addTodoistItem = addTodoistItem;

var createTrelloBoard = _interopRequireWildcard(require("./createTrelloBoard"));

exports.createTrelloBoard = createTrelloBoard;

var addTrelloCard = _interopRequireWildcard(require("./addTrelloCard"));

exports.addTrelloCard = addTrelloCard;

var createTrelloList = _interopRequireWildcard(require("./createTrelloList"));

exports.createTrelloList = createTrelloList;

var getTrelloItems = _interopRequireWildcard(require("./getTrelloItems"));

exports.getTrelloItems = getTrelloItems;

var trimMedia = _interopRequireWildcard(require("./trimMedia"));

exports.trimMedia = trimMedia;

var postToTumblr = _interopRequireWildcard(require("./postToTumblr"));

exports.postToTumblr = postToTumblr;

var extractArchive = _interopRequireWildcard(require("./extractArchive"));

exports.extractArchive = extractArchive;

var URL = _interopRequireWildcard(require("./URL"));

exports.URL = URL;

var expandURL = _interopRequireWildcard(require("./expandURL"));

exports.expandURL = expandURL;

var getHeadersOfURL = _interopRequireWildcard(require("./getHeadersOfURL"));

exports.getHeadersOfURL = getHeadersOfURL;

var URLEncode = _interopRequireWildcard(require("./URLEncode"));

exports.URLEncode = URLEncode;

var sendPayment = _interopRequireWildcard(require("./sendPayment"));

exports.sendPayment = sendPayment;

var requestPayment = _interopRequireWildcard(require("./requestPayment"));

exports.requestPayment = requestPayment;

var vibrateDevice = _interopRequireWildcard(require("./vibrateDevice"));

exports.vibrateDevice = vibrateDevice;

var viewContentGraph = _interopRequireWildcard(require("./viewContentGraph"));

exports.viewContentGraph = viewContentGraph;

var waitToReturn = _interopRequireWildcard(require("./waitToReturn"));

exports.waitToReturn = waitToReturn;

var getCurrentWeather = _interopRequireWildcard(require("./getCurrentWeather"));

exports.getCurrentWeather = getCurrentWeather;

var getWeatherForecast = _interopRequireWildcard(require("./getWeatherForecast"));

exports.getWeatherForecast = getWeatherForecast;

var setWiFi = _interopRequireWildcard(require("./setWiFi"));

exports.setWiFi = setWiFi;

var postToWordPress = _interopRequireWildcard(require("./postToWordPress"));

exports.postToWordPress = postToWordPress;

var addWunderlistTask = _interopRequireWildcard(require("./addWunderlistTask"));

exports.addWunderlistTask = addWunderlistTask;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }