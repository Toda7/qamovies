var raHome = require('../raHome/raHome-po');
var raDeleteInprogressTemplate = require('../raDeleteInprogressTemplate/raDeleteInprogressTemplate-po');
var raCreateInprogressTemplate = require('../raCreateInprogressTemplate/raCreateInprogressTemplate-po');
var raEditInprogressTemplate = require('./raEditInprogressTemplate-po');

describe('Edit in progress template', function(){

it('Dolazak na home risk assesment premium stranu', function(){
    raHome.landOnRaHome();
});

it('Provera da li se ucitao home URL sa IDem od premium accounta', function(){
    raHome.checkRaHomeURL();
});

it('Klik InProgress link u side menu ', function(){
    raDeleteInprogressTemplate.clickInProgressLink();
});

it('Provera InProgrees URLa', function(){
    raDeleteInprogressTemplate.checkInProgressURL();
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

it('Klik na Continue button', function(){
    raCreateInprogressTemplate.clickContinueLink();
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

it('Brsanje text iz polja', function(){
    raEditInprogressTemplate.deleteTextFromTheField();
});

it('Unosenje treceg text u polje', function(){
    raEditInprogressTemplate.enterThirdEditTextInTheSecondAnswerField();
});

it('Klik na Continue button', function(){
    raCreateInprogressTemplate.clickContinueLink();
});

it('Klik na Close link', function(){
    raCreateInprogressTemplate.clickCloseLink();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});