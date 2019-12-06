var addDoc = require('./addDoc-po.js');

describe('Dodavanje Doc-a', function(){

it('Klik na Add Button', function(){
    addDoc.clickOnAddButton();
});

it('Klik na Create Doc', function(){
    addDoc.clickOnCreateDoc();
});

it('Klik na Create Article', function(){
    addDoc.clickOnCreateCBArticle();
});

it('Insert Doc Title', function(){
    addDoc.insertDocTitle();
});

it('Klik na Create Article Dugme', function(){
    addDoc.clickOnCreateCBArticleBtn();
});

it('Klik na Check Mark', function(){
    addDoc.clickOnCheckMark();
});

it('Provera da li je Activity tab tu', function(){
    addDoc.checkActivityTab();
});

it('Provera da li je Task tab tu', function(){
    addDoc.checkTaskTab();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});