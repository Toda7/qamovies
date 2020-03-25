function clickOnFollowLink() {
    // Klik on Follow button
    element(by.className('follow btn btn-flat')).click();
}

function checkSnackbarMessageForFollow(){
    // Provera snackbar poruke za follow message
    var foo = element(by.css('.snackbar.sb_message'));
    expect(foo.getText()).toEqual('You are following Vendor Mandrill.');
} 

function checkUnfollowButton(){
    // Provera da li se ucitao UNFOLLOW button
    var xxx = element(by.className('unfollow btn btn-flat'));
    expect(xxx.getText()).toEqual('UNFOLLOW');
}

function clickOnUnfollowLink() {
    // Klik on Unfollow button
    element(by.className('unfollow btn btn-flat')).click();
}

function checkSnackbarMessageForUnfollow(){
    // Provera snackbar poruke za unfollow message
    var foo = element(by.css('.snackbar.sb_message'));
    expect(foo.getText()).toEqual('You are no longer following Vendor Mandrill.');
} 

function clickOnVendorName() {
    // Klik on vendor name da dobijemo details page
    element(by.className('card-title')).click();
}

function clickOnFollowLinkOnDetailsPAge() {
    // Klik on Follow button na details page
    element(by.className('follow btn')).click();
}

 module.exports = {
    clickOnFollowLink,
    checkSnackbarMessageForFollow,
    checkUnfollowButton,
    clickOnUnfollowLink,
    checkSnackbarMessageForUnfollow,
    clickOnVendorName,
    clickOnFollowLinkOnDetailsPAge
}