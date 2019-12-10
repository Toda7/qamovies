var testSearchShop = require('../testSearchShop/testSearchShop-po.js');
var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testUserMenuLinks = require('./testUserMenuLinks-po.js');

describe('User menu links', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Truglo Shop homepage', function () {
        testSearchShop.landOnShopHomepage();
    });

    it('Klik na avatar u hederu', function () {
        testTwentyProductsOrder.clickAvatarInHeader();
    });

    it('Klik na My Cart link', function () {
        testUserMenuLinks.clickMyCart();
    });

    it('Provera da li se ucitao dobar URL za My Cart stranu', function () {
        testUserMenuLinks.checkMyCartUrl();
    });

    it('Klik na avatar u hederu', function () {
        testTwentyProductsOrder.clickAvatarInHeader();
    });

    it('Klik na Order Guidelines link', function () {
        testUserMenuLinks.clickOrderGuidelines();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
        });
    });

    it('Provera da li se ucitao dobar URL za Order Guidelines stranu', function () {
        testUserMenuLinks.checkOrderGuidelinesUrl();
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });
    });

    it('Dolazak na Truglo Shop homepage', function () {
        testSearchShop.landOnShopHomepage();
    });

    it('Klik na avatar u hederu', function () {
        testTwentyProductsOrder.clickAvatarInHeader();
    });

    it('Klik All Gear Discounts link', function () {
        testUserMenuLinks.clickAllGearDiscounts();
    });

    it('Provera da li se ucitao dobar URL za Grid stranu', function () {
        testUserMenuLinks.checkAllGearDiscountsUrl();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});