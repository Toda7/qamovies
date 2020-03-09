function checkBannerImage() {
    // Provera da li je dobra prva slika u banneru
    var xxx = element.all(by.tagName('img')).get(2);
    expect(xxx.getAttribute('src')).toEqual('https://static.cbancnetwork.com/Public/edge-image_repo/23564991-9c7f-424b-8125-02f30e824299.jpg');
}

function checkSecondBannerImage() {
    // Provera da li je dobra druga slika u banneru
    var xxx = element.all(by.tagName('img')).get(3);
    expect(xxx.getAttribute('src')).toEqual('https://static.cbancnetwork.com/Public/edge-image_repo/d9b2f92f-151b-4d4d-bff1-bcc01cc02259.jpg');
}

function checkThirdBannerImage() {
    // Provera da li je dobra treca slika u banneru
    var xxx = element.all(by.tagName('img')).get(4);
    expect(xxx.getAttribute('src')).toEqual('https://static.cbancnetwork.com/Public/edge-image_repo/eb2b1519-597b-4d5e-a718-5b99767df3fb.jpg');
}

function clickOnFirstBanner(){
    // Klik na prvi banner
    element(by.partialLinkText('MYBANNER')).click();
}

function checkFirstBannerURL() {
    // Provera da li se ucitao prvi banner URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://www.amazon.com/'), 5000);
 }

function clickOnSecondBanner(){
    // Klik na drugi banner
    element(by.partialLinkText('MYSECONDBANNER')).click();
}

function checkSecondBannerURL() {
    // Provera da li se ucitao drugi banner URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://www.figma.com/'), 5000);
 }

 function clickOnThirdBanner(){
    // Klik na treci banner
    element(by.partialLinkText('MYTHIRDBANNER')).click();
}

function checkThirdBannerURL() {
    // Provera da li se ucitao treci banner URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://twitter.com/'), 5000);
 }

module.exports = {
    checkBannerImage,
    checkSecondBannerImage,
    checkThirdBannerImage,
    clickOnFirstBanner,
    checkFirstBannerURL,
    clickOnSecondBanner,
    checkSecondBannerURL,
    clickOnThirdBanner,
    checkThirdBannerURL,
}