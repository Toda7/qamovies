function checkDashPageUrl() {
    // Prowera Dashboard Urla
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/membership/dashboard/'), 5000);
}

// function checkDmIcon()  {
//     // Proverava da li se ucitao Global Search polje 
//     var EC = protractor.ExpectedConditions;
//     browser.wait(EC.textToBePresentInElement($('.empty'),'dm_notification'), 5000);
// }

function checkPremiumAd()  {
    // Proverava da li se ucitao Premium Ad 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.ad_container'),'Unlock all of CBANC Premium - Give your institution the same capabilities as one 10 times larger at a fraction of the cost.'), 5000);
   
}

function checkCommunityDrop()  {
    // Proverava da li se ucitao Community Drop 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.menu_item.link_community.has_submenu'),'Community'), 5000);
   
}

function checkEducationDrop()  {
    // Proverava da li se ucitao Community Drop 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.menu_item.link_education.has_submenu'),'Education'), 5000);
   
}

function checkMoreDrop()  {
    // Proverava da li se ucitao Community Drop 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.menu_item.link_apps.has_submenu'),'More'), 5000);
   
}

function checkFooter()  {
    // Proverava da li se ucitao Copyright text u footeru
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.copy'),'2008 - 2019 CBANC Network. All rights reserved.'), 5000);
}


module.exports = {
    checkDashPageUrl,
    //checkDmIcon,
    checkPremiumAd,
    checkCommunityDrop,
    checkEducationDrop,
    checkMoreDrop,
    checkFooter,
}