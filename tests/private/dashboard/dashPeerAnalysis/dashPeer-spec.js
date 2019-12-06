var dashPeer = require('./dashPeer-po')


describe('Click na Peer A. na dashboardu', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false); //stavlja se na pocetak fajla da ne bi cekao Angular element
});  

//it('Dolazak na dashboard page', function(){
  //  dashPeer.landOnDashboardPage();
    //browser.sleep(2000);
//});

it('Klik na Peer A.', function(){
    dashPeer.clickOnPeer();
    browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
    
    });
    });

it('Provera Peer A. url zatvaranje taba', function(){
    dashPeer.checkPeerUrl();
    browser.sleep(1000);
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
