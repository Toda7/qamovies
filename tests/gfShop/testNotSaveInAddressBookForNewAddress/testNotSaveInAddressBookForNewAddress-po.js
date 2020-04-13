function clickToUnselectSaveInAddressBookOption() {
   // Klik to unselect Save in address book option  
   element.all(by.className('label')).last().click();
   browser.sleep(3000);
}

function checkBoxContent() {
   // Provera da li je nasa nova addresa pojavila na Address Book strani
   var xxx = element(by.tagName(`tbody`)).all(by.tagName(`tr`)).get(1);
   expect(xxx.getText()).toEqual(`Bradly Seales 2690 COUNTY ROAD 64 PLANTERSVILLE United States Alabama 36758 334-467-0770 EDIT DELETE`);
}

 module.exports = {
   clickToUnselectSaveInAddressBookOption,
   checkBoxContent,
 }