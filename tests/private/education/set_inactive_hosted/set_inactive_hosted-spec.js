var set_inactive_hosted = require('./set_inactive_hosted-po.js'); 

describe('Set webinar to the inactive status', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Dolazak na webinars admin page stranu', function(){
    set_inactive_hosted.landOnWebinarsAdminPage();
});

it('Unosenje texta u search field', function(){
    set_inactive_hosted.enterTextInSearchField();
});

it('Klik on search link', function(){
    set_inactive_hosted.clickOnSearchOption();
});

// it('Klik on on active webinar to get focus', function(){
//     set_inactive_hosted.clickOnActiveClassToGetFocus();
// });

it('Klik na Edit dugme u aktivnom vebinaru', function(){
    set_inactive_hosted.clickOnEditButtonInActiveWebinar();
});

it('Klik on inactive option', function(){
    set_inactive_hosted.clickOnInactive();
});

// it('Klik n Save webinar button', function(){
//     set_inactive_hosted.clickOnSaveWebinar();
// });


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});