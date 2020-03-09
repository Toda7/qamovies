var memberProfilePage = require('./memberProfilePage-po.js');

describe('My Profile strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Profile stranu membera', function(){
        memberProfilePage.landOnMemberProfilePage();
        browser.sleep(2000);
    });

    it('Provera imena membera u Profile boxu', function(){
        memberProfilePage.checkNameInProfileBox();
        browser.sleep(700);
    });

    it('Provera avatara membera u Profile boxu', function(){
        memberProfilePage.checkAvatarInProfileBox();
        browser.sleep(700);
    });

    it('Klik na ime vendora u Profile boxu', function(){
        memberProfilePage.clickVendorNameInProfileBox();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao URL za Vendor Mandrill', function(){
        memberProfilePage.checkVendorMandrillUrl();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Klikni na Vendors Group link', function(){
        memberProfilePage.clickVendorsGroup();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao URL za Vendors grupu', function(){
        memberProfilePage.checkVendorsGroupUrl();
        browser.sleep(1000);
    });

    it('Provera da li se pojavila poruka da nemamo pristup Vendros grupi', function(){
        memberProfilePage.checkRestrictionMessage();
        browser.sleep(1000);
    });

    it('Klik na Home link', function(){
        memberProfilePage.clickHomeLink();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao URL za Home stranu', function(){
        memberProfilePage.checkHomeUrl();
        browser.sleep(500);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
