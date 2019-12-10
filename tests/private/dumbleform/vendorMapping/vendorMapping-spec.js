var vendorMapping = require('./vendorMapping-po');
var completeYourProfile = require('../completeYourProfile/completeYourProfile-po');


describe('Treci dumbleform - Vendor mappings', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

it('Dolazak na vendor mapping Home Page', function(){
    vendorMapping.landOnVendorMappingHomePage();
});

it('Provera da li se pojavio help title on page', function(){
    vendorMapping.checkHelpTitleOnHomePage();
});

it('Provera da li se pojavio summary ispod title on page', function(){
    vendorMapping.checkHelpSummaryOnHomePage();
});

it('Klik on GET STARTED button', function(){
    vendorMapping.clickOnGetStartedButton();
});

it('Provera vendor mapping URL-a', function(){
    vendorMapping.checkVendorMappingURL();
});

it('Select First product', function(){
    vendorMapping.selectFirstProduct();
});

it('Select second product', function(){
    vendorMapping.selectSecondProduct();
});

it('Select third  product', function(){
    vendorMapping.selectThirdProduct();
});

it('Enter text in new vendor - product field', function(){
    vendorMapping.enterTextInTheNewProductField();
});

it('Select fourth product', function(){
    vendorMapping.selectdFourthProduct();
});

it('Select fifth product', function(){
    vendorMapping.selectdFifthProduct();
});

it('Enter another text in new vendor - product field', function(){
    vendorMapping.enterAnotherTextInTheNewProductField();
});

it('Klik on + Add another button', function(){
    vendorMapping.clickOnAddAnotherButton();
});

it('Klik on + Add another button', function(){
    vendorMapping.clickOnAddAnotherButton();
});

it('Enter text in my category field', function(){
    vendorMapping.enterThirdTextInTheCatagoryField();
});

it('Enter text in my vendor field', function(){
    vendorMapping.enterMyVendorNameTextInTheField();
});

it('Klik Remove button', function(){
    vendorMapping.clickOnRemoveButton();
});

it('Klik Remove button', function(){
    vendorMapping.clickOnRemoveButton();
});

it('Klik on + Add another button', function(){
    vendorMapping.clickOnAddAnotherButton();
});

it('Enter text in my category', function(){
    vendorMapping.enterThirdTextInTheCatagoryField();
});

it('Enter text in my vendor field', function(){
    vendorMapping.enterMyVendorNameTextInTheField();
});

it('Klik on Done button', function(){
    vendorMapping.clickDoneButton();
});

it('Provera da li se pojavila Thank You message', function(){
    completeYourProfile.checkThankYouMessage();
});

it('Klik on Continue to CBANC button', function(){
    completeYourProfile.clickOnContinueToCBANCButton();
});

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});