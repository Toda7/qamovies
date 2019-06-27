var ra_home = require('../ra_home/ra_home-po');
var ra_create_inprogress_template = require('./ra_create_inprogress_template-po');
var ra_delete_inprogress_template = require('../ra_delete_inprogress_template/ra_delete_inprogress_template-po');
var ra_edit_inprogress_template = require('../ra_edit_inprogress_template/ra_edit_inprogress_template-po');

describe('Create in progress template', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

it('Dolazak na home risk assesment premium stranu', function(){
    ra_home.landOnRaHome();
});

it('Provera da li se ucitao home URL sa IDem od premium accounta', function(){
    ra_home.checkRaHomeURL();
});

it('Klik na Start New link', function(){
    ra_create_inprogress_template.clickStartNewLink();
});

it('Provera da li se ucitao title of template', function(){
    ra_create_inprogress_template.checkTitleOfTemplate();
});

it('Provera da li se ucitao title za prvo pitanje', function(){
    ra_create_inprogress_template.checkFirstTitleOfQuestion();
});

it('Unosenje texta u answer polje', function(){
    ra_create_inprogress_template.enterTextInTheAnswerField();
});

it('Klik na Continue button', function(){
    ra_create_inprogress_template.clickContinueLink();
});

it('Provera da li se ucitao title za drugo pitanje', function(){
    ra_create_inprogress_template.checkSecondTitleOfQuestion();
});

it('Unosenje texta u drugo answer polje', function(){
    ra_create_inprogress_template.enterTextInTheSecondAnswerField();
});

it('Klik na Continue button', function(){
    ra_create_inprogress_template.clickContinueLink();
});

it('Provera da li se ucitao title za trece pitanje', function(){
    ra_create_inprogress_template.checkSecondTitleOfQuestion();
});

it('Unosenje texta u trece answer polje', function(){
    ra_create_inprogress_template.enterTextInTheThirdAnswerField();
});

it('Klik na Continue button', function(){
    ra_create_inprogress_template.clickContinueLink();
});

it('Klik na Close link', function(){
    ra_create_inprogress_template.clickCloseLink();
});

it('Provera da li smo dobili InProgress stranu, provera URL-a', function(){
    ra_create_inprogress_template.checkInProgressURL();
});

it('Provera da li se pojavio template koji smo zapoceli - treba da bude na in progress strani', function(){
    ra_create_inprogress_template.checkTemplateInProgress();
});

it('Click to open drop down menu with edit and delete links', function(){
    ra_delete_inprogress_template.clickToOpenDropDownMenu();
});

it('Click on Edit button from drop down menu', function(){
    ra_edit_inprogress_template.clickOnEditLink();
});

it('Provera da li se prvi text koji smo uneli na create nalazi u formi', function(){
    ra_create_inprogress_template.checkFirstAnswer();
});

it('Klik na Continue button', function(){
    ra_create_inprogress_template.clickContinueLink();
});

it('Provera da li se drugi text koji smo uneli na create nalazi u formi', function(){
    ra_create_inprogress_template.checkSecondAnswer();
});

it('Klik na Continue button', function(){
    ra_create_inprogress_template.clickContinueLink();
});

it('Provera da li se treci text koji smo uneli na create nalazi u formi', function(){
    ra_create_inprogress_template.checkThirdAnswer();
});


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});