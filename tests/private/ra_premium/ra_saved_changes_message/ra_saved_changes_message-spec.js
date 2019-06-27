var ra_home = require('../ra_home/ra_home-po');
var ra_delete_inprogress_template = require('../ra_delete_inprogress_template/ra_delete_inprogress_template-po');
var ra_create_inprogress_template = require('../ra_create_inprogress_template/ra_create_inprogress_template-po');
var ra_edit_inprogress_template = require('../ra_edit_inprogress_template/ra_edit_inprogress_template-po');
var ra_unsaved_changes_message = require('../ra_unsaved_changes_message/ra_unsaved_changes_message-po');
var ra_saved_changes_message = require('./ra_saved_changes_message-po');

describe('Klik on SAVE button in message for unsaved.', function(){

it('Dolazak na home risk assesment premium stranu', function(){
    ra_home.landOnRaHome();
});

it('Provera da li se ucitao home URL sa IDem od premium accounta', function(){
    ra_home.checkRaHomeURL();
});

it('Klik InProgress link u side menu ', function(){
    ra_delete_inprogress_template.clickInProgressLink();
});

it('Provera InProgrees URLa', function(){
    ra_delete_inprogress_template.checkInProgressURL();
});

it('Provera da li se pojavio template koji smo zapoceli u prethodnom testu', function(){
    ra_create_inprogress_template.checkTemplateInProgress();
});

it('Click to open drop down menu', function(){
    ra_delete_inprogress_template.clickToOpenDropDownMenu();
});

it('Click on Edit button in drop down menu', function(){
    ra_edit_inprogress_template.clickOnEditLink();
});

it('Brsanje text iz polja', function(){
    ra_edit_inprogress_template.deleteTextFromTheField();
});

it('Unosenje prvog text u polje', function(){
    ra_edit_inprogress_template.enterFirstEditTextInTheSecondAnswerField();
});

it('Klik na Close link', function(){
    ra_create_inprogress_template.clickCloseLink();
});

it('Klik n Save Changes button', function(){
    ra_saved_changes_message.clickOnSaveChanges();
});

it('Click to open drop down menu', function(){
    ra_delete_inprogress_template.clickToOpenDropDownMenu();
});

it('Click on Edit button in drop down menu', function(){
    ra_edit_inprogress_template.clickOnEditLink();
});

it('Click to open first question', function(){
    ra_unsaved_changes_message.clickOnOpenFirstQuestion();
});

it('Provera da li se text promenio nakon sto smo kliknuli na save button', function(){
    ra_saved_changes_message.checkIsAnswerEdited();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});