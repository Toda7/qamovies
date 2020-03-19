var editDiscussion = require('./editDiscussion-po.js');

describe('Edit diskusije', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Klik na Action menu', function(){
        editDiscussion.clickAction();
    });

    it('Klik na Edit dugme', function(){
        editDiscussion.clickEditButton();
    });

    it('Edit texta Diskusije', function(){
        editDiscussion.editDiscussionText();
    });

    it('Klik na Update dugme', function(){
        editDiscussion.clickUpdateButton();
    });

    it('Provera da li je uspesno editovana diskusija', function(){
        editDiscussion.checkSuccess();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
