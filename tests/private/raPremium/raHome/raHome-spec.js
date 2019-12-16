var raHome = require('./raHome-po');

describe('Home risk_assessment premium page', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

it('Dolazak na home risk assesment premium stranu', function(){
    raHome.landOnRaHome();
});

it('Provera da li se ucitao home URL sa IDem od premium accounta', function(){
    raHome.checkRaHomeURL();
});

it('Provera da li se ucitao page title', function(){
    raHome.checkRaPageTitle();
});

it('Provera da li se ucitao RA drop menu in headeru', function(){
    raHome.checkRaDropMenu();
});

it('Provera da li se ucitao title in header', function(){
    raHome.checkTitleInHeader();
});

it('Provera da li se ucitao avatar in header', function(){
    raHome.checkAvatarInHeader();
});

it('Provera da li se ucitao menu sa leve strane', function(){
    raHome.checkMenuOnLeftSide();
});

it('Provera da li se ucitao template na strani', function(){
    raHome.checkTemplate();
});

it('Provera da li su se pojavila 2 templates', function(){
    raHome.counterOfTemplates();
});

it('Provera da li se ucitao title of template', function(){
    raHome.checkTitleOfTemplate();
});

it('Provera da li se ucitao create button u template kartici', function(){
    raHome.checkCreateButton();
});


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});