var vendorDirectoryCheck = require('./vendorDirectoryCheck-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');

describe('Provera vendor directory page', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na vendor directory page', function(){
        vendorDirectoryCheck.landOnVendorDirectoryPage();
        browser.sleep(3000);
    });

    it('Provera page title', function(){
        vendorDirectoryCheck.checkPageTitle();
    });

    it('Provera da li se ucitao breadcrumbs', function(){
        vendorDirectoryCheck.checkBreadcrumbs();
    });

    it('Provera da li se ucitao search u headeru', function(){
        docLibraryCheck.checkSearchInHeader();
    });

    it('Klik na search field da dobijemo search stranu', function () {
        docLibraryCheck.clickOnSearchField();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao search URL', function () {
        docLibraryCheck.checkSearchURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao FOR YOU link u side meniju', function () {
        docLibraryCheck.checkForYouInSideMenu();
    });

    it('Klik na For You link ', function () {
        docLibraryCheck.clickOnForYouLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao For You URL', function () {
        docLibraryCheck.checkForYouURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Discover link u side meniju', function () {
        docLibraryCheck.checkDiscoverInSideMenu();
    });

    it('Klik na Discover link', function () {
        docLibraryCheck.clickOnDiscoverLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Discover URL', function () {
        docLibraryCheck.checkDiscoverURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Document Library link u side meniju', function () {
        docLibraryCheck.checkDocumentLibraryInSideMenu();
    });

    it('Klik na Document Library link link', function(){
        docLibraryCheck.clickOnDocumentLibraryLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Document Library URL', function(){
        docLibraryCheck.checkDocumentLibraryURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Vendor Directory link u side meniju', function () {
        docLibraryCheck.checkVendorDirectoryInSideMenu();
    });

    //  Kada si na Vendor directory page ne mozes da kliknes taj link iz side menija, zato je ovo komentarisano 
    // it('Klik na Vendor Directory link', function () {
    //     docLibraryCheck.clickOnVendorDirectoryLink();
    //     browser.sleep(1000);
    // });

    // it('Provera da li se ucitao Vendor Directory URL', function () {
    //     docLibraryCheck.checkVendorDirectoryURL();
    //     browser.navigate().back();
    //     browser.sleep(1000);
    // });

    it('Provera da li se ucitao Reputation Timeline link u side meniju', function () {
        docLibraryCheck.checkReputationTimelineInSideMenu();
    });

    it('Klik na Reputation Timeline link', function () {
        docLibraryCheck.clickOnReputationTimelineLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Reputation Timeline URL', function () {
        docLibraryCheck.checkReputationTimelineURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Klik na Invite Colleagues link', function () {
        docLibraryCheck.clickOnInviteColleagueseLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Invite Colleagues URL', function () {
        docLibraryCheck.checkInviteColleagueseURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Invite Colleagues link u side meniju', function () {
        docLibraryCheck.checkInviteColleaguesInSideMenu();
    });

    it('Provera da li se ucitao My Groups title', function () {
        docLibraryCheck.checkMyGroupsTitle();
    });

    it('Provera da li se ucitala FI grupa', function () {
        docLibraryCheck.checkFIProfessionalsGroup();
    });

    it('Klik na FI Professionals link', function () {
        docLibraryCheck.clickOnFIProfessionalsLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao FI Professionals URL', function () {
        docLibraryCheck.checkFIProfessionalsURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Provera da li se START DISCUSSION button ucitao na strani', function () {
        docLibraryCheck.checkStartDiscussionButton();
    });

    it('Klik na START DISCUSSION button', function () {
        docLibraryCheck.clickStartDiscussionButton();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Create Discussion URL', function () {
        docLibraryCheck.checkCreateDiscussionURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Provera da li se Featured title ucitao', function(){
        vendorDirectoryCheck.checkFeaturedTitleOnPage();
    });

    it('Provera prvog vendora u featured sekciji', function(){
        vendorDirectoryCheck.checkFirstVendorInFeaturedSection();
    });

    it('Provera drugog vendora u featured sekciji', function(){
        vendorDirectoryCheck.checkSecondVendorInFeaturedSection();
    });

    it('Provera treceg vendora u featured sekciji', function(){
        vendorDirectoryCheck.checkThirdVendorInFeaturedSection();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
