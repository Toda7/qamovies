var avatar = require('./avatar-po.js');

describe('Upload avatar photo', function(){

    it('Klik na Avatar tab', function(){
        avatar.clickOnAvatarTab();
    });
    
    it('Upload myphoto to profile picture', function(){
        avatar.addProfilePhoto();
    });
    
    it('Provera da li je save-ovano', function(){
        avatar.checkSuccessMessageForPhoto();
    });

    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });
    });