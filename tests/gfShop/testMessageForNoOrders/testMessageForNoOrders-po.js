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
   browser.get('https://shop.outfitterextreme.com/badlands/sales/order/history/');
   browser.sleep(5000);
}

function checkNoOrdersMessage() {
   // Provera no orders message
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('.message.info.empty'),'You have placed no orders.'), 7000);
   browser.sleep(2000);
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
}