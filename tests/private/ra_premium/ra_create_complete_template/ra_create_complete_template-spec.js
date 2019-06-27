var ra_home = require('../ra_home/ra_home-po');
var ra_create_inprogress_template = require('../ra_create_inprogress_template/ra_create_inprogress_template-po');
var ra_create_complete_template = require('./ra_create_complete_template-po');


describe('Create complete template', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

it('Dolazak na home risk assesment premium stranu', function(){
    ra_home.landOnRaHome();
});

it('Provera da li se ucitao home URL sa IDem od premium accounta', function(){
    ra_home.checkRaHomeURL();
});

it('Klik na Start new button', function(){
    ra_create_complete_template.clickStartNewLink();
});

it('Provera da li se ucitao first title of question', function(){
    ra_create_complete_template.checkFirstTitleOfQuestion();
});

it('In first question click on option', function(){
    ra_create_complete_template.clickOnOption();
});

it('Unosenje texta u answer polje', function(){
    ra_create_inprogress_template.enterTextInTheAnswerField();
});

it('Klik na Continue button', function(){
    ra_create_inprogress_template.clickContinueLink();
});

it('Provera da li se ucitao second title of question', function(){
    ra_create_complete_template.checkSecondTitleOfQuestion();
});

it('In second question click on option', function(){
    ra_create_complete_template.clickOnSecondOption();
});

it('Unosenje texta u drugo answer polje', function(){
    ra_create_inprogress_template.enterTextInTheSecondAnswerField();
});

it('Klik na Continue button', function(){
    ra_create_inprogress_template.clickContinueLink();
});

it('Provera da li se ucitao third title of question', function(){
    ra_create_complete_template.checkThirdTitleOfQuestion();
});

it('In third question click on option', function(){
    ra_create_complete_template.clickOnThirdOption();
});

it('Unosenje texta u trece answer polje', function(){
    ra_create_inprogress_template.enterTextInTheThirdAnswerField();
});

it('Klik na Continue button', function(){
    ra_create_inprogress_template.clickContinueLink();
});

it('Provera da li je progress 100%', function(){
    ra_create_complete_template.checkProgress();
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

it('Provera da li se ucitala print icon in header', function(){
    ra_create_complete_template.checkTitleOnPage();
});

it('Provera da li se ucitao summary below title on page', function(){
    ra_create_complete_template.checkSummary();
});

it('Provera da li se ucitao rating summery -> Considerable', function(){
    ra_create_complete_template.checkRatingSummary();
});

it('Provera da li se ucitao drugi title on page', function(){
    ra_create_complete_template.checkSecondTitleOnPage();
});

it('Provera da li se ucitao Risk Component', function(){
    ra_create_complete_template.checkRiskComponent();
});

it('Provera da li se ucitao Average Residual Risk Rating', function(){
    ra_create_complete_template.checkAverageResidual();
});

it('Provera da li se ucitao Risk Level', function(){
    ra_create_complete_template.checkRiskLevel();
});

it('Provera da li se ucitao treci title on page', function(){
    ra_create_complete_template.checkThirdTitleOnPage();
});

it('Provera da li se ucitao Test component on page', function(){
    ra_create_complete_template.checkTestComponentOnPage();
});

it('Provera da li se ucitao my first answer', function(){
    ra_create_complete_template.checkMyFirstAnswer();
});

it('Provera da li se ucitao my second answer', function(){
    ra_create_complete_template.checkMySecondAnswer();
});

it('Provera da li se ucitao my third answer', function(){
    ra_create_complete_template.checkMyThirdAnswer();
});

it('Klik na back icon', function(){
    ra_create_complete_template.clickBackIcon();
});

it('Provera da li se ucitao complete url', function(){
    ra_create_complete_template.checkCompletedURL();
});

it('Provera da li se pojavio novi completed template', function(){
    ra_create_complete_template.checkCompletedTemplate();
});


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});