var dashWorkspace = require('./dashWorkspace-po')


describe('Click na Workspace na dashboardu', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false); //stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    //it('Dolazak na dashboard page', function(){
      //  dashWorkspace.landOnDashboardPage();
        //browser.sleep(2000);
    //});

    it('Klik na Workspace', function(){
    dashWorkspace.clickOnWorkspace();
    browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);

    });
    });

    it('Cekiranje Page texta', function(){
    dashWorkspace.checkPageText;
    })

    it('Da li seucitao Page Title', function(){
    dashWorkspace.checkPageTitle;
    })


    it('Proverava Workspace url', function(){
        dashWorkspace.checkWorkspaceUrl();
        browser.sleep(2000);
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.switchTo().window(handles[1]);
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
            }); 
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});