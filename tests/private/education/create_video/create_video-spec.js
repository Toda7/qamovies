var create_hosted_webinar = require('../create_hosted_webinar/create_hosted_webinar-po.js');
var create_video = require('./create_video-po.js');


describe('Create video', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Dolazak na admin stranu', function(){
    create_hosted_webinar.landOnEducationAdminPage();
});

it('Klik on video link', function(){
    create_video.clickOnVideoLink();
});

it('Klik on create video button', function(){
    create_video.clickOnCreateVideoButton();
});
 
it('Provera da li se ucitao title on page', function(){
    create_video.checkTitleOnPage();
});

it('Unosenje texta u title field', function(){
    create_video.enterTextInTitleField();
});

it('Unosenje texta u synopsis field', function(){
    create_hosted_webinar.enterTextInSynopsisField();
});

it('Unosenje texta u description field', function(){
    create_hosted_webinar.enterTextInDescriptionField();
});

it('Unosenje linka u here field', function(){
    create_hosted_webinar.enterTextInHereField();
});

it('Unosenje linka u tile field', function(){
    create_hosted_webinar.enterTextInTileField();
});

it('Unosenje text u price field', function(){
    create_hosted_webinar.enterTextInPriceField();
});

it('Setovanje date', function(){
    create_video.enterDateField();
});

it('Setovanje date', function(){
    create_video.enterDateField2();
});

it('Unosenje video urla u video field', function(){
    create_video.enterVideoUrlInVideoField();
});

it('Unosenje text u Purchase Details field', function(){
    create_hosted_webinar.enterTextInPurchaseDetailsField();
});

it('Klik on Save video button', function(){
    create_video.clickOnVideoButton();
    browser.sleep(3000);
});

it('Upload file', function(){
    create_hosted_webinar.addDoc();
});

it('Select paid option', function(){
    create_hosted_webinar.selectPaidForVisibility();
});

it('Klik on Upload & Attach button', function(){
    create_hosted_webinar.clickOnUploadAttachButton();
});

it('Unosenje texta u presenter field', function(){
    create_hosted_webinar.enterTextInPresentersField();
});

it('Klik on Find & Attach button', function(){
    create_hosted_webinar.clickOnFindttachButton();
});

it('Select topic tag', function(){
    create_hosted_webinar.selectTopicTags();
});

it('Klik to Select Topic', function(){
    create_hosted_webinar.clickOnTopicToSelect();
});

it('Klik on Save Topics button', function(){
    create_hosted_webinar.clickOnSaveTopicsButton();
});

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});