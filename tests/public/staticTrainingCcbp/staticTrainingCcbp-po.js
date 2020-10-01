function landOnTrainingCcbpPage() {
    // dolazak na Certified Cannabis Banking Professional stranu 
    browser.get('https://qa.cbancnetwork.com/training/ccbp'); 
}

function checkTrainingCcbpPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('CBANC | The professional network for the banking industry.'), 7000);
}

function checkTitleOnPage() {
    // Provera glavnog titla na strani 
    var xxx = element(by.className('content'));
    expect(xxx.getText()).toEqual('Certified Cannabis Banking Professional\nENROLL TODAY');
}

 function checkFirstTextOnPage() {
    // Provera prvog texta texta na strani 
    var xxx = element(by.className('row overview'));
    expect(xxx.getText()).toEqual("CBANC Network has partnered with Integrated Compliance Solutions to create the first cannabis banking certification program for financial service professionals. The CCPB Certification is designed to support the banking industry as regulations change and adjust to fit our modern world. The certification is a comprehensive system of learning modules (approximately 60 mins each) that examines all facets of working with any cannabis-related business (CRB).\nWhether you work for a regulated financial institution or an ancillary business that supports the industry, or own or operate a cannabis-related business (CRB), the CCBP Certification will provide you the knowledge and foundation necessary to implement, understand, and attain sound and stable cannabis-related banking. This certification will keep you and your customers compliant as new regulations are passed and created.");
 }

 function checkHeroImageLogo() {
    // Provera da li je dobra hero image
    var xxx = element(by.css('body #main_wrapper .hero'));
    expect(xxx.getCssValue('background')).toEqual('rgba(0, 0, 0, 0) url("https://qa.cbancnetwork.com/training/ccbp/37db7f190bd91d18754e52e77bc1d0d6.jpg") no-repeat scroll 50% 50% / cover padding-box border-box');
    browser.sleep(500)
}

function checkBenefitsTitleOnPage() {
    // Provera Benefits: titla na strani 
    var xxx = element(by.className('row details'));
    expect(xxx.getText()).toEqual("Benefits:\n12 learning modules (60 minutes each with quizzes)\nLearn at your own pace\nCourse access anytime via online, mobile, or tablet for 6 months\nTrack what you learned at the end of each module\nUpon completion receive a Certified Cannabis Banking Professional Certificate\nSupported by the largest online network of Verified Banking Professionals\nCreated by regulatory and compliance experts in the cannabis banking field\nProvides for holistic coverage of cannabis banking issues from understanding the biology and history of the plant to how it has impacted the banking industry\nEstablishes the standard for banking the industry in a safely, soundly and effectively\nWho Should Enroll:\nBSA and Compliance Officers\nC-level executives that want to understand the opportunities of working with CRBs\nNew bank directors\nIndividuals focused on serving the banking industry\nRequired Coursework:\nTo earn the CCBP, you must complete the following coursework and maintain continuing education requirements annually. The following 12 modules are included in the CCBP certification with quizzes and handouts for each.\nMarijuana 101\nHemp 101\nExplaining CBD\nBanking Direct MRBs\nUnderstanding Indirect MRBs\nCRB Legality: Past to Present\nDetermining Your Risk Appetite\nCreating Your Policy\nCRB Banking: Meeting with Your Regulators\nCRB Due Diligence and Administration\nLending to CRBs\nCustomer Due Diligence for Financial Institutions That Don’t Bank CRBs\nCourses shall be updated annually or more frequently as industry practices evolve and legislation changes.\nENROLL TODAY");
}

module.exports = {
    landOnTrainingCcbpPage,
    checkTrainingCcbpPageTitle,
    checkTitleOnPage,
    checkFirstTextOnPage,
    checkHeroImageLogo,
    checkBenefitsTitleOnPage,
}