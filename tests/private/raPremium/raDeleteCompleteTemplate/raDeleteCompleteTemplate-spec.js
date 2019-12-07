var raHome = require('../raHome/raHome-po');
var raDeleteCompleteTemplate = require('./raDeleteCompleteTemplate-po');
var raEditCompleteTemplate = require('../raEditCompleteTemplate/raEditCompleteTemplate-po');
var raCreateCompleteTemplate = require('../raCreateCompleteTemplate/raCreateCompleteTemplate-po');
var raDeleteInprogressTemplate = require('../raDeleteInprogressTemplate/raDeleteInprogressTemplate-po');


describe('Delete complete template', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

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

it('Click to open drop down menu', function(){
    raDeleteInprogressTemplate.clickToOpenDropDownMenu();
});

it('Klik na delete link iz drop down menija', function(){
    raDeleteCompleteTemplate.clickDeleteLink();
});

it('Potvrda brisanja InProgress template', function(){
    raDeleteInprogressTemplate.confirmDelete();
});

it('Provera da li se pojavila successfully message', function(){
    raDeleteCompleteTemplate.checkSuccessfullyMessage();
});

it('Provera da li se pojavila There are no completed assessments', function(){
    raDeleteCompleteTemplate.checkNoAssessmentMessage();
});

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});