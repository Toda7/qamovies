var dashBlog = require('./dashBlog-po')

describe('Blog Link iz Footera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na home stranu', function(){
        dashBlog.landOnHomePage();
    });

    it('Klik na Blog link', function(){
        dashBlog.clickOnBlog();
    });

    it('Cekira da li seucitao "Media contact" section', function(){
        dashBlog.checkBlogUrl();
    });

    it('Provera Blog URL-a', function(){
        dashBlog.checkBlogUrl();
    });


    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});