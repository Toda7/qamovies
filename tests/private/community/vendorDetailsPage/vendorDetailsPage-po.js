function checkDetailsPage(){
    // Provera Vendor name, Urla, follow and Contact buttona na details page
    var foo = element(by.className('card-content'));
     expect(foo.getText()).toEqual('Vendor Mandrillbeenhere\nhttps://www.mandrill.com\nFOLLOW\nCONTACT');
    // beenhere <- je checkmark na strani ali u kodu je to text zato sam ga stavio toEqual
    } 

function checkAFTLogo() {
        // Provera da li je dobar AFT logo na vendor details page 
        var xxx = element(by.className('aft_logo')).element(by.tagName('a'));
        expect(xxx.getAttribute('href')).toEqual('https://qa.cbancnetwork.com/community/associations/view/07e78be8-09cf-4917-bf67-f3e3d7a2c3c4');
}

function checkOverviewLink() {
    //  Provera da li se na strani nalazi OVERVIEW link 
    var foo = element.all(by.className('btn-flat')).get(0);
     expect(foo.getText()).toEqual('OVERVIEW');    
}

function checkProductsLink() {
    //  Provera da li se na strani nalazi PRODUCTS link 
    var foo = element.all(by.className('btn-flat')).get(1);
     expect(foo.getText()).toEqual('PRODUCTS');
    } 

function checkEmployeesLink() {
    //  Provera da li se na strani nalazi EMPLOYEES link 
    var foo = element.all(by.className('btn-flat')).get(2);
     expect(foo.getText()).toEqual('EMPLOYEES');    
}

function checkAboutTitle(){
    // Provera da li se na strani nalazi About link 
    var foo = element.all(by.className('card-content')).get(1);
    expect(foo.getText()).toEqual('About\nmore...\nFeatured\nMYBANNER\nMYSECONDBANNER\nMYTHIRDBANNER');  
}

function clickOnMore(){
    // Klik on More link 
    element(by.className('more_details')).click();
}

function checkMoreDetails(){
    // Proveravanje more sekcije
    var foo = element.all(by.className('card-content')).get(1);
    browser.wait(expect(foo.getText()).toEqual('About\nTesting mandrill123\nAddress\nNew York, TC 15434 US\nFFIEC Regulated\nYes\nOwnership\nNot Specified\nSpecialities\nlocal_offer Document Imaginglocal_offer Administration\nFeatured\nMYBANNER\nMYSECONDBANNER\nMYTHIRDBANNER'), 5000);  
}

function count15dics() {
    // Provera da li se na strani nalazi 15 diskusija
    let list = element.all(by.css('.card_href'));
    expect(list.count()).toBe(15);
}


 module.exports = {
    checkDetailsPage,
    checkAFTLogo,
    checkOverviewLink,
    checkProductsLink,
    checkEmployeesLink,
    checkAboutTitle,
    clickOnMore,
    checkMoreDetails,
    count15dics,
 }