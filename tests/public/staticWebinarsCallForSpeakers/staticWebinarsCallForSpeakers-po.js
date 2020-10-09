function landOnWebinarsCallForSpeakersPage() {
    // Dolazak na Webinars Call For Speakers stranu
    browser.get('https://qa.cbancnetwork.com/webinars-call-for-speakers');
}

function openIntercom() {
    //  Otvori Intercom
    element(by.className('intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-open')).click();
 }

 function closeIntercom() {
    //  Zatvori Intercom
    element(by.className('intercom-launcher-frame intercom-cqrjjr e1ur5zlj0')).click();
 }

 function checkHeroText() {
    // Provera texta u Hero sekciji
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('hero_text_wrapper'));
    browser.wait(EC.textToBePresentInElement(c, "Help Us Shape the Future of Banking as a Thought Leader"), 5000);
}

function checkFirstCtaButtonText() {
    // Provera texta u pvom cta dugmetu
    var xxx = element(by.id('tracker_link_anchor'));
    expect(xxx.getText()).toEqual('GET STARTED');
}

function checkContainerText() {
    // Provera texta u centralnoj sekciji
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('container'));
    browser.wait(EC.textToBePresentInElement(c, "CBANC is the largest network for US bank and credit union professionals, empowering them to collaborate, share information and to lead the evolution of community banking. Our network supports 8,600+ FIs, representing approximately 87% of banks and 38% of credit unions. Our members span 19 different job functions and share and consume content across 400+ banking topics. Our education program is an integral part of our community where we provide thought leadership from experts in 150+ live webinars per year and an on-demand library of over 300 videos.We are seeking experienced professionals with industry knowledge to become speakers for our education program and help our vast community change and grow. You have the potential to reach thousands of financial professionals by becoming a thought leader and a trusted advisor in our community. The majority of our webinar attendees are decision makers VP level and above who have the ability to invest in solutions that can help their institution survive and thrive.Below is a list of topics we’re looking to cover based on feedback from our community. However, we’re always open to any additional topics in which you may have expertise.ATMsCompliance management program/monitoringUnderwriting PracticesCryptocurrency in 2020 and what it means for FIsSocial MediaAdditional Asset Liability trainingESIGN for deposits and loansADA Compliance for websites and ATMsPre-Paid Card ComplianceERM and BCPFair Lending and CRA ComplianceCDD and EDDClick the button below to get started, or if you have any questions contact Allen King at aking@cbancnetwork.com"), 5000);
}

function checkSecondCtaButtonText() {
    // Provera texta u drugom cta dugmetu
    var xxx = element(by.id('tracker_link_anchor2'));
    expect(xxx.getText()).toEqual('GET STARTED');
}

function checkGraphImage() {
    // Provera da li se ucitala graph fotka na dnu strane
    var xxx = element(by.className('image')).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/webinars-call-for-speakers/graph.jpg');
}

function clickFirstCtaButton() {
    //  Klik na prvo CTA dugme
    element(by.id('tracker_link_anchor')).click();
}

function enterEmail() {
    // Unesi 1@chicago.com email adresu
    element(by.name('email')).sendKeys('1@chicago.com');
}

function enterPassword() {
    // Unesi password
    element(by.name('password')).clear().sendKeys('test1234');
}

function submit() {
    // Klik na Log In dugme
    element(by.className('auth0-label-submit')).click();
}

function checkCallForWebinarsSpeakersFormUrl() {
    // Provera da li se ucitao URL za Call for Webinar Speakers formu
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/call_for_speakers'), 5000);
}

function clickSecondCtaButton() {
    //  Klik na drugo CTA dugme
    element(by.id('tracker_link_anchor2')).click();
}

function checkTitleSectionText() {
    // Provera texta u Title sekciji
    var EC = protractor.ExpectedConditions;
    var c = element(by.id('speaker_form'));
    browser.wait(EC.textToBePresentInElement(c, "Call for Webinar SpeakersPlease fill out the following form with any webinar topic you or an individual from your company could present. Webinars must be educational (unless otherwise agreed to be a sponsored sales pitch). Examples include hot topics in community banking, case studies, and best practices. Please only one topic per email."), 5000);
}

function enterFirstName() {
    //  Unesi First Name
    element(by.id('first_name')).sendKeys('Test');
 }

 function enterLastName() {
    //  Unesi Last Name
    element(by.id('last_name')).sendKeys('Speaker');
 }

 function enterTitle() {
    //  Unesi Title
    element(by.id('title')).sendKeys('CEO');
 }

 function enterWebinarSpeakerEmail() {
    //  Unesi Webinar Speaker Email
    element(by.id('email')).sendKeys('test@qa.com');
 }

 function enterPhone() {
    //  Unesi Telefon
    element(by.id('phone')).sendKeys('1111111111');
 }

 function enterMobile() {
    //  Unesi Mobilni Telefon
    element(by.id('mobile')).sendKeys('2222222222');
 }

 function enterAddressStreet() {
    //  Unesi Ulicu i Broj
    element(by.id('street')).sendKeys('1111 Test Street');
 }

 function enterCity() {
    //  Unesi Grad
    element(by.id('city')).sendKeys('Test City');
 }

 function enterState() {
    //  Unesi Drzavu
    element(by.id('state')).sendKeys('Texas');
 }

 function enterZip() {
    //  Unesi Zip kod
    element(by.id('zip')).sendKeys('12345');
 }

 function selectHeadsetOption() {
    //  Izaberi Headset opciju
    element(by.id('voip')).all(by.tagName('option')).get(1).click();
 }

 function enterPresentationTitle() {
    //  Unesi Title prezentacije
    element(by.id('topic')).sendKeys('Test Presentation Title');
 }

 function enterPresentationShortDescription() {
    //  Unesi Short Description prezentacije
    element(by.id('description')).sendKeys('Test Short Description');
 }

 function enterWebinarHighlight() {
    //  Unesi Webinar Highlight prezentacije
    element(by.id('objective1')).sendKeys('Test Webinar Highlight');
 }

 function enterJobTitle() {
    //  Unesi Job Title za attendees
    element(by.id('job_titles')).sendKeys('Test Job Title');
 }

 function selectPresentedElsewhere() {
    //  Izaberi Presented Elsewhere opciju
    element(by.id('presented_elsewhere')).all(by.tagName('option')).get(2).click();
 }

 function selectTimeSensitive() {
    //  Izaberi Area of Interest opciju
    element(by.id('time_sensitive')).all(by.tagName('option')).get(2).click();
 }

 function selectAreaOfInterest() {
    //  Izaberi Area of Interest opciju
    element(by.id('area_interest')).all(by.tagName('option')).get(2).click();
 }

 function clickSubmitButton() {
    //  Klik na Submit dugme
    element(by.className('button-submit')).click();
}

function checkCProductionSuccessUrl() {
    // Provera da li se ucitao URL za Success stranu u produkciji
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://www.cbancnetwork.com/call_for_speakers?success=true'), 5000);
}

function checkProductionSuccessMessage() {
    // Provera Success poruke u produkciji
    var EC = protractor.ExpectedConditions;
    var c = element(by.id('lead_success'));
    browser.wait(EC.textToBePresentInElement(c, "Thank you for submitting your proposal to speak. We should be in contact soon. If you have any additional topics you would like considered, please fill out another form."), 5000);
}

function landBetaSuccessPage() {
    // Dolazak na Beta Success stranu
    browser.get('https://qa.cbancnetwork.com/call_for_speakers?success=true');
}

function checkBetaSuccessMessage() {
    // Provera Success poruke na Beti
    var EC = protractor.ExpectedConditions;
    var c = element(by.id('lead_success'));
    browser.wait(EC.textToBePresentInElement(c, "Thank you for submitting your proposal to speak. We should be in contact soon. If you have any additional topics you would like considered, please fill out another form."), 5000);
}

function clickOnUserMenu() {
    //  Klik na User meni
    element(by.className('user_name')).click();
}

function clickOnSignOut() {
    //  Klik na Sign Out
    element(by.className('sign_out')).click();
}

module.exports = {
    landOnWebinarsCallForSpeakersPage,
    openIntercom,
    closeIntercom,
    checkHeroText,
    checkFirstCtaButtonText,
    checkContainerText,
    checkSecondCtaButtonText,
    checkGraphImage,
    clickFirstCtaButton,
    enterEmail,
    enterPassword,
    submit,
    checkCallForWebinarsSpeakersFormUrl,
    clickSecondCtaButton,
    checkTitleSectionText,
    enterFirstName,
    enterLastName,
    enterTitle,
    enterWebinarSpeakerEmail,
    enterPhone,
    enterMobile,
    enterAddressStreet,
    enterCity,
    enterState,
    enterZip,
    selectHeadsetOption,
    enterPresentationTitle,
    enterPresentationShortDescription,
    enterWebinarHighlight,
    enterJobTitle,
    selectPresentedElsewhere,
    selectTimeSensitive,
    selectAreaOfInterest,
    clickSubmitButton,
    checkCProductionSuccessUrl,
    checkProductionSuccessMessage,
    landBetaSuccessPage,
    checkBetaSuccessMessage,
    clickOnUserMenu,
    clickOnSignOut,
}