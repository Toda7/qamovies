var register = require('../registracija/registracija-po');
var topic = require('./topics-po')


describe('Public Topics', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    }); 

    it('Dolazak na Home stranu', function(){
        register.landOnHomePage();
    });

    it('Hover drop menija', function(){
        topic.HoverToOpenDrop();
    }); 

    it('Klik na Topic link', function(){
        topic.clickOnLink();
    });

    it('Provera topic URL-a', function(){
        topic.checkTopicsUrl();
    }); 

    it('Naslov na Topics strani', function(){
        topic.checkTopicsText();
    });   

    it('20 Topica na strani', function(){
        topic.counterOfTopics();
    });

    it('Da li imamo paginaciju', function(){
        topic.checkPagination();
    });
    afterAll(function(){
    browser.waitForAngularEnabled(true); 
   });
});