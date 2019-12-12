var raHome = require('../raHome/raHome-po');
var raEditCompleteTemplate = require('./raEditCompleteTemplate-po');
var raCreateCompleteTemplate = require('../raCreateCompleteTemplate/raCreateCompleteTemplate-po');
var raEditInprogressTemplate = require('../raEditInprogressTemplate/raEditInprogressTemplate-po');
var raCreateInprogressTemplate = require('../raCreateInprogressTemplate/raCreateInprogressTemplate-po');


describe('Edit in complete template', function(){

it('Dolazak na home risk assesment premium stranu', function(){
    raHome.landOnRaHome();
});

it('Provera da li se ucitao home URL sa IDem od premium accounta', function(){
    raHome.checkRaHomeURL();
});

it('Klik on complete link from side menu', function(){
    raEditCompleteTemplate.clickOnCompleteLink();
});

it('Provera da li se ucitao complete url', function(){
    raCreateCompleteTemplate.checkCompletedURL();
});

it('Klik na three dots icon', function(){
    raEditCompleteTemplate.clickOnThreeDotsLink();
});

it('Klik na Edit link', function(){
    raEditCompleteTemplate.clickOnEditLink();
});

it('Klik da se otvori forma', function(){
    raEditCompleteTemplate.clickToOpenForm();
});

it('Klik na option to edit it', function(){
    raEditCompleteTemplate.clickOnOptionToEditIt();
});

it('Brsanje text iz polja', function(){
    raEditInprogressTemplate.deleteTextFromTheField();
});

it('Unosenje prvog text u polje', function(){
    raEditInprogressTemplate.enterFirstEditTextInTheSecondAnswerField();
});

it('Klik na Continue button', function(){
    raCreateInprogressTemplate.clickContinueLink();
});

it('Klik on 2 option to edit it ', function(){
    raEditCompleteTemplate.clickOn2OptionToEditIt();
});

it('Brsanje text iz polja', function(){
    raEditInprogressTemplate.deleteTextFromTheField();
});

it('Unosenje drugog text u polje', function(){
    raEditInprogressTemplate.enterSecondEditTextInTheSecondAnswerField();
});

it('Klik na Continue button', function(){
    raCreateInprogressTemplate.clickContinueLink();
});

it('Klik on 3 option to edit it ', function(){
    raEditCompleteTemplate.clickOn3OptionToEditIt();
});

it('Brsanje text iz polja', function(){
    raEditInprogressTemplate.deleteTextFromTheField();
});

it('Unosenje treceg text u polje', function(){
    raEditInprogressTemplate.enterThirdEditTextInTheSecondAnswerField();
});

it('Klik na Continue button', function(){
    raCreateInprogressTemplate.clickContinueLink();
});

it('Click on Generate Report button', function(){
    raCreateCompleteTemplate.clickOnGenerateReport();
});

it('Provera da li se ucitao page title', function(){
    raCreateCompleteTemplate.checkReportPageTitle();
});

it('Provera da li se ucitao title in header', function(){
    raCreateCompleteTemplate.checkTitleReportInHeader();
});

it('Provera da li se ucitala icon za print', function(){
    raCreateCompleteTemplate.checkPrintInHeader();
});

it('Provera da li se ucitao title on page', function(){
    raCreateCompleteTemplate.checkTitleOnPage();
});

it('Provera da li se ucitao summary below title on page', function(){
    raCreateCompleteTemplate.checkSummary();
});

it('Provera da li se ucitao rating summery -> high', function(){
    raEditCompleteTemplate.checkRatingSummary();
});

it('Provera da li se ucitao drugi title on page', function(){
    raCreateCompleteTemplate.checkSecondTitleOnPage();
});

it('Provera da li se ucitao Risk Component', function(){
    raCreateCompleteTemplate.checkRiskComponent();
});

it('Provera da li se ucitao Average Residual Risk Rating', function(){
    raEditCompleteTemplate.checkAverageResidual();
});

it('Provera da li se ucitao Risk Level', function(){
    raEditCompleteTemplate.checkRiskLevel();
});

it('Provera da li se ucitao treci title on page', function(){
    raCreateCompleteTemplate.checkThirdTitleOnPage();
});

it('Provera da li se ucitao Test component on page', function(){
    raCreateCompleteTemplate.checkTestComponentOnPage();
});

it('Klik na back icon', function(){
    raCreateCompleteTemplate.clickBackIcon();
});

it('Provera da li se ucitao complete url', function(){
    raCreateCompleteTemplate.checkCompletedURL();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});