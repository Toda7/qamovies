var raHome = require('../raHome/raHome-po');
var raCreateInprogressTemplate = require('./raCreateInprogressTemplate-po');
var raDeleteInprogressTemplate = require('../raDeleteInprogressTemplate/raDeleteInprogressTemplate-po');
var raEditInprogressTemplate = require('../raEditInprogressTemplate/raEditInprogressTemplate-po');

describe('Create in progress template', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

it('Dolazak na home risk assesment premium stranu', function(){
    raHome.landOnRaHome();
});

it('Provera da li se ucitao home URL sa IDem od premium accounta', function(){
    raHome.checkRaHomeURL();
});

it('Klik na Start New link', function(){
    raCreateInprogressTemplate.clickStartNewLink();
});

it('Provera da li se ucitao title of template', function(){
    raCreateInprogressTemplate.checkTitleOfTemplate();
});

it('Provera da li se ucitao title za prvo pitanje', function(){
    raCreateInprogressTemplate.checkFirstTitleOfQuestion();
});

it('Unosenje texta u answer polje', function(){
    raCreateInprogressTemplate.enterTextInTheAnswerField();
});

it('Klik na Continue button', function(){
    raCreateInprogressTemplate.clickContinueLink();
});

it('Provera da li se ucitao title za drugo pitanje', function(){
    raCreateInprogressTemplate.checkSecondTitleOfQuestion();
});

it('Unosenje texta u drugo answer polje', function(){
    raCreateInprogressTemplate.enterTextInTheSecondAnswerField();
});

it('Klik na Continue button', function(){
    raCreateInprogressTemplate.clickContinueLink();
});

it('Provera da li se ucitao title za trece pitanje', function(){
    raCreateInprogressTemplate.checkSecondTitleOfQuestion();
});

it('Unosenje texta u trece answer polje', function(){
    raCreateInprogressTemplate.enterTextInTheThirdAnswerField();
});

it('Klik na Continue button', function(){
    raCreateInprogressTemplate.clickContinueLink();
});

it('Klik na Close link', function(){
    raCreateInprogressTemplate.clickCloseLink();
});

it('Provera da li smo dobili InProgress stranu, provera URL-a', function(){
    raCreateInprogressTemplate.checkInProgressURL();
});

it('Provera da li se pojavio template koji smo zapoceli - treba da bude na in progress strani', function(){
    raCreateInprogressTemplate.checkTemplateInProgress();
});

it('Click to open drop down menu with edit and delete links', function(){
    raDeleteInprogressTemplate.clickToOpenDropDownMenu();
});

it('Click on Edit button from drop down menu', function(){
    raEditInprogressTemplate.clickOnEditLink();
});

it('Provera da li se prvi text koji smo uneli na create nalazi u formi', function(){
    raCreateInprogressTemplate.checkFirstAnswer();
});

it('Klik na Continue button', function(){
    raCreateInprogressTemplate.clickContinueLink();
});

it('Provera da li se drugi text koji smo uneli na create nalazi u formi', function(){
    raCreateInprogressTemplate.checkSecondAnswer();
});

it('Klik na Continue button', function(){
    raCreateInprogressTemplate.clickContinueLink();
});

it('Provera da li se treci text koji smo uneli na create nalazi u formi', function(){
    raCreateInprogressTemplate.checkThirdAnswer();
});


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});