var setInactiveHosted = require('../setInactiveHosted/setInactiveHosted-po.js'); 

describe('Set outsourced webinar to the inactive status', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Klik on inactive option', function(){
    setInactiveHosted.clickOnInActive();
});

it('Klik n Save webinar button', function(){
    setInactiveHosted.clickOnSaveWebinar();
});


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});