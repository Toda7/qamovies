var createHostedWebinar = require('../createHostedWebinar/createHostedWebinar-po.js');
var createVideo = require('./createVideo-po.js');


describe('Create video', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
    browser.sleep(1000);
});

it('Dolazak na admin stranu', function(){
    createHostedWebinar.landOnEducationAdminPage();
    browser.sleep(4000);
});

it('Klik on video link', function(){
    createVideo.clickOnVideoLink();
    browser.sleep(4000);
});

it('Klik on create video button', function(){
    createVideo.clickOnCreateVideoButton();
    browser.sleep(5000);
});
 
it('Provera da li se ucitao title on page', function(){
    createVideo.checkTitleOnPage();
    browser.sleep(1000);
});

it('Unosenje texta u title field', function(){
    createVideo.enterTextInTitleField();
    browser.sleep(1000);
});

it('Unosenje texta u synopsis field', function(){
    createHostedWebinar.enterTextInSynopsisField();
    browser.sleep(1000);
});

it('Unosenje texta u description field', function(){
    createHostedWebinar.enterTextInDescriptionField();
    browser.sleep(1000);
});

it('Unosenje linka u here field', function(){
    createHostedWebinar.enterTextInHereField();
    browser.sleep(1000);
});

it('Unosenje linka u tile field', function(){
    createHostedWebinar.enterTextInTileField();
    browser.sleep(1000);
});

it('Unosenje text u price field', function(){
    createHostedWebinar.enterTextInPriceField();
    browser.sleep(1000);
});

it('Setovanje date', function(){
    createVideo.enterDateField();
    browser.sleep(1000);
});

it('Setovanje date', function(){
    createVideo.enterDateField2();
    browser.sleep(1000);
});

it('Unosenje video urla u video field', function(){
    createVideo.enterVideoUrlInVideoField();
    browser.sleep(1000);
});

it('Unosenje text u Purchase Details field', function(){
    createHostedWebinar.enterTextInPurchaseDetailsField();
    browser.sleep(1000);
});

it('Klik on Save video button', function(){
    createVideo.clickOnVideoButton();
    browser.sleep(4000);
});

it('Upload file', function(){
    createHostedWebinar.addDoc();
    browser.sleep(1000);
});

it('Select paid option', function(){
    createHostedWebinar.selectPaidForVisibility();
    browser.sleep(1000);
});

it('Klik on Upload & Attach button', function(){
    createHostedWebinar.clickOnUploadAttachButton();
    browser.sleep(5000);
});

it('Unosenje texta u presenter field', function(){
    createHostedWebinar.enterTextInPresentersField();
    browser.sleep(1000);
});

it('Klik on Find & Attach button', function(){
    createHostedWebinar.clickOnFindttachButton();
    browser.sleep(1000);
});

it('Select topic tag', function(){
    createHostedWebinar.selectTopicTags();
    browser.sleep(1000);
});

it('Klik to Select Topic', function(){
    createHostedWebinar.clickOnTopicToSelect();
    browser.sleep(1000);
});

it('Klik on Save Topics button', function(){
    createHostedWebinar.clickOnSaveTopicsButton();
    browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
    });
});



afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});