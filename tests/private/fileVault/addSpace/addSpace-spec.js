var addSpace = require('./addSpace-po.js');

describe('Pravljenje Space-a', function(){

    it('Klik na FAB button', function(){
        addSpace.clickOnFABButton();
    });
    
    it('Provera da li se otvorila Add Space Forma', function(){
        addSpace.checkAddSpaceForm();
    });
    
    it('Unesi ime Spacea', function(){
        addSpace.insertSpaceName();
    });
    
    it('Klik na Create button', function(){
        addSpace.clickOnCreateButton();
    });
    
    it('Provera da li se pojavila confirmation kartica', function(){
        addSpace.checkConfirmationCard();
    });
    
    it('Klik na View Space', function(){
        addSpace.clickOnViewSpaceButton();
    });
    
    it('Provera da li je Space napravljen', function(){
        addSpace.checkIsSpaceAdded();
    });   
    
    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });
    });