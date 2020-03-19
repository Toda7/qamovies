function landOnVendorUserPage() {
    // Dolazak na Vendor User page
    browser.get('https://qa.cbancnetwork.com/community/users/view/0f61aa13-6704-430b-a48b-1779fdf95810'); 
}

function clickOnFollowButton() {
    //  Klik na Follow dugme
    element.all(by.className('btn btn-flat')).get(1).click();
}

function clickOnUnfollowButton() {
    //  Klik na Unfollow dugme
    element.all(by.className('btn btn-flat')).get(1).click();
}

module.exports = {
    landOnVendorUserPage,
    clickOnFollowButton,
    clickOnUnfollowButton,
}