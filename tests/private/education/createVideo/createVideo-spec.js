var createHostedWebinar = require('../createHostedWebinar/createHostedWebinar-po.js');
var createVideo = require('./createVideo-po.js');


describe('Create video', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Dolazak na admin stranu', function(){
    createHostedWebinar.landOnEducationAdminPage();
});

it('Klik on video link', function(){
    createVideo.clickOnVideoLink();
});

it('Klik on create video button', function(){
    createVideo.clickOnCreateVideoButton();
});
 
it('Provera da li se ucitao title on page', function(){
    createVideo.checkTitleOnPage();
});

it('Unosenje texta u title field', function(){
    createVideo.enterTextInTitleField();
});

it('Unosenje texta u synopsis field', function(){
    createHostedWebinar.enterTextInSynopsisField();
});

it('Unosenje texta u description field', function(){
    createHostedWebinar.enterTextInDescriptionField();
});

it('Unosenje linka u here field', function(){
    createHostedWebinar.enterTextInHereField();
});

it('Unosenje linka u tile field', function(){
    createHostedWebinar.enterTextInTileField();
});

it('Unosenje text u price field', function(){
    createHostedWebinar.enterTextInPriceField();
});

it('Setovanje date', function(){
    createVideo.enterDateField();
});

it('Setovanje date', function(){
    createVideo.enterDateField2();
});

it('Unosenje video urla u video field', function(){
    createVideo.enterVideoUrlInVideoField();
});

it('Unosenje text u Purchase Details field', function(){
    createHostedWebinar.enterTextInPurchaseDetailsField();
});

it('Klik on Save video button', function(){
    createVideo.clickOnVideoButton();
    browser.sleep(3000);
});

it('Upload file', function(){
    createHostedWebinar.addDoc();
});

it('Select paid option', function(){
    createHostedWebinar.selectPaidForVisibility();
});

it('Klik on Upload & Attach button', function(){
    createHostedWebinar.clickOnUploadAttachButton();
});

it('Unosenje texta u presenter field', function(){
    createHostedWebinar.enterTextInPresentersField();
});

it('Klik on Find & Attach button', function(){
    createHostedWebinar.clickOnFindttachButton();
});

// ne radi, imamo tkt
// it('Select topic tag', function(){
//     createHostedWebinar.selectTopicTags();
// });

// it('Klik to Select Topic', function(){
//     createHostedWebinar.clickOnTopicToSelect();
// });

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