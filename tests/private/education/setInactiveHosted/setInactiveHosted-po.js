function clickOnInActive() {
    //  Enter name of credit card field
    element(by.id('field_active')).element(by.css('input[value="false"]')).click();
    // element.all(by.css('input[value="false"]')).get(1).click();
    browser.sleep(2000);
}

function clickOnSaveWebinar() {
    //  Klik n Save webinar button
    element(by.buttonText('Save Webinar')).click();
    browser.sleep(2000);
}

module.exports = {
    clickOnInActive,
    clickOnSaveWebinar,
}