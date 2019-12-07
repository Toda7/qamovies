function clickOnRemoveLink() {
    element.all(by.css('.card.horizontal')).get(2).all(by.tagName('a')).get(2).click(); 
    browser.sleep(2000);
  }

  module.exports = {
      clickOnRemoveLink,
  }