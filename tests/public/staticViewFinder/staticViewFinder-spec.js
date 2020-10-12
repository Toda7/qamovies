var staticPremium = require('../staticPremium/staticPremium-po.js');
var login = require('../login/login-po.js');
var staticTermsOfService = require('../staticTermsOfService/staticTermsOfService-po');
var staticViewFinder = require('../staticViewFinder/staticViewFinder-po.js');

describe('Public "View Finder" strana', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na View Finder stranu', function () {
        staticViewFinder.landOnViewFinderPage();
        browser.sleep(5000);
    });

    it('Otvori intercom', function(){
        staticTermsOfService.openIntercom();
        browser.sleep(2000);
    });

    it('Zatvori intercom', function(){
        staticTermsOfService.closeIntercom();
    });

    it('Cekiranje Texta na strani 1', function () {
        staticViewFinder.checkText1();
    });

    it('Cekiranje Texta na strani 2', function () {
        staticViewFinder.checkText2();
    });

    it('Cekiranje Texta na strani 3', function () {
        staticViewFinder.checkText3();
    });

    it('Cekiranje Texta na strani 4', function () {
        staticViewFinder.checkText4();
    });

    it('Cekiranje Texta na strani 5', function () {
        staticViewFinder.checkText5();
    });

    it('Klik na Get started today (otvaranje forme)', function () {
        staticViewFinder.clickOnGetStartedToday();
        browser.sleep(3000);
    });

    it('Unosenje First Name', function () {
        staticPremium.enterFirstName();
        browser.sleep(1000);
    });

    it('Unosenje Last Name', function () {
        staticPremium.enterLastName();
        browser.sleep(1000);
    });

    it('Unosenje Email-a', function () {
        staticPremium.enterEmail();
        browser.sleep(1000);
    });

    it('Unosenje Company name', function () {
        staticPremium.enterCompanyName();
        browser.sleep(1000);
    });

    it('Unosenje telefona', function () {
        staticPremium.enterPhoneNumber();
        browser.sleep(1000);
    });

    it('Klik na Submit', function () {
        staticPremium.clickOnSubmit();
        browser.sleep(5000);
    });

    it('Cekiranje Sucess poruke 1 na Produkciji', function () {
        staticViewFinder.checkSucessMessage1();
        browser.sleep(2000);
    });

    it('Cekiranje Sucess poruke 2 na Produkciji', function () {
        staticViewFinder.checkSucessMessage2();
        browser.sleep(2000);
    });

    it('Back to QA', function () {
        staticViewFinder.backToQa();
        browser.sleep(3000);
    });

    it('Cekiranje Sucess poruke 1', function () {
        staticViewFinder.checkSucessMessage1();
        browser.sleep(1000);
    });

    it('Cekiranje Sucess poruke 2', function () {
        staticViewFinder.checkSucessMessage2();
        browser.sleep(1000);
    });

    it('Dolazak na View Finder stranu', function () {
        staticViewFinder.landOnViewFinderPage();
        browser.sleep(3000);
    });

    it('Sign in', function(){
        login.clickOnSignIn();
    });

    it('Provera da li smo landovali na sign in stranu', function(){
        login.checkSignInUrl();
        browser.sleep(2000);
    });

    it('Unosenje emaila', function(){
        login.enterEmail();
        browser.sleep(1000);
    });

    it('Unosenje lozinke', function(){
        login.enterPass();
        browser.sleep(1000);
    });

    it('Logovanje', function(){
        login.submit();
        browser.sleep(5000);
    });

    it('Klik na Get started today (otvaranje forme)', function () {
        staticViewFinder.clickOnGetStartedToday();
        browser.sleep(3000);
    });

    it('Cekiranje First Name', function () {
        staticPremium.checkInputFieldFirstName();
        browser.sleep(1000);
    });

    it('Cekiranje Last Name', function () {
        staticPremium.checkInputFieldLastName();
        browser.sleep(1000);
    });

    it('Cekiranje Email-a', function () {
        staticPremium.checkInputFieldEmail();
        browser.sleep(1000);
    });

    it('Cekiranje prepopulated Company', function () {
        staticPremium.checkInputFieldCompany();
        browser.sleep(1000);
    });

    it('Unosenje telefona', function () {
        staticPremium.enterPhoneNumber();
        browser.sleep(1000);
    });

    it('Klik na Submit', function () {
        staticPremium.clickOnSubmit();
        browser.sleep(5000);
    });

    it('Cekiranje Sucess poruke 1 na Produkciji', function () {
        staticViewFinder.checkSucessMessage1();
        browser.sleep(1000);
    });

    it('Cekiranje Sucess poruke 2 na Produkciji', function () {
        staticViewFinder.checkSucessMessage2();
        browser.sleep(1000);
    });

    it('Back to QA', function () {
        staticViewFinder.backToQa();
        browser.sleep(3000);
    });

    it('Cekiranje Sucess poruke 1 QA', function () {
        staticViewFinder.checkSucessMessage1();
        browser.sleep(1000);
    });

    it('Cekiranje Sucess poruke 2 QA', function () {
        staticViewFinder.checkSucessMessage2();
        browser.sleep(1000);
    });

    it('Dolazak na View Finder stranu', function () {
        staticViewFinder.landOnViewFinderPage();
        browser.sleep(3000);
    });

    it('Klik na user menu', function () {
        staticPremium.clickOnUserMenu();
    });

    it('Klik na Sign out', function () {
        staticPremium.clickOnSignOut();
        browser.sleep(2000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
}); 