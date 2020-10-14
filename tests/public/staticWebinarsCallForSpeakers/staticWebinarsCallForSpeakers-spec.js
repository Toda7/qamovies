var staticWebinarsCallForSpeakers = require('./staticWebinarsCallForSpeakers-po.js')

describe('Webinars Call For Speakers strana', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Webinars Call For Speakers stranu', function () {
        staticWebinarsCallForSpeakers.landOnWebinarsCallForSpeakersPage();
        browser.sleep(2000)
    });

    it('Otvori Intercom', function () {
        staticWebinarsCallForSpeakers.openIntercom();
        browser.sleep(2500)
    });

    it('Zatvori Intercom', function () {
        staticWebinarsCallForSpeakers.closeIntercom();
        browser.sleep(1000)
    });

    it('Provera texta u Hero sekciji', function () {
        staticWebinarsCallForSpeakers.checkHeroText();
        browser.sleep(500)
    });

    it('Provera texta u pvom cta dugmetu', function () {
        staticWebinarsCallForSpeakers.checkFirstCtaButtonText();
        browser.sleep(500)
    });

    it('Provera texta u centralnoj sekciji', function () {
        staticWebinarsCallForSpeakers.checkContainerText();
        browser.sleep(500)
    });

    it('Provera texta u drugom cta dugmetu', function () {
        staticWebinarsCallForSpeakers.checkSecondCtaButtonText();
        browser.sleep(500)
    });

    it('Provera da li se ucitala graph fotka na dnu strane', function () {
        staticWebinarsCallForSpeakers.checkGraphImage();
        browser.sleep(500)
    });

    it('Klik na prvo CTA dugme', function () {
        staticWebinarsCallForSpeakers.clickFirstCtaButton();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
        });
        browser.sleep(5000)
    });

    it('Unesi 1@chicago.com email adresu', function () {
        staticWebinarsCallForSpeakers.enterEmail();
        browser.sleep(500)
    });

    it('Unesi password', function () {
        staticWebinarsCallForSpeakers.enterPassword();
        browser.sleep(500)
    });

    it('Klik na Log In dugme', function () {
        staticWebinarsCallForSpeakers.submit();
        browser.sleep(2500)
    });

    it('Provera da li se ucitao URL za Call for Webinar Speakers formu', function () {
        staticWebinarsCallForSpeakers.checkCallForWebinarsSpeakersFormUrl();
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
                });
        browser.sleep(2000)
    });

    it('Klik na drugo CTA dugme', function () {
        staticWebinarsCallForSpeakers.clickSecondCtaButton();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
        });
        browser.sleep(4000)
    });

    it('Provera da li se ucitao URL za Call for Webinar Speakers formu', function () {
        staticWebinarsCallForSpeakers.checkCallForWebinarsSpeakersFormUrl();
        browser.sleep(500)
    });

    it('Provera texta u Title sekciji', function () {
        staticWebinarsCallForSpeakers.checkTitleSectionText();
        browser.sleep(500)
    });

    it('Unesi First Name', function () {
        staticWebinarsCallForSpeakers.enterFirstName();
        browser.sleep(500)
    });

    it('Unesi Last Name', function () {
        staticWebinarsCallForSpeakers.enterLastName();
        browser.sleep(500)
    });

    it('Unesi Title', function () {
        staticWebinarsCallForSpeakers.enterTitle();
        browser.sleep(500)
    });

    it('Unesi Webinar Speaker Email', function () {
        staticWebinarsCallForSpeakers.enterWebinarSpeakerEmail();
        browser.sleep(500)
    });

    it('Unesi Telefon', function () {
        staticWebinarsCallForSpeakers.enterPhone();
        browser.sleep(500)
    });

    it('Unesi Mobilni Telefon', function () {
        staticWebinarsCallForSpeakers.enterMobile();
        browser.sleep(500)
    });

    it('Unesi Ulicu i Broj', function () {
        staticWebinarsCallForSpeakers.enterAddressStreet();
        browser.sleep(500)
    });

    it('Unesi Grad', function () {
        staticWebinarsCallForSpeakers.enterCity();
        browser.sleep(500)
    });

    it('Unesi Drzavu', function () {
        staticWebinarsCallForSpeakers.enterState();
        browser.sleep(500)
    });

    it('Unesi Zip kod', function () {
        staticWebinarsCallForSpeakers.enterZip();
        browser.sleep(500)
    });

    it('Izaberi Headset opciju', function () {
        staticWebinarsCallForSpeakers.selectHeadsetOption();
        browser.sleep(500)
    });

    it('Unesi Title prezentacije', function () {
        staticWebinarsCallForSpeakers.enterPresentationTitle();
        browser.sleep(500)
    });

    it('Unesi Short Description prezentacije', function () {
        staticWebinarsCallForSpeakers.enterPresentationShortDescription();
        browser.sleep(500)
    });

    it('Unesi Webinar Highlight prezentacije', function () {
        staticWebinarsCallForSpeakers.enterWebinarHighlight();
        browser.sleep(500)
    });

    it('Unesi Job Title za attendees', function () {
        staticWebinarsCallForSpeakers.enterJobTitle();
        browser.sleep(500)
    });

    it('Izaberi Presented Elsewhere opciju', function () {
        staticWebinarsCallForSpeakers.selectPresentedElsewhere();
        browser.sleep(500)
    });

    it('Izaberi Time Sensitive opciju', function () {
        staticWebinarsCallForSpeakers.selectTimeSensitive();
        browser.sleep(500)
    });

    it('Izaberi Area of Interest opciju', function () {
        staticWebinarsCallForSpeakers.selectAreaOfInterest();
        browser.sleep(500)
    });

    it('Klik na Submit dugme', function () {
        staticWebinarsCallForSpeakers.clickSubmitButton();
        browser.sleep(2500)
    });

    it('Provera da li se ucitao URL za Success stranu u produkciji', function () {
        staticWebinarsCallForSpeakers.checkCProductionSuccessUrl();
        browser.sleep(500)
    });

    it('Provera Success poruke u produkciji', function () {
        staticWebinarsCallForSpeakers.checkProductionSuccessMessage();
        browser.sleep(500)
    });

    it('Dolazak na Beta Success stranu', function () {
        staticWebinarsCallForSpeakers.landBetaSuccessPage();
        browser.sleep(2500)
    });

    it('Provera Success poruke na Beti', function () {
        staticWebinarsCallForSpeakers.checkBetaSuccessMessage();
        browser.sleep(500)
    });

    it('Dolazak na Webinars Call For Speakers stranu', function () {
        staticWebinarsCallForSpeakers.landOnWebinarsCallForSpeakersPage();
        browser.sleep(2000)
    });

    it('Klik na User meni', function () {
        staticWebinarsCallForSpeakers.clickOnUserMenu();
        browser.sleep(500)
    });

    it('Klik na Sign Out', function () {
        staticWebinarsCallForSpeakers.clickOnSignOut();
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });
        browser.sleep(1500)
    });

    it('Refresh page', function(){
        browser.refresh(); 
        browser.sleep(2000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});