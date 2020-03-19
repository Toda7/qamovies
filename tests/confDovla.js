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

    discoverPagePopular: [
      './private/community/discoverPagePopular/discoverPagePopular-spec.js'
    ],

    discoverPageAlphabetical: [
      './private/community/discoverPageAlphabetical/discoverPageAlphabetical-spec.js'
    ],

    discoverCreateDiscussion: [
      './private/community/discoverCreateDiscussion/discoverCreateDiscussion-spec.js'
    ],

    discoverTopicCardSubUnsub: [
      './private/community/discoverTopicCardSubUnsub/discoverTopicCardSubUnsub-spec.js'
    ],

    discoverTopicCardSubUnsub: [
      './private/community/discoverTopicCardSubUnsub/discoverTopicCardSubUnsub-spec.js'
    ],

    timeStampReply: [
      './private/community/timeStampReply/timeStampReply-spec.js'
    ],

    discoverTopicDetailSubUnsub: [
      './private/community/discoverTopicDetailSubUnsub/discoverTopicDetailSubUnsub-spec.js'
    ],

    discoverTopicDetailLoadMore: [
      './private/community/discoverTopicDetailLoadMore/discoverTopicDetailLoadMore-spec.js'
    ],

    discoverDiscDocTabCheck: [
      './private/community/discoverDiscDocTabCheck/discoverDiscDocTabCheck-spec.js'
    ],

    forYouSubUnsubOnDisc: [
      './private/community/forYouSubUnsubOnDisc/forYouSubUnsubOnDisc-spec.js'
    ],

    forYouSubUnsubOnTopic: [
      './private/community/forYouSubUnsubOnTopic/forYouSubUnsubOnTopic-spec.js'
    ],

    forYouSubUnsubOnVendor: [
      './private/community/forYouSubUnsubOnVendor/forYouSubUnsubOnVendor-spec.js'
    ],

    forYouSubUnsubOnVendorUser: [
      './private/community/forYouSubUnsubOnVendorUser/forYouSubUnsubOnVendorUser-spec.js'
    ],

    forYouDirectMessage: [
      './private/community/forYouDirectMessage/forYouDirectMessage-spec.js'
    ],

    forYouLoadMore: [
      './private/community/forYouLoadMore/forYouLoadMore-spec.js'
    ],

    timeStampReplyMinute: [
      './private/community/timeStampReplyMinute/timeStampReplyMinute-spec.js'
    ],

    timeStampCommentMinute: [
      './private/community/timeStampCommentMinute/timeStampCommentMinute-spec.js'
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