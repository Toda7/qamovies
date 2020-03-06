var myProfilePage = require('./myProfilePage-po.js');

describe('My Profile strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na My Profile stranu', function(){
        myProfilePage.landOnMyProfile();
        browser.sleep(2000);
    });

    it('Provera da li se na strani pojavilo 15 diskusija', function(){
        myProfilePage.checkIfFifteenthDiscussionsOnPage();
        browser.sleep(2000);
    });

    it('Provera imena membera u Profile boxu', function(){
        myProfilePage.checkNameInProfileBox();
        browser.sleep(500);
    });

    it('Provera avatara membera u Profile boxu', function(){
        myProfilePage.checkAvatarInProfileBox();
        browser.sleep(500);
    });

    it('Klik na ime banke u Profile boxu', function(){
        myProfilePage.clickBankNameInProfileBox();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao URL za Bank of Chicago', function(){
        myProfilePage.checkChicagoBankURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Klikni na AFT Group link', function(){
        myProfilePage.clickAftGroup();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao URL za AFT grupu', function(){
        myProfilePage.checkAftGroupURL();
        browser.sleep(500);
    });

    it('Provera da li smo na strani AFT grupe', function(){
        myProfilePage.checkPageTitle();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Klikni na FI Professionals Group link', function(){
        myProfilePage.clickFiProfessionalsGroup();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao URL za Fi Professionals grupu', function(){
        myProfilePage.checkFiProfessionalsGroupURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
