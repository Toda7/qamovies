function landOnMdpPage() {
   // dolazak na MDP page u adminu
   browser.get('https://admin.outfitterextreme.com/members/28384'); 
   browser.sleep(2000);
}

function clickOnSignIn() {
   //  Klik na Contine with email button
   element(by.buttonText('Continue with email')).click();
   browser.sleep(2000);
}

function enterEmail() {
   // Unosenje admin's email
   element(by.id('gf-input-1')).sendKeys('vladimir.drobnjak@guidefiiter.com');
}

function enterPass() {
   // Unosenje admin passworda
   element(by.id('gf-input-2')).clear().sendKeys('promenime');
}

function submit() {
   // Klik on Sign in button
      element(by.className('btn btn-lg wrap btn-block btn-primary')).click();
      browser.sleep(3000);
}

function landOnAccountUsersPage() {
   // dolazak na User's account page on MDP 
   browser.get('https://www.outfitterextreme.com/manage/member/28384/settings'); 
   browser.sleep(2000);
}

function clickOnChoosePasswordButton() {
   // Klik on Choose Password button
      element(by.className('btn wrap btn-adminui')).click();
      browser.sleep(3000);
}

function enterNewPass() {
   //Unosenje nove sifre za usera
   element(by.id('gf-input-2')).sendKeys('test1234');
}

function enterNewPass2() {
   //Unosenje nove sifre za usera
   element(by.id('gf-input-3')).sendKeys('test1234');
}

function clickToSave() {
   // Klik on Change Password button
   // element(by.buttonText('CHANGE PASSWORD')).click();
   element(by.css('.modal-footer .btn-link+.btn-link')).click(); 
   browser.sleep(3000);
}

function RefreshPage() {
   // idemo opet direktno na link kako si se strana refreshovala
   browser.get('https://www.outfitterextreme.com/manage/member/28384/'); 
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

function landOnMdpAsUser() {
   // logovanje sa userom da bi potvrdili da li smo promenili sifru
   browser.get('https://www.outfitterextreme.com/manage/member/28384/'); 
   browser.sleep(2000);
}

function clickOnContinueWithEmail() {
   //  Klik na Contine with email button
   element(by.buttonText('Continue with email')).click();
   browser.sleep(2000);
}

function enterUserEmail() {
   // Unosenje user's email
   element(by.id('gf-input-1')).sendKeys('bradlyseales@gmail.com');
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

 module.exports = {
   landOnMdpPage,
   clickOnSignIn,
   enterEmail,
   enterPass,
   submit,
   landOnAccountUsersPage,
   clickOnChoosePasswordButton,
   enterNewPass,
   enterNewPass2,
   clickToSave,
   RefreshPage,
   clickOnAvatarToOpenDropMenu,
   clickOnSignOut,
   landOnMdpAsUser,
   clickOnContinueWithEmail,
   enterUserEmail,
   enterUserPass,
   submit1,
 }