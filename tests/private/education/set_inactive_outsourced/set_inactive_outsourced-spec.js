var set_inactive_hosted = require('../set_inactive_hosted/set_inactive_hosted-po.js'); 
var set_inactive_outsourced = require('./set_inactive_outsourced-po.js'); 

describe('Set outsourced webinar to the inactive status', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

// it('Dolazak na webinars admin page stranu', function(){
//     set_inactive_hosted.landOnWebinarsAdminPage();
// });

// it('Unosenje texta u search field', function(){
//     set_inactive_outsourced.enterTextInSearchField();
// });

// it('Klik on search link', function(){
//     set_inactive_hosted.clickOnSearchOption();
// });

// it('Klik na Edit link', function(){
//     set_inactive_hosted.clickOnEditButtonInActiveWebinar();
// });

it('Klik on inactive option', function(){
    set_inactive_hosted.clickOnInActive();
});

it('Klik n Save webinar button', function(){
    set_inactive_hosted.clickOnSaveWebinar();
});


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});