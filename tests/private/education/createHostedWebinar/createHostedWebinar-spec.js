var createHostedWebinar = require('./createHostedWebinar-po.js');

describe('Create hosted webinar', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

// it("should open the first tab", function() {

//     browser.getAllWindowHandles().then(function (handles) {
    
//     browser.switchTo().window(handles[0]);
    
//     });
    
//     });

it('Dolazak na dashboard stranu da bi otvorili novi tab', function(){
    createHostedWebinar.landDashboardtoopennewtab();
    browser.sleep(3000);
});

it('Klik na community to get new tab', function(){
    createHostedWebinar.clickOnCommunityink();
    browser.sleep(3000);
});

it('Dolazak na admin stranu', function(){
    createHostedWebinar.landOnEducationAdminPage();
    browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[0]);
    });
    browser.sleep(3000);
});

it('Klik on webinars link', function(){
    createHostedWebinar.clickOnWebinarsLink();
    browser.sleep(3000);
});

it('Klik on create hosted webinar button', function(){
    createHostedWebinar.clickOnCreateHostedWebinarButton();
    browser.sleep(3000);
});

it('Provera da li se ucitao title on page', function(){
    createHostedWebinar.checkTitleOnPage();
    browser.sleep(3000);
});

it('Unosenje texta u title field', function(){
    createHostedWebinar.enterTextInTitleField();
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

it('Setovaje start date', function(){
    createHostedWebinar.enterTextInStartDateField();
    browser.sleep(1000);
});

it('Setovaje PM in start date', function(){
    createHostedWebinar.enterTextInStartDateField2();
    browser.sleep(1000);
});

it('Setovaje end date', function(){
    createHostedWebinar.enterTextInEndDateField();
    browser.sleep(1000);

});

it('Setovaje PM in end date', function(){
    createHostedWebinar.enterTextInEndDateField2();
    browser.sleep(1000);

});

it('Klik on + ADD SESSION button', function(){
    createHostedWebinar.clickToAddSession();
    browser.sleep(1000);

});

it('Unosenje text u Purchase Details field', function(){
    createHostedWebinar.enterTextInPurchaseDetailsField();
    browser.sleep(1000);

});

it('Klik on Save Webinar button', function(){
    createHostedWebinar.clickOnSaveWebinarButton();
    browser.sleep(5000);
});

it('Upload file', function(){
    createHostedWebinar.addDoc();
    browser.sleep(5000);

});

it('Select paid option', function(){
    createHostedWebinar.selectPaidForVisibility();
    browser.sleep(1000);

});

it('Klik on Upload & Attach button', function(){
    createHostedWebinar.clickOnUploadAttachButton();
    browser.sleep(4000);

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