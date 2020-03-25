function landOnVendorDirectoryPage() {
    // Dolazak na vendor directory page
    browser.get('https://qa.cbancnetwork.com/community/vendors'); 
    browser.sleep(2000);
}

function checkPageTitle() {
    // check Page title
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.titleIs('CBANC Network'), 7000);
}

function checkBreadcrumbs() {
    // Provera da li se ucitao breadcrumbs
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.nav_title'), 'Vendor Directory'), 7000);
}

function checkPlaceholderInSearch() {
    // Provera da li se placeholder in search field 
    var xxx = element(by.className('input-field search_field'));
    expect(xxx.getText()).toEqual('Search Vendors');
}

function checkFeaturedTitleOnPage(){
    // Provera da li se Featured title ucitao
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.vendor_directory .featured_vendors h3'), 'Featured'), 7000);
}

function checkFirstVendorInFeaturedSection() {
    // Provera prvog vendora u featured sekciji
    var xxx = element.all(by.className('card-title')).get(0);
    expect(xxx.getText()).toEqual('Verafin');
}

function checkSecondVendorInFeaturedSection() {
    // Provera drugog vendora u featured sekciji
    var xxx = element.all(by.className('card-title')).get(1);
    expect(xxx.getText()).toEqual('Continuity');
}

 function checkThirdVendorInFeaturedSection() {
    // Provera treceg vendora u featured sekciji
    var xxx = element.all(by.className('card-title')).get(2);
    expect(xxx.getText()).toEqual('Vendor Sentry Management');
}

function checkVendorAvatarImage() {
    // Provera da li je dobar verafin vendor avatar
    var xxx = element.all(by.tagName('img')).get(1);
    expect(xxx.getAttribute('src')).toEqual('https://s3.amazonaws.com/cbanc/Public/wp/2016/07/11193900/verafin.png');
}

 module.exports = {
    landOnVendorDirectoryPage,
    checkPageTitle,
    checkBreadcrumbs,
    checkPlaceholderInSearch,
    checkFeaturedTitleOnPage,
    checkFirstVendorInFeaturedSection,
    checkSecondVendorInFeaturedSection,
    checkThirdVendorInFeaturedSection,
    checkVendorAvatarImage,
}