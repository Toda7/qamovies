var peerToolReport = require('./peerToolReport-po');


describe('Create and Download Report', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
}); 
    it('Dolazak na home stranu', function(){
        peerToolReport.landOnHomePage();
    });

    it('Hover to open drop menu', function(){
        peerToolReport.hoverToOpenDrop();
    });  

    it('Klik na Peer A. link iz drop menu', function(){
        peerToolReport.clickOnLink();
    });  

    it('Klik na Peer Lunch dugme', function(){
        peerToolReport.clickOnLunchButton();
    });  

    it('Klik na category checkbox', function(){
        peerToolReport.clickOnCategory1();
    });  

    it('Klik na expender 1', function(){
        peerToolReport.clickOnExpender1();
    });  

    it('Klik na category checkbox 2', function(){
        peerToolReport.clickOnCategory2();
    });  

    it('Klik na expender 2', function(){
        peerToolReport.clickOnExpender2();
    }); 

    it('Klik na category checkbox 3', function(){
        peerToolReport.clickOnCategory3();
    });  

    it('Klik na expender 3', function(){
        peerToolReport.clickOnExpender3();
    }); 

    it('Klik na category checkbox 4', function(){
        peerToolReport.clickOnCategory4();
    });  

    it('Klik na expender 4', function(){
        peerToolReport.clickOnExpender4();
    }); 

    it('Klik na category checkbox 5', function(){
        peerToolReport.clickOnCategory5();
    });  

    it('Klik na expender 5', function(){
        peerToolReport.clickOnExpender5();
    }); 

    it('Klik na category checkbox 6', function(){
        peerToolReport.clickOnCategory6();
    });  

    it('Klik na expender 6', function(){
        peerToolReport.clickOnExpender6();
    }); 

    it('Klik na category checkbox 7', function(){
        peerToolReport.clickOnCategory7();
    });  

    it('Klik na expender7 ', function(){
        peerToolReport.clickOnExpender7();
    }); 

    it('Klik na category checkbox 8', function(){
        peerToolReport.clickOnCategory8();
    });  

    it('Klik na expender 8', function(){
        peerToolReport.clickOnExpender8();
    }); 

    it('Klik na Search polje', function(){
        peerToolReport.clickOnSearchF();
    });

    it('Dodavanje Banke', function(){
        peerToolReport.enterBankName1();
    });

    it('Klik na Banku 1', function(){
        peerToolReport.clickOnBank1();
    });

    it('Klik na Search polje 2', function(){
        peerToolReport.clickOnSearchF2();
    });

    it('Dodavanje 2 Banke', function(){
        peerToolReport.enterBankName2();
    });

    it('Klik na Banku 2', function(){
        peerToolReport.clickOnBank2();
    });

    it('Klik na Search polje 3', function(){
        peerToolReport.clickOnSearchF3();
    });

    it('Dodavanje 3 Banke', function(){
        peerToolReport.enterBankName3();
    });

    it('Klik na Banku 3', function(){
        peerToolReport.clickOnBank3();
    });

    it('Klik na Search polje 4', function(){
        peerToolReport.clickOnSearchF4();
    });

    it('Dodavanje 4 Banke', function(){
        peerToolReport.enterBankName4();
    });

    it('Klik na Banku 4', function(){
        peerToolReport.clickOnBank4();
    });

    it('Klik na Search polje 5', function(){
        peerToolReport.clickOnSearchF5();
    });

    it('Dodavanje 5 Banke', function(){
        peerToolReport.enterBankName5();
    });

    it('Klik na Banku 5', function(){
        peerToolReport.clickOnBank5();
    });

    it('Klik na date expender', function(){
        peerToolReport.clickOnDateExpender1();
    });

    it('Klik na datum', function(){
        peerToolReport.selectLatestDate();
    });

    it('Klik na date expender 2', function(){
        peerToolReport.clickOnDateExpender2();
    });

    it('Klik na datum 2', function(){
        peerToolReport.selectEarliestDate();
    });

    it('Download reporta', function(){
        peerToolReport.clickOnDownload();
    });
     

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});