var alerts = require('./alerts-po.js');

describe('Alerts', function(){

it('Klik na Alerts tab', function(){
    alerts.clickOnAlertsTab();
});

it('Unosenje My Alerta', function(){
    alerts.insertMyAlert();
});

it('Klik na Create Alert btn', function(){
    alerts.clickOnCreateAlertBtn();
});

it('Da li se ucitao alert', function(){
    alerts.checkIsAlertHere();
});

it('Klik na Delete Alert', function(){
    alerts.clickOnDeleteAlert();
});

it('Klik na Delete Alert Confirm', function(){
    alerts.clickOnDeleteAlertConfirm();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});