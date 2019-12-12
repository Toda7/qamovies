var raHome = require('../raHome/raHome-po');
var raCreateInprogressTemplate = require('../raCreateInprogressTemplate/raCreateInprogressTemplate-po');
var raCreateCompleteTemplate = require('./raCreateCompleteTemplate-po');


describe('Create complete template', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

it('Dolazak na home risk assesment premium stranu', function(){
    raHome.landOnRaHome();
});

it('Provera da li se ucitao home URL sa IDem od premium accounta', function(){
    raHome.checkRaHomeURL();
});

it('Klik na Start new button', function(){
    raCreateCompleteTemplate.clickStartNewLink();
});

it('Provera da li se ucitao first title of question', function(){
    raCreateCompleteTemplate.checkFirstTitleOfQuestion();
});

it('In first question click on option', function(){
    raCreateCompleteTemplate.clickOnOption();
});

it('Unosenje texta u answer polje', function(){
    raCreateInprogressTemplate.enterTextInTheAnswerField();
});

it('Klik na Continue button', function(){
    raCreateInprogressTemplate.clickContinueLink();
});

it('Provera da li se ucitao second title of question', function(){
    raCreateCompleteTemplate.checkSecondTitleOfQuestion();
});

it('In second question click on option', function(){
    raCreateCompleteTemplate.clickOnSecondOption();
});

it('Unosenje texta u drugo answer polje', function(){
    raCreateInprogressTemplate.enterTextInTheSecondAnswerField();
});

it('Klik na Continue button', function(){
    raCreateInprogressTemplate.clickContinueLink();
});

it('Provera da li se ucitao third title of question', function(){
    raCreateCompleteTemplate.checkThirdTitleOfQuestion();
});

it('In third question click on option', function(){
    raCreateCompleteTemplate.clickOnThirdOption();
});

it('Unosenje texta u trece answer polje', function(){
    raCreateInprogressTemplate.enterTextInTheThirdAnswerField();
});

it('Klik na Continue button', function(){
    raCreateInprogressTemplate.clickContinueLink();
});

it('Provera da li je progress 100%', function(){
    raCreateCompleteTemplate.checkProgress();
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

it('Provera da li se ucitala print icon in header', function(){
    raCreateCompleteTemplate.checkTitleOnPage();
});

it('Provera da li se ucitao summary below title on page', function(){
    raCreateCompleteTemplate.checkSummary();
});

it('Provera da li se ucitao rating summery -> Considerable', function(){
    raCreateCompleteTemplate.checkRatingSummary();
});

it('Provera da li se ucitao drugi title on page', function(){
    raCreateCompleteTemplate.checkSecondTitleOnPage();
});

it('Provera da li se ucitao Risk Component', function(){
    raCreateCompleteTemplate.checkRiskComponent();
});

it('Provera da li se ucitao Average Residual Risk Rating', function(){
    raCreateCompleteTemplate.checkAverageResidual();
});

it('Provera da li se ucitao Risk Level', function(){
    raCreateCompleteTemplate.checkRiskLevel();
});

it('Provera da li se ucitao treci title on page', function(){
    raCreateCompleteTemplate.checkThirdTitleOnPage();
});

it('Provera da li se ucitao Test component on page', function(){
    raCreateCompleteTemplate.checkTestComponentOnPage();
});

it('Provera da li se ucitao my first answer', function(){
    raCreateCompleteTemplate.checkMyFirstAnswer();
});

it('Provera da li se ucitao my second answer', function(){
    raCreateCompleteTemplate.checkMySecondAnswer();
});

it('Provera da li se ucitao my third answer', function(){
    raCreateCompleteTemplate.checkMyThirdAnswer();
});

it('Klik na back icon', function(){
    raCreateCompleteTemplate.clickBackIcon();
});

it('Provera da li se ucitao complete url', function(){
    raCreateCompleteTemplate.checkCompletedURL();
});

it('Provera da li se pojavio novi completed template', function(){
    raCreateCompleteTemplate.checkCompletedTemplate();
});


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});