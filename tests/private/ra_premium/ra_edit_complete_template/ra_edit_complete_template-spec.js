var ra_home = require('../ra_home/ra_home-po');
var ra_edit_complete_template = require('./ra_edit_complete_template-po');
var ra_create_complete_template = require('../ra_create_complete_template/ra_create_complete_template-po');
var ra_edit_inprogress_template = require('../ra_edit_inprogress_template/ra_edit_inprogress_template-po');
var ra_create_inprogress_template = require('../ra_create_inprogress_template/ra_create_inprogress_template-po');


describe('Edit in complete template', function(){

it('Dolazak na home risk assesment premium stranu', function(){
    ra_home.landOnRaHome();
});

it('Provera da li se ucitao home URL sa IDem od premium accounta', function(){
    ra_home.checkRaHomeURL();
});

it('Klik on complete link from side menu', function(){
    ra_edit_complete_template.clickOnCompleteLink();
});

it('Provera da li se ucitao complete url', function(){
    ra_create_complete_template.checkCompletedURL();
});

it('Klik na three dots icon', function(){
    ra_edit_complete_template.clickOnThreeDotsLink();
});

it('Klik na Edit link', function(){
    ra_edit_complete_template.clickOnEditLink();
});

it('Klik da se otvori forma', function(){
    ra_edit_complete_template.clickToOpenForm();
});

it('Klik na option to edit it', function(){
    ra_edit_complete_template.clickOnOptionToEditIt();
});

it('Brsanje text iz polja', function(){
    ra_edit_inprogress_template.deleteTextFromTheField();
});

it('Unosenje prvog text u polje', function(){
    ra_edit_inprogress_template.enterFirstEditTextInTheSecondAnswerField();
});

it('Klik na Continue button', function(){
    ra_create_inprogress_template.clickContinueLink();
});

it('Klik on 2 option to edit it ', function(){
    ra_edit_complete_template.clickOn2OptionToEditIt();
});

it('Brsanje text iz polja', function(){
    ra_edit_inprogress_template.deleteTextFromTheField();
});

it('Unosenje drugog text u polje', function(){
    ra_edit_inprogress_template.enterSecondEditTextInTheSecondAnswerField();
});

it('Klik na Continue button', function(){
    ra_create_inprogress_template.clickContinueLink();
});

it('Klik on 3 option to edit it ', function(){
    ra_edit_complete_template.clickOn3OptionToEditIt();
});

it('Brsanje text iz polja', function(){
    ra_edit_inprogress_template.deleteTextFromTheField();
});

it('Unosenje treceg text u polje', function(){
    ra_edit_inprogress_template.enterThirdEditTextInTheSecondAnswerField();
});

it('Klik na Continue button', function(){
    ra_create_inprogress_template.clickContinueLink();
});

it('Click on Generate Report button', function(){
    ra_create_complete_template.clickOnGenerateReport();
});

it('Provera da li se ucitao page title', function(){
    ra_create_complete_template.checkReportPageTitle();
});

it('Provera da li se ucitao title in header', function(){
    ra_create_complete_template.checkTitleReportInHeader();
});

it('Provera da li se ucitala icon za print', function(){
    ra_create_complete_template.checkPrintInHeader();
});

it('Provera da li se ucitao title on page', function(){
    ra_create_complete_template.checkTitleOnPage();
});

it('Provera da li se ucitao summary below title on page', function(){
    ra_create_complete_template.checkSummary();
});

it('Provera da li se ucitao rating summery -> high', function(){
    ra_edit_complete_template.checkRatingSummary();
});

it('Provera da li se ucitao drugi title on page', function(){
    ra_create_complete_template.checkSecondTitleOnPage();
});

it('Provera da li se ucitao Risk Component', function(){
    ra_create_complete_template.checkRiskComponent();
});

it('Provera da li se ucitao Average Residual Risk Rating', function(){
    ra_edit_complete_template.checkAverageResidual();
});

it('Provera da li se ucitao Risk Level', function(){
    ra_edit_complete_template.checkRiskLevel();
});

it('Provera da li se ucitao treci title on page', function(){
    ra_create_complete_template.checkThirdTitleOnPage();
});

it('Provera da li se ucitao Test component on page', function(){
    ra_create_complete_template.checkTestComponentOnPage();
});

it('Klik na back icon', function(){
    ra_create_complete_template.clickBackIcon();
});

it('Provera da li se ucitao complete url', function(){
    ra_create_complete_template.checkCompletedURL();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});