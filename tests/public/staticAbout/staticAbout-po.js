function landOnAboutPage() {
    // Dolazak na About stranu
    browser.get('https://qa.cbancnetwork.com/about');
}

function checkAboutURL() {
    // Provera da li se ucitao About page URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/about'), 5000);
}

function checkHeroImageText() {
    // Provera da li se ucitao text u Hero Image sekciji
    var xxx = element(by.className('hero_content'));
    expect(xxx.getText()).toEqual('The professional network for bank and credit union professionals\nCollaboration. Exchange. Community.');
}

function checkHeroImageLogo() {
    // Provera da li se ucitao CBANC logo u Hero Image sekciji
    var xxx = element(by.className('hero_content')).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/about/cbanc-logo-blue.svg');
}

function checkMiddleSectionText() {
    // Provera da li se ucitao text u Middle Section sekciji
    var xxx = element(by.className('middle_section'));
    expect(xxx.getText()).toEqual('We are the professional network for bank and credit union professionals, empowering them to collaborate, share information and lead the evolution of community banking. Every day, thousands of verified financial professionals leverage a trusted community powered by CBANC to make more intelligent vendor decisions, navigate compliance challenges, answer questions and advance their careers.\nThe benefits of our apps are enhanced by the network effects inherent in the community, enabling our members and the vendors that serve them to work together to solve problems. The results are more efficient operations, the ability to better serve customers, and an improved competitive position for our members and the US banking system.');
}

function checkMapPhoto() {
    // Provera da li se ucitala fotka mape na dnu strane
    var xxx = element(by.className('map_image')).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/about/map.jpg');
}

function openIntercom() {
    //  Otvori Intercom
    element(by.className('intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-open')).click();
 }

 function closeIntercom() {
    //  Zatvori Intercom
    element(by.className('intercom-launcher-frame intercom-cqrjjr e1ur5zlj0')).click();
 }

module.exports = {
    landOnAboutPage,
    checkAboutURL,
    checkHeroImageText,
    checkHeroImageLogo,
    checkMiddleSectionText,
    checkMapPhoto,
    openIntercom,
    closeIntercom,
}