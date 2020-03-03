function checkDetailsPage(){
    // Provera Vendor name, Urla, follow and Contact buttona na details page
    var foo = element(by.className('card-content'));
     expect(foo.getText()).toEqual('Vendor Mandrillbeenhere\nhttps://www.mandrill.com\nFOLLOW\nCONTACT');
    // beenhere <- je checkmark na strani ali u kodu je to text zato sam ga stavio toEqual
    } 

    function checkAFTLogo() {
        // Provera da li je dobar GF logo na print order strani
        var xxx = element(by.tagName('aft_logo'));
        expect(xxx.getAttribute('src')).toEqual('/community/associations/view/07e78be8-09cf-4917-bf67-f3e3d7a2c3c4');
        browser.sleep(500);
    }


 module.exports = {
    checkDetailsPage,
    checkAFTLogo,
 }