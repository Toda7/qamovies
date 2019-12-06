var set_inactive_video = require('./set_inactive_video-po.js'); 

describe('Set hosted webinar to the inactive status', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

// it('Dolazak na webinars admin page stranu', function(){
//     set_inactive_video.landOnWebinarsAdminPage();
// });

// it('Unosenje texta u search field', function(){
//     set_inactive_video.enterTextInSearchField();
// });

// it('Klik on search link', function(){
//     set_inactive_video.clickOnSearchOption();
// });

// it('Klik na Edit link', function(){
//     set_inactive_video.clickOnEditButtonInActiveWebinar();
// });

it('Klik on inactive option', function(){
    set_inactive_video.clickOnInActive();
});

it('Klik n Save webinar button', function(){
    set_inactive_video.clickOnSaveWebinar();
});


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});