var raHome = require('../raHome/raHome-po');
var raDeleteInprogressTemplate = require('../raDeleteInprogressTemplate/raDeleteInprogressTemplate-po');
var raCreateInprogressTemplate = require('../raCreateInprogressTemplate/raCreateInprogressTemplate-po');
var raEditInprogressTemplate = require('../raEditInprogressTemplate/raEditInprogressTemplate-po');
var raUnsavedChangesMessage = require('./raUnsavedChangesMessage-po');

describe('Klik on Discard Changes button in message for unsaved.', function(){

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

it('Provera da li se pojavio template koji smo zapoceli u prethodnom testu', function(){
    raCreateInprogressTemplate.checkTemplateInProgress();
});

it('Click to open drop down menu', function(){
    raDeleteInprogressTemplate.clickToOpenDropDownMenu();
});

it('Click on Edit button in drop down menu', function(){
    raEditInprogressTemplate.clickOnEditLink();
});

it('Brsanje text iz polja', function(){
    raEditInprogressTemplate.deleteTextFromTheField();
});

it('Unosenje prvog text u polje', function(){
    raEditInprogressTemplate.enterFirstEditTextInTheSecondAnswerField();
});

it('Klik na Close link', function(){
    raCreateInprogressTemplate.clickCloseLink();
});

it('Klik n Discard Changes button', function(){
    raUnsavedChangesMessage.clickOnDiscardChanges();
});

it('Click to open drop down menu', function(){
    raDeleteInprogressTemplate.clickToOpenDropDownMenu();
});

it('Click on Edit button in drop down menu', function(){
    raEditInprogressTemplate.clickOnEditLink();
});

it('Click to open first question', function(){
    raUnsavedChangesMessage.clickOnOpenFirstQuestion();
});

it('Provera da li se text nije promenio nakon sto smo kliknuli na discard changes', function(){
    raUnsavedChangesMessage.checkIsAnswerNotEdited();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});

