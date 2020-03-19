function checkYourReputationSection() {
    // Provera Reputation section text
    var xxx = element(by.className('my_reputation'));
    expect(xxx.getText()).toEqual('Your Reputation\nstars\nReputation Score: 0\nshow_chart\nReputation Rank: In top of 0% of CBANC Members\npie_chart\nReputation Trend: Moved up 0 spots this week');
}

function checkWantToEarnMoreRepTitle() {
    // Provera Want to earn more rep Title
    var xxx = element.all(by.tagName('h3')).get(1);
    expect(xxx.getText()).toEqual('Want to Earn More Rep?');
}

function checkWantToEarnMoreRepText() {
    // Provera Want to earn more rep text
    var xxx = element.all(by.tagName('p')).get(1);
    expect(xxx.getText()).toEqual('Simply upload, answer, comment & interact with the community to gain reputation today!');
}

function checkReputationLeaderboardTitle() {
    // Provera Want to earn more rep Title
    var xxx = element(by.tagName('h1'));
    expect(xxx.getText()).toEqual('Reputation Leaderboard');
}

function checkReputationLeaderboardText1() {
    // Provera Want to earn more rep Title
    var xxx = element(by.tagName('h2'));
    expect(xxx.getText()).toEqual('Where do you rank?');
}

function checkReputationLeaderboardText2() {
    // Provera Want to earn more rep Title
    var xxx = element.all(by.tagName('p')).get(0);
    expect(xxx.getText()).toEqual('The Reputation Leaderboard lists CBANC Members in order of their Reputation Score. Where do you rank?');
}

module.exports = {
    checkWantToEarnMoreRepTitle,
    checkYourReputationSection,
    checkWantToEarnMoreRepText,
    checkReputationLeaderboardTitle,
    checkReputationLeaderboardText1,
    checkReputationLeaderboardText2,
}