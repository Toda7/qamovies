var addUser = require('./addUser-po.js');

describe('Pravljenje User-a', function(){

it('Klik na Space u Headeru', function(){
    addUser.clickOnSpaceInHeader();
});

it('Klik na Add Button', function(){
    addUser.clickOnAddButton();
});

it('Klik na Add User', function(){
    addUser.clickOnAddUser();
});

it('Provera da li je Space Users tab tu', function(){
    addUser.checkSpaceUsers();
});

it('Provera da li je Available Users tab tu', function(){
    addUser.checkAvailableUsers();
});

it('Klik na Available Users', function(){
    addUser.clickOnAvailableUsers();
});

it('Klik na Usera', function(){
    addUser.clickToSelectUser();
});

it('Klik da dodas Usera', function(){
    addUser.clickToAddUser();
});

it('Klik da potvrdis dodavanje Usera', function(){
    addUser.clickToConfirmAdding();
});

it('Provera da li je User dodat', function(){
    addUser.checkIsUserAdded();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});