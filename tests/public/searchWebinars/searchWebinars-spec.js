var register = require('../registracija/registracija-po');
var searchWebinars = require('./searchWebinars-po.js');

describe('Public lendwell strana', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});   

it('Dolazak na home stranu', function(){
    register.landOnHomePage();
});  

it('Hover to open drop menu', function(){
    searchWebinars.HoverToOpenDrop();
});  

it('Klik na upcoming webinars link', function(){
    searchWebinars.clickOnLink();
});  

it('Uneti search text', function(){
    searchWebinars.enterSearchWord();
});  

it('Klik na search button', function(){
    searchWebinars.submit();
});  

it('Provera da li se webinar ucitao', function(){
    searchWebinars.checkWebinarIsPresent();
});  


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});