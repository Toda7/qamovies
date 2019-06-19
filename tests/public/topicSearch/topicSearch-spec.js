var register = require('../registracija/registracija-po');

var topicsearch = require('./topicSearch-po') 


describe('Public Topics Search', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    }); 

    it('Dolazak na Home stranu', function(){
        register.landOnHomePage();
    });

    it('Hover drop menija', function(){
        topicsearch.HoverToOpenDrop();
    }); 

    it('Klik na Topic link', function(){
        topicsearch.clickOnLink();
    });

    it('Unos texta u Topic search polje', function(){
        topicsearch.enterSearchTerm();
    });

    it('Submit searcha terma', function(){
        topicsearch.submit();
    });

    it('Provera Topic search URL-a', function(){
        topicsearch.checkSearchUrl();
    });
    afterAll(function(){
    browser.waitForAngularEnabled(true); 
   });
});