function clickToUnselectSaveInAddressBookOption() {
   // Klik to unselect Save in address book option  
   element.all(by.className('label')).last().click();
   browser.sleep(3000);
}
function checkBoxContent() {
   // Provera da li se addresa sa kojom smo kupili nije sacuvala
   var xxx = element(by.className('items addresses')).all(by.css('li.item')).last();
   expect(xxx.getText()).toEqual('Bradly Seales\n2690 COUNTY ROAD 64\nPLANTERSVILLE, Alabama, 36758\nUnited States\nT: 334-467-0770\nEDIT ADDRESS DELETE ADDRESS');
}

 module.exports = {
   clickToUnselectSaveInAddressBookOption,
   checkBoxContent,
 }