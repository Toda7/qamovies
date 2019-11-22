var set_inactive_hosted = require('./set_inactive_hosted-po.js'); 

describe('Set hosted webinar to the inactive status', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

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