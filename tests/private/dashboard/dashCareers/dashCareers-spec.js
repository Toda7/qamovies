var dashCareers = require('./dashCareers-po')

describe('Careers Link iz Footera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na home stranu', function(){
        dashCareers.landOnHomePage();
    });

    it('Klik na Careers link u footeru', function(){
        dashCareers.clickOnCareers();
    });

    it('Da li se ucitao Page Title', function(){
        dashCareers.checkPageTitle();
    });

    it('Provera Careers URL-a', function(){
        dashCareers.checkCareersUrl();
    });


    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});