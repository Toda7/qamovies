function enterEmail() {
   // Unosenje admin's email
   element(by.id('gf-input-1')).sendKeys('vladimir.drobnjak@guidefiiter.com');
}

function enterPass() {
   // Unosenje admin passworda
   element(by.id('gf-input-2')).clear().sendKeys('promenime');
}

function checkPrice() {
   // Provera cene za prvi prozivod na strani
   var xxx = element.all(by.className('price')).get(0);
   expect(xxx.getText()).toEqual('$17.00');

}

function clickOnAdminGroupToSelectGOP() {
   // Klik na admin switch and select GOP 
element(by.css('.gf-group-switcher')).all(by.tagName('option')).get(2).click(); 
}

function checkPriceAfterUsedSwitch() {
   // Provera cene za prvi prozivod na strani nakon koriscenja GOP switcha
   var xxx = element.all(by.className('price')).get(0);
   expect(xxx.getText()).toEqual('$8.55');
}

 module.exports = {
   enterEmail,
   enterPass,
   checkPrice,
   clickOnAdminGroupToSelectGOP,
   checkPriceAfterUsedSwitch,
}