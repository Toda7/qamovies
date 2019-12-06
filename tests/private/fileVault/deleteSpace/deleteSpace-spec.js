var deleteSpace = require('./deleteSpace-po.js');

describe('File Vault', function(){

it('Klik na Protractor space', function(){
    deleteSpace.clickOnProtractorSpace();
});

it('Klik na Trash Can', function(){
    deleteSpace.clickOnTrashCan();
});

it('Klik na YES da potvrdis brisanje spacea', function(){
    deleteSpace.clickToConfirmDeleting();
});

it('Provera da li je Space obrisan', function(){
    deleteSpace.checkIsSpaceDeleted();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});