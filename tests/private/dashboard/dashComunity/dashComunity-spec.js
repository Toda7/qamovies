var dashComunity = require('./dashComunity-po')


describe('Click na Community sa Dashboarda', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false); //stavlja se na pocetak fajla da ne bi cekao Angular element
});  

it('Klik na comunity', function(){
    dashComunity.clickOnComunity();
    browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
    
    });
    });

it('Proverava da li se ucitao Home title', function(){
        dashComunity.checkHomeTitle();
});

it('Proverava da li se ucitao Search polje', function(){
    dashComunity.checkSearchField();
});

it('Proverava da li se ucitao Start Disucssion button', function(){
    dashComunity.checkStartDiscButton();
});

it('Provera comunity url zatvaranje taba', function(){
    dashComunity.checkComunityUrl();
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
