var ra_home = require('../ra_home/ra_home-po');
var ra_delete_complete_template = require('./ra_delete_complete_template-po');
var ra_edit_complete_template = require('../ra_edit_complete_template/ra_edit_complete_template-po');
var ra_create_complete_template = require('../ra_create_complete_template/ra_create_complete_template-po');
var ra_delete_inprogress_template = require('../ra_delete_inprogress_template/ra_delete_inprogress_template-po');


describe('Delete complete template', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

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

it('Click to open drop down menu', function(){
    ra_delete_inprogress_template.clickToOpenDropDownMenu();
});

it('Klik na delete link iz drop down menija', function(){
    ra_delete_complete_template.clickDeleteLink();
});

it('Potvrda brisanja InProgress template', function(){
    ra_delete_inprogress_template.confirmDelete();
});

it('Provera da li se pojavila successfully message', function(){
    ra_delete_complete_template.checkSuccessfullyMessage();
});

it('Provera da li se pojavila There are no completed assessments', function(){
    ra_delete_complete_template.checkNoAssessmentMessage();
});

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});