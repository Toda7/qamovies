var staticEducation = require('./staticEducation-po.js');
var login = require('../login/login-po');
var staticHome = require('../staticHome/staticHome-po.js');

describe('Provera Education strane i popuna forme', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Education stranu', function () {
        staticEducation.landOnEducation();
        browser.sleep(1000);
    });

    it('Otvori Intercom', function () {
        staticEducation.openIntercom();
        browser.sleep(5000);
    });

    it('Zatvori Intercom', function () {
        staticEducation.closeIntercom();
        browser.sleep(2000);
    });

    it('Provera Page Title-a', function () {
        staticEducation.checkPageTitle();
        browser.sleep(1000);
    });

    it('Provera texta ispod title-a', function () {
        staticEducation.checkTextBelowTitle();
        browser.sleep(1000);
    });

    it('Provera Texta u bullitima', function () {
        staticEducation.checkListedText();
        browser.sleep(1000);
    });

    it('Klik na View The Calendar button', function () {
        staticEducation.clickOnVTCButton();
        browser.sleep(1000);
    });

    it('Provera da li se ucitala Calendar strana', function () {
        staticEducation.checkCalendarURL();
        browser.sleep(1000);
    });

    it('Dolazak na Education stranu', function () {
        staticEducation.landOnEducation();
        browser.sleep(1000);
    });

    it('Provera Freedom and Flexibility Title-a', function () {
        staticEducation.checkFandFTitle();
        browser.sleep(1000);
    });

    it('Provera calendar slike', function () {
        staticEducation.checkCalendarImage();
        browser.sleep(1000);
    });

    it('Provera texta ispod calendar slike', function () {
        staticEducation.checkCalendarText();
        browser.sleep(1000);
    });

    it('Provera lightball slike', function () {
        staticEducation.checkLightballImage();
        browser.sleep(1000);
    });

    it('Provera texta ispod lightball slike', function () {
        staticEducation.checkLightballText();
        browser.sleep(1000);
    });

    it('Provera analitic slike', function () {
        staticEducation.checkAnaliticImage();
        browser.sleep(1000);
    });

    it('Provera texta ispod analitic slike', function () {
        staticEducation.checkAnaliticText();
        browser.sleep(1000);
    });

    it('Provera target slike', function () {
        staticEducation.checkTargetImage();
        browser.sleep(1000);
    });

    it('Provera texta ispod target slike', function () {
        staticEducation.checkTargetText();
        browser.sleep(1000);
    });

    it('Provera Topic Areas texta', function () {
        staticEducation.checkTopicAreasText();
        browser.sleep(1000);
    });

    it('Provera leve strane liste', function () {
        staticEducation.checkLeftList();
        browser.sleep(1000);
    });

    it('Provera desne strane liste', function () {
        staticEducation.checkRightList();
        browser.sleep(1000);
    });

    it('Provera How To Join texta', function () {
        staticEducation.checkHowToJoinText();
        browser.sleep(1000);
    });

    it('Provera purchase texta', function () {
        staticEducation.checkPurchaseText();
        browser.sleep(1000);
    });

    it('Provera table title-a', function () {
        staticEducation.checkTableTitle();
        browser.sleep(1000);
    });

    it('Provera prvog reda u tabeli', function () {
        staticEducation.checkTableRow1();
        browser.sleep(1000);
    });

    it('Provera drugog reda u tabeli', function () {
        staticEducation.checkTableRow2();
        browser.sleep(1000);
    });

    it('Provera treceg reda u tabeli', function () {
        staticEducation.checkTableRow3();
        browser.sleep(1000);
    });

    it('Provera cetvrtog reda u tabeli', function () {
        staticEducation.checkTableRow4();
        browser.sleep(1000);
    });

    it('Klik na On Demands Titles link u tabeli', function () {
        staticEducation.clickOnOnDemandTitles();
        browser.sleep(1000);
    });

    it('Provera da li se ucitala On Demands strana', function () {
        staticEducation.checkOnDemandTitlesURL();
        browser.sleep(3000);
        browser.navigate().back();
        browser.sleep(3000);
    });

    it('Klik na On Live Events link u tabeli', function () {
        staticEducation.clickOnOnLiveEvents();
        browser.sleep(1000);
    });

    it('Provera da li se ucitala Upcoming Webinars strana', function () {
        staticEducation.checkOnLiveEventsURL();
        browser.sleep(3000);
        browser.navigate().back();
        browser.sleep(3000);
    });

    it('Provera sadrzaja Asset size tabele', function () {
        staticEducation.checkAssetSizeTable();
        browser.sleep(1000);
    });

    it('Provera texta na dnu stranice', function () {
        staticEducation.checkBottomText();
        browser.sleep(1000);
    });

    it('Klik na LEARN MORE button', function () {
        staticEducation.clickOnLearnMoreButton();
        browser.sleep(1000);
    });

    it('Provera First Name labele iznad polja', function () {
        staticEducation.checkLabelForFirstNameField();
        browser.sleep(1000);
    });

    it('Provera Last Name labele iznad polja', function () {
        staticEducation.checkLabelForLastNameField();
        browser.sleep(1000);
    });

    it('Provera Email labele iznad polja', function () {
        staticEducation.checkLabelForEmailField();
        browser.sleep(1000);
    });

    it('Provera Financial Institution labele iznad polja', function () {
        staticEducation.checkLabelForFinancialField();
        browser.sleep(1000);
    });

    it('Provera Asset Size labele iznad polja', function () {
        staticEducation.checkLabelForAssetField();
        browser.sleep(1000);
    });

    it('Provera Phone Number labele iznad polja', function () {
        staticEducation.checkLabelForPhoneField();
        browser.sleep(1000);
    });

    it('Unosenje texta u first name field', function () {
        staticEducation.enterFirstName();
        browser.sleep(1000);
    });

    it('Unosenje texta u last name field', function () {
        staticEducation.enterLastName();
        browser.sleep(1000);
    });

    it('Unosenje texta u email field', function () {
        staticEducation.enterEmail();
        browser.sleep(1000);
    });

    it('Unosenje texta u financial institution field', function () {
        staticEducation.enterFinancial();
        browser.sleep(1000);
    });

    it('Unosenje texta u asset size field', function () {
        staticEducation.enterAsset();
        browser.sleep(1000);
    });

    it('Unosenje texta u phone field', function () {
        staticEducation.enterPhone();
        browser.sleep(1000);
    });

    it('Klik na Submit button', function () {
        staticEducation.clickOnSubmitButton();
        browser.sleep(5000);
    });

    it('Provera da li se ucitao Success url u produkciji', function () {
        staticEducation.checkSuccessURLOnProduction();
        browser.sleep(1000);
    });

    it('Provera success poruke', function () {
        staticEducation.checkSuccessMessage();
        browser.sleep(1000);
    });

    it('Dolazak na QA success stranu', function () {
        staticEducation.landOnQaSuccessPage();
        browser.sleep(1000);
    });

    it('Provera success poruke', function () {
        staticEducation.checkSuccessMessage();
        browser.sleep(1000);
    });

    it('Klik na Sign in button', function () {
        login.clickOnSignIn();
    });

    it('Provera da li smo landovali na sign in stranu', function () {
        login.checkSignInUrl();
        browser.sleep(2000);
    });

    it('Unosenje emaila', function () {
        login.enterEmail();
    });

    it('Unosenje lozinke', function () {
        login.enterPass();
    });

    it('Logovanje', function () {
        login.submit();
        browser.sleep(4000)
    });

    it('Dolazak na Education stranu', function () {
        staticEducation.landOnEducation();
        browser.sleep(1000);
    });

    it('Klik na LEARN MORE button', function () {
        staticEducation.clickOnLearnMoreButton();
        browser.sleep(1000);
    });

    it('Provera da li se u First name polju nalazi ime od logovanog usera', function () {
        staticEducation.checkIsFristNameInTheField();
        browser.sleep(1000);
    });

    it('Provera da li se u Last name polju nalazi ime od logovanog usera', function () {
        staticEducation.checkIsLastNameInTheField();
        browser.sleep(1000);
    });

    it('Provera da li se u Email polju nalazi email od logovanog usera', function () {
        staticEducation.checkIsEmailInTheField();
        browser.sleep(1000);
    });

    it('Provera da li se u Financial Institution polju nalazi naziv banke od logovanog usera', function () {
        staticEducation.checkIsFiInTheField();
        browser.sleep(1000);
    });

    it('Unosenje texta u asset size field', function () {
        staticEducation.enterAsset();
        browser.sleep(1000);
    });

    it('Unosenje texta u phone field', function () {
        staticEducation.enterPhone();
        browser.sleep(1000);
    });

    it('Klik na Submit button', function () {
        staticEducation.clickOnSubmitButton();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Success url u produkciji', function () {
        staticEducation.checkSuccessURLOnProduction();
        browser.sleep(1000);
    });

    it('Provera success poruke', function () {
        staticEducation.checkSuccessMessage();
        browser.sleep(1000);
    });

    it('Dolazak na QA success stranu', function () {
        staticEducation.landOnQaSuccessPage();
        browser.sleep(1000);
    });

    it('Provera success poruke', function () {
        staticEducation.checkSuccessMessage();
        browser.sleep(1000);
    });

    it('Dolazak na Education stranu', function () {
        staticEducation.landOnEducation();
        browser.sleep(1000);
    });

    it('Hover to open user drop menu', function () {
        staticHome.HoverToOpenUserDrop();
        browser.sleep(1000);
    });

    it('Click on Sign out link', function () {
        staticHome.clickOnSignOutLink();
        browser.sleep(2000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});