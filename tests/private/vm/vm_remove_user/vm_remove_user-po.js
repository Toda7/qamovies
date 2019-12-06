function clickOnRemoveLink() {
    // element(by.xpath('//*[@id="main_wrapper"]/div/div/div[2]/div/div[2]/div[3]/div/div[2]/a[3]')).click(); 
    element.all(by.css('.card.horizontal')).get(2).all(by.tagName('a')).get(2).click(); 
    browser.sleep(2000);
  }

  module.exports = {
      clickOnRemoveLink,
  }