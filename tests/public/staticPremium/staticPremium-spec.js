var staticPremium = require('../staticPremium/staticPremium-po.js');
var login = require('../login/login-po.js');
var staticTermsOfService = require('../staticTermsOfService/staticTermsOfService-po');

describe('Public "Premium" strana', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Premium stranu', function () {
        staticPremium.landOnPremiumPage();
        browser.sleep(5000);
    });

    it('Otvori intercom', function(){
        staticTermsOfService.openIntercom();
        browser.sleep(2000);
    });

    it('Zatvori intercom', function(){
        staticTermsOfService.closeIntercom();
    });

    it('Cekiranje CBANC Premium sekcije', function () {
        staticPremium.checkCbancPremiumtext();
    });

    it('Cekiranje Benefits sekcije', function () {
        staticPremium.checkBenefitsTitle();
    });

    it('Cekiranje C-Level Title', function () {
        staticPremium.checkClevelTitle();
    });

    it('Cekiranje Managment Title', function () {
        staticPremium.checkManagmentTitle();
    });

    it('Cekiranje Premium Solutions Title', function () {
        staticPremium.checkSolutionsTitle();
    });

    it('Cekiranje Workspace Sekcije', function () {
        staticPremium.checkWorkspaceText();
    });

    it('Cekiranje Risk A. Solutions Sekcije', function () {
        staticPremium.checkRiskACatalogText();
    });

    it('Cekiranje Policy Procedure sekcije', function () {
        staticPremium.checkPolicyProcedureText();
    });

    it('Cekiranje Workspace Avatara', function () {
        staticPremium.checkWorkspaceAvatar();
    });

    it('Cekiranje Risk assessment Avatara', function () {
        staticPremium.checkRaSolutionsAvatar();
    });    

    it('Cekiranje Policy Procedure Avatara', function () {
        staticPremium.checkPolicyProcedureAvatar();
    });

    it('Cekiranje VM Avatara', function () {
        staticPremium.checkVmAvatar();
    });

    it('Cekiranje Peer A. Avatara', function () {
        staticPremium.checkPeerAAvatar();
    });

    it('Cekiranje All Access Avatara', function () {
        staticPremium.checkAllAccessAvatar();
    });


    it('Klik na Show me how (otvaranje forme)', function () {
        staticPremium.clickOnShowMeHow();
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
        staticPremium.checkSucessMessage1();
        browser.sleep(3000);
    });

    it('Cekiranje Sucess poruke 2 na Produkciji', function () {
        staticPremium.checkSucessMessage2();
        browser.sleep(2000);
    });

    it('Back to QA', function () {
        staticPremium.backToQa();
        browser.sleep(3000);
    });

    it('Cekiranje Sucess poruke 1', function () {
        staticPremium.checkSucessMessage1();
        browser.sleep(1000);
    });

    it('Cekiranje Sucess poruke 2', function () {
        staticPremium.checkSucessMessage2();
        browser.sleep(1000);
    });

    it('Dolazak na Premium stranu', function () {
        staticPremium.landOnPremiumPage();
        browser.sleep(5000);
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

    it('Klik na Request a Demo (otvaranje forme)', function () {
        staticPremium.clickOnRequestAdemo();
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
        staticPremium.checkSucessMessage1();
        browser.sleep(1000);
    });

    it('Cekiranje Sucess poruke 2 na Produkciji', function () {
        staticPremium.checkSucessMessage2();
        browser.sleep(1000);
    });

    it('Back to QA', function () {
        staticPremium.backToQa();
        browser.sleep(3000);
    });

    it('Cekiranje Sucess poruke 1', function () {
        staticPremium.checkSucessMessage1();
        browser.sleep(1000);
    });

    it('Cekiranje Sucess poruke 2', function () {
        staticPremium.checkSucessMessage2();
        browser.sleep(1000);
    });

    it('Dolazak na Premium stranu', function () {
        staticPremium.landOnPremiumPage();
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