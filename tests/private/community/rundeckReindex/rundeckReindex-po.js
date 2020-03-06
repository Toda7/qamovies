function landOnRundeckLogInPage() {
    // Dolazak na Rundeck Log In stranu 
    browser.get('https://rundeck2.cbancnetwork.com/user/login'); 
    browser.sleep(1000);
}

function enterUsername() {
   // Unosenje Usernamea
   element(by.id('login')).sendKeys('toda');
}

function enterPassword() {
   // Unosenje Passworda
   element(by.id('password')).sendKeys('acZ7rmuVYm');
}

function clickLogInButton() {
   // Klik na Log In dugme
   element(by.buttonText('Log In')).click(); 
   browser.sleep(1000);
}

function landOnEsReindexPage() {
   // Dolazak na Rundeck ES Reindex stranu 
   browser.get('https://rundeck2.cbancnetwork.com/project/BuildAndQADeploy/job/show/140922f3-76f5-4c42-87b1-fabd5261df49'); 
   browser.sleep(2000);
}

function clickThreadsFromDropMenu() {
   // Klik na Threads iz Drop Menija
   element(by.className('optionvalues form-control')).all(by.tagName('option')).get(3).click(); 
   browser.sleep(1000);
}

function clickRunJobNowButton() {
   // Klik na Run Job Now dugme
   element(by.buttonText('Run Job Now')).click(); 
   browser.sleep(3000);
}

 module.exports = {
   landOnRundeckLogInPage,
   enterUsername,
   enterPassword,
   clickLogInButton,
   landOnEsReindexPage,
   clickThreadsFromDropMenu,
   clickRunJobNowButton,
 }