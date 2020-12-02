function landOnMdpAsUser() {
   // logovanje sa userom da bi potvrdili da li smo promenili sifru
   browser.get('https://www.outfitterextreme.com/manage/member/28384/'); 
}

function clickOnContinueWithEmail() {
   //  Klik na Contine with email button
   element(by.buttonText('Continue with email')).click();
}

function enterEmail() {
   // Unosenje user's email
   element(by.id('gf-input-1')).sendKeys('vladimir.drobnjak@guidefitter.com');
   // element(by.id('gf-input-1')).sendKeys('milos@idp.com');
}

function enterPass() {
   // Unosenje user passworda
   element(by.id('gf-input-2')).clear().sendKeys('promenime');
}

function submit() {
   // Klik on Sign in button
      element(by.className('btn btn-lg wrap btn-block btn-primary')).click();
}

function landOnSettingsPageInCockpit() {
    // Dolazak u Cockpit na Settings za GOP usere 
    browser.get('https://www.outfitterextreme.com/manage/brand/truglo/guides-and-outfitters/settings'); 
 }

 function enterOurReturnPolicy() {
   // Unosenje nas text u return policy polje u cockpitu
   element.all(by.className('form-control hasvalue')).get(3).clear().sendKeys('Testing from PROT. We are TRUGLO!');
}

 module.exports = {
    landOnMdpAsUser,
    clickOnContinueWithEmail,
    enterEmail,
    enterPass,
    submit,
    landOnSettingsPageInCockpit,
    enterOurReturnPolicy,
 }
