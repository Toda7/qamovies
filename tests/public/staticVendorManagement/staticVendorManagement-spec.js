var register = require('../registracija/registracija-po');
var login = require('../login/login-po.js');
var vm = require('./staticVendorManagement-po');
var staticVendorManagement = require('./staticVendorManagement-po');
var staticPremium = require('../staticPremium/staticPremium-po.js');
var staticTermsOfService = require('../staticTermsOfService/staticTermsOfService-po');

describe('Public vendor management strana', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
}); 

    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });
    
    it('Hover to open on drop menu', function(){
        staticVendorManagement.HoverToOpenDrop();
    });  

    it('Klik na VM link', function(){
        vm.clickOnLink();
    });

    it('Provera VM URL-a', function(){
        vm.checkVmUrl();
    }); 

    it('Provera da li se ucitao page title', function(){
        vm.checkVMPageTitle();
    });

    it('Provera da li se ucitao demo button', function(){
        vm.checkDemoButton();
    });

    it('Provera da li se ucitala Premium ad', function(){
        vm.checkPremiumAd();
    });

    it('Otvori intercom', function(){
        staticTermsOfService.openIntercom();
        browser.sleep(2000);
    });

    it('Zatvori intercom', function(){
        staticTermsOfService.closeIntercom();
    });

    it('Cekiranje Texta na strani 1/5', function () {
        staticVendorManagement.checkText1();
    });

    it('Cekiranje Texta na strani 2/5', function () {
        staticVendorManagement.checkText2();
    });

    it('Cekiranje Texta na strani 3/5', function () {
        staticVendorManagement.checkText3();
    });

    it('Klik na Show me how (otvaranje forme)', function () {
        staticVendorManagement.clickRequestAdemo();
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

    it('Unosenje telefona', function () {
        staticVendorManagement.enterPhoneNumber();
        browser.sleep(1000);
    });

    it('Unosenje Company name', function () {
        staticPremium.enterCompanyName();
        browser.sleep(1000);
    });

    it('Klik na Send to CBANC', function () {
        staticVendorManagement.clickOnSendToCbanc();
        browser.sleep(5000);
    });

    it('Cekiranje Sucess poruke na Produkciji', function () {
        staticVendorManagement.checkSucessMessageqa();
        browser.sleep(2000);
    });

    it('Back to QA', function () {
        staticVendorManagement.backToQa();
        browser.sleep(2000);
    });

    it('Cekiranje Sucess poruke na QA', function () {
        staticVendorManagement.checkSucessMessageqa();
        browser.sleep(2000);
    });

    it('Dolazak na Vendor Managment stranu', function () {
        staticVendorManagement.landOnVendorManagment();
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

    it('Klik na Show me how (otvaranje forme)', function () {
        staticVendorManagement.clickRequestAdemo();
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

    it('Unosenje telefona', function () {
        staticVendorManagement.enterPhoneNumber();
        browser.sleep(1000);
    });


    it('Cekiranje prepopulated Company', function () {
        staticPremium.checkInputFieldCompany();
        browser.sleep(1000);
    });

    it('Klik na Send to CBANC', function () {
        staticVendorManagement.clickOnSendToCbanc();
        browser.sleep(5000);
    });

    it('Cekiranje Sucess poruke na Produkciji', function () {
        staticVendorManagement.checkSucessMessageqa();
        browser.sleep(2000);
    });

    it('Back to QA', function () {
        staticVendorManagement.backToQa();
        browser.sleep(2000);
    });

    it('Cekiranje Sucess poruke na QA', function () {
        staticVendorManagement.checkSucessMessageqa();
        browser.sleep(2000);
    });

    it('Dolazak na Vendor Managment stranu', function () {
        staticVendorManagement.landOnVendorManagment();
        browser.sleep(5000);
    });

    it('Klik na user menu', function () {
        staticPremium.clickOnUserMenu();
    });

    it('Klik na Sign out', function () {
        staticPremium.clickOnSignOut();
        browser.sleep(2000);
    });
    
    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });

});

