var dashEducation = require('./dashEducation-po')


describe('Click na Education na dashboardu', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false); //stavlja se na pocetak fajla da ne bi cekao Angular element
});  

//it('Dolazak na dashboard page', function(){
  //  dashEducation.landOnDashboardPage();
    //browser.sleep(2000);
//});

it('Klik na Education', function(){
    dashEducation.clickOnEducation();
    browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
    
    });
    });

    // it('Da li se ucitalo "Search Upcoming Webinars" polje', function(){
    //     dashEducation.checkSearchField();
    //     browser.sleep(2000);
    // });

    it('Da li se ucitao 1 Webinar', function(){
        dashEducation.checkWebinarIsPresent();
    });

it('Provera Education url zatvaranje taba', function(){
    dashEducation.checkEducationUrl();
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
