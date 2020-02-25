var editComment = require('./editComment-po.js');

describe('Edit Reply', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Klik na Action menu', function(){
        editComment.clickAction();
    });

    it('Klik na Edit dugme', function(){
        editComment.clickEditButton();
    });

    it('Edit Comment texta', function(){
        editComment.editCommentText();
    });

    it('Klik na Update Comment dugme', function(){
        editComment.clickUpdateCommentButton();
    });

    it('Provera da li je uspesno editovan Comment', function(){
        editComment.checkSuccess();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
