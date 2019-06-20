var ra_home = require('../ra_home/ra_home-po');
var ra_create_inprogress_template = require('./ra_create_inprogress_template-po');


describe('Crate in progress template', function(){

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

it('Provera da li se ucitalo prvo pitanje', function(){
    ra_create_inprogress_template.checkFirstTitleOfQuestions();
});

it('Unosenje texta u answer polje', function(){
    ra_create_inprogress_template.enterTextInTheAnswerField();
});

it('Klik na Continue button', function(){
    ra_create_inprogress_template.clickContinueLink();
});

it('Provera da li se ucitalo drugo pitanje', function(){
    ra_create_inprogress_template.checkSecondTitleOfQuestions();
});

it('Unosenje texta u drugo answer polje', function(){
    ra_create_inprogress_template.enterTextInTheSecondAnswerField();
});

it('Klik na Continue button', function(){
    ra_create_inprogress_template.clickContinueLink();
});

it('Provera da li se ucitalo trece pitanje', function(){
    ra_create_inprogress_template.checkSecondTitleOfQuestions();
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

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});