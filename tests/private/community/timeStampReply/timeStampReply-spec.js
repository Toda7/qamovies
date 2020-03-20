var timeStampReply = require('./timeStampReply-po.js');
var deleteReply = require('../deleteReply/deleteReply-po.js');

describe('Provera Time Stamp-a posle Reply-a', function(){

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
    browser.sleep(3000);
});

it('Provera Active now Time Stamp-a', function(){
    timeStampReply.checkTimeStamp();
});

it('Dolazak na Fi Professionals stranu', function(){
    timeStampReply.landOnFiProfessionals();
    browser.sleep(3000);
});

it('Provera Active now Time Stamp-a', function(){
    timeStampReply.checkTimeStamp();
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