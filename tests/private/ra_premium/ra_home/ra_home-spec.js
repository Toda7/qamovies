var ra_home = require('./ra_home-po');

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

it('Provera da li se ucitao page title', function(){
    ra_home.checkRaPageTitle();
});

it('Provera da li se ucitao RA drop menu u headeru', function(){
    ra_home.checkRaDropMenu();
});

it('Provera da li se ucitao title u header', function(){
    ra_home.checkTitleInHeader();
});

it('Provera da li se ucitao avatar u header', function(){
    ra_home.checkAvatarInHeader();
});

it('Provera da li se ucitao menu sa leve strane', function(){
    ra_home.checkMenuOnLeftSide();
});

it('Provera da li se ucitao template na strani', function(){
    ra_home.checkTemplate();
});

it('Provera da li su se pojavila 2 templates', function(){
    ra_home.counterOfTemplates();
});

it('Provera da li se ucitao title of template', function(){
    ra_home.checkTitleOfTemplate();
});

it('Provera da li se ucitao create button u template kartici', function(){
    ra_home.checkCreateButton();
});


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});