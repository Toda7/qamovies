function landOnWebinarsAdminPage() {
    // Dolazak na admin stranu
    browser.get('https://qa.cbancnetwork.com/education/admin/webinars'); 
    browser.sleep(2000);
}

function enterTextInSearchField() {
    // Unosenje texta u search field
    element(by.name('search_term')).sendKeys('New hosted webinar');
}

function clickOnSearchOption() {
    // Klik on search option
    element(by.className('cta')).click();
    browser.sleep(2000);
 }

function clickOnEditButtonInActiveWebinar() {
    // Klik na Edit dugme u aktivnom vebinaru
    element(by.css('li[style=background-image: url("https://static.cbancnetwork.com/Public/education_assets/qa/Heromilos3.jpg")]')).all(by.tagName('a')).get(1).click(); 
    // element(by.css('li.admin_webinars_list_item ')).all(by.tagName('a')).get(1).click(); 
    
    // element(by.exactBinding('admin_webinars_list_item')).click();
    browser.sleep(2000);
 }

 function clickOnInactive() {
    //  click on Inactive
    element(by.id('field_active')).element(by.css('input[value="false"]')).click();
    browser.sleep(2000);
}

// function clickOnSaveWebinar() {
//     //  Klik n Save webinar button
//     element(by.buttonText('Save Webinar')).click();
//     browser.sleep(2000);
// }

module.exports = {
    landOnWebinarsAdminPage,
    enterTextInSearchField,
    clickOnSearchOption,
    // clickOnActiveClassToGetFocus,
    clickOnEditButtonInActiveWebinar,
    clickOnInactive,
    // clickOnSaveWebinar,
}