function landOnFIProfessionalsHome() {
    // dolazak na FI Professionals page
    browser.get('https://qa.cbancnetwork.com/community/groups/view/8182a044-d055-427f-ae7b-9dcf06e58e46');
    browser.sleep(2000);
}

function clickReputationTimeline() {
    // Klik na Reputation Timeline link
    element(by.className('collection menu_items')).all(by.tagName('a')).get(4).click();
    browser.sleep(2000);
}

function repScoreTextTitle() {
    // Proverava da li se usitao Reputation Score title
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page.three_columns'), 'Reputation Score'), 7000);
}

function repScoreText1() {
    // Proverava da li se usitao Reputation Score text 1
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page.three_columns'), 'Your reputation score is a measurement of how much the CBANC community trusts you and views you as a thought leader.'), 1000);
}

function repScoreText2() {
    // Proverava da li se usitao Reputation Score text 2
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page.three_columns'), 'Reputation is earned by helping your peers. The primary way to gain reputation is by posting great documents and useful answers that are thanked by your peers. Every time you are thanked for your contribution you gain reputation.'), 1000);
}

function repScoreText3() {
    // Proverava da li se usitao Reputation Score text 3
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page.three_columns'), 'All CBANC members start with one Thanks!, just for joining.'), 1000);
}

function whereDoYouRankTitle() {
    // Proverava da li se usitao Where do you rank title
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page.three_columns'), 'Where do you rank?'), 1000);
}

function whereDoYouRankLink() {
    // Proverava da li se Where do you rank text
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page.three_columns'), 'Visit the Leaderboard to see where you rank compared to other Members'), 1000);
}

function clickVisitTheLeaderboradLink() {
    // click na Leaderboard link
    element(by.partialLinkText('Visit the Leaderboard to see where you rank compared to other Members')).click();
}

function checkReputationLeaderboardURL() {
    // Provera da li se Leaderboard URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/reputation/leaderboard'), 1000);
}

module.exports = {
    landOnFIProfessionalsHome,
    clickReputationTimeline,
    repScoreTextTitle,
    repScoreText1,
    repScoreText2,
    repScoreText3,
    whereDoYouRankTitle,
    whereDoYouRankLink,
    clickVisitTheLeaderboradLink,
    checkReputationLeaderboardURL,

}