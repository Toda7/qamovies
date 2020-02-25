var deleteDiscussion = require('../deleteDiscussion/deleteDiscussion-po.js');

describe('Delete Anonymous Discussion', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Klik na Action menu', function(){
        deleteDiscussion.clickAction();
    });

    it('Klik na Delete dugme', function(){
        deleteDiscussion.clickDelete();
    });

    it('Provera da li obrisana diskusija', function(){
        deleteDiscussion.checkSuccess();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
