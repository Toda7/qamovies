var general = require('./general-po.js');

describe('General', function(){


it('Dolazak na My Account stranu', function(){
    general.landOnMyAccountPage();
});

it('Brisanje First Name-a', function(){
    general.clearFirstName();
});

it('Brisanje Last Name-a', function(){
    general.clearLasttName();
});

it('Brisanje Job Title-a', function(){
    general.clearJobTitle();
});

it('Brisanje Website-a', function(){
    general.clearWebsite();
});

it('Brisanje Tagline-a', function(){
    general.clearTagline();
});

it('Brisanje Bio-a', function(){
    general.cleartBio();
});

it('Brisanje Primary Role-a', function(){
    general.clearPrimaryRole();
});

it('Brisanje Role Level-a', function(){
    general.clearRoleLevel();
});

it('klik na Show email switch OFF', function(){
    general.clickOnShowEmailSwitchNaOff();
});

it('klik na Save', function(){
    general.clickOnSave();
});

it('Unosenje First Name-a', function(){
    general.insertFirstName();
});

it('Unosenje Last Name-a', function(){
    general.insertLasttName();
});

it('Unosenje Job Title-a', function(){
    general.insertJobTitle();
});

it('Unosenje Website-a', function(){
    general.insertWebsite();
});

it('Unosenje Tagline-a', function(){
    general.insertTagline();
});

it('Unosenje Bio-a', function(){
    general.insertBio();
});

it('Unosenje Primary Role-a', function(){
    general.insertPrimaryRole();
});

it('Unosenje Role Level-a', function(){
    general.insertRoleLevel();
});

it('Klik na Show email switch ON', function(){
    general.clickOnShowEmailSwitchNaOn();
});

it('Klik na Save', function(){
    general.clickOnSave();
});

it('Provera da li je save-ovano', function(){
    general.checkSuccessMessage();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});