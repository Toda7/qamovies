var raHome = require('../raHome/raHome-po');
var raDropMenu = require('./raDropMenu-po');


describe('Provera drop menija iz headera', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

it('Dolazak na home risk assesment premium stranu', function(){
    raHome.landOnRaHome();
});

it('Provera da li se ucitao home URL sa IDem od premium accounta', function(){
    raHome.checkRaHomeURL();
});

it('Provera da li se ucitao RA drop menu u headeru', function(){
    raHome.checkRaDropMenu();
});

it('Click to open drop menu', function(){
    raDropMenu.clickToOpenDropMenu();
});

it('Provera da li se logo ucitao u drop meniju', function(){
    raDropMenu.checkLogoInDropMenu();
});

it('Provera da li se ucitao comunity link u drop meniju', function(){
    raDropMenu.checkCommunityLinkInDropMenu();
});

it('Provera da li se ucitao workspace link u drop meniju', function(){
    raDropMenu.checkWorkspaceLinkInDropMenu();
});

it('Provera da li se ucitao peer analysis link u drop meniju', function(){
    raDropMenu.checkPeerAnalysisLinkInDropMenu();
});

it('Provera da li se ucitao risk assessment link u drop meniju', function(){
    raDropMenu.checkRiskAssessmentLinkInDropMenu();
});

it('Provera da li se ucitao vendor managment link u drop meniju', function(){
    raDropMenu.checkVendorManagmentLinkInDropMenu();
});

it('Provera da li se ucitao education link u drop meniju', function(){
    raDropMenu.checkEducationLinkInDropMenu();
});

it('Provera da li se ucitao lendwell link u drop meniju', function(){
    raDropMenu.checkLendwellLinkInDropMenu();
});

it('Provera da li se ucitao cielostart link u drop meniju', function(){
    raDropMenu.checkCielostarLinkInDropMenu();
});


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});