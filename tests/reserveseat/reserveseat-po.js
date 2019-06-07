function HoverToOpenDrop() {
    // Hover to open drop menu
    browser.actions().mouseMove(element(by.css('.menu_item.link_education.has_submenu'))).perform();
    expect(element(by.css('.menu_item.link_education.has_submenu')).isDisplayed()).toBeTruthy();
    browser.sleep(2000);
  
 }

 function clickOnLink() {
    //  Klik na upcoming link iz drop menu
    element(by.className('submenu_item link_events')).click();
 }

 function clickOnWebinarCard(){
    element(by.className('webinar_card')).click();
}

function clickOnReserveButton() {
   //  Klik na Reserve Button 
   element(by.className('reserve')).click();
}

function addFirstName() {
    element(by.name('first_name')).sendKeys('Vlada');
}

function addLastName() {
    element(by.name('last_name')).sendKeys('Drobnyak');
}

function addEmail() {
    element(by.name('email')).sendKeys('vdrobnjak@cbancnetwork.com');
}

function clickOnAddAttendee() {
    //  Klik na Add Attendee Button 
    element(by.buttonText('Add Attendee')).click();
}

 function addReceiptEmail() {
    element(by.name('receipt_email')).sendKeys('vdrobnjak@cbancnetwork.com');
}

function clickOnReserveMySpot() {
    //  Klik na Reserve My Spot Button 
    element(by.buttonText('Reserve My Spot')).click();
}

function clickOnInvoice(){
    element(by.css('.selected_false')).click();
}

function addInvoiceEmail() {
    element(by.xpath('//*[@id="main"]/div/div/div[2]/aside/div/div/form/div/input')).sendKeys('vdrobnjak@cbancnetwork.com');
}

function clickOnAgreeButton() {
    //  Klik na Agree and Pay Button 
    element(by.xpath('//*[@id="main"]/div/div/div[2]/aside/div/div/form/button')).click();
}



module.exports = {
    HoverToOpenDrop,
    clickOnLink,
    clickOnWebinarCard,
    clickOnReserveButton,
    addFirstName,
    addLastName,
    addEmail,
    clickOnAddAttendee,
    addReceiptEmail,
    clickOnReserveMySpot,
    clickOnInvoice,
    addInvoiceEmail,
    clickOnAgreeButton,
    

    
 }