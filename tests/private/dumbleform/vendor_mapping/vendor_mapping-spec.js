var vendor_mapping = require('./vendor_mapping-po');
var complete_your_profile = require('../complete_your_profile/complete_your_profile-po');


describe('Treci dumbleform - Vendor mappings', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

it('Dolazak na vendor mapping Home Page', function(){
    vendor_mapping.landOnVendorMappingHomePage();
});

it('Provera da li se pojavio help title on page', function(){
    vendor_mapping.checkHelpTitleOnHomePage();
});

it('Provera da li se pojavio summary ispod title on page', function(){
    vendor_mapping.checkHelpSummaryOnHomePage();
});

it('Klik on GET STARTED button', function(){
    vendor_mapping.clickOnGetStartedButton();
});

it('Provera vendor mapping URL-a', function(){
    vendor_mapping.checkVendorMappingURL();
});

it('Select First product', function(){
    vendor_mapping.selectFirstProduct();
});

it('Select second product', function(){
    vendor_mapping.selectSecondProduct();
});

it('Select third  product', function(){
    vendor_mapping.selectThirdProduct();
});

it('Enter text in new vendor - product field', function(){
    vendor_mapping.enterTextInTheNewProductField();
});

it('Select fourth product', function(){
    vendor_mapping.selectdFourthProduct();
});

it('Select fifth product', function(){
    vendor_mapping.selectdFifthProduct();
});

it('Enter another text in new vendor - product field', function(){
    vendor_mapping.enterAnotherTextInTheNewProductField();
});

it('Klik on + Add another button', function(){
    vendor_mapping.clickOnAddAnotherButton();
});

it('Klik on + Add another button', function(){
    vendor_mapping.clickOnAddAnotherButton();
});

it('Enter text in my category', function(){
    vendor_mapping.enterThirdTextInTheCatagoryField();
});

it('Enter text in my vendor field', function(){
    vendor_mapping.enterMyVendorNameTextInTheField();
});

it('Klik Remove button', function(){
    vendor_mapping.clickOnRemoveButton();
});

it('Klik Remove button', function(){
    vendor_mapping.clickOnRemoveButton();
});

it('Klik on + Add another button', function(){
    vendor_mapping.clickOnAddAnotherButton();
});

it('Enter text in my category', function(){
    vendor_mapping.enterThirdTextInTheCatagoryField();
});

it('Enter text in my vendor field', function(){
    vendor_mapping.enterMyVendorNameTextInTheField();
});

it('Klik on Done button', function(){
    vendor_mapping.clickDoneButton();
});

it('Provera da li se pojavila Thank You message', function(){
    complete_your_profile.checkThankYouMessage();
});

it('Klik on Continue to CBANC button', function(){
    complete_your_profile.clickOnContinueToCBANCButton();
});

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});