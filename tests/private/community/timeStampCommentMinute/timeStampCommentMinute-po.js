function checkTimeStampMinute(){
    var EC = protractor.ExpectedConditions;
    // Provera 1 minute ago Time Stamp-a
    browser.wait(EC.textToBePresentInElement($('.community .card.item_card .item_sig .date_time.non_mobile'), 'Active: 1 minutes ago'), 7000);
}

module.exports = {
    checkTimeStampMinute,
}