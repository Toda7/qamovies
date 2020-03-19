function landOnHomePage() {
    // dolazak na dashboard
    browser.get('https://qa.cbancnetwork.com');
}

function landOnGroupPage() {
    // dolazak na stranu AFT grupe
    browser.get('https://qa.cbancnetwork.com/community/groups/view/1bfdce90-7151-11e6-abb8-7831c1baaeec');
}

function clickManageGroup() {
    //  Klik na Manage group
    element(by.className('btn-flat group_action')).click();
}

function clickOnGroupNameField() {
    // klik na group name polje
    element(by.className('input-field')).click();
}

function enterGroupName() {
    // unos imena grupe
    element(by.css('.input-field input[type=text]')).sendKeys('AFT EDIT');
}

function deleteGroupName() {
    // brisanje imena grupe
    element(by.css('.input-field input[type=text]')).clear()
}

function clickOnGroupDescriptionField() {
    // klik na group description polje
    element(by.id('description')).click();
}

function editDescriptionText() {
    // unos texta u gropu description polje
    element(by.id('description')).sendKeys('EDIT TEST');
}

function clickOnEditImage() {
    // klik na edit image
    element(by.className('btn btn-flat')).click();
}

function changeGroupPhoto() {
    // upload group avatara
    var path = require('path');
    var fileToUpload = './logo.jpg',
        absolutePath = path.resolve(__dirname, fileToUpload);
    element(by.css('input')).sendKeys(absolutePath);
}

function clickOnUpdateGroup() {
    // klik na group update 
    element(by.buttonText('Update group')).click();
}

function checkSnackbar() {
    // provera success poruke za editovanu grupu
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.snackbar.sb_message'), 'Group updated.'), 5000);
}

function clickOnCancel() {
    // klik na cancel
    element.all(by.className('btn btn-flat')).get(1).click();
}

function checkEditedDescription() {
    // Proverava editovani description
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('p.about'), "1st test The Association for Financial jTechnology (AFT) is the financial technology industry's premier resource for networking and professional development for those companies and executives serving U.S. financial institutions (FIs) including banks, credit ulnions, lenders and payment companies. Founded in 1972, the organization's members represent virtually every area of technology, data or services neede1d to help FIs succeed in today's dynamic marketplace!EDIT TEST"), 5000);
}

function checkEditedGroupName() {
    // Provera edtovano ime grupe
    var xxx = element(by.className('group_title'));
    expect(xxx.getText()).toEqual('AFT EDIT');
}

function clickOnMakeGroupSwitch() {
    // klik na swith za public/private 
    element(by.className('lever')).click();
}

function checkGroupToBePublic() {
    // Proverava da li je grupa public
    var xxx = element(by.className('group_visibility chip public'));
    expect(xxx.getText()).toEqual('Public Group');
}

function enterGroupNameOriginal() {
    // unos oginalnog imena grupe
    element(by.css('.input-field input[type=text]')).sendKeys('AFT Group');
}

function deleteDescriptionText() {
    // brisanje texta iz description polja
    element(by.id('description')).clear()
}

function enterOriginalDescriptionText() {
    // unos orginalnog texta u gropu description polje
    element(by.id('description')).sendKeys("1st test The Association for Financial jTechnology (AFT) is the financial technology industry's premier resource for networking and professional development for those companies and executives serving U.S. financial institutions (FIs) including banks, credit ulnions, lenders and payment companies. Founded in 1972, the organization's members represent virtually every area of technology, data or services neede1d to help FIs succeed in today's dynamic marketplace!");
}

function changeGroupPhoto2() {
    // upload group avatara
    var path = require('path');
    var fileToUpload = './AFTORG.png',
        absolutePath = path.resolve(__dirname, fileToUpload);
    element(by.css('input')).sendKeys(absolutePath);
}

function checkOriginalDescription() {
    // Proverava orginalnog descriptiona
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('p.about'), "1st test The Association for Financial jTechnology (AFT) is the financial technology industry's premier resource for networking and professional development for those companies and executives serving U.S. financial institutions (FIs) including banks, credit ulnions, lenders and payment companies. Founded in 1972, the organization's members represent virtually every area of technology, data or services neede1d to help FIs succeed in today's dynamic marketplace!"), 5000);
}

function checkGroupToBePrivate() {
    // Proverava da li je grupa private
    var xxx = element(by.className('group_visibility chip private'));
    expect(xxx.getText()).toEqual('Private Group');
}

function checkOriginalGroupName() {
    // Proverava orginalno ime grupe
    var xxx = element(by.className('group_title'));
    expect(xxx.getText()).toEqual('AFT Group');
}

module.exports = {
    landOnHomePage,
    clickManageGroup,
    landOnGroupPage,
    clickOnGroupNameField,
    enterGroupName,
    deleteGroupName,
    clickOnGroupDescriptionField,
    editDescriptionText,
    clickOnEditImage,
    changeGroupPhoto,
    clickOnUpdateGroup,
    clickOnCancel,
    checkEditedDescription,
    checkSnackbar,
    checkEditedGroupName,
    clickOnMakeGroupSwitch,
    checkGroupToBePublic,
    enterGroupNameOriginal,
    deleteDescriptionText,
    enterOriginalDescriptionText,
    changeGroupPhoto2,
    checkOriginalDescription,
    checkGroupToBePrivate,
    checkOriginalGroupName,
}