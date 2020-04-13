var timeStampReply = require('../timeStampReply/timeStampReply-po.js');
var deleteReply = require('../deleteReply/deleteReply-po.js');
var timeStampReplyMinute = require('./timeStampReplyMinute-po.js');

describe('Provera Time Stamp-a od 1 minuta posle Reply-a', function(){

it('Dolazak na Detail stranu diskusije', function(){
    timeStampReply.landOnDiscussionDetailsPage();
    browser.sleep(5000);
});

it('Klik na Reply', function(){
    timeStampReply.clickOnReply();
    browser.sleep(1000);
});

it('Unos texta u Reply polje', function(){
    timeStampReply.insertReplyText();
    browser.sleep(1000);
});

it('Klik na Reply dugme', function(){
    timeStampReply.postReply();
    browser.sleep(2000);
});

it('Provera da li je Reply uspesno objavljen', function(){
    timeStampReply.checkIsReplyPosted();
    browser.sleep(1000);
});

it('Dolazak na For You - Latest stranu', function(){
    timeStampReply.landOnForYouLatest();
    browser.sleep(70000);
});

it('Refresh page', function(){
    browser.refresh(); 
    browser.sleep(5000);
});

it('Provera 1 minute ago Time Stamp-a', function(){
    timeStampReplyMinute.checkTimeStampMinuteAgo();
});

it('Dolazak na Fi Professionals stranu', function(){
    timeStampReply.landOnFiProfessionals();
    browser.sleep(3000);
});

it('Provera 1 Minute ago Time Stamp-a', function(){
    timeStampReplyMinute.checkTimeStampMinuteAgo();
});

it('Dolazak na Detail stranu diskusije', function(){
    timeStampReply.landOnDiscussionDetailsPage();
    browser.sleep(5000);
});

it('Klik na Tri tacke', function(){
    timeStampReply.clickThreeDots();
    browser.sleep(1000);
});

it('Klik na Delete dugme', function(){
    deleteReply.clickDelete();
    browser.sleep(1000);
});

it('Provera da li obrisana diskusija', function(){
    deleteReply.checkSnackbar();
    browser.sleep(1000);
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});