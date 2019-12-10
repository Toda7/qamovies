var raHome = require('../raHome/raHome-po');
var raDeleteInprogressTemplate = require('./raDeleteInprogressTemplate-po');
var raCreateInprogressTemplate = require('../raCreateInprogressTemplate/raCreateInprogressTemplate-po');


describe('Delete in progress template', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

it('Dolazak na home risk assesment premium stranu', function(){
    raHome.landOnRaHome();
});

it('Provera da li se ucitao home URL sa IDem od premium accounta', function(){
    raHome.checkRaHomeURL();
});

it('Klik InProgress link u side menu', function(){
    raDeleteInprogressTemplate.clickInProgressLink();
});

it('Provera InProgrees URLa', function(){
    raDeleteInprogressTemplate.checkInProgressURL();
});

it('Provera da li se pojavio template koji smo zapoceli u prethodnom testu', function(){
    raCreateInprogressTemplate.checkTemplateInProgress();
});

it('Click to open drop down menu with the edit and delete links', function(){
    raDeleteInprogressTemplate.clickToOpenDropDownMenu();
});

it('Klik na delete link iz drop down menija', function(){
    raDeleteInprogressTemplate.clickDeleteLink();
});

it('Potvrda brisanja InProgress template', function(){
    raDeleteInprogressTemplate.confirmDelete();
});

it('Provera da li se pojavila successfully message', function(){
    raDeleteInprogressTemplate.checkSuccessfullyMessage();
});

it('Provera da li se pojavila "There are no assessments in progress" message', function(){
    raDeleteInprogressTemplate.checkNoAssessmentMessage();
});

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});