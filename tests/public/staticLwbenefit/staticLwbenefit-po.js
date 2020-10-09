function landOnLwbenefit() {
    // Dolazak na Lendwell benefit strana
    browser.get('https://qa.cbancnetwork.com/lwbenefit/origination'); 
}

function checkLwbenefitTitleOfPage(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('CBANC | The professional network for the banking industry.'), 7000);
}

function checkHeroTextOnPage() {
    // Provera glavnog texta na strani 
    var xxx = element(by.className('section_title'));
    expect(xxx.getText()).toEqual("What Role Do Your Originators Play? Increase Capture Rates!");
}

function checkVideo() {
    // Provera da li se ucitao video 
    var xxx = element.all(by.className('sproutvideo-player video_player')).get(0);
    expect(xxx.getAttribute('src')).toEqual('https://videos.sproutvideo.com/embed/ac9cdbb9161de7c425/1b0d9af0a2d89706');
    browser.sleep(500);
}

function checkWebinarText() {
    // Provera webinar texta ispod videa
    var xxx = element(by.className('webinar_content'));
    expect(xxx.getText()).toEqual("Procuring business is an expensive proposition for most companies and recruiting and hiring the right people is not easy. Acclimating new originators to your culture, systems, processes and policies and procedures becomes an on-going full-time task. Doing it “our way” and having the right technology to capture data becomes the path of least resistance in determining what information and tools loan originators need to succeed. So, just when and how does data get utilized? If you think “management reports” are just for managers, you may be missing a vital piece to your originator’s success and meeting production goals.\nIn this session you will:\nUnderstand what originators do and could do to meet their goals\nUnderstand how they think they need to meet goals\nGain insight into the real knowledge needed\nIdentify available resources\nLearn why management reports should not only be for managers\nDevelop a perspective on data sharing to increase conversion ratios");
}

function checkResources() {
    // Provera Resources sekcije
    var xxx = element(by.className('resources'));
    expect(xxx.getText()).toEqual("RESOURCES\nWhat Role Originators Play.pdf\nSAVE FILE");
}

function clickOnDownload(){ 
    // Klik na SAVE FILE button 
    element(by.className('download')).click();
}

function checkPDFFileURL() {
    // Provera PDF File URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://static.cbancnetwork.com/Public/wp/2020/02/13194815/what_role_originators_play_06182020.pdf'), 7000);
}

function checkSpeakers() {
    // Provera Speakers sekcije
    var xxx = element(by.className('speakers'));
    expect(xxx.getText()).toEqual("SPEAKER\nDebra Killian\nMortgage Trainer and Subject Matter Expert\nRead Bio");
}

module.exports = {
    landOnLwbenefit,
    checkLwbenefitTitleOfPage,
    checkHeroTextOnPage,
    checkVideo,
    checkWebinarText,
    checkResources,
    clickOnDownload,
    checkPDFFileURL,
    checkSpeakers,
}
