var adminland = require('./adminland-po.js');

describe('Adminland', function(){

it('Klik na Adminland', function(){
    adminland.clickOnAdminland();
});

it('Provera da li se ucitao Adminland URL', function(){
    adminland.checkAdminlandURL();
});

it('Klik na Add User dugme', function(){
    adminland.clickOnAddUserButton();
});

it('Unosenje user emaila u search polje', function(){
    adminland.insertEmailInSearchUserField();
});

it('Klik na +', function(){
    adminland.clickOnPlus();
});

it('Klik na OK', function(){
    adminland.clickOnOk();
});

it('Klik na Adminland', function(){
    adminland.clickOnAdminland();
});

it('Klik na upravo dodatog usera', function(){
    adminland.clickOnAddedUser();
});

it('Klik na Three dots menu', function(){
    adminland.clickOnThreeDots();
});

it('Klik da removujes usera', function(){
    adminland.clickOnRemoveUser();
});

it('Klik da potvrdis remove usera', function(){
    adminland.clickOnOkToRemove();
});

it('Klik na Add User dugme', function(){
    adminland.clickOnAddUserButton();
});

it('Unosenje user emaila u search polje', function(){
    adminland.insertEmailInSearchUserField();
});

it('Provera da li je obrisani user u listi', function(){
    adminland.checkIsUserThere();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});