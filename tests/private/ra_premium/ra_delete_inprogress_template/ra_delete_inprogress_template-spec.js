var ra_home = require('../ra_home/ra_home-po');
var ra_delete_inprogress_template = require('./ra_delete_inprogress_template-po');
var ra_create_inprogress_template = require('../ra_create_inprogress_template/ra_create_inprogress_template-po');


describe('Delete in progress template', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

it('Dolazak na home risk assesment premium stranu', function(){
    ra_home.landOnRaHome();
});

it('Provera da li se ucitao home URL sa IDem od premium accounta', function(){
    ra_home.checkRaHomeURL();
});

it('Klik InProgress link u side menu', function(){
    ra_delete_inprogress_template.clickInProgressLink();
});

it('Provera InProgrees URLa', function(){
    ra_delete_inprogress_template.checkInProgressURL();
});

it('Provera da li se pojavio template koji smo zapoceli u prethodnom testu', function(){
    ra_create_inprogress_template.checkTemplateInProgress();
});

it('Click to open drop down menu with the edit and delete links', function(){
    ra_delete_inprogress_template.clickToOpenDropDownMenu();
});

it('Klik na delete link iz drop down menija', function(){
    ra_delete_inprogress_template.clickDeleteLink();
});

it('Potvrda brisanja InProgress template', function(){
    ra_delete_inprogress_template.confirmDelete();
});

it('Provera da li se pojavila successfully message', function(){
    ra_delete_inprogress_template.checkSuccessfullyMessage();
});

it('Provera da li se pojavila "There are no assessments in progress" message', function(){
    ra_delete_inprogress_template.checkNoAssessmentMessage();
});

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});