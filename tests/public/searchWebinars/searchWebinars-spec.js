var register = require('../registracija/registracija-po');
var searchWebinars = require('./searchWebinars-po.js');

describe('Search upcoming webinars', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});   

it('Dolazak na home stranu', function(){
    register.landOnHomePage();
    browser.sleep(4000);
});  

it('Hover to open drop menu', function(){
    searchWebinars.HoverToOpenDrop();
    browser.sleep(3000);
});  

it('Klik na upcoming webinars link', function(){
    searchWebinars.clickOnLink();
    browser.sleep(5000);
});  

it('Uneti search text', function(){
    searchWebinars.enterSearchWord();
    browser.sleep(2000);
});  

it('Klik na search button', function(){
    searchWebinars.submit();
    browser.sleep(5000);
});  

it('Provera da li se webinar ucitao', function(){
    searchWebinars.checkWebinarIsPresent();
    browser.sleep(3000);
});  


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});