function LandOnHomePage() {
   // dolazak na FI Professionals page
   browser.get('https://www.outfitterextreme.com/'); 
   browser.sleep(2000);
}

function clickOnSignIn() {
   //  Klik na complete link from side menu
   element(by.partialLinkText('Sign in')).click();
   browser.sleep(2000);
}

 module.exports = {
   LandOnHomePage,
   clickOnSignIn,
 }