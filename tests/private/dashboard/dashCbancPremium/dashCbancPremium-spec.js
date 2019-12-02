var dashCbancPremium = require('./dashCbancPremium-po')


describe('Click na CbancPremium', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false); //stavlja se na pocetak fajla da ne bi cekao Angular element
    });  

it('Klik na CbancPremium', function(){
dashCbancPremium.clickOnCbancPremium();
   
});

it('Da li se ucitalo Page Title', function(){
    dashCbancPremium.checkPageTitle();
       
    });

it('Da li se ucitalo "Show me more" button', function(){
    dashCbancPremium.checkShowMeHowButton();
       
    });

it('Proveriti Premium url', function(){
    dashCbancPremium.checkCbancPremiumUrl();
    browser.sleep(2000);
});

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});