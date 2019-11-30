var loginAsVendor = require('./loginAsVendor-po');


describe('Login kao Vendor i cekiranje Dashboard linkova', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false); //stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na home stranu', function () {
        loginAsVendor.landOnHomePage();
    });

    it('Click na User menu', function () {
        loginAsVendor.clickOnUserMenu();
    });

    it('Click na Signout', function () {
        loginAsVendor.clickOnSignOut();
        browser.sleep(5000);
    });

    it('Sign in', function () {
        loginAsVendor.clickOnSignIn();
    });

    it('Provera da li smo landovali na sign in stranu', function () {
        loginAsVendor.checkSignInUrl();
        browser.sleep(2000);
    });

    it('Unosenje emaila', function () {
        loginAsVendor.enterEmail();
    });

    it('Unosenje lozinke', function () {
        loginAsVendor.enterPass();
    });

    it('Logovanje kao Vendor', function () {
        loginAsVendor.submit();
    });

    it('Provera da li smo se logovali', function () {
        loginAsVendor.checkLogInUrl();
        browser.sleep(2000);
    });

    it('Klik na comunity', function () {
        loginAsVendor.clickOnComunity();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);

        });
    });

    it('Provera comunity url zatvaranje taba', function () {
        loginAsVendor.checkComunityUrl();
        browser.sleep(2000);
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.switchTo().window(handles[1]);
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });
    });

    it('Klik na Education', function () {
        loginAsVendor.clickOnEducation();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
        });
    });

    it('Da li se ucitao 1 Webinar', function () {
        loginAsVendor.checkWebinarIsPresent();
        
    });

    it('Provera Education url zatvaranje taba', function () {
        loginAsVendor.checkEducationUrl();
        browser.sleep(2000);
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.switchTo().window(handles[1]);
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });
    });

    it('Klik na ViewFinder', function () {
        loginAsVendor.clickOnViewFinder();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);

        });
    });

    it('Provera ViewFinder url zatvaranje taba', function () {
        loginAsVendor.checkViewFinderUrl();
        browser.sleep(2000);
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.switchTo().window(handles[1]);
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });
    });

    it('Klik na Workspace', function () {
        loginAsVendor.clickOnWorkspace();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);

        });
    });

    it('Provera Workspace url zatvaranje taba', function () {
        loginAsVendor.checkWorkspaceUrl();
        browser.sleep(2000);
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.switchTo().window(handles[1]);
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });
    });

    it('Click na User menu', function () {
        loginAsVendor.clickOnUserMenu();
    });

    it('Click na Signout', function () {
        loginAsVendor.clickOnSignOut();
        browser.sleep(5000);
    });

    it('Sign in', function () {
        loginAsVendor.clickOnSignInV();
    });

    it('Provera da li smo landovali na sign in stranu', function () {
        loginAsVendor.checkSignInUrlV();
        browser.sleep(2000);
    });

    it('Unosenje emaila', function () {
        loginAsVendor.enterEmailV();
    });

    it('Unosenje lozinke', function () {
        loginAsVendor.enterPassV();
    });

    it('Logovanje kao FI user opet', function () {
        loginAsVendor.submitV();
    });

    it('Provera da li smo se logovali', function () {
        loginAsVendor.checkLogInUrlV();
        browser.sleep(2000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});