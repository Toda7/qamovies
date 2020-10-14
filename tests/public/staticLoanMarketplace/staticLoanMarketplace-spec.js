var staticLoanMarketplace = require('./staticLoanMarketplace-po.js');
var login = require('../login/login-po');
var staticHome = require('../staticHome/staticHome-po.js');

describe('Provera Loan Marketplace strane i popuna forme', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Loan Marketplace stranu', function () {
        staticLoanMarketplace.landOnLoanMarkPage();
        browser.sleep(4000);
    });

    it('Otvori Intercom', function(){
        staticLoanMarketplace.openIntercom();
        browser.sleep(1000)
    });

    it('Zatvori Intercom', function(){
        staticLoanMarketplace.closeIntercom();
        browser.sleep(1000)
    });

    it('Provera Page Title-a', function(){
        staticLoanMarketplace.checkPageTitle();
        browser.sleep(1000)
    });

    it('Provera texta na vrhu strane', function(){
        staticLoanMarketplace.checkTopText();
        browser.sleep(1000)
    });

    it('Provera videa na strani', function(){
        staticLoanMarketplace.checkVideo();
        browser.sleep(1000)
    });

    it('Provera prve ikonice u green section-u', function(){
        staticLoanMarketplace.checkIconScale();
        browser.sleep(1000)
    });

    it('Provera texta ispod prve ikonice u green section-u', function(){
        staticLoanMarketplace.checkScaleText();
        browser.sleep(1000)
    });

    it('Provera druge ikonice u green section-u', function(){
        staticLoanMarketplace.checkIconCash();
        browser.sleep(1000)
    });

    it('Provera texta ispod druge ikonice u green section-u', function(){
        staticLoanMarketplace.checkCashText();
        browser.sleep(1000)
    });

    it('Provera trece ikonice u green section-u', function(){
        staticLoanMarketplace.checkIconPie();
        browser.sleep(1000)
    });

    it('Provera texta ispod trece ikonice u green section-u', function(){
        staticLoanMarketplace.checkPieText();
        browser.sleep(1000)
    });

    it('Provera chart slike', function(){
        staticLoanMarketplace.checkChartImage();
        browser.sleep(1000)
    });

    it('Provera texta uz chart sliku', function(){
        staticLoanMarketplace.checkChartText();
        browser.sleep(1000)
    });

    it('Provera texta na dnu stranice', function(){
        staticLoanMarketplace.checkBottomText();
        browser.sleep(1000)
    });

    it('Provera button-a na dnu stranice', function(){
        staticLoanMarketplace.checkBottomButton();
        browser.sleep(1000)
    });

    it('Klik na LEARN MORE button', function(){
        staticLoanMarketplace.clickOnButton();
        browser.sleep(1000)
    });

    it('Provera First Name labele iznad polja', function(){
        staticLoanMarketplace.checkLabelForFirstNameField();
        browser.sleep(1000)
    });

    it('Provera Last Name labele iznad polja', function(){
        staticLoanMarketplace.checkLabelForLastNameField();
        browser.sleep(1000)
    });

    it('Provera Email labele iznad polja', function(){
        staticLoanMarketplace.checkLabelForEmailField();
        browser.sleep(1000)
    });

    it('Provera Company labele iznad polja', function(){
        staticLoanMarketplace.checkLabelForCompanyField();
        browser.sleep(1000)
    });

    it('Provera State labele iznad polja', function(){
        staticLoanMarketplace.checkLabelForStateField();
        browser.sleep(1000)
    });

    it('Provera Phone labele iznad polja', function(){
        staticLoanMarketplace.checkLabelForPhoneField();
        browser.sleep(1000)
    });

    it('Unosenje texta u first name field', function(){
        staticLoanMarketplace.enterFirstName();
        browser.sleep(1000)
    });

    it('Unosenje texta u last name field', function(){
        staticLoanMarketplace.enterLastName();
        browser.sleep(1000)
    });

    it('Unosenje texta u email field', function(){
        staticLoanMarketplace.enterEmail();
        browser.sleep(1000)
    });

    it('Unosenje texta u company field', function(){
        staticLoanMarketplace.enterCompany();
        browser.sleep(1000)
    });

    it('Unosenje texta u state field', function(){
        staticLoanMarketplace.enterState();
        browser.sleep(1000)
    });

    it('Unosenje broja u phone field', function(){
        staticLoanMarketplace.enterPhone();
        browser.sleep(1000)
    });

    it('Klik na Buyer radio button', function(){
        staticLoanMarketplace.clickOnBuyer();
        browser.sleep(5000)
    });

    it('Klik na Submit button', function(){
        staticLoanMarketplace.clickOnSubmitButton();
        browser.sleep(1000)
    });

    it('Provera da li se ucitao Success url u produkciji', function(){
        staticLoanMarketplace.checkSuccessMessage();
        browser.sleep(1000)
    });

    it('Provera success poruke', function(){
        staticLoanMarketplace.checkSuccessMessage();
        browser.sleep(1000)
    });

    it('Dolazak na QA success stranu', function(){
        staticLoanMarketplace.landOnQaSuccessPage();
        browser.sleep(1000)
    });

    it('Provera success poruke', function(){
        staticLoanMarketplace.checkSuccessMessage();
        browser.sleep(1000)
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

    it('Dolazak na Loan Marketplace stranu', function () {
        staticLoanMarketplace.landOnLoanMarkPage();
        browser.sleep(4000);
    });

    it('Klik na LEARN MORE button', function(){
        staticLoanMarketplace.clickOnButton();
        browser.sleep(1000)
    });

    it('Provera da li se u First name polju nalazi ime logovanog usera', function(){
        staticLoanMarketplace.checkIsFristNameInTheField();
        browser.sleep(1000)
    });

    it('Provera da li se u Last name polju nalazi ime logovanog usera', function(){
        staticLoanMarketplace.checkIsLastNameInTheField();
        browser.sleep(1000)
    });

    it('Provera da li se u Email polju nalazi email logovanog usera', function(){
        staticLoanMarketplace.checkIsEmailInTheField();
        browser.sleep(1000)
    });

    it('Provera da li se u Company polju nalazi company logovanog usera', function(){
        staticLoanMarketplace.checkIsCompanyInTheField();
        browser.sleep(1000)
    });

    it('Provera da li se u State polju nalazi state logovanog usera', function(){
        staticLoanMarketplace.checkIsStateInTheField();
        browser.sleep(1000)
    });

    it('Unosenje broja u phone field', function(){
        staticLoanMarketplace.enterPhone();
        browser.sleep(1000)
    });

    it('Klik na Seller radio button', function(){
        staticLoanMarketplace.clickOnSeller();
        browser.sleep(1000)
    });

    it('Klik na Submit button', function(){
        staticLoanMarketplace.clickOnSubmitButton();
        browser.sleep(1000)
    });

    it('Provera da li se ucitao Success url u produkciji', function(){
        staticLoanMarketplace.checkSuccessMessage();
        browser.sleep(1000)
    });

    it('Provera success poruke', function(){
        staticLoanMarketplace.checkSuccessMessage();
        browser.sleep(1000)
    });

    it('Dolazak na QA success stranu', function(){
        staticLoanMarketplace.landOnQaSuccessPage();
        browser.sleep(1000)
    });

    it('Provera success poruke', function(){
        staticLoanMarketplace.checkSuccessMessage();
        browser.sleep(1000)
    });

    it('Dolazak na Loan Marketplace stranu', function () {
        staticLoanMarketplace.landOnLoanMarkPage();
        browser.sleep(4000);
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