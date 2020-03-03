var myProfilePage = require('./myProfilePage-po.js');

describe('My Profile strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na My Profile stranu', function(){
        myProfilePage.landOnMyProfile();
    });

    it('Klikni na AFT Group link', function(){
        myProfilePage.clickAftGroup();
    });

    it('Provera da li smo na strani AFT grupe', function(){
        myProfilePage.checkPageTitle();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
