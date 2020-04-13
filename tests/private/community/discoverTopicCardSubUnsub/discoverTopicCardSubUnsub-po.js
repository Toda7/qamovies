function clickOnSubscribe() {
    // Klik na Subscribe
    element(by.className('btn-flat topic_subscribe')).click();
}

function checkSub() {
    // Provera da li se Subscribovao
    var xxx = element(by.className('counters'));
    expect(xxx.getText()).toEqual('question_answer\n0\ndiscussions\nattachment\n0\ndocuments\nsupervisor_account\n1\nsubscribers');
}

function clickOnUnsubscribe() {
    // Klik na Unsubscribe
    element(by.className('btn-flat topic_unsubscribe')).click();
}

function checkUnsub() {
    // Provera da li se Unsubscribovao
    var xxx = element(by.className('counters'));
    expect(xxx.getText()).toEqual('question_answer\n0\ndiscussions\nattachment\n0\ndocuments\nsupervisor_account\n0\nsubscribers');
}



module.exports = {
    clickOnSubscribe,
    checkSub,
    clickOnUnsubscribe,
    checkUnsub,
}