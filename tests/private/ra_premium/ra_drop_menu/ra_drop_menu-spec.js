var ra_home = require('../ra_home/ra_home-po');
var ra_drop_menu = require('./ra_drop_menu-po');


describe('Home risk_assessment premium page', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

it('Dolazak na home risk assesment premium stranu', function(){
    ra_home.landOnRaHome();
});

it('Provera da li se ucitao home URL sa IDem od premium accounta', function(){
    ra_home.checkRaHomeURL();
});

it('Provera da li se ucitao RA drop menu u headeru', function(){
    ra_home.checkRaDropMenu();
});

it('Click to open drop menu', function(){
    ra_drop_menu.clickToOpenDropMenu();
});

it('Provera da li se logo ucitao u drop meniju', function(){
    ra_drop_menu.checkLogoInDropMenu();
});

it('Provera da li se ucitao comunity link u drop meniju', function(){
    ra_drop_menu.checkCommunityLinkInDropMenu();
});

it('Provera da li se ucitao workspace link u drop meniju', function(){
    ra_drop_menu.checkWorkspaceLinkInDropMenu();
});

it('Provera da li se ucitao peer analysis link u drop meniju', function(){
    ra_drop_menu.checkPeerAnalysisLinkInDropMenu();
});

it('Provera da li se ucitao risk assessment link u drop meniju', function(){
    ra_drop_menu.checkRiskAssessmentLinkInDropMenu();
});

it('Provera da li se ucitao vendor managment link u drop meniju', function(){
    ra_drop_menu.checkVendorManagmentLinkInDropMenu();
});

it('Provera da li se ucitao education link u drop meniju', function(){
    ra_drop_menu.checkEducationLinkInDropMenu();
});

it('Provera da li se ucitao lendwell link u drop meniju', function(){
    ra_drop_menu.checkLendwellLinkInDropMenu();
});

it('Provera da li se ucitao cielostart link u drop meniju', function(){
    ra_drop_menu.checkCielostarLinkInDropMenu();
});


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});