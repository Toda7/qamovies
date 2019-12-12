function clickOnHuntsByRegion() {
   // Klik on Hunts By Region
   element(by.partialLinkText('Hunts By Region')).click();
   browser.sleep(2500);
}

function checkHuntsByRegionURL() {
   // Provera URL-a za Hunts By Region
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/hunts-by-region'), 5000);
}

function checkPageTitleOfHuntsByRegion() {
   // Provera page title na Hunts By Region page
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Browse Hunting Trips by Location... | Guidefitter'), 5000);
}

function clickOnHuntsBySpecies() {
   // Klik on Hunts By Species
   element(by.partialLinkText('Hunts By Species')).click();
   browser.sleep(2500);
}

function checkHuntsBySpeciesURL() {
   // Provera URL-a za Hunts By Species
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/hunts-by-species'), 5000);
}

function checkPageTitleOfHuntsBySpecies() {
   // Provera page title na Hunts By Species page
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Browse Hunting Trips by Game... | Guidefitter'), 5000);
}

function clickOnFishingByRegion() {
   // Klik on Fishing By Region
   element(by.partialLinkText('Fishing by Region')).click();
   browser.sleep(2500);
}

function checkFishingByRegionURL() {
   // Provera URL-a za Fishing By Region
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/fishing-by-region'), 5000);
}

function checkPageTitleOfFishingByRegion() {
   // Provera page title na Fishing By Region page
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Browse Fishing Trips by Location... | Guidefitter'), 5000);
}

function clickOnFishingBySpecies() {
   // Klik on Fishing By species
   element(by.partialLinkText('Fishing by Species')).click();
   browser.sleep(2500);
}

function checkFishingBySpeciesURL() {
   // Provera URL-a za Fishing By species
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/fishing-by-species'), 5000);
}

function checkPageTitleOfFishingBySpecies() {
   // Provera page title na Fishing By species page
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Browse Fishing Trips by Game... | Guidefitter'), 5000);
}


function clickOnOutdoorNewsAdvice() {
   // Klik on Outdoor News Advice
   element(by.partialLinkText('Outdoor News & Advice')).click();
   browser.sleep(2500);
}

function checkOutdoorNewsAdviceURL() {
   // Provera URL-a za Outdoor News Advice
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/news-and-advice'), 5000);
}

function checkPageTitleOfOutdoorNewsAdvice() {
   // Provera page title na Outdoor News Advice
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Hunting News | Guidefitter'), 5000);
}


function clickOnHuntingVideos() {
   // Klik on Hunting Videos
   element(by.partialLinkText('Hunting Videos')).click();
   browser.sleep(2500);
}

function checkHuntingVideosURL() {
   // Provera URL-a za Hunting Videos
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/videos'), 5000);
}

function checkPageTitleOfHuntingVideos() {
   // Provera page title na Hunting Videos
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Hunting & Fishing Videos | Guidefitter'), 5000);
}

function clickOnGuidefitterGiveaways() {
   // Klik on Guidefitter Giveaways
   element(by.partialLinkText('Guidefitter Giveaways')).click();
   browser.sleep(2500);
}

function checkGuidefitterGiveawaysURL() {
   // Provera URL-a za Guidefitter Giveaways
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/giveaways'), 5000);
}

function checkPageTitleOfGuidefitterGiveaways() {
   // Provera page title na Guidefitter Giveaways
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Hunting & Fishing Giveaways | Guidefitter'), 5000);
}

function clickOnResources() {
   // Klik on Resources
   element(by.partialLinkText('Resources')).click();
   browser.sleep(2500);
}

function checkResourcesURL() {
   // Provera URL-a za Resources
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/resources'), 5000);
}

function checkPageTitleOfResources() {
   // Provera page title na Resources page
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Resources | Guidefitter'), 5000);
}

function clickOnObtainaHuntingLicense() {
   // Klik on Obtain a Hunting License
   element(by.partialLinkText('Obtain a Hunting License')).click();
   browser.sleep(2500);
}

function checkObtainaHuntingLicenseURL() {
   // Provera URL-a za Obtain a Hunting License
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/hunting-licenses-by-state'), 5000);
}

function checkPageTitleOfObtainaHuntingLicense() {
   // Provera page title na Obtain a Hunting License
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Hunting Licenses & Permits | Guidefitter'), 5000);
}

function clickOnBragHuntingorFishingPhoto() {
   // Klik on Obtain a Brag a Hunting or Fishing Photo
   element(by.partialLinkText('Brag a Hunting or Fishing Photo')).click();
   browser.sleep(2500);
}

function checkBragHuntingorFishingPhotoURL() {
   // Provera URL-a za Obtain a Brag a Hunting or Fishing Photo
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/bragging-wall'), 5000);
}

// function checkPageTitleOfBragHuntingorFishingPhoto() {
//    // Provera page title na Obtain a Brag a Hunting or Fishing Photo
//    var EC = protractor.ExpectedConditions;
//    browser.wait(EC.titleIs('Braggin' Wall - Brag Your Best Photos | Guidefitter), 5000);
// }

function clickOnCreatePostOnTheCommunityfeed() {
   // Klik on Create post on the Community feed
   element(by.partialLinkText('Create post on the Community feed')).click();
   browser.sleep(2500);
}

function checkCreatePostOnTheCommunityfeedURL() {
   // Provera URL-a za Create post on the Community feed
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/feed'), 5000);
}

function checkPageTitleOfCreatePostOnTheCommunityfeed() {
   // Provera page title na Create post on the Community feed
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Hunting Outfitters, Guides, Photos, Expert Advice | Guidefitter'), 5000);
}

function clickOnAskQuestion() {
   // Klik on ask a Question 
   element(by.partialLinkText('Ask a Question')).click();
   browser.sleep(2500);
}

function checkAskQuestionURL() {
   // Provera URL-a za ask a Question 
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/feed?type=50'), 5000);
}

function checkPageTitleOfAskQuestion() {
   // Provera page title na ask question page
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Hunting Outfitters, Guides, Photos, Expert Advice | Guidefitter'), 5000);
}

function clickOnInsiders() {
   // Klik on Insiders
   element(by.partialLinkText('Insiders')).click();
   browser.sleep(2500);
}

function checkInsidersURL() {
   // Provera URL-a za Insiders
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/insiders'), 5000);
}

function checkPageTitleOfInsidersPage() {
   // Provera page title na ask question page
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Gear Discounts for Outdoor Industry Insiders | Guidefitter'), 5000);
}

function clickOnSaveMoneyOnGear() {
   // Klik on Save Money On Gear 
   element(by.partialLinkText('Save Money on Gear')).click();
   browser.sleep(2500);
}

function checkSaveMoneyOnGearURL() {
   // Provera URL-a za Save Money On Gear
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/gear-discounts'), 5000);
}

function checkPageTitleOfSaveMoneyOnGearPage() {
   // Provera page title na Save Money On Gear
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('The Grid - Gear Discounts | Guidefitter'), 5000);
}

function clickOnInviteAnInsider() {
   // Klik on Invite an Insider
   element(by.partialLinkText('Invite an Insider')).click();
   browser.sleep(2500);
}

function checkInviteAnInsiderURL() {
   // Provera URL-a za Invite an Insider
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/insiders-referral-program'), 5000);
}

function checkPageTitleOfInviteAnInsiderPage() {
   // Provera page title na Invite an Insider
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Invite an Insider Competition | Guidefitter'), 5000);
}

function clickOnCreateOutfitter() {
   // Klik on Create a Free Outfitter Page
   element(by.partialLinkText('Create Outfitter Page')).click();
   browser.sleep(2500);
}

function checkCreateOutfitterURL() {
   // Provera URL-a za Create a Free Outfitter Page
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/free-outfitter-page'), 5000);
}

function checkPageTitleOfCreateOutfitterPage() {
   // Provera page title na Create a Free Outfitter Page
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Create a Free Outfitter Page | Guidefitter'), 5000);
}

function clickOnPromoteYourSkills() {
   // Klik on Promote Your Skills
   element(by.partialLinkText('Promote Your Skills')).click();
   browser.sleep(2500);
}

function checkPromoteYourSkillsURL() {
   // Provera URL-a za Promote Your Skills
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/promote-your-skills'), 5000);
}

function checkPageTitleOfPromoteYourSkillsPage() {
   // Provera page title na Promote Your Skills
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Are you a pro guide? | Guidefitter'), 5000);
}

function clickOnHelp() {
   // Klik on Help
   element(by.partialLinkText('Help')).click();
   browser.sleep(2500);
}

function checkHelpURL() {
   // Provera URL-a za Help
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/help'), 5000);
}

function checkPageTitleOfHelpPage() {
   // Provera page title na Help
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Help | Guidefitter'), 5000);
}


function clickOnPromoteYourProProgram() {
   // Klik on Promote Your Pro Program
   element(by.partialLinkText('Promote Your Pro Program')).click();
   browser.sleep(2500);
}

function checkPromoteYourProProgramURL() {
   // Provera URL-a za Promote Your Pro Program
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/influencer-marketing-outdoor-industry'), 5000);
}

function checkPageTitleOfPromoteYourProProgramPage() {
   // Provera page title na Promote Your Pro Program
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Influencer Marketing - Guidefitter'), 5000);
}

function clickOnAboutUs() {
   // Klik on About Us
   element(by.partialLinkText('About Us')).click();
   browser.sleep(2500);
}

function checkAboutUsURL() {
   // Provera URL-a za About Us
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/about-us'), 5000);
}

function checkPageTitleOfAboutUsPage() {
   // Provera page title na About Us
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('About Guidefitter | Guidefitter'), 5000);
}

function clickOnCompanyNews() {
   // Klik on Company News
   element(by.partialLinkText('Company News')).click();
   browser.sleep(2500);
}

function checkCompanyNewsURL() {
   // Provera URL-a za Company News
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/news'), 5000);
}

function checkPageTitleOfCompanyNewsPage() {
   // Provera page title na Company News
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Company News | Guidefitter'), 5000);
}

function clickOnCareers() {
   // Klik on Company News
   element(by.partialLinkText('Careers')).click();
   browser.sleep(2500);
}

function checkCareersURL() {
   // Provera URL-a za Company News
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/careers'), 5000);
}

function checkPageTitleOfCareersPage() {
   // Provera page title na Company News
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Careers | Guidefitter'), 5000);
}

function clickOnContactGuidefitter() {
   // Klik on Company News
   element(by.partialLinkText('Contact Guidefitter')).click();
   browser.sleep(2500);
}

function checkContactGuidefitterURL() {
   // Provera URL-a za Contact Guidefitter
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/contact'), 5000);
}

function checkPageTitleOfContactGuidefitterPage() {
   // Provera page title na Contact Guidefitter
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Contact Us | Guidefitter'), 5000);
}


function clickOnAdvertiseInOurJournal() {
   // Klik on Advertise In Our Journal
   element(by.partialLinkText('Advertise In Our Journal')).click();
   browser.sleep(2500);
}

function checkAdvertiseInOurJournalURL() {
   // Provera URL-a za Advertise In Our Journal
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/advertise'), 5000);
}

function checkPageTitleOfAdvertiseInOurJournalPage() {
   // Provera page title na  Advertise In Our Journal
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Advertise in Guidefitter Journal | Guidefitter'), 5000);
}

function clickOnLegal() {
   // Klik on Legal
   element(by.partialLinkText('Legal')).click();
   browser.sleep(2500);
}

function checkLegalURL() {
   // Provera URL-a za Legal
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/legal'), 5000);
}

function checkPageTitleOfLegalPage() {
   // Provera page title na Legal page
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Guidefitter Legal Information | Guidefitter'), 5000);
}

function clickOnInstagram() {
   // Klik on instagram icon
   element(by.className('btn btn-link p-a-0 btn-link-instagram')).click();
   browser.sleep(2500);
}

function checkInstagramURLa() {
   // Provera instagram URLa
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.instagram.com/guidefitter/'), 5000);
}

function clickOnFacebook() {
   // Klik on Facebook icon
   element(by.className('btn btn-link p-a-0 btn-link-facebook')).click();
   browser.sleep(2500);
}

function checkFacebookURLa() {
   // Provera Facebook URLa
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.facebook.com/guidefitter'), 5000);
}

function clickOnTwitter() {
   // Klik on Twitter icon
   element(by.className('btn btn-link p-a-0 btn-link-twitter')).click();
   browser.sleep(2500);
}

function checkTwitterURLa() {
   // Provera Twitter URLa
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://twitter.com/guidefitter'), 5000);
}

function clickOnBragIconForAndroid() {
   // Klik on GooglePlay icon for android
   element.all(by.className('img-responsive')).get(0).click();
   browser.sleep(2500);
}

function checkBragAndoridURLa() {
   // Provera brag android URLa
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://play.google.com/store/apps/details?id=com.guidefitter.brag'), 5000);
}

function clickOnBragIconForiOS() {
   // Klik on AppStore icon for ios
   element.all(by.className('img-responsive')).get(1).click();
   browser.sleep(2500);
}

function checkBragiOSURLa() {
   // Provera brag iOS URLa
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://apps.apple.com/tm/app/brag-by-guidefitter/id1044250130'), 5000);
}



module.exports = {
   clickOnHuntsByRegion,
   checkHuntsByRegionURL,
   checkPageTitleOfHuntsByRegion,
   clickOnHuntsBySpecies,
   checkHuntsBySpeciesURL,
   checkPageTitleOfHuntsBySpecies,
   clickOnFishingByRegion,
   checkFishingByRegionURL,
   checkPageTitleOfFishingByRegion,
   clickOnFishingBySpecies,
   checkFishingBySpeciesURL,
   checkPageTitleOfFishingBySpecies,
   clickOnOutdoorNewsAdvice,
   checkOutdoorNewsAdviceURL,
   checkPageTitleOfOutdoorNewsAdvice,
   clickOnHuntingVideos,
   checkHuntingVideosURL,
   checkPageTitleOfHuntingVideos,
   clickOnGuidefitterGiveaways,
   checkGuidefitterGiveawaysURL,
   checkPageTitleOfGuidefitterGiveaways,
   clickOnResources,
   checkResourcesURL,
   checkPageTitleOfResources,
   clickOnObtainaHuntingLicense,
   checkObtainaHuntingLicenseURL,
   checkPageTitleOfObtainaHuntingLicense,
   clickOnBragHuntingorFishingPhoto,
   checkBragHuntingorFishingPhotoURL,
   clickOnCreatePostOnTheCommunityfeed,
   checkCreatePostOnTheCommunityfeedURL,
   checkPageTitleOfCreatePostOnTheCommunityfeed,
   clickOnAskQuestion,
   checkAskQuestionURL,
   checkPageTitleOfAskQuestion,
   clickOnInsiders,
   checkInsidersURL,
   checkPageTitleOfInsidersPage,
   clickOnSaveMoneyOnGear,
   checkSaveMoneyOnGearURL,
   checkPageTitleOfSaveMoneyOnGearPage,
   checkSaveMoneyOnGearURL,
   clickOnInviteAnInsider,
   checkInviteAnInsiderURL,
   checkPageTitleOfInviteAnInsiderPage,
   clickOnCreateOutfitter,
   checkCreateOutfitterURL,
   checkPageTitleOfCreateOutfitterPage,
   clickOnPromoteYourSkills,
   checkPromoteYourSkillsURL,
   checkPageTitleOfPromoteYourSkillsPage,
   clickOnHelp,
   checkHelpURL,
   checkPageTitleOfHelpPage,
   clickOnPromoteYourProProgram,
   checkPromoteYourProProgramURL,
   checkPageTitleOfPromoteYourProProgramPage,
   clickOnAboutUs,
   checkAboutUsURL,
   checkPageTitleOfAboutUsPage,
   clickOnCompanyNews,
   checkCompanyNewsURL,
   checkPageTitleOfCompanyNewsPage,
   clickOnCareers,
   checkCareersURL,
   checkPageTitleOfCareersPage,
   clickOnContactGuidefitter,
   checkContactGuidefitterURL,
   checkPageTitleOfContactGuidefitterPage,
   clickOnAdvertiseInOurJournal,
   checkAdvertiseInOurJournalURL,
   checkPageTitleOfAdvertiseInOurJournalPage,
   clickOnLegal,
   checkLegalURL,
   checkPageTitleOfLegalPage,
   clickOnInstagram,
   checkInstagramURLa,
   clickOnFacebook,
   checkFacebookURLa,
   clickOnTwitter,
   checkTwitterURLa,
   clickOnBragIconForAndroid,
   checkBragAndoridURLa,
   clickOnBragIconForiOS,
   checkBragiOSURLa,

   
}