var timeStampComment = require('../timeStampComment/timeStampComment-po.js');
var deleteComment = require('../deleteComment/deleteComment-po.js');
var timeStampCommentMinute = require('./timeStampCommentMinute-po.js');

describe('Provera 1 minute ago Time Stamp-a posle Comment-a', function(){

it('Dolazak na Detail stranu diskusije', function(){
    timeStampComment.landOnDiscussionDetailsPage();
    browser.sleep(5000);
});

it('Klik na Comment dugme', function(){
    timeStampComment.clickOnComment();
    browser.sleep(2000);
});

it('Unos texta za Comment', function(){
    timeStampComment.insertCommentText();
    browser.sleep(1000);
});

it('klik na Comment dugme', function(){
    timeStampComment.postComment();
    browser.sleep(2000);
});

it('Dolazak na For You - Latest stranu', function(){
    timeStampComment.landOnForYouLatest();
    browser.sleep(60000);
});

it('Refresh page', function(){
    browser.refresh(); 
    browser.sleep(5000);
});

it('Provera 1 minute ago Time Stamp-a', function(){
    timeStampCommentMinute.checkTimeStampMinute();
});

it('Dolazak na Fi Professionals stranu', function(){
    timeStampComment.landOnFiProfessionals();
    browser.sleep(5000);
});

it('Provera 1 Minute ago Time Stamp-a', function(){
    timeStampCommentMinute.checkTimeStampMinute();
});

it('Dolazak na Detail stranu diskusije', function(){
    timeStampComment.landOnDiscussionDetailsPage();
    browser.sleep(5000);
});

it('klik na Tri tacke', function(){
    timeStampComment.clickOnThreeDots();
    browser.sleep(1000);
});

it('Klik na Delete dugme', function(){
    deleteComment.clickDelete();
});

it('Provera da li obrisana diskusija', function(){
    deleteComment.checkSnackbar();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});