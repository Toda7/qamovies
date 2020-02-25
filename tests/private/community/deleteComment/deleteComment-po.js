function landOnFIProfessionalsHome() {
    // dolazak na FI Professionals page
    browser.get('https://qa.cbancnetwork.com/community/groups/view/8182a044-d055-427f-ae7b-9dcf06e58e46');
    browser.sleep(2000);
}

function findDiscussion() {
    // Pronadji napravljenu diskusiju i klikni
    element(by.className('title', 'ATQA')).click();
    browser.sleep(1000);
}

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
    expect(foo.getText()).toEqual('Comment was thanked. Nice!');
    browser.sleep(500);
}

module.exports = {
    landOnFIProfessionalsHome,
    findDiscussion,
    clickAction,
    clickDelete,
    checkSuccess,
    checkSnackbar,
}