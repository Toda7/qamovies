
var checkLinksOnFVHomePage = require('./checkLinksOnFVHomePage-po.js');

describe('Provera linkova na FV HOme page-u', function(){


it('Dolazak na FV stranu', function(){
    checkLinksOnFVHomePage.landOnFVPage();
});

it('Provera dal se ucitao FV title on page', function(){
    checkLinksOnFVHomePage.checkFVTitleOnPage();
});

it('Provera dal se ucitao home link on page', function(){
    checkLinksOnFVHomePage.checkHomeLink();
});

it('Provera da li se ucitao Task Report link', function(){
    checkLinksOnFVHomePage.checkTaskReportLink();
});

it('Provera da li se ucitao All Activity link', function(){
    checkLinksOnFVHomePage.checkAllActivityLink();
});

it('Provera da li se ucitao Search link', function(){
    checkLinksOnFVHomePage.checkSearchLink();
});

it('Provera da li se ucitao Adminland link', function(){
    checkLinksOnFVHomePage.checkAdminlandLink();
});

it('Klik na Created By Me', function(){
    checkLinksOnFVHomePage.clickOnCreatedByMe();
});

it('Klik na Assigned To Me', function(){
    checkLinksOnFVHomePage.clickOnAssignedToMe();
});

it('Provera da li su se ucitali Assigned To Me taskovi', function(){
    checkLinksOnFVHomePage.checkAssignedToMeTasks();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});