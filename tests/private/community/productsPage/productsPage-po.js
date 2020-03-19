function clickOnProductsLink() {
    // Klik on PRODUCTS link
    element(by.buttonText('Products')).click();
}

function checkFristProductOnPage() {
    //  Provera da li se ucitao prvi product
    var foo = element.all(by.className('card-content')).get(1);
     expect(foo.getText()).toEqual('New one\nTest.');
} 


function checkSecondProductOnPage() {
    //  Provera da li se ucitao prvi product
    var foo = element.all(by.className('card-content')).get(2);
     expect(foo.getText()).toEqual('Product Mandrill 2\ntest description 123 123 123 123 12 123');
} 

function checkThirdProductOnPage() {
    //  Provera da li se ucitao treci product
    var foo = element.all(by.className('card-content')).get(3);
     expect(foo.getText()).toEqual('Product Mandrill\ndesc mandrill');
} 


 module.exports = {
    clickOnProductsLink,
    checkFristProductOnPage,
    checkSecondProductOnPage,
    checkThirdProductOnPage,
}
 