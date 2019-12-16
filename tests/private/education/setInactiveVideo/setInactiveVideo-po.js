// function landOnWebinarsAdminPage() {
//     // Dolazak na admin stranu
//     browser.get('https://qa.cbancnetwork.com/education/admin/videos'); 
//     browser.sleep(2000);
// }

// function enterTextInSearchField() {
//     // Unosenje texta u search field
//     element(by.name('search_term')).sendKeys('New video');
// }

// function clickOnSearchOption() {
//     // Klik on search option
//     element(by.css('.search_form')).element(by.tagName('button')).click(); 
//     // element(by.className('search_term')).click();
//     browser.sleep(2000);
//  }

//  function clickOnEditButtonInActiveWebinar() {
//     // Klik na Edit dugme u aktivnom vebinaru
//     element.all(by.css('.admin_videos_list_item')).last().all(by.tagName('a')).get(1).click(); 
//     // element(by.exactBinding('admin_webinars_list_item')).click();
//     browser.sleep(2000);
//  }

 function clickOnInActive() {
    //  Enter name of credit card field
    element(by.id('field_active')).element(by.css('input[value="false"]')).click();
    // element.all(by.css('input[value="false"]')).get(1).click();
    browser.sleep(2000);
}

function clickOnSaveWebinar() {
    //  Klik n Save webinar button
    element(by.buttonText('Save Video')).click();
    browser.sleep(2000);
}

module.exports = {
    // landOnWebinarsAdminPage,
    // enterTextInSearchField,
    // clickOnSearchOption,
    // clickOnEditButtonInActiveWebinar,
    clickOnInActive,
    clickOnSaveWebinar,
}