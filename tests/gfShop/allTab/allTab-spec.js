var allTab = require('./allTab-po.js');

describe('Provera linkova u All tabu', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Truglo shop', function(){
        allTab.landOnTrugloShop();
    });

    it('KLik na All tab', function(){
        allTab.clickOnAllTab();
    });

    it('KLik na Sights link', function(){
        allTab.clickOnSights();
    });

    it('Provera da li je Sights u Title-u', function(){
        allTab.checkSightsTitle();
    });

    it('Provera da li se ucitao Sights URL', function(){
        allTab.checkSightsUrl();
    });

    it('KLik na All tab', function(){
        allTab.clickOnAllTab();
    });

    it('KLik na Quivers link', function(){
        allTab.clickOnQuivers();
    });

    it('Provera da li je Quivers u Title-u', function(){
        allTab.checkQuiversTitle();
    });

    it('Provera da li se ucitao Quivers URL', function(){
        allTab.checkQuiversUrl();
    });

    it('KLik na All tab', function(){
        allTab.clickOnAllTab();
    });

    it('KLik na Scopes link', function(){
        allTab.clickOnScopes();
    });

    it('Provera da li je Scopes u Title-u', function(){
        allTab.checkScopesTitle();
    });

    it('Provera da li se ucitao Scopes URL', function(){
        allTab.checkScopesUrl();
    });

    it('KLik na All tab', function(){
        allTab.clickOnAllTab();
    });

    it('KLik na Stabilizers link', function(){
        allTab.clickOnStabilizers();
    });

    it('Provera da li je Stabilizers u Title-u', function(){
        allTab.checkStabilizersTitle();
    });

    it('Provera da li se ucitao Stabilizers URL', function(){
        allTab.checkStabilizersUrl();
    });

    it('KLik na All tab', function(){
        allTab.clickOnAllTab();
    });

    it('KLik na Releases link', function(){
        allTab.clickOnReleases();
    });

    it('Provera da li je Releases u Title-u', function(){
        allTab.checkReleasesTitle();
    });

    it('Provera da li se ucitao Releases URL', function(){
        allTab.checkReleasesUrl();
    });

    it('KLik na All tab', function(){
        allTab.clickOnAllTab();
    });

    it('KLik na Rests link', function(){
        allTab.clickOnRests();
    });

    it('Provera da li je Rests u Title-u', function(){
        allTab.checkRestsTitle();
    });

    it('Provera da li se ucitao Rests URL', function(){
        allTab.checkRestsUrl();
    });

    it('KLik na All tab', function(){
        allTab.clickOnAllTab();
    });

    it('KLik na Broadheads link', function(){
        allTab.clickOnBroadheads();
    });

    it('Provera da li je Broadheads u Title-u', function(){
        allTab.checkBroadheadsTitle();
    });

    it('Provera da li se ucitao Broadheads URL', function(){
        allTab.checkBroadheadsUrl();
    });

    it('KLik na All tab', function(){
        allTab.clickOnAllTab();
    });

    it('KLik na Bowfishing link', function(){
        allTab.clickOnBowfishing();
    });

    it('Provera da li je Bowfishing u Title-u', function(){
        allTab.checkBowfishingTitle();
    });

    it('Provera da li se ucitao Bowfishing URL', function(){
        allTab.checkBowfishingUrl();
    });

    it('KLik na All tab', function(){
        allTab.clickOnAllTab();
    });

    it('KLik na Bow Accessories link', function(){
        allTab.clickOnBowAccessories();
    });

    it('Provera da li je Bow Accessories u Title-u', function(){
        allTab.checkBowAccessoriesTitle();
    });

    it('Provera da li se ucitao Bow Accessories URL', function(){
        allTab.checkBowAccessoriesUrl();
    });

    it('KLik na All tab', function(){
        allTab.clickOnAllTab();
    });

    it('KLik na Turkey Hunting link', function(){
        allTab.clickOnTurkeyHunting();
    });

    it('Provera da li je Turkey Hunting u Title-u', function(){
        allTab.checkTurkeyHuntingTitle();
    });

    it('Provera da li se ucitao Turkey Hunting URL', function(){
        allTab.checkTurkeyHuntingUrl();
    });

    it('KLik na All tab', function(){
        allTab.clickOnAllTab();
    });

    it('KLik na Red Dots link', function(){
        allTab.clickOnRedDots();
    });

    it('Provera da li je Red Dots u Title-u', function(){
        allTab.checkRedDotsTitle();
    });

    it('Provera da li se ucitao Red Dots URL', function(){
        allTab.checkRedDotsUrl();
    });

    it('KLik na All tab', function(){
        allTab.clickOnAllTab();
    });

    it('KLik na Hunting Scopes link', function(){
        allTab.clickOnHuntingScopes();
    });

    it('Provera da li je Hunting Scopes u Title-u', function(){
        allTab.checkHuntingScopesTitle();
    });

    it('Provera da li se ucitao Hunting Scopes URL', function(){
        allTab.checkHuntingScopesUrl();
    });

    it('KLik na All tab', function(){
        allTab.clickOnAllTab();
    });

    it('KLik na Sights2 link', function(){
        allTab.clickOnSights2();
    });

    it('Provera da li je Sights2 u Title-u', function(){
        allTab.checkSights2Title();
    });

    it('Provera da li se ucitao Sights2 URL', function(){
        allTab.checkSights2Url();
    });

    it('KLik na All tab', function(){
        allTab.clickOnAllTab();
    });

    it('KLik na Accessories link', function(){
        allTab.clickOnAccessories();
    });

    it('Provera da li je Accessories u Title-u', function(){
        allTab.checkAccessoriesTitle();
    });

    it('Provera da li se ucitao Accessories URL', function(){
        allTab.checkAccessoriesUrl();
    });

    it('KLik na All tab', function(){
        allTab.clickOnAllTab();
    });

    it('KLik na Red Dots2 link', function(){
        allTab.clickOnRedDots2();
    });

    it('Provera da li je Red Dots2 u Title-u', function(){
        allTab.checkRedDots2Title();
    });

    it('Provera da li se ucitao Red Dots2 URL', function(){
        allTab.checkRedDots2Url();
    });

    it('KLik na All tab', function(){
        allTab.clickOnAllTab();
    });

    it('KLik na Scopes2 link', function(){
        allTab.clickOnScopes2();
    });

    it('Provera da li je Scopes2 u Title-u', function(){
        allTab.checkScopes2Title();
    });

    it('Provera da li se ucitao Scopes2 URL', function(){
        allTab.checkScopes2Url();
    });

    it('KLik na All tab', function(){
        allTab.clickOnAllTab();
    });

    it('KLik na Sights3 link', function(){
        allTab.clickOnSights3();
    });

    it('Provera da li je Sights3 u Title-u', function(){
        allTab.checkSights3Title();
    });

    it('Provera da li se ucitao Sights3 URL', function(){
        allTab.checkSights3Url();
    });

    it('KLik na All tab', function(){
        allTab.clickOnAllTab();
    });

    it('KLik na Accessories2 link', function(){
        allTab.clickOnAccessories2();
    });

    it('Provera da li je Accessories2 u Title-u', function(){
        allTab.checkAccessories2Title();
    });

    it('Provera da li se ucitao Accessories2 URL', function(){
        allTab.checkAccessories2Url();
    });

    it('KLik na All tab', function(){
        allTab.clickOnAllTab();
    });

    it('KLik na X', function(){
        allTab.clickOnX();
    });

    it('KLik na All tab', function(){
        allTab.clickOnAllTab();
    });

    it('KLik na GF link', function(){
        allTab.clickOnGf();
    });

    it('Provera da li se ucitao Gear Discounts URL', function(){
        allTab.checkGearDiscountsUrl();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});