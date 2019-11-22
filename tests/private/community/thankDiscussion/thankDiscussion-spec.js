var thankDiscussion = require('./thankDiscussion-po.js');

describe('Thankovanje diskusije', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Klikni na Thank digme', function(){
        thankDiscussion.clickOnThank();
    });

    it('Provera da li je diskusija uspesno thankovana', function(){
        thankDiscussion.checkSuccess();
    });


        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});