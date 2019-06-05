var register = require('../registracija/registracija-po');
var lendwell = require('../lendwell/lendwell-po');
var questions = require('./questions-po');

describe('Public "Get asnwers" strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });   

    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });  

    it('Hover to open drop menu', function(){
        questions.HoverToOpenDrop();
    });  

    it('Klik na Get answers link iz drop menu', function(){
        questions.clickOnLink();
    });  

    it('Provera Questions URL-a', function(){
        questions.checQuestionsURL();
    });  

    it('Provera da li se ucitao page title', function(){
        questions.checkQuestionsPageTitle();
    });    
    it('Provera da li se ucitao button', function(){
        questions.checkButton();
    });  
    it('Provera 10 article', function(){
        questions.counterOfArticle();
    });  

    it('Provera da li se ucitao footer', function(){
        lendwell.checkFooter();
    });
    

    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});