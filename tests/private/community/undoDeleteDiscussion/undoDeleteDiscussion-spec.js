var undoDeleteDiscussion = require('./undoDeleteDiscussion-po.js');

describe('Undo brisanja diskusije', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Undo delete discussion', function(){
        undoDeleteDiscussion.undoDelete();
    });

    it('Provera da li je uspesan undo brisanja diskusije', function(){
        undoDeleteDiscussion.checkSuccess();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
