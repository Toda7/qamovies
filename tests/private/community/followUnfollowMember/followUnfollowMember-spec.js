var followUnfollowMember = require('./followUnfollowMember-po.js');
// var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');

describe('Follow/Unfollow vendor', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Profile stranu membera', function(){
        followUnfollowMember.landOnMemberProfilePage();
        browser.sleep(1000);
    });

    it('Klik na Follow dugme', function(){
        followUnfollowMember.clickFollowButton();
        browser.sleep(1000);
    });

    it('Provera Snek Bara za Follow', function(){
        followUnfollowMember.checkFollowSnackbar();
        browser.sleep(1000);
    });

    it('Klik na Unfollow dugme', function(){
        followUnfollowMember.clickUnfollowButton();
        browser.sleep(1000);
    });

    it('Provera Snek Bara za Unfollow', function(){
        followUnfollowMember.checkUnfollowSnackbar();
        browser.sleep(1000);
    });

    it('Provera da li se na strani vratilo Follow dugme', function(){
        followUnfollowMember.checkFollowButton();
        browser.sleep(1000);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
