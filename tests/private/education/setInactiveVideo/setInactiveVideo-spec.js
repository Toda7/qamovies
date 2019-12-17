var setInactiveVideo = require('./setInactiveVideo-po.js'); 

describe('Set video to the inactive status', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

// it('Dolazak na webinars admin page stranu', function(){
//     setInactiveVideo.landOnWebinarsAdminPage();
// });

// it('Unosenje texta u search field', function(){
//     setInactiveVideo.enterTextInSearchField();
// });

// it('Klik on search link', function(){
//     setInactiveVideo.clickOnSearchOption();
// });

// it('Klik na Edit link', function(){
//     setInactiveVideo.clickOnEditButtonInActiveWebinar();
// });

it('Klik on inactive option', function(){
    setInactiveVideo.clickOnInActive();
});

it('Klik n Save webinar button', function(){
    setInactiveVideo.clickOnSaveWebinar();
});


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});