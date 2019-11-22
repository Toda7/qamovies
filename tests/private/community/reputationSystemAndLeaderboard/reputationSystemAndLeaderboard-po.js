function landOnHome() {
    // dolazak na Home stranu
    browser.get('https://qa.cbancnetwork.com/community/home'); 
    browser.sleep(2000);
 }

function clickReputationTimeline() {
    // Klik na Reoutation Timeline link
    element(by.className('collection menu_items')).all(by.tagName('a')).get(4).click(); 
    browser.sleep(2000);
 }

 function clickLeaderboardLink() {
    // Klik na LeaderboardLink link
    element(by.partialLinkText('Leaderboard')).click(); 
    browser.sleep(2000);
 }

function checkSuccess(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se nalazimo na Reputation Leaderboard strani
    browser.wait(EC.textToBePresentInElement($('.h1'), 'Reputation Leaderboard'), 5000);
    browser.sleep(2000);
 } 
  
 module.exports = { 
    landOnHome,
    clickReputationTimeline,
    clickLeaderboardLink, 
    checkSuccess,
}