function landOnFiOrgPage() {
    // Dolazak na Bank of Chicago stranu
    browser.get('https://qa.cbancnetwork.com/community/fis/view/83b7fdaf-7b6f-4934-bca4-a235a725c1af');
}

function checkEmployeesSectionTitle() {
    // Provera naslova Employees sekcije 
    var xxx = element.all(by.tagName('p')).get(1);
    expect(xxx.getText()).toEqual('Employees');
}

function count28employees() {
    // Provera da li se na strani nalazi 28 zaposlenih
    let list = element.all(by.className('collection-item avatar'));
    expect(list.count()).toBe(28);
}

function checkFirstEmployeeAvatar() {
    // Provera avatara za prvog zaposlenog u listi 
    var xxx = element.all(by.className('collection-item avatar')).get(0).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/membership/public/avatar/5d17017e-2dc4-433f-8e09-defbcdab7344');
}

function checkFirstEmployeeName() {
    // Provera imena za prvog zaposlenog u listi 
    var xxx = element.all(by.className('collection-item avatar')).get(0).all(by.tagName('a')).get(1);
    expect(xxx.getText()).toEqual('Atqa Admin');
}

function checkFirstEmployeeJobTilte() {
    // Proveri job title za prvog zaposlenog u listi 
    var xxx = element.all(by.className('collection-item avatar')).get(0).element(by.className('employee_description'));
    expect(xxx.getText()).toEqual('job');
}

function clickFirstEmployeeSendMessageButton() {
    // Klik na Send Message za prvog zaposlenog u listi
    element.all(by.className('collection-item avatar')).get(0).element(by.className('material-icons')).click();
}

function checkInboxUrl() {
    // Provera da li se ucitao URL za Inbox
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/dm/compose?person_key=5d17017e-2dc4-433f-8e09-defbcdab7344'), 7000);
 }

 function checkThirdEmployeeDefaultAvatar() {
    // Provera default avatara za treceg zaposlenog u listi 
    var xxx = element.all(by.className('collection-item avatar')).get(2).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/membership/public/avatar/ad6e9a3d-194b-4886-8b07-ee20723625cf');
}

module.exports = {
    landOnFiOrgPage,
    checkEmployeesSectionTitle,
    count28employees,
    checkFirstEmployeeAvatar,
    checkFirstEmployeeName,
    checkFirstEmployeeJobTilte,
    clickFirstEmployeeSendMessageButton,
    checkInboxUrl,
    checkThirdEmployeeDefaultAvatar,
}