function landOnAdvertise() {
    // dolazak na Advertise stranu 
    browser.get('https://qa.cbancnetwork.com/advertise'); 
    browser.sleep(2000);
}

function checkPageTitle() {
    // Provera Page Title-a
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('hero_content'));
    browser.wait(EC.textToBePresentInElement(c, "Your customers are waiting for you.Reach and engage the largest online network of verified FI professionals."), 5000);
}

function checkTextRowOne() {
    // Provera texta uz prvu sliku
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('row_one'));
    browser.wait(EC.textToBePresentInElement(c, "Position your brand front and center.Looking for ways to drive awareness of your brand? Need help generating leads for your business? From ads, to events, to social tools, CBANC has a variety of options to help your team achieve its sales and marketing goals."), 5000);
}

function checkPhotoRowOne() {
    // Provera slike u prvom redu
    var xxx = element (by.className('right')).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/advertise/advertise_1.png');
    browser.sleep(500);
}

function checkPhotoRowTwo() {
    // Provera slike u drugom redu
    var xxx = element (by.className('left')).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/advertise/advertise_2.png');
    browser.sleep(500);
}

function checkTextRowTwo() {
    // Provera texta uz drugu sliku
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('row_two'));
    browser.wait(EC.textToBePresentInElement(c, "Become a trusted advisor with FI professionals.Build your reputation with customers and prospects by acting as a resource within the CBANC community. Share valuable content, answer questions, and stay top-of-mind with banking and credit union professionals as they search for information."), 5000);
}

function checkTextRowThree() {
    // Provera texta uz trecu sliku
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('row_three'));
    browser.wait(EC.textToBePresentInElement(c, "Get valuable insights to move your marketing plan forward.Keep your finger on the pulse of industry trends and challenges that the community cares about most. Leverage your understanding of their pain points to better tailor your message and content."), 5000);
}

function checkPhotoRowThree() {
    // Provera slike u drugom redu
    var xxx = element (by.className('left')).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/advertise/advertise_3.png');
    browser.sleep(500);
}

function checkBlueInfoSection1() {
    // Provera Plavog Info Section-a 1
    var xxx = element(by.className('header_section'));
    expect(xxx.getText()).toEqual('Harness the collective power of CBANC.');
    browser.sleep(500);
}

function checkBlueInfoSection2() {
    // Provera Plavog Info Section-a 2
    var xxx = element(by.className('percentages'));
    expect(xxx.getText()).toEqual('87%');
    browser.sleep(500);
}

function checkBlueInfoSection3() {
    // Provera Plavog Info Section-a 3
    var xxx = element(by.className('percentages-text'));
    expect(xxx.getText()).toEqual('OF UNITED STATES\nBANKS ARE ON CBANC');
    browser.sleep(500);
}

function checkBlueInfoSection4() {
    // Provera Plavog Info Section-a 4
    var xxx = element.all(by.className('percentages')).get(1);
    expect(xxx.getText()).toEqual('38%');
    browser.sleep(500);
}

function checkBlueInfoSection5() {
    // Provera Plavog Info Section-a 5
    var xxx = element.all(by.className('percentages-text')).get(1);
    expect(xxx.getText()).toEqual('OF UNITED STATES CREDIT\nUNIONS ARE ON CBANC');
    browser.sleep(500);
}

function checkBlueInfoSection6() {
    // Provera Plavog Info Section-a 6
    var xxx = element.all(by.className('percentages')).get(2);
    expect(xxx.getText()).toEqual('8600+');
    browser.sleep(500);
}

function checkBlueInfoSection7() {
    // Provera Plavog Info Section-a 7
    var xxx = element.all(by.className('percentages-text')).get(2);
    expect(xxx.getText()).toEqual('TOTAL BANKS &\nCREDIT UNIONS HOSTED');
    browser.sleep(500);
}

function checkBlueInfoSection8() {
    // Provera Plavog Info Section-a 8
    var xxx = element.all(by.className('percentages')).get(3);
    expect(xxx.getText()).toEqual('$22T');
    browser.sleep(500);
}

function checkBlueInfoSection9() {
    // Provera Plavog Info Section-a 9
    var xxx = element.all(by.className('percentages-text')).get(3);
    expect(xxx.getText()).toEqual('TOTAL IN\nCOMBINED ASSETS');
    browser.sleep(500);
}

function checkSubTitleBrands() {
    // Provera podnaslova - Brendovi
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('logos_section'));
    browser.wait(EC.textToBePresentInElement(c, "Just a few of the brands finding success inside CBANC."), 5000);
}

function checkBrandLogos() {
    // Provera Brand logoa
    var xxx = element (by.className('logo_image')).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/advertise/logos.png');
    browser.sleep(500);
}

function checkQuoteSection() {
    // Provera texta - Angela Lucas
    var xxx = element(by.className('arrow_box'));
    expect(xxx.getText()).toEqual('"CBANC has provided a platform that offers us access to an amazing network - one where we can exchange ideas and materials - and to tackle the challenges that arise day-to-day.  Simply put: meaningful collaboration and valuable exposure."');
    browser.sleep(500);
}

function checkAngelaAvatar() {
    // Provera Avatara - Angela Lucas
    var xxx = element (by.className('image')).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/advertise/advertise_angela_avatar.png');
    browser.sleep(500);
}

function checkAngelaSignature() {
    // Provera Angela signature-a
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('signature'));
    browser.wait(EC.textToBePresentInElement(c, "Angela LucasManaging Partner, Sterling Compliance"), 5000);
}

function checkBottomText() {
    // Provera bottom texta 
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('bottom_cta'));
    browser.wait(EC.textToBePresentInElement(c, "Ready to make some marketing magic?Talk to one of our marketing success experts—we’ll find the solution that’s right for your brand."), 5000);
}

function clickOnButton() {
    // Klik na GET STARTED button
    element(by.className('button')).click();
    browser.sleep(500);
}

module.exports = {
    landOnAdvertise,
    checkPageTitle,
    checkTextRowOne,
    checkPhotoRowOne,
    checkPhotoRowTwo,
    checkTextRowTwo,
    checkTextRowThree,
    checkPhotoRowThree,
    checkBlueInfoSection1,
    checkBlueInfoSection2,
    checkBlueInfoSection3,
    checkBlueInfoSection4,
    checkBlueInfoSection5,
    checkBlueInfoSection6,
    checkBlueInfoSection7,
    checkBlueInfoSection8,
    checkBlueInfoSection9,
    checkSubTitleBrands,
    checkBrandLogos,
    checkQuoteSection,
    checkAngelaAvatar,
    checkAngelaSignature,
    checkBottomText,
    clickOnButton,

}