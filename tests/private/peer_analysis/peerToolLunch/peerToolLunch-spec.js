var peerToolLunch = require('./peerToolLunch-po');

describe('Lunch Peer analysis Tool', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
}); 
    it('Dolazak na home stranu', function(){
        peerToolLunch.landOnHomePage();
    });

    it('Hover to open drop menu', function(){
        peerToolLunch.hoverToOpenDrop();
    });  

    it('Klik na Peer A. link iz drop menu', function(){
        peerToolLunch.clickOnLink();
    });  

    it('Klik na Peer Lunch dugme', function(){
        peerToolLunch.clickOnLunchButton();
    });  

    it('Cekira Peer Tool URL', function(){
        peerToolLunch.checkPeerToolUrl();
    });

    it('Da li se ucitao Download button', function(){
        peerToolLunch.checkDownloadButton();
    });

    it('Da li se ucitao Share button', function(){
        peerToolLunch.checkShareButton();
    });

    it('Da li se ucitao Filed Selector', function(){
        peerToolLunch.checkFiledSelector();
    });

    it('Da li se ucitao Report period', function(){
        peerToolLunch.checkReportPeriod();
    });

    it('Da li se ucitao Page Title', function(){
        peerToolLunch.checkPageTitle();
    });


    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});