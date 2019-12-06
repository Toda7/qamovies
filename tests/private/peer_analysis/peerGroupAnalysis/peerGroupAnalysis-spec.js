var peerA = require('./peerGroupAnalysis-po');

describe('Peer Group analysis strana', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
}); 
    it('Dolazak na home stranu', function(){
        peerA.landOnHomePage();
    });

    it('Hover to open drop menu', function(){
        peerA.hoverToOpenDrop();
    });  

    it('Klik na Peer A. link iz drop menu', function(){
        peerA.clickOnLink();
    });  

    it('Provera Peer Group analysis URL-a', function(){
        peerA.checkPaUrl();
    });  

    it('Provera da li se ucitao page title', function(){
        peerA.checkRAPageTitle();
    });  

    it('Provera da li se ucitao text on page', function(){
        peerA.checkTitleOnPage();
    });  

    it('Provera da li se ucitao Lunch button', function(){
        peerA.checkButton();
    }); 

    it('Provera da li se ucitala premium ad', function(){
        peerA.checkAdOnPage();
    }); 


    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});