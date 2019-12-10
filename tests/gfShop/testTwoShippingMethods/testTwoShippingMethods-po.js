function landOnProductDetailsPage() {
   // Dolazak na Product Details page
   browser.get('https://shop.outfitterextreme.com/browning/side-by-side.html'); 
   browser.sleep(2000);
}

module.exports = {
   landOnProductDetailsPage,
}