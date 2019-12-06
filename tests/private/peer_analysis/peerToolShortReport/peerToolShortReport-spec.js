var peerToolShortReport = require('./peerToolShortReport-po');


describe('Create and Download Short Report', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
}); 
    it('Dolazak na home stranu', function(){
        peerToolShortReport.landOnHomePage();
    });

    it('Hover to open drop menu', function(){
        peerToolShortReport.hoverToOpenDrop();
    });  

    it('Klik na Peer A. link iz drop menu', function(){
        peerToolShortReport.clickOnLink();
    });  

    it('Klik na Peer Lunch dugme', function(){
        peerToolShortReport.clickOnLunchButton();
    });  

    it('Klik na category checkbox', function(){
        peerToolShortReport.clickOnCategory1();
    });  

    it('Klik na expender 1', function(){
        peerToolShortReport.clickOnExpender1();
    });  

    it('Klik na category checkbox 3', function(){
        peerToolShortReport.clickOnCategory3();
    });  

    it('Klik na expender 3', function(){
        peerToolShortReport.clickOnExpender3();
    }); 

    it('Klik na category checkbox 6', function(){
        peerToolShortReport.clickOnCategory6();
    });  

    it('Klik na expender 6', function(){
        peerToolShortReport.clickOnExpender6();
    }); 

    it('Klik na Search polje', function(){
        peerToolShortReport.clickOnSearchF();
    });

    it('Dodavanje Banke', function(){
        peerToolShortReport.enterBankName1();
    });

    it('Klik na Banku 1', function(){
        peerToolShortReport.clickOnBank1();
    });

    it('Klik na Search polje 2', function(){
        peerToolShortReport.clickOnSearchF2();
    });

    it('Dodavanje 2 Banke', function(){
        peerToolShortReport.enterBankName2();
    });

    it('Klik na Banku 2', function(){
        peerToolShortReport.clickOnBank2();
    });

    it('Klik na date expender', function(){
        peerToolShortReport.clickOnDateExpender1();
    });

    it('Klik na datum', function(){
        peerToolShortReport.selectLatestDate();
    });

    it('Klik na date expender 2', function(){
        peerToolShortReport.clickOnDateExpender2();
    });

    it('Klik na datum 2', function(){
        peerToolShortReport.selectEarliestDate();
    });

    it('Download reporta', function(){
        peerToolShortReport.clickOnDownload();
    });
     

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});