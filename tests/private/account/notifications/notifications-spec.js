var notifications = require('./notifications-po.js');

describe('Notifications', function(){

it('Klik na Notification tab', function(){
    notifications.clickOnNotification();
});

it('Klik na Email marketing switch', function(){
    notifications.clickOnEmailMarketing();
});

it('Klik na Activity Summary switch', function(){
    notifications.clickOnWeeklyActivity();
});

it('Klik na Vendor Weekly Digest', function(){
    notifications.clickOnVendorWeeklyDigest();
});

it('Klik na New Discussion', function(){
    notifications.clickOnNewDiscussionCXO();
});

it('Izaberi Group Digest', function(){
    notifications.selectGroupDigestCXO();
});

it('Klik na Save Ntf', function(){
    notifications.clickOnSaveNtf();
});

it('Klik na Email marketing switch', function(){
    notifications.clickOnEmailMarketing();
});

it('Klik na Activity Summary switch', function(){
    notifications.clickOnWeeklyActivity();
});

it('Klik na Vendor Weekly Digest', function(){
    notifications.clickOnVendorWeeklyDigest();
});

it('Klik na New Discussion', function(){
    notifications.clickOnNewDiscussionCXO();
});

it('Izaberi NEVER u Group Digest', function(){
    notifications.selectNeverInGroupDigestCXO();
});

it('Klik na Save Ntf', function(){
    notifications.clickOnSaveNtf();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});