var discussionDetailsFromVendorDetails = require('./discussionDetailsFromVendorDetails-po.js');
var vendorDirectoryCheck = require('../vendorDirectoryCheck/vendorDirectoryCheck-po.js');
var searchOnVendorDirectoryPage = require('../searchOnVendorDirectoryPage/searchOnVendorDirectoryPage-po.js');
var followUnfollowVendor = require('../followUnfollowVendor/followUnfollowVendor-po.js');

describe('Check discussion details page from vendor details page', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na vendor directory page', function () {
        vendorDirectoryCheck.landOnVendorDirectoryPage();
    });

    it('Unosenje texta u search polje', function () {
        searchOnVendorDirectoryPage.enterearchWord();
        browser.sleep(5000);
    });

    it('Klik na vendor name', function () {
        followUnfollowVendor.clickOnVendorName();
        browser.sleep(5000);
    });

    it('Klik on prvu diskusiju na strani', function () {
        discussionDetailsFromVendorDetails.clickOnFirstDiscussion();
        browser.sleep(5000);
    });

    it('Provera grupe u kojoj je diskusija postovana', function () {
        discussionDetailsFromVendorDetails.checkGroupOfDiscussion();
    });

    it('Provera Notification linka', function () {
        discussionDetailsFromVendorDetails.checkNotificationSwitchOfDiscussion();
    });

    it('Provera title of discussion', function () {
        discussionDetailsFromVendorDetails.checkTitleOfDiscussion();
    });

    it('Provera topics of discussion', function () {
        discussionDetailsFromVendorDetails.checkTopicsOfDiscussion();
    });

    it('Provera da li se ucitao user name', function () {
        discussionDetailsFromVendorDetails.checkUserName();
    });

    it('Provera da li se ucitao reputation score', function () {
        discussionDetailsFromVendorDetails.checkReputationScore();
    });

    it('Provera da li se ucitao direct message link', function () {
        discussionDetailsFromVendorDetails.checkDirectMessage();
    });

    it('Provera da li se ucitao user function level', function () {
        discussionDetailsFromVendorDetails.checkFunctionLevel();
    });

    it('Provera da li se ucitao org link', function () {
        discussionDetailsFromVendorDetails.checkOrgLink();
    });

    it('Provera da li se ucitao Reply button', function(){
        discussionDetailsFromVendorDetails.checkReplyButton();
    });

    it('Provera da li se ucitao Thanks button', function(){
        discussionDetailsFromVendorDetails.checkThanksButton();
    });

    it('Provera da li se ucitao Share button', function(){
        discussionDetailsFromVendorDetails.checkShareButton();
    });

    it('Provera da li se ucitao description of discussion', function(){
        discussionDetailsFromVendorDetails.checkDescriptionOfDiscussion();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});
