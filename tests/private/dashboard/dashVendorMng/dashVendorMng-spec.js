var dashVendorMng = require('./dashVendorMng-po')


describe('Click na Vendor Mng na dashboardu', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false); //stavlja se na pocetak fajla da ne bi cekao Angular element
});  

//it('Dolazak na dashboard page', function(){
  //  dashVendorMng.landOnDashboardPage();
    //browser.sleep(2000);
//});

it('Klik na Vendor Mng.', function(){
    dashVendorMng.clickOnVendorMng();
    browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
    
    });
    });

it('Provera Vendor Mng url zatvaranje taba', function(){
    dashVendorMng.checkVendorMngUrl();
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
