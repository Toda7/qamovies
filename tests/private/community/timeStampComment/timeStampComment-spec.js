var timeStampComment = require('./timeStampComment-po.js');
var deleteComment = require('../deleteComment/deleteComment-po.js');

describe('Provera Time Stamp-a posle Comment-a', function(){

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
    browser.sleep(5000);
});

it('Provera Active now Time Stamp-a', function(){
    timeStampComment.checkTimeStamp();
});

it('Dolazak na Fi Professionals stranu', function(){
    timeStampComment.landOnFiProfessionals();
    browser.sleep(5000);
});

it('Provera Active now Time Stamp-a', function(){
    timeStampComment.checkTimeStamp();
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