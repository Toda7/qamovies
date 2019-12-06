var allActivity = require('./allActivity-po.js');

describe('All Activity', function(){

it('Klik na All Activity', function(){
    allActivity.clickOnAllActivity();
});

it('Provera All Activity liste', function(){
    allActivity.checkAllActivityList();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});