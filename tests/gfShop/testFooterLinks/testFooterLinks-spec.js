var testFooterLinks = require('./testFooterLinks-po.js');
var testSortingByName = require('../testSortingByName/testSortingByName-po.js');

describe('Footer links', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);

    });

    it('Klik on Hunts By Region', function(){
        testFooterLinks.clickOnHuntsByRegion();
    });

    it('Provera URL-a za Hunts By Region', function(){
        testFooterLinks.checkHuntsByRegionURL();
    });

    it('Provera page title na hunts by region page', function(){
        testFooterLinks.checkPageTitleOfHuntsByRegion();
    });

    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);

    });

    it('Klik on Klik on Hunts By Species', function(){
        testFooterLinks.clickOnHuntsBySpecies();
    });

    it('Provera URL-a za Klik on Hunts By Species', function(){
        testFooterLinks.checkHuntsBySpeciesURL();
    });

    it('Provera page title na Klik on Hunts By Species page', function(){
        testFooterLinks.checkPageTitleOfHuntsBySpecies();
    });

    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);

    });

    it('Klik on Klik on Fishing By Region', function(){
        testFooterLinks.clickOnFishingByRegion();
    });

    it('Provera URL-a za Klik on Fishing By Region', function(){
        testFooterLinks.checkFishingByRegionURL();
    });

    it('Provera page title na Klik on Fishing By Region page', function(){
        testFooterLinks.checkPageTitleOfFishingByRegion();
    });

    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);

    });

    it('Klik on Fishing By species', function(){
        testFooterLinks.clickOnFishingBySpecies();
    });

    it('Provera URL-a za Fishing By species', function(){
        testFooterLinks.checkFishingBySpeciesURL();
    });

    it('Provera page title na Fishing By species page', function(){
        testFooterLinks.checkPageTitleOfFishingBySpecies();
    });

    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);

    });

    it('Klik on Outdoor News Advice', function(){
        testFooterLinks.clickOnOutdoorNewsAdvice();
    });

    it('Provera URL-a za Outdoor News Advice', function(){
        testFooterLinks.checkOutdoorNewsAdviceURL();
    });

    it('Provera page title na Outdoor News Advice page', function(){
        testFooterLinks.checkPageTitleOfOutdoorNewsAdvice();
    });

    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);

    });

    it('Klik on Hunting Videos', function(){
        testFooterLinks.clickOnHuntingVideos();
    });

    it('Provera URL-a za Hunting Videos', function(){
        testFooterLinks.checkHuntingVideosURL();
    });

    it('Provera page title na Hunting Videos page', function(){
        testFooterLinks.checkPageTitleOfHuntingVideos();
    });

    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);

    });

    it('Klik on Guidefitter Giveaways', function(){
        testFooterLinks.clickOnGuidefitterGiveaways();
    });

    it('Provera URL-a za Guidefitter Giveaways', function(){
        testFooterLinks.checkGuidefitterGiveawaysURL();
    });

    it('Provera page title na Guidefitter Giveaways page', function(){
        testFooterLinks.checkPageTitleOfGuidefitterGiveaways();
    });

    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);

    });

    it('Klik on Resources', function(){
        testFooterLinks.clickOnResources();
    });

    it('Provera URL-a za Resources', function(){
        testFooterLinks.checkResourcesURL();
    });

    it('Provera page title na Resources page', function(){
        testFooterLinks.checkPageTitleOfResources();
    });

    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);

    });

    it('Klik on Obtain a Hunting License', function(){
        testFooterLinks.clickOnObtainaHuntingLicense();
    });

    it('Provera URL-a za Obtain a Hunting License', function(){
        testFooterLinks.checkObtainaHuntingLicenseURL();
    });

    it('Provera page title na Obtain a Hunting License page', function(){
        testFooterLinks.checkPageTitleOfObtainaHuntingLicense();
    });


    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);

    });

    it('Klik on Brag a Hunting or Fishing Photo', function(){
        testFooterLinks.clickOnBragHuntingorFishingPhoto();
    });

    it('Provera URL-a za Brag a Hunting or Fishing Photo', function(){
        testFooterLinks.checkBragHuntingorFishingPhotoURL();
    });


    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);

    });

    it('Klik on Create post on the Community feed', function(){
        testFooterLinks.clickOnCreatePostOnTheCommunityfeed();
    });

    it('Provera URL-a za Create post on the Community feed', function(){
        testFooterLinks.checkCreatePostOnTheCommunityfeedURL();
    });

    it('Provera page title na Create post on the Community feed', function(){
        testFooterLinks.checkPageTitleOfCreatePostOnTheCommunityfeed();
    });

    it(' Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);

    });

    it('Klik on Ask a Question', function(){
        testFooterLinks.clickOnAskQuestion();
    });

    it('Provera URL-a za Ask a Question', function(){
        testFooterLinks.checkAskQuestionURL();
    });

    it('Provera page title na ask question page', function(){
        testFooterLinks.checkPageTitleOfAskQuestion();
    });

    it(' Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);

    });

    it('Klik on insiders', function(){
        testFooterLinks.clickOnInsiders();
    });

    it('Provera URL-a za insiders', function(){
        testFooterLinks.checkInsidersURL();
    });

    it('Provera page title na insiders page', function(){
        testFooterLinks.checkPageTitleOfInsidersPage();
    });

    it(' Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);

    });

    it('Klik on Save Money On Gear ', function(){
        testFooterLinks.clickOnSaveMoneyOnGear();
    });

    it('Provera URL-a za Save Money On Gear ', function(){
        testFooterLinks.checkSaveMoneyOnGearURL();
    });

    it('Provera page title na Save Money On Gear  page', function(){
        testFooterLinks.checkPageTitleOfSaveMoneyOnGearPage();
    });

    it(' Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);

    });

    it('Klik on Invite an Insider', function(){
        testFooterLinks.clickOnInviteAnInsider();
    });

    it('Provera URL-a za Invite an Insider', function(){
        testFooterLinks.checkInviteAnInsiderURL();
    });

    it('Provera page title na Invite an Insider page', function(){
        testFooterLinks.checkPageTitleOfInviteAnInsiderPage();
    });

    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);

    });

    it('Klik on Create a Free Outfitter Page', function(){
        testFooterLinks.clickOnCreateOutfitter();
    });

    it('Provera URL-a za Create a Free Outfitter Page', function(){
        testFooterLinks.checkCreateOutfitterURL();
    });

    it('Provera page title na Create a Free Outfitter Page page', function(){
        testFooterLinks.checkPageTitleOfCreateOutfitterPage();
    });

    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);

    });

    it('Klik on Promote Your Skills', function(){
        testFooterLinks.clickOnPromoteYourSkills();
    });

    it('Provera URL-a za Promote Your Skills', function(){
        testFooterLinks.checkPromoteYourSkillsURL();
    });

    it('Provera page title na Promote Your Skills page', function(){
        testFooterLinks.checkPageTitleOfPromoteYourSkillsPage();
    });


    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);

    });

    it('Klik on Help', function(){
        testFooterLinks.clickOnHelp();
    });

    it('Provera URL-a za Help', function(){
        testFooterLinks.checkHelpURL();
    });

    it('Provera page title na Help page', function(){
        testFooterLinks.checkPageTitleOfHelpPage();
    });


    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);

    });

    it('Klik on Promote Your Pro Program', function(){
        testFooterLinks.clickOnPromoteYourProProgram();
    });

    it('Provera URL-a za Promote Your Pro Program', function(){
        testFooterLinks.checkPromoteYourProProgramURL();
    });

    it('Provera page title na Promote Your Pro Program page', function(){
        testFooterLinks.checkPageTitleOfPromoteYourProProgramPage();
    });

    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(3000);
    });

    it('Klik na Space na tastaturi za Load More na strani', function () {
        var step;
        for (step = 0; step < 5; step++) {
            testFooterLinks.scrollPage();
            browser.sleep(1000);
        }
    });

    it('Klik on About Us', function(){
        testFooterLinks.clickOnAboutUs();
    });

    it('Provera URL-a za About Us', function(){
        testFooterLinks.checkAboutUsURL();
    });

    it('Provera page title na About Us page', function(){
        testFooterLinks.checkPageTitleOfAboutUsPage();
    });


    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(3000);
    });

    it('Klik na Space na tastaturi za Load More na strani', function () {
        var step;
        for (step = 0; step < 5; step++) {
            testFooterLinks.scrollPage();
            browser.sleep(1000);
        }
    });

    it('Klik on Company News', function(){
        testFooterLinks.clickOnCompanyNews();
    });

    it('Provera URL-a za Company News', function(){
        testFooterLinks.checkCompanyNewsURL();
    });

    it('Provera page title na Company News page', function(){
        testFooterLinks.checkPageTitleOfCompanyNewsPage();
    });


    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(3000);
    });

    it('Klik na Space na tastaturi za Load More na strani', function () {
        var step;
        for (step = 0; step < 5; step++) {
            testFooterLinks.scrollPage();
            browser.sleep(1000);
        }
    });

    it('Klik on Careers', function(){
        testFooterLinks.clickOnCareers();
    });

    it('Provera URL-a za Careers', function(){
        testFooterLinks.checkCareersURL();
    });

    it('Provera page title na Careers page', function(){
        testFooterLinks.checkPageTitleOfCareersPage();
    });


    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(3000);
    });

    it('Klik na Space na tastaturi za Load More na strani', function () {
        var step;
        for (step = 0; step < 5; step++) {
            testFooterLinks.scrollPage();
            browser.sleep(1000);
        }
    });

    it('Klik on Contact Guidefitter', function(){
        testFooterLinks.clickOnContactGuidefitter();
    });

    it('Provera URL-a za Contact Guidefitter', function(){
        testFooterLinks.checkContactGuidefitterURL();
    });

    it('Provera page title na Contact Guidefitter page', function(){
        testFooterLinks.checkPageTitleOfContactGuidefitterPage();
    });

    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(3000);
    });

    it('Klik na Space na tastaturi za Load More na strani', function () {
        var step;
        for (step = 0; step < 5; step++) {
            testFooterLinks.scrollPage();
            browser.sleep(1000);
        }
    });

    it('Klik on Advertise In Our Journal', function(){
        testFooterLinks.clickOnAdvertiseInOurJournal();
    });

    it('Provera URL-a za Advertise In Our Journal', function(){
        testFooterLinks.checkAdvertiseInOurJournalURL();
    });

    it('Provera page title na  Advertise In Our Journal', function(){
        testFooterLinks.checkPageTitleOfAdvertiseInOurJournalPage();
    });

    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);
    });

    it('Klik na Space na tastaturi za Load More na strani', function () {
        var step;
        for (step = 0; step < 5; step++) {
            testFooterLinks.scrollPage();
            browser.sleep(1000);
        }
    });

    it('Klik on Legal', function(){
        testFooterLinks.clickOnLegal();
    });

    it('Provera URL-a za Legal', function(){
        testFooterLinks.checkLegalURL();
    });

    it('Provera page title na Legal page', function(){
        testFooterLinks.checkPageTitleOfLegalPage();
    });

    it('Provera URL-a za Legal', function(){
        testFooterLinks.checkLegalURL();
    });

    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(3000);
    });

    it('Klik on instagram icon', function(){
        testFooterLinks.clickOnInstagram();
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
        });
        browser.sleep(3000);
    });

    it('Provera instagram URLa', function(){
        testFooterLinks.checkInstagramURLa();
        browser.getAllWindowHandles().then(function (handles) {
        browser.driver.switchTo().window(handles[1]);
        browser.driver.close();
        browser.driver.switchTo().window(handles[0]);
        });
        browser.sleep(3000);
    });

    it('Klik on facebook icon', function(){
        testFooterLinks.clickOnFacebook();
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
        });
        browser.sleep(3000);
    });

    it('Provera facebook URLa', function(){
        testFooterLinks.checkFacebookURLa();
        browser.getAllWindowHandles().then(function (handles) {
        browser.driver.switchTo().window(handles[1]);
        browser.driver.close();
        browser.driver.switchTo().window(handles[0]);
        });
        browser.sleep(3000);
    });

    it('Klik on Twitter icon', function(){
        testFooterLinks.clickOnTwitter();
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
        });
        browser.sleep(3000);
    });

    it('Provera Twitter URLa', function(){
        testFooterLinks.checkTwitterURLa();
        browser.getAllWindowHandles().then(function (handles) {
        browser.driver.switchTo().window(handles[1]);
        browser.driver.close();
        browser.driver.switchTo().window(handles[0]);
        });
        browser.sleep(3000);
    });

    it('Klik on GooglePlay icon for android', function(){
        testFooterLinks.clickOnBragIconForAndroid();
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
        });
        browser.sleep(3000);
    });

    it('Provera brag android URLa', function(){
        testFooterLinks.checkBragAndoridURLa();
        browser.getAllWindowHandles().then(function (handles) {
        browser.driver.switchTo().window(handles[1]);
        browser.driver.close();
        browser.driver.switchTo().window(handles[0]);
        });
        browser.sleep(3000);
    });

    it('Klik on AppStore icon for ios', function(){
        testFooterLinks.clickOnBragIconForiOS();
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
        });
        browser.sleep(3000);
    });

    it('Provera brag iOS URLa', function(){
        testFooterLinks.checkBragiOSURLa();
        browser.getAllWindowHandles().then(function (handles) {
        browser.driver.switchTo().window(handles[1]);
        browser.driver.close();
        browser.driver.switchTo().window(handles[0]);
        });
        browser.sleep(3000);
    });

    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(2000);
    });


    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});