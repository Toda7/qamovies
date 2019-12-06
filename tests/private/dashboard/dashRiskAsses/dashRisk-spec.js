var dashRisk = require('./dashRisk-po')


describe('Click na Risk A. na dashboardu', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false); //stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    //it('Dolazak na dashboard page', function(){
    //  dashRisk.landOnDashboardPage();
    //browser.sleep(2000);
    //});

    it('Klik na Risk A.', function () {
        dashRisk.clickOnRisk();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);

        });
    });

    it('Proverava da li se ucitao "Your Risk Assessments" title', function(){
        dashRisk.checkButton();
});


    it('Provera Risk A. url zatvaranje taba', function () {
        dashRisk.checkRiskUrl();
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
