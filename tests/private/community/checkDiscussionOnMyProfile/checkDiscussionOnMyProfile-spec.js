var checkDiscussionOnMyProfile = require('./checkDiscussionOnMyProfile-po.js');
var myProfilePage = require('../myProfilePage/myProfilePage-po.js');

describe('Provera da li se naprvaljena diskusija pojavila na My Profile strani', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na My Profile stranu', function () {
        myProfilePage.landOnMyProfile();
        browser.sleep(2000);
    });

    it('Klik na Novu diskusiju', function () {
        checkDiscussionOnMyProfile.clickOnNewDiscussion();
        browser.sleep(2000);
    });

    it('Proveri discussion title', function () {
        checkDiscussionOnMyProfile.checkDiscussionDesc();
        browser.sleep(2000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});
