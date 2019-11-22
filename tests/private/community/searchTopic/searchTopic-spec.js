var searchTopic = require('./searchTopic-po.js');

describe('Topic search', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Discover stranu', function(){
        searchTopic.landOnDiscover();
    });

    it('Klikni na Search Topics polje', function(){
        searchTopic.clickOnSearchTopicsField();
    });

    it('Unesi text u search polje', function(){
        searchTopic.enterSearchWord();
    });

    it('Provera Searcha', function(){
        searchTopic.checkSuccess();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});