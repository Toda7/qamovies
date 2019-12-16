function landOnMdpPage() {
   // dolazak na MDP page u adminu
   browser.get('https://www.outfitterextreme.com/manage/member/BradleySeales'); 
   browser.sleep(2000);
}

function clickOnSignIn() {
   //  Klik na Contine with email button
   element(by.buttonText('Continue with email')).click();
   browser.sleep(2000);
}

function enterEmail() {
   // Unosenje admin's email
   element(by.id('gf-input-1')).sendKeys('bradlyseales@gmail.com');
   // element(by.id('gf-input-1')).sendKeys('trappercreekllc@gmail.com');
}

function enterPass() {
   // Unosenje admin passworda
   element(by.id('gf-input-2')).clear().sendKeys('test1234');
}

function submit() {
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
 }