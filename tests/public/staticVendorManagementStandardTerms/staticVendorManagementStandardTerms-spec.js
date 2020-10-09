var staticVendorManagementStandardTerms = require('./staticVendorManagementStandardTerms-po.js')

describe('Vendor Management Standard Terms strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na Vendor Management Standard Terms stranu', function(){
        staticVendorManagementStandardTerms.landOnVendorManagementStandardTerms();
        browser.sleep(2000)
    });

    it('Provera da li se ucitao Vendor Management Standard Terms URL', function(){
        staticVendorManagementStandardTerms.checkVendorManagementStandardTermsURL();
        browser.sleep(1000)
    });

    it('Provera Overline Naslov texta', function(){
        staticVendorManagementStandardTerms.checkOverlineText();
        browser.sleep(1000)
    });

    it('Provera celog texta na strani Prvi deo', function(){
        staticVendorManagementStandardTerms.checkTextFirstPart();
        browser.sleep(1000)
    });

    it('Provera celog texta na strani Drugi deo', function(){
        staticVendorManagementStandardTerms.checkTextSecondPart();
        browser.sleep(1000)
    });

    it('Provera celog texta na strani Treci deo', function(){
        staticVendorManagementStandardTerms.checkTextThirdPart();
        browser.sleep(1000)
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});