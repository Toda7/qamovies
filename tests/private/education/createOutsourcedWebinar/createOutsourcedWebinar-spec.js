var createOutsourcedWebinar = require('./createOutsourcedWebinar-po.js');
var createHostedWebinar = require('../createHostedWebinar/createHostedWebinar-po.js');

describe('Create outsourced webinar', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Dolazak na admin stranu', function(){
    createHostedWebinar.landOnEducationAdminPage();
});

it('Klik on webinars link', function(){
    createHostedWebinar.clickOnWebinarsLink();
});

it('Klik on create outsourced webinar button', function(){
    createOutsourcedWebinar.clickOnCreateHostedWebinarButton();
});

it('Provera da li se ucitao title on page', function(){
    createOutsourcedWebinar.checkTitleOnPage();
});

it('Unosenje texta u title field', function(){
    createOutsourcedWebinar.enterTextInTitleField();
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

it('Setovaje start date', function(){
    createHostedWebinar.enterTextInStartDateField();
});

it('Setovaje PM in start date', function(){
    createHostedWebinar.enterTextInStartDateField2();
});

it('Setovaje end date', function(){
    createHostedWebinar.enterTextInEndDateField();
});

it('Setovaje PM in end date', function(){
    createHostedWebinar.enterTextInEndDateField2();
});

it('Unosenje texta u watch info field', function(){
    createOutsourcedWebinar.enterTextInWatchInfoField();
});

it('Klik on Save Webinar button', function(){
    createHostedWebinar.clickOnSaveWebinarButton();
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

it('Select topic tag', function(){
    createHostedWebinar.selectTopicTags();
});

it('Klik to Select Topic', function(){
    createHostedWebinar.clickOnTopicToSelect();
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