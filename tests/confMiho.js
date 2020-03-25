let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
let failFast = require('protractor-fail-fast');

exports.config = {
  plugins: [failFast.init()],
  afterLaunch: function () {
    failFast.clean(); // Removes the fail file once all test runners have completed.
  },
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {

    // opt: [
    //   './todo-spec.js',     (poziva 'todo' fajl koji ne sluzi nicemu. to je samo primer)
    // ],

    login: [
      './private/account/login/login-spec.js'
    ],
    
    // inviteColleaguesAddEmail test ide ispod testa inviteColleagues

    inviteColleaguesAddEmail: [
      './private/community/inviteColleaguesAddEmail/inviteColleaguesAddEmail-spec.js'
    ],

    reputationTimelinePage: [
      './private/community/reputationTimelinePage/reputationTimelinePage-spec.js'
    ],

    reputationTimelineLoadMore: [
      './private/community/reputationTimelineLoadMore/reputationTimelineLoadMore-spec.js'
    ],

    reputationTimelineThankLogs: [
      './private/community/reputationTimelineThankLogs/reputationTimelineThankLogs-spec.js'
    ],

    reputationTimelineJoinLogNewUser: [
      './private/community/reputationTimelineJoinLogNewUsSer/reputationTimelineJoinLogNewUser-spec.js'
    ],

    reputationLeaderboardPage: [
      './private/community/reputationLeaderboardPage/reputationLeaderboardPage-spec.js'
    ],

    reputationLeaderboardLoadMore: [
      './private/community/reputationLeaderboardLoadMore/reputationLeaderboardLoadMore-spec.js'
    ],

    reputationLeaderboardNewUser: [
      './private/community/reputationLeaderboardNewUser/reputationLeaderboardNewUser-spec.js'
    ],

    groupEdit: [
      './private/community/groupEdit/groupEdit-spec.js'
    ],

    groupEditImageRemove: [
      './private/community/groupEditImageRemove/groupEditImageRemove-spec.js'
    ],

    groupEditCancel: [
      './private/community/groupEditCancel/groupEditCancel-spec.js'
    ],

    groupEditMembersTabLoadMore: [
      './private/community/groupEditMembersTabLoadMore/groupEditMembersTabLoadMore-spec.js'
    ],

    groupEditMembersTabSearch: [
      './private/community/groupEditMembersTabSearch/groupEditMembersTabSearch-spec.js'
    ],

    groupEditMemberCardDetails: [
      './private/community/groupEditMemberCardDetails/groupEditMemberCardDetails-spec.js'
    ],

    groupRemoveUser: [
      './private/community/groupRemoveUser/groupRemoveUser-spec.js'
    ],

    groupLeave: [
      './private/community/groupLeave/groupLeave-spec.js'
    ],

    groupPageDiscussionTabLoadMore: [
      './private/community/groupPageDiscussionTabLoadMore/groupPageDiscussionTabLoadMore-spec.js'
    ],

    groupPageMembersTabLoadMore: [
      './private/community/groupPageMembersTabLoadMore/groupPageMembersTabLoadMore-spec.js'
    ],

    groupMemberCardDetails: [
      './private/community/groupMemberCardDetails/groupMemberCardDetails-spec.js'
    ],

    groupInvite: [
      './private/community/groupInvite/groupInvite-spec.js'
    ],
  },

  capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
      'args': ['--disable-gpu', '--window-size=2880,1800']
    }
  },
  jasmineNodeOpts: {
    print: function () { },
    showColors: true,
    defaultTimeoutInterval: 300000
  },

  allScriptsTimeout: 60 * 1000 * 60,

  onPrepare: function () {
    // Ovaj deo koda je za Jasmin reporter u terminalu
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));

  }

};