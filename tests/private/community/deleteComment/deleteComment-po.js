function clickAction() {
    // Klik na Action menu
    element.all(by.className('dropdown_menu')).get(2).click();
    browser.sleep(1000);
}

function clickDelete() {
    //  Klikni na Delete dugme
    element(by.cssContainingText('li.collection-item', 'Delete')).click();
    browser.sleep(1000);
}

function checkSnackbar() {
    // Provera Snek Bara
    var foo = element(by.className('snackbar sb_with_action'));
    expect(foo.getText()).toEqual('Comment deleted\nUNDO');
    browser.sleep(500);
}

module.exports = {
    clickAction,
    clickDelete,
    checkSnackbar,
}