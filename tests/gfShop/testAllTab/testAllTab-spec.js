var testAllTab = require('./testAllTab-po.js');

describe('Provera linkova u All tabu', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Truglo shop', function () {
        testAllTab.landOnTrugloShop();
        browser.sleep(4000);
    });

    it('KLik na All tab', function () {
        testAllTab.clickOntestAllTab();
        browser.sleep(3000);
    });

    it('KLik na Sights link', function () {
        testAllTab.clickOnSights();
        browser.sleep(3000);
    });

    it('Provera da li je Sights u Title-u', function () {
        testAllTab.checkSightsTitle();
    });

    it('Provera da li se ucitao Sights URL', function () {
        testAllTab.checkSightsUrl();
    });

    it('KLik na All tab', function () {
        testAllTab.clickOntestAllTab();
        browser.sleep(3000);
    });

    it('KLik na Quivers link', function () {
        testAllTab.clickOnQuivers();
        browser.sleep(3000);
    });

    it('Provera da li je Quivers u Title-u', function () {
        testAllTab.checkQuiversTitle();
    });

    it('Provera da li se ucitao Quivers URL', function () {
        testAllTab.checkQuiversUrl();
    });

    it('KLik na All tab', function () {
        testAllTab.clickOntestAllTab();
        browser.sleep(3000);
    });

    it('KLik na Scopes link', function () {
        testAllTab.clickOnScopes();
        browser.sleep(3000);
    });

    it('Provera da li je Scopes u Title-u', function () {
        testAllTab.checkScopesTitle();
    });

    it('Provera da li se ucitao Scopes URL', function () {
        testAllTab.checkScopesUrl();
    });

    it('KLik na All tab', function () {
        testAllTab.clickOntestAllTab();
        browser.sleep(3000);
    });

    it('KLik na Stabilizers link', function () {
        testAllTab.clickOnStabilizers();
        browser.sleep(3000);
    });

    it('Provera da li je Stabilizers u Title-u', function () {
        testAllTab.checkStabilizersTitle();
        browser.sleep(3000);
    });

    it('Provera da li se ucitao Stabilizers URL', function () {
        testAllTab.checkStabilizersUrl();
    });

    it('KLik na All tab', function () {
        testAllTab.clickOntestAllTab();
        browser.sleep(3000);
    });

    it('KLik na Releases link', function () {
        testAllTab.clickOnReleases();
        browser.sleep(3000);
    });

    it('Provera da li je Releases u Title-u', function () {
        testAllTab.checkReleasesTitle();
    });

    it('Provera da li se ucitao Releases URL', function () {
        testAllTab.checkReleasesUrl();
    });

    it('KLik na All tab', function () {
        testAllTab.clickOntestAllTab();
        browser.sleep(3000);

    });

    it('KLik na Rests link', function () {
        testAllTab.clickOnRests();
        browser.sleep(3000);

    });

    it('Provera da li je Rests u Title-u', function () {
        testAllTab.checkRestsTitle();
    });

    it('Provera da li se ucitao Rests URL', function () {
        testAllTab.checkRestsUrl();
    });

    it('KLik na All tab', function () {
        testAllTab.clickOntestAllTab();
        browser.sleep(3000);

    });

    it('KLik na Broadheads link', function () {
        testAllTab.clickOnBroadheads();
        browser.sleep(3000);

    });

    it('Provera da li je Broadheads u Title-u', function () {
        testAllTab.checkBroadheadsTitle();
    });

    it('Provera da li se ucitao Broadheads URL', function () {
        testAllTab.checkBroadheadsUrl();
    });

    it('KLik na All tab', function () {
        testAllTab.clickOntestAllTab();
        browser.sleep(3000);

    });

    it('KLik na Bowfishing link', function () {
        testAllTab.clickOnBowfishing();
        browser.sleep(3000);

    });

    it('Provera da li je Bowfishing u Title-u', function () {
        testAllTab.checkBowfishingTitle();
    });

    it('Provera da li se ucitao Bowfishing URL', function () {
        testAllTab.checkBowfishingUrl();
    });

    it('KLik na All tab', function () {
        testAllTab.clickOntestAllTab();
        browser.sleep(3000);

    });

    it('KLik na Bow Accessories link', function () {
        testAllTab.clickOnBowAccessories();
        browser.sleep(3000);

    });

    it('Provera da li je Bow Accessories u Title-u', function () {
        testAllTab.checkBowAccessoriesTitle();
    });

    it('Provera da li se ucitao Bow Accessories URL', function () {
        testAllTab.checkBowAccessoriesUrl();
    });

    it('KLik na All tab', function () {
        testAllTab.clickOntestAllTab();
        browser.sleep(3000);

    });

    it('KLik na Turkey Hunting link', function () {
        testAllTab.clickOnTurkeyHunting();
        browser.sleep(3000);

    });

    it('Provera da li je Turkey Hunting u Title-u', function () {
        testAllTab.checkTurkeyHuntingTitle();
    });

    it('Provera da li se ucitao Turkey Hunting URL', function () {
        testAllTab.checkTurkeyHuntingUrl();
    });

    it('KLik na All tab', function () {
        testAllTab.clickOntestAllTab();
        browser.sleep(3000);

    });

    it('KLik na Red Dots link', function () {
        testAllTab.clickOnRedDots();
        browser.sleep(3000);

    });

    it('Provera da li je Red Dots u Title-u', function () {
        testAllTab.checkRedDotsTitle();
    });

    it('Provera da li se ucitao Red Dots URL', function () {
        testAllTab.checkRedDotsUrl();
    });

    it('KLik na All tab', function () {
        testAllTab.clickOntestAllTab();
        browser.sleep(3000);

    });

    it('KLik na Hunting Scopes link', function () {
        testAllTab.clickOnHuntingScopes();
        browser.sleep(3000);

    });

    it('Provera da li je Hunting Scopes u Title-u', function () {
        testAllTab.checkHuntingScopesTitle();
    });

    it('Provera da li se ucitao Hunting Scopes URL', function () {
        testAllTab.checkHuntingScopesUrl();
    });

    it('KLik na All tab', function () {
        testAllTab.clickOntestAllTab();
        browser.sleep(3000);

    });

    it('KLik na Sights2 link', function () {
        testAllTab.clickOnSights2();
        browser.sleep(3000);

    });

    it('Provera da li je Sights2 u Title-u', function () {
        testAllTab.checkSights2Title();
    });

    it('Provera da li se ucitao Sights2 URL', function () {
        testAllTab.checkSights2Url();
    });

    it('KLik na All tab', function () {
        testAllTab.clickOntestAllTab();
        browser.sleep(3000);

    });

    it('KLik na Accessories link', function () {
        testAllTab.clickOnAccessories();
        browser.sleep(3000);

    });

    it('Provera da li je Accessories u Title-u', function () {
        testAllTab.checkAccessoriesTitle();
    });

    it('Provera da li se ucitao Accessories URL', function () {
        testAllTab.checkAccessoriesUrl();
    });

    it('KLik na All tab', function () {
        testAllTab.clickOntestAllTab();
        browser.sleep(3000);

    });

    it('KLik na Red Dots2 link', function () {
        testAllTab.clickOnRedDots2();
        browser.sleep(3000);

    });

    it('Provera da li je Red Dots2 u Title-u', function () {
        testAllTab.checkRedDots2Title();
    });

    it('Provera da li se ucitao Red Dots2 URL', function () {
        testAllTab.checkRedDots2Url();
    });

    it('KLik na All tab', function () {
        testAllTab.clickOntestAllTab();
        browser.sleep(3000);

    });

    it('KLik na Scopes2 link', function () {
        testAllTab.clickOnScopes2();
        browser.sleep(3000);

    });

    it('Provera da li je Scopes2 u Title-u', function () {
        testAllTab.checkScopes2Title();
    });

    it('Provera da li se ucitao Scopes2 URL', function () {
        testAllTab.checkScopes2Url();
    });

    it('KLik na All tab', function () {
        testAllTab.clickOntestAllTab();
        browser.sleep(3000);

    });

    it('KLik na Sights3 link', function () {
        testAllTab.clickOnSights3();
        browser.sleep(3000);

    });

    it('Provera da li je Sights3 u Title-u', function () {
        testAllTab.checkSights3Title();
    });

    it('Provera da li se ucitao Sights3 URL', function () {
        testAllTab.checkSights3Url();
    });

    it('KLik na All tab', function () {
        testAllTab.clickOntestAllTab();
        browser.sleep(3000);

    });

    it('KLik na Accessories2 link', function () {
        testAllTab.clickOnAccessories2();
        browser.sleep(3000);

    });

    it('Provera da li je Accessories2 u Title-u', function () {
        testAllTab.checkAccessories2Title();
    });

    it('Provera da li se ucitao Accessories2 URL', function () {
        testAllTab.checkAccessories2Url();
    });

    it('KLik na All tab', function () {
        testAllTab.clickOntestAllTab();
        browser.sleep(3000);

    });

    it('KLik na X', function () {
        testAllTab.clickOnX();
        browser.sleep(3000);

    });

    it('KLik na All tab', function () {
        testAllTab.clickOntestAllTab();
    });

    it('KLik na GF link', function () {
        testAllTab.clickOnGf();
    });

    it('Provera da li se ucitao Gear Discounts URL', function () {
        testAllTab.checkGearDiscountsUrl();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});