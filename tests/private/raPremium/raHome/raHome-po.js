function landOnRaHome() {
    // dolazak na RA premium home page
    browser.get('https://qa.cbancnetwork.com/ra/home'); 
    browser.sleep(3000);
}
function checkRaHomeURL() {
    // Provera da li se ucitao home URL sa IDem od premium accounta
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/ra/b0fcf98f-a435-4c19-bae0-bb9b15bb94b4/catalog'), 7000);
    browser.sleep(2000);
}
function checkRaPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('CBANC Premium - Risk Assessment'), 7000);
}
function checkRaDropMenu(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao RA drop menu in headeru
    browser.wait(EC.presenceOf($('.app_selector.hide-on-small-only')), 7000);
}
function checkTitleInHeader(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao title in header
    browser.wait(EC.textToBePresentInElement($('.page-title'), 'Catalog'), 7000);
}    
function checkAvatarInHeader(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao avatar in headeru
    browser.wait(EC.presenceOf($('.avatar')), 7000);
}
function checkMenuOnLeftSide(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao menu sa leve strane
    browser.wait(EC.presenceOf($('.collection.page_menu')), 7000);
}
function checkTemplate(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao template na strani
    browser.wait(EC.presenceOf($('.card-content')), 7000);
}
function counterOfTemplates(){
    // provera da li su se pojavila 2 templates
    let list = element.all(by.css('.card.horizontal'));
    expect(list.count()).toBe(2); 
}  
function checkTitleOfTemplate(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao title of template
    browser.wait(EC.textToBePresentInElement($('.card-title'), 'START UP TEMPLATE'), 7000);
    browser.sleep(2000);
}   
function checkCreateButton(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao create button u template kartici
    browser.wait(EC.textToBePresentInElement($('.card-action'), 'CREATE NEW'), 7000);
}   


module.exports = {
    landOnRaHome,
    checkRaHomeURL,
    checkRaPageTitle,
    checkRaDropMenu,
    checkTitleInHeader,
    checkAvatarInHeader,
    checkMenuOnLeftSide,
    checkTemplate,
    counterOfTemplates,
    checkTitleOfTemplate,
    checkCreateButton,
}