function landOnCareers() {
    // Dolazak na Careers stranu
    browser.get('https://qa.cbancnetwork.com/careers');
}

function checkMainSectionText() {
    // Provera da li se ucitao text u glavnoj sekciji
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('content'));
    browser.wait(EC.textToBePresentInElement(c, "Careers with CBANCWe're the largest online network of verified bank and credit union professionals in the United States. Our community empowers members to collaborate, share information and lead the evolution of community banking. Fifty-five thousand strong, CBANC’s membership represents over 8,500 financial institutions with over $22 trillion in assets. CBANC is based in Austin, Texas.Every day, thousands of FI professionals use the CBANC community to find resources that help them implement best practices at their institution, make more intelligent vendor decisions, navigate challenges, and advance their careers. CBANC also helps our community by building and launching point technologies that help our membership in the areas of risk and compliance and credit and lending."), 5000);
}

function checkCultureSectionText() {
    // Provera da li se ucitao text u Culture sekciji
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('#culture'), "CultureWe work smart. We have fun. We care a lot.If you think you can contribute, we'd love to hear from you.Financially stable, successful company with a ten-year track record of growth and successOffices in the 38th and Lamar corridor with free parkingBest-in-class health, dental, vision, disability, and 401K benefitsFlexible paid time offFresh, healthy lunches provided three days a week"), 5000);
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
    landOnCareers,
    checkMainSectionText,
    checkCultureSectionText,
    openIntercom,
    closeIntercom,
}