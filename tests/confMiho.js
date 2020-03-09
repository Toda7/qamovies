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

    // searchTopic: [
    //   './private/community/searchTopic/searchTopic-spec.js'
    // ],

    // inviteColleagues: [
    //   './private/community/inviteColleagues/inviteColleagues-spec.js'
    // ],

    // inviteColleaguesAddEmail: [
    //   './private/community/inviteColleaguesAddEmail/inviteColleaguesAddEmail-spec.js'
    // ],

    // reputationTimelineThankLogs: [
    //   './private/community/reputationTimelineThankLogs/reputationTimelineThankLogs-spec.js'
    // ],

    // reputationTimelineJoinLogNewUser: [
    //   './private/community/reputationTimelineJoinLogNewUsSer/reputationTimelineJoinLogNewUser-spec.js'
    // ],

    reputationTimelinePage: [
      './private/community/reputationTimelinePage/reputationTimelinePage-spec.js'
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