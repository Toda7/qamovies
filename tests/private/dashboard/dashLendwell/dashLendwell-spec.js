var dashLendwell = require('./dashLendwell-po')


describe('Click na Lendwell na dashboardu', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false); //stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    //it('Dolazak na dashboard page', function(){
    //  dashLendwell.landOnDashboardPage();
    //browser.sleep(2000);
    //});

    it('Klik na Lendwell', function () {
        dashLendwell.clickOnLendwell();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);

        });
    });

    it('Proverava da li se ucitala "Contact us" forma', function () {
        dashLendwell.checkContactForm();
    });

    it('Provera Lendwell url zatvaranje taba', function () {
        dashLendwell.checkLendwellUrl();
        browser.sleep(2000);
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.switchTo().window(handles[1]);
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });
    });



    afterAll(function () {
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});
