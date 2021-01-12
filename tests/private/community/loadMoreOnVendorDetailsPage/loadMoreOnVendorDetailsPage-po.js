function count15discussions() {
    // Provera da li se na strani nalazi 15 diskusija
    let list = element.all(by.className('card_href'));
    expect(list.count()).toBe(15);
}

function count30discussions() {
    // Provera da li se na strani nalazi 30 diskusija
    let list = element.all(by.className('card_href'));
    expect(list.count()).toBe(30);
}

function landOnVendorDetailsPage() {
    // Dolazak na vendor details stranu
    browser.get('https://qa.cbancnetwork.com/community/vendors/view/d12dd16a-08e7-48e7-9df2-7f4f5e5976d9'); 
    browser.sleep(2000);
 }


 module.exports = {
    count15discussions,
    count30discussions,
    landOnVendorDetailsPage,
}