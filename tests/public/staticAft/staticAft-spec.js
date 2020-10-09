var staticAft = require('./staticAft-po.js')

describe('AFT public strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na AFT stranu', function(){
        staticAft.landOnAft();
        browser.sleep(1000)
    });

    it('Provera da li se ucitao text u Hero sekciji', function(){
        staticAft.checkHeroText();
        browser.sleep(500)
    });

    it('Provera placeholdera u prvom input polju', function(){
        staticAft.checkFirstInputPlaceholder();
        browser.sleep(500)
    });

    it('Provera texta u prvom cta dugmetu', function(){
        staticAft.checkPublicFirstCtaButtonText();
        browser.sleep(500)
    });

    it('Provera da li se ucitao AFT logo u Hero sekciji', function(){
        staticAft.checkHeroAftLogo();
        browser.sleep(500)
    });

    it('Provera texta u About sekciji', function(){
        staticAft.checkAboutSectionText();
        browser.sleep(500)
    });

    it('Provera da li se ucitao text u levoj About sekciji', function(){
        staticAft.checkLeftText();
        browser.sleep(500)
    });

    it('Provera texta u prvom citatu', function(){
        staticAft.checkFirstQuoteText();
        browser.sleep(500)
    });

    it('Provera da li se ucitao avatar za Scott Millsa', function(){
        staticAft.checkScottMillsAvatar();
        browser.sleep(500)
    });

    it('Provera da li se ucitao signature za Scott Millsa', function(){
        staticAft.checkScottMillsSignature();
        browser.sleep(500)
    });

    it('Provera texta u drugom citatu', function(){
        staticAft.checkSecondQuoteText();
        browser.sleep(500)
    });

    it('Provera da li se ucitao avatar za Brajana Kunca', function(){
        staticAft.checkBryanKoontzAvatar();
        browser.sleep(500)
    });

    it('Provera da li se ucitao signature za Brajana Kunca', function(){
        staticAft.checkBryanKoontzSignature();
        browser.sleep(500)
    });

    it('Provera placeholdera u drugom input polju', function(){
        staticAft.checkSecondInputPlaceholder();
        browser.sleep(500)
    });

    it('Provera texta u drugom cta dugmetu', function(){
        staticAft.checkPublicSecondCtaButtonText();
        browser.sleep(500)
    });

    it('Unesi email adresu u prvo input polje', function(){
        staticAft.enterEmailAddressInFirstInputField();
        browser.sleep(500)
    });

    it('Klik na prvo CTA dugme', function(){
        staticAft.clickFirstCtaButton();
        browser.sleep(2000)
    });

    it('Provera gornjeg Thank You texta', function(){
        staticAft.checkThankYouTextOne();
        browser.sleep(500)
    });

    it('Refresh page', function(){
        browser.refresh(); 
        browser.sleep(2000);
    });

    it('Unesi email adresu u drugo input polje', function(){
        staticAft.enterEmailAddressInSecondInputField();
        browser.sleep(500)
    });

    it('Klik na drugo CTA dugme', function(){
        staticAft.clickSecondCtaButton();
        browser.sleep(2000)
    });

    it('Provera donjeg Thank You texta', function(){
        staticAft.checkThankYouTextTwo();
        browser.sleep(500)
    });

    it('Otvori Intercom', function(){
        staticAft.openIntercom();
        browser.sleep(1000)
    });

    it('Zatvori Intercom', function(){
        staticAft.closeIntercom();
        browser.sleep(1000)
    }); 

    it('Dolazak na Home page', function(){
        staticAft.landOnHomePage();
        browser.sleep(1000)
    });   

    it('Klik na Sign In dugme', function(){
        staticAft.clickOnSignIn();
        browser.sleep(2000)
    });   

    it('Unesi 1@phoenix.com email adresu', function(){
        staticAft.enterPhoenixEmail();
        browser.sleep(500)
    });   

    it('Unesi password', function(){
        staticAft.enterPhoenixPass();
        browser.sleep(500)
    }); 

    it('Klik na Log In dugme', function(){
        staticAft.submit();
        browser.sleep(1000)
    }); 

    it('Dolazak na AFT stranu', function(){
        staticAft.landOnAft();
        browser.sleep(1000)
    });

    it('Provera texta u prvom email input polju', function(){
        staticAft.checkFirstInputFieldValue();
        browser.sleep(500)
    });

    it('Klik na prvo CTA dugme', function(){
        staticAft.clickFirstCtaButton();
        browser.sleep(2000)
    });

    it('Provera gornjeg Thank You texta', function(){
        staticAft.checkThankYouTextOne();
        browser.sleep(500)
    });

    it('Refresh page', function(){
        browser.refresh(); 
        browser.sleep(2000);
    });

    it('Provera texta u drugom email input polju', function(){
        staticAft.checkSecondInputFieldValue();
        browser.sleep(500)
    });

    it('Klik na drugo CTA dugme', function(){
        staticAft.clickSecondCtaButton();
        browser.sleep(2000)
    });

    it('Provera donjeg Thank You texta', function(){
        staticAft.checkThankYouTextTwo();
        browser.sleep(500)
    });

    it('Klik na User meni', function(){
        staticAft.clickOnUserMenu();
        browser.sleep(500)
    });

    it('Klik na Sign Out', function(){
        staticAft.clickOnSignOut();
        browser.sleep(1500)
    });

    it('Dolazak na Home page', function () {
        staticAft.landOnHomePage();
        browser.sleep(1000)
    });

    it('Klik na Sign In dugme', function () {
        staticAft.clickOnSignIn();
        browser.sleep(2000)
    });

    it('Unesi email adresu', function () {
        staticAft.enterEmail();
        browser.sleep(500)
    });

    it('Unesi password', function () {
        staticAft.enterPass();
        browser.sleep(500)
    });

    it('Klik na Log In dugme', function () {
        staticAft.submit();
        browser.sleep(1000)
    });

    it('Dolazak na AFT stranu', function () {
        staticAft.landOnAft();
        browser.sleep(1000)
    });

    it('Provera texta u prvom cta dugmetu', function () {
        staticAft.checkFirstCtaButtonText();
        browser.sleep(500)
    });

    it('Klik na prvo CTA dugme', function () {
        staticAft.clickFirstCtaButton();
        browser.sleep(2000)
    });

    it('Provera da li se ucitao URL za AFT Group stranu', function () {
        staticAft.checkAftGroupURL();
        browser.sleep(500)
    });

    it('Dolazak na AFT stranu', function () {
        staticAft.landOnAft();
        browser.sleep(1000)
    });

    it('Provera texta u drugom cta dugmetu', function () {
        staticAft.checkSecondCtaButtonText();
        browser.sleep(500)
    });

    it('Klik na drugo CTA dugme', function () {
        staticAft.clickSecondCtaButton();
        browser.sleep(2000)
    });

    it('Provera da li se ucitao URL za AFT Group stranu', function () {
        staticAft.checkAftGroupURL();
        browser.sleep(500)
    });

    it('Dolazak na AFT stranu', function () {
        staticAft.landOnAft();
        browser.sleep(1000)
    });

    it('Klik na User meni', function () {
        staticAft.clickOnUserMenu();
        browser.sleep(500)
    });

    it('Klik na Sign Out', function () {
        staticAft.clickOnSignOut();
        browser.sleep(1500)
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});