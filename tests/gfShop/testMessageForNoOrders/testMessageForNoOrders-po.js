function landOnMdpAsSecondUser() {
   // Dolazak na MDP stranu -> za log in log out
   browser.get('https://www.outfitterextreme.com/manage/member/93867/'); 
   browser.sleep(2000);
}

function clickOnAvatarToOpenDropMenu() {
   // Klik on avatar to open user menu
   element(by.className('avatar-flex inline alone ellipsis')).click(); 
   browser.sleep(3000);
}

function clickOnSignOut() {
   // Klik on Sign out link
   element(by.className('text-muted')).click(); 
   browser.sleep(3000);
}

function clickOnContinueWithEmail() {
   //  Klik na Contine with email button
   element(by.buttonText('Continue with email')).click();
   browser.sleep(2000);
}

function enterUserEmail() {
   // Unosenje user's email
   element(by.id('gf-input-1')).sendKeys('trappercreekllc@gmail.com');
   // element(by.id('gf-input-1')).sendKeys('milos@idp.com');
}

function enterUserPass() {
   // Unosenje user passworda
   element(by.id('gf-input-2')).clear().sendKeys('test1234');
}

function submit1() {
   // Klik on Sign in button
      element(by.className('btn btn-lg wrap btn-block btn-primary')).click();
      browser.sleep(3000);
}

function landOnMyOrdersPage() {
   // Dolazak na My Orders stranu 
   browser.get('https://www.outfitterextreme.com/my-orders');
}

function checkNoOrdersMessage() {
   // Provera no orders message
   var xxx = element(by.className('card card-starter text-xs-center'));
   expect(xxx.getText()).toEqual(':(\nNo orders, yet.\nVisit grid and subscribe to brands to start shopping.\nGO TO GRID\nNeed help getting started? Contact us');
}

function clickOnGoToGridButton() {
   // Klik na Go To Grid button
   element(by.className('btn btn-link btn-lg wrap ')).click();
}

function checkGridURL() {
   // Provera da li se ucitao Grid URL
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/customer/address/new/'), 5000);
}

function clickOnContactUs() {
   // Klik na Contact Us link 
   element(by.className('owrap')).click();
}

function checkContactURL() {
   // Provera da li se ucitao Contact URL
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/contact'), 5000);
}



module.exports = {
   landOnMdpAsSecondUser,
   clickOnAvatarToOpenDropMenu,
   clickOnSignOut,
   clickOnContinueWithEmail,
   enterUserEmail,
   enterUserPass,
   submit1,
   landOnMyOrdersPage,
   checkNoOrdersMessage,
   clickOnGoToGridButton,
   checkGridURL,
   clickOnContactUs,
   checkContactURL,
}