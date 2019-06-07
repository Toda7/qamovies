var register = require('../registracija/registracija-po');
var doc = require('./docLib-po')

describe('Public Document librery', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    }); 

    it('Dolazak na Home stranu', function(){
        register.landOnHomePage();
    });

    it('Hover drop menija', function(){
        doc.HoverToOpenDrop();
    });

    it('Klik na DOC link', function(){
        doc.clickOnLink();
    });

    it('Provera DOC URL-a', function(){
        doc.checkDoclibUrl();
    }); 
 

    it('Naslov na Doc strani', function(){
        doc.checkDocText();
    });    

    it('20 docs na strani', function(){
        doc.counterOfDocs();
    });

    it('Da li imamo paginaciju', function(){
        doc.checkPagination();
    });
    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});