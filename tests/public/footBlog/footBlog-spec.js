var register = require('../registracija/registracija-po.js');
var footBlog = require('./footBlog-po.js')

describe('Public Blog Link iz Footera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });

    it('Klik na Blog link', function(){
        footBlog.clickOnLink();
    });

    it('Provera Blog URL-a', function(){
        footBlog.checkBlogURL();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});