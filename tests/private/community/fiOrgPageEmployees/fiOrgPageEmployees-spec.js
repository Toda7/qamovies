var fiOrgPageEmployees = require('./fiOrgPageEmployees-po.js');

describe('Employees sekcija na FI Org strani ', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Bank of Chicago stranu', function () {
        fiOrgPageEmployees.landOnFiOrgPage();
        browser.sleep(1000);
    });

    it('Provera naslova Employees sekcije', function () {
        fiOrgPageEmployees.checkEmployeesSectionTitle();
        browser.sleep(1000))));
    });

    it('Provera da li se na strani nalazi 28 zaposlenih', function () {
        fiOrgPageEmployees.count28employees();
        browser.sleep(1000))));
    });

    it('Provera avatara za prvog zaposlenog u listi', function () {
        fiOrgPageEmployees.checkFirstEmployeeAvatar();
        browser.sleep(1000))));
    });

    it('Provera imena za prvog zaposlenog u listi', function () {
        fiOrgPageEmployees.checkFirstEmployeeName();
        browser.sleep(1000))));
    });

    it('Proveri job title za prvog zaposlenog u listi', function () {
        fiOrgPageEmployees.checkFirstEmployeeJobTilte();
        browser.sleep(1000))));
    });

    it('Klik na Send Message za prvog zaposlenog u listi', function () {
        fiOrgPageEmployees.clickFirstEmployeeSendMessageButton();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
            browser.sleep(1500);
        });
    });

    it('Provera da li se ucitao URL za Inbox', function () {
        fiOrgPageEmployees.checkInboxUrl();
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
            browser.sleep(2000);
        });
    });

    it('Provera default avatara za treceg zaposlenog u listi', function () {
        fiOrgPageEmployees.checkThirdEmployeeDefaultAvatar();
        browser.sleep(1000))));
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});
