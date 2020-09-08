function clickOnTracAllkShipments(){
    // Klik na TRACK ALL SHIPMENTS link 
   element(by.className('action track')).click();
 }

 function checkPageTitle(){
   // Provera da se ucitao page title 
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('Tracking Information'), 5000);
 }

 function clickOnCloseButton(){
   // Klik na Close Window button na Tracking Infomation strani
   element(by.buttonText('Close Window')).click();
 }

 function clickOnTrackThisShipment(){
   // Klik na TRACK THIS SHIPMENT link 
  element(by.className('action track')).click();
}


 module.exports = {
   clickOnTracAllkShipments,    
   checkPageTitle,
   clickOnCloseButton,
   clickOnTrackThisShipment,
 }
