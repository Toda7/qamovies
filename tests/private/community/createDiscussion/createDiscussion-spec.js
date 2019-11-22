var createDiscussion = require('./createDiscussion-po.js');

describe('Create Discussion Action', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Community', function(){
        createDiscussion.clickOnHomeButton();
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
    });
    });

    it('Dolazak na Home stranu', function(){
        createDiscussion.landOnHome();
    });

    it('Klik na Start Discussion dugme', function(){
        createDiscussion.clickOnStartDiscussion();
    });

    it('Odabir grupe', function(){
        createDiscussion.selectGroup();
    });

    it('Discussion title', function(){
        createDiscussion.discussionTitle();
    });

    it('Discussion Description', function(){
        createDiscussion.discussionDesc();
    });

    it('Attach Document', function(){
        createDiscussion.attachDoc();
    });

//     var path = require('path');

//     it('should upload a file', function() {
//     var fileToUpload = './TestTXT.txt',
//     absolutePath = path.resolve(__dirname, fileToUpload);

//     //element(by.xpath('//*[@id="root"]/div/div[2]/div/div/div[2]/div[1]/div/div[3]/div/div/input')).sendKeys(absolutePath);   
//     element(by.css('input[type="file"]')).sendKeys(absolutePath); 
// });

    it('Dodavanje topika', function(){
        createDiscussion.selectTopic();
    });

    it('Klik na Post Discussion', function(){
        createDiscussion.postDiscussion();
    });

    it('Provera da li je uspesno objavljena diskusija', function(){
        createDiscussion.checkSuccess();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
