var dashCielostar = require('./dashCielostar-po')


describe('Click na Cielostar na dashboardu', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false); //stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    //it('Dolazak na dashboard page', function(){
    //  dashCielostar.landOnDashboardPage();
    // browser.sleep(2000);
    //});

    it('Klik na Cielostar', function () {
        dashCielostar.clickOnCielostar();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);

        });
    });

    it('Proverava da li se ucitao footer', function () {
        dashCielostar.checkFooter();
    });

    it('Proverava da li se ucitala "REQUEST A QUOTE" forma', function () {
        dashCielostar.checkForm();
    });

    it('Provera Cielostar url zatvaranje taba', function () {
        dashCielostar.checkCielostarUrl();
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
