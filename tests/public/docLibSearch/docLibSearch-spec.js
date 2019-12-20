var register = require('../registracija/registracija-po');
var docss = require('./docLibSearch-po')

describe('Public Document librery', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    }); 

    it('Dolazak na Home stranu', function(){
        register.landOnHomePage();
    });

    it('Hover drop menija', function(){
        docss.HoverToOpenDrop();
    });

    it('Klik na DOC link', function(){
        docss.clickOnLink();
    });

    it('Unos texta u search polje', function(){
        docss.enterSearchTerm();
    });

    it('Provera DOC search URL-a', function(){
        docss.checkSearchUrl();
    }); 
 
    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});