var staticRiskAssessment = require('./staticRiskAssessment-po.js')

describe('Risk Assessment strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na Risk Assessment stranu', function(){
        staticRiskAssessment.landOnRiskAssessment();
        browser.sleep(1000)
    });

    it('Provera da li se ucitao text u Hero sekciji', function(){
        staticRiskAssessment.checkHeroText();
        browser.sleep(500)
    });

    it('Klik na Try It For Free dugme', function(){
        staticRiskAssessment.clickTryItForFreeButton();
        browser.sleep(500)
    });

    it('Provera da li se ucitao URL za Risk Assessment Toolbox stranu', function(){
        staticRiskAssessment.checkRiskAssessmentToolboxURL();
        browser.sleep(1000)
    });

    it('Provera da li se ucitao text za Risk Assessment Toolbox stranu', function(){
        staticRiskAssessment.checkRiskAssessmentToolboxText();
        browser.sleep(500)
    });

    it('Klik na Sign In dugme', function(){
        staticRiskAssessment.clickSignInButton();
        browser.sleep(500)
    });

    it('Provera da li se ucitao widget title', function(){
        staticRiskAssessment.checkWidgetTitle();
        browser.sleep(1500)
    });

    it('Dolazak na Risk Assessment stranu', function(){
        staticRiskAssessment.landOnRiskAssessment();
        browser.sleep(1000)
    });

    it('Provera da li se ucitao prvi screenshot', function(){
        staticRiskAssessment.checkFirstScreenshot();
        browser.sleep(500)
    });

    it('Provera da li se ucitao text u prvoj Description sekciji', function(){
        staticRiskAssessment.checkFirstDescriptionText();
        browser.sleep(500)
    });

    it('Klik na SEE FOR YOURSELF dugme', function(){
        staticRiskAssessment.clickSeeForYourselfButton();
        browser.sleep(500)
    });

    it('Provera da li se ucitao URL za Risk Assessment Toolbox stranu', function(){
        staticRiskAssessment.checkRiskAssessmentToolboxURL();
        browser.sleep(1000)
    });

    it('Provera da li se ucitao text za Risk Assessment Toolbox stranu', function(){
        staticRiskAssessment.checkRiskAssessmentToolboxText();
        browser.sleep(500)
    });

    it('Dolazak na Risk Assessment stranu', function(){
        staticRiskAssessment.landOnRiskAssessment();
        browser.sleep(1000)
    });

    it('Provera da li se ucitao drugi screenshot', function(){
        staticRiskAssessment.checkSecondScreenshot();
        browser.sleep(500)
    });

    it('Provera da li se ucitao text u drugoj Description sekciji', function(){
        staticRiskAssessment.checkSecondDescriptionText();
        browser.sleep(500)
    });

    it('Klik na GET STARTED dugme', function(){
        staticRiskAssessment.clickGetStartedButton();
        browser.sleep(500)
    });

    it('Provera da li se ucitao URL za Risk Assessment Toolbox stranu', function(){
        staticRiskAssessment.checkRiskAssessmentToolboxURL();
        browser.sleep(1000)
    });

    it('Provera da li se ucitao text za Risk Assessment Toolbox stranu', function(){
        staticRiskAssessment.checkRiskAssessmentToolboxText();
        browser.sleep(500)
    });

    it('Dolazak na Risk Assessment stranu', function(){
        staticRiskAssessment.landOnRiskAssessment();
        browser.sleep(1000)
    });

    it('Provera da li se ucitao treci screenshot', function(){
        staticRiskAssessment.checkThirdScreenshot();
        browser.sleep(500)
    });

    it('Provera da li se ucitao text u trecoj Description sekciji', function(){
        staticRiskAssessment.checkThirdDescriptionText();
        browser.sleep(500)
    });

    it('Klik na CHECK IT OUT dugme', function(){
        staticRiskAssessment.clickCheckItNowButton();
        browser.sleep(500)
    });

    it('Provera da li se ucitao URL za Risk Assessment Toolbox stranu', function(){
        staticRiskAssessment.checkRiskAssessmentToolboxURL();
        browser.sleep(1000)
    });

    it('Provera da li se ucitao text za Risk Assessment Toolbox stranu', function(){
        staticRiskAssessment.checkRiskAssessmentToolboxText();
        browser.sleep(500)
    });

    it('Dolazak na Risk Assessment stranu', function(){
        staticRiskAssessment.landOnRiskAssessment();
        browser.sleep(1000)
    });

    it('Provera da li se ucitao cetvrti screenshot', function(){
        staticRiskAssessment.checkFourthScreenshot();
        browser.sleep(500)
    });

    it('Provera da li se ucitao text u cetvrtoj Description sekciji', function(){
        staticRiskAssessment.checkFourthDescriptionText();
        browser.sleep(500)
    });

    it('Klik na DEMO ASSESSMENT ENGINE dugme', function(){
        staticRiskAssessment.clickDemoAssessmentEngineButton();
        browser.sleep(500)
    });

    it('Provera da li se ucitao URL za Risk Assessment Toolbox stranu', function(){
        staticRiskAssessment.checkRiskAssessmentToolboxURL();
        browser.sleep(1000)
    });

    it('Provera da li se ucitao text za Risk Assessment Toolbox stranu', function(){
        staticRiskAssessment.checkRiskAssessmentToolboxText();
        browser.sleep(500)
    });

    it('Dolazak na Risk Assessment stranu', function(){
        staticRiskAssessment.landOnRiskAssessment();
        browser.sleep(1000)
    });

    it('Provera da li se ucitao peti screenshot', function(){
        staticRiskAssessment.checkFifthScreenshot();
        browser.sleep(500)
    });

    it('Provera da li se ucitao text u petoj Description sekciji', function(){
        staticRiskAssessment.checkFifthDescriptionText();
        browser.sleep(500)
    });

    it('Klik na TRY A RISK ASSESSMENT dugme', function(){
        staticRiskAssessment.clickTryRiskaAssessmentButton();
        browser.sleep(500)
    });

    it('Provera da li se ucitao URL za Risk Assessment Toolbox stranu', function(){
        staticRiskAssessment.checkRiskAssessmentToolboxURL();
        browser.sleep(1000)
    });

    it('Provera da li se ucitao text za Risk Assessment Toolbox stranu', function(){
        staticRiskAssessment.checkRiskAssessmentToolboxText();
        browser.sleep(500)
    });

    it('Dolazak na Risk Assessment stranu', function(){
        staticRiskAssessment.landOnRiskAssessment();
        browser.sleep(1000)
    });

    it('Provera da li se ucitao text u futeru', function(){
        staticRiskAssessment.checkFooterText();
        browser.sleep(500)
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});