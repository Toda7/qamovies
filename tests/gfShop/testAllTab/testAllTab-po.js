function landOnTrugloShop() {
    // dolazak na Truglo shop 
    browser.get('https://shop.outfitterextreme.com/truglo'); 
    browser.sleep(2000);
}

function clickOntestAllTab() {
    //  Klik na All tab
    element(by.className('secondary-navigation-button-wrap')).click();
    browser.sleep(2000);
}

function clickOnSights() {
    // Click na Sights link
    element(by.css('.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all')).all(by.tagName('li')).get(0).click();
    browser.sleep(5000);
}

function checkSightsTitle() {
    // Provera da li je Sights u Title-u
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page-title'), 'Sights'), 5000);
}

function checkSightsUrl() {
    // Provera da li se ucitao Sights URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/archery/sights.html'), 5000);
}

function clickOnQuivers() {
    // Click na Quivers link
    element(by.css('.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all')).all(by.tagName('li')).get(1).click();
    browser.sleep(5000);
}

function checkQuiversTitle() {
    // Provera da li je Quivers u Title-u
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page-title'), 'Quivers'), 5000);
}

function checkQuiversUrl() {
    // Provera da li se ucitao Quivers URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/archery/quivers.html'), 5000);
}

function clickOnScopes() {
    // Click na Scopes link
    element(by.css('.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all')).all(by.tagName('li')).get(2).click();
    browser.sleep(5000);
}

function checkScopesTitle() {
    // Provera da li je Scopes u Title-u
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page-title'), 'Scopes'), 5000);
}

function checkScopesUrl() {
    // Provera da li se ucitao Scopes URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/archery/scopes.html'), 5000);
}

function clickOnStabilizers() {
    // Click na Stabilizers link
    element(by.css('.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all')).all(by.tagName('li')).get(3).click();
    browser.sleep(5000);
}

function checkStabilizersTitle() {
    // Provera da li je Stabilizers u Title-u
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page-title'), 'Stabilizers'), 5000);
}

function checkStabilizersUrl() {
    // Provera da li se ucitao Stabilizers URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/archery/stabilizers.html'), 5000);
}

function clickOnReleases() {
    // Click na Releases link
    element(by.css('.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all')).all(by.tagName('li')).get(4).click();
    browser.sleep(5000);
}

function checkReleasesTitle() {
    // Provera da li je Releases u Title-u
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page-title'), 'Releases'), 5000);
}

function checkReleasesUrl() {
    // Provera da li se ucitao Releases URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/archery/releases.html'), 5000);
}

function clickOnRests() {
    // Click na Rests link
    element(by.css('.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all')).all(by.tagName('li')).get(5).click();
    browser.sleep(5000);
}

function checkRestsTitle() {
    // Provera da li je Rests u Title-u
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page-title'), 'Rests'), 5000);
}

function checkRestsUrl() {
    // Provera da li se ucitao Rests URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/archery/rests.html'), 5000);
}

function clickOnBroadheads() {
    // Click na Broadheads link
    element(by.css('.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all')).all(by.tagName('li')).get(6).click();
    browser.sleep(5000);
}

function checkBroadheadsTitle() {
    // Provera da li je Broadheads u Title-u
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page-title'), 'Broadheads'), 5000);
}

function checkBroadheadsUrl() {
    // Provera da li se ucitao Broadheads URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/archery/broadheads.html'), 5000);
}

function clickOnBowfishing() {
    // Click na Bowfishing link
    element(by.css('.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all')).all(by.tagName('li')).get(7).click();
    browser.sleep(5000);
}

function checkBowfishingTitle() {
    // Provera da li je Bowfishing u Title-u
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page-title'), 'Bowfishing'), 5000);
}

function checkBowfishingUrl() {
    // Provera da li se ucitao Bowfishing URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/archery/bowfishing.html'), 5000);
}

function clickOnBowAccessories() {
    // Click na Bow Accessories link
    element(by.css('.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all')).all(by.tagName('li')).get(8).click();
    browser.sleep(5000);
}

function checkBowAccessoriesTitle() {
    // Provera da li je Bow Accessories u Title-u
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page-title'), 'Bow Accessories'), 5000);
}

function checkBowAccessoriesUrl() {
    // Provera da li se ucitao Bow Accessories URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/archery/bow-accessories.html'), 5000);
}

function clickOnTurkeyHunting() {
    // Click na Turkey Hunting link
    element.all(by.css('.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all')).get(1).all(by.tagName('li')).get(0).click();
    browser.sleep(5000);
}

function checkTurkeyHuntingTitle() {
    // Provera da li je Turkey Hunting u Title-u
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page-title'), 'Turkey Hunting'), 5000);
}

function checkTurkeyHuntingUrl() {
    // Provera da li se ucitao Turkey Hunting URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting/turkey-hunting.html'), 5000);
}

function clickOnRedDots() {
    // Click na Red Dots link
    element.all(by.css('.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all')).get(1).all(by.tagName('li')).get(1).click();
    browser.sleep(5000);
}

function checkRedDotsTitle() {
    // Provera da li je Red Dots u Title-u
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page-title'), 'Red Dots'), 5000);
}

function checkRedDotsUrl() {
    // Provera da li se ucitao Red Dots URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting/optics-red-dots.html'), 5000);
}

function clickOnHuntingScopes() {
    // Click na Hunting Scopes link
    element.all(by.css('.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all')).get(1).all(by.tagName('li')).get(2).click();
    browser.sleep(5000);
}

function checkHuntingScopesTitle() {
    // Provera da li je Hunting Scopes u Title-u
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page-title'), 'Hunting Scopes'), 5000);
}

function checkHuntingScopesUrl() {
    // Provera da li se ucitao Hunting Scopes URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting/hunting-scopes.html'), 5000);
}

function clickOnSights2() {
    // Click na Sights2 link
    element.all(by.css('.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all')).get(1).all(by.tagName('li')).get(3).click();
    browser.sleep(5000);
}

function checkSights2Title() {
    // Provera da li je Sights2 u Title-u
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page-title'), 'Sights'), 5000);
}

function checkSights2Url() {
    // Provera da li se ucitao Sights2 URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting/shotgun-sights.html'), 5000);
}

function clickOnAccessories() {
    // Click na Accessories link
    element.all(by.css('.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all')).get(1).all(by.tagName('li')).get(4).click();
    browser.sleep(5000);
}

function checkAccessoriesTitle() {
    // Provera da li je Accessories u Title-u
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page-title'), 'Accessories'), 5000);
}

function checkAccessoriesUrl() {
    // Provera da li se ucitao Accessories URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting/accessories.html'), 5000);
}

function clickOnRedDots2() {
    // Click na Red Dots2 link
    element.all(by.css('.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all')).get(2).all(by.tagName('li')).get(0).click();
    browser.sleep(5000);
}

function checkRedDots2Title() {
    // Provera da li je Red Dots2 u Title-u
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page-title'), 'Red Dots'), 5000);
}

function checkRedDots2Url() {
    // Provera da li se ucitao Red Dots2 URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-tactical/tactical-red-dots.html'), 5000);
}

function clickOnScopes2() {
    // Click na Scopes2 link
    element.all(by.css('.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all')).get(2).all(by.tagName('li')).get(1).click();
    browser.sleep(5000);
}

function checkScopes2Title() {
    // Provera da li je Scopes2 u Title-u
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page-title'), 'Scopes'), 5000);
}

function checkScopes2Url() {
    // Provera da li se ucitao Scopes2 URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-tactical/tactical-scopes.html'), 5000);
}

function clickOnSights3() {
    // Click na Sights3 link
    element.all(by.css('.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all')).get(2).all(by.tagName('li')).get(2).click();
    browser.sleep(5000);
}

function checkSights3Title() {
    // Provera da li je Sights3 u Title-u
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page-title'), 'Sights'), 5000);
}

function checkSights3Url() {
    // Provera da li se ucitao Sights3 URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-tactical/tactical-sights.html'), 5000);
}

function clickOnAccessories2() {
    // Click na Accessories2 link
    element.all(by.css('.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all')).get(2).all(by.tagName('li')).get(3).click();
    browser.sleep(5000);
}

function checkAccessories2Title() {
    // Provera da li je Accessories2 u Title-u
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page-title'), 'Accessories'), 5000);
}

function checkAccessories2Url() {
    // Provera da li se ucitao Accessories2 URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-tactical/tactical-accessories.html'), 5000);
}

function clickOnX() {
    // Click na X
    element(by.className('action close fireclose ui-widget-content ui-menu-divider')).click();
    browser.sleep(5000);
}

function clickOnGf() {
    // Click na GF link
    element(by.className('backtogf ui-menu-item')).click();
    browser.sleep(5000);
}

function checkGearDiscountsUrl() {
    // Provera da li se ucitao Gear Discounts URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://www.outfitterextreme.com/gear-discounts'), 5000);
}

 module.exports = {
    landOnTrugloShop,
    clickOntestAllTab,
    clickOnSights,
    checkSightsTitle,
    checkSightsUrl,
    clickOnQuivers,
    checkQuiversTitle,
    checkQuiversUrl,
    clickOnScopes,
    checkScopesTitle,
    checkScopesUrl,
    clickOnStabilizers,
    checkStabilizersTitle,
    checkStabilizersUrl,
    clickOnReleases,
    checkReleasesTitle,
    checkReleasesUrl,
    clickOnRests,
    checkRestsTitle,
    checkRestsUrl,
    clickOnBroadheads,
    checkBroadheadsTitle,
    checkBroadheadsUrl,
    clickOnBowfishing,
    checkBowfishingTitle,
    checkBowfishingUrl,
    clickOnBowAccessories,
    checkBowAccessoriesTitle,
    checkBowAccessoriesUrl,
    clickOnTurkeyHunting,
    checkTurkeyHuntingTitle,
    checkTurkeyHuntingUrl,
    clickOnRedDots,
    checkRedDotsTitle,
    checkRedDotsUrl,
    clickOnHuntingScopes,
    checkHuntingScopesTitle,
    checkHuntingScopesUrl,
    clickOnSights2,
    checkSights2Title,
    checkSights2Url,
    clickOnAccessories,
    checkAccessoriesTitle,
    checkAccessoriesUrl,
    clickOnRedDots2,
    checkRedDots2Title,
    checkRedDots2Url,
    clickOnScopes2,
    checkScopes2Title,
    checkScopes2Url,
    clickOnSights3,
    checkSights3Title,
    checkSights3Url,
    clickOnAccessories2,
    checkAccessories2Title,
    checkAccessories2Url,
    clickOnX,
    clickOnGf,
    checkGearDiscountsUrl,
}