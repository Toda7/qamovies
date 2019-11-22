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

  createDiscussion: [
    './private/community/createDiscussion/createDiscussion-spec.js'
  ],

  replyDiscussion: [
    './private/community/replyDiscussion/replyDiscussion-spec.js'
  ],

  commentDiscussion: [
    './private/community/commentDiscussion/commentDiscussion-spec.js'
  ],

  downloadDoc: [
    './private/community/downloadDoc/downloadDoc-spec.js'
  ],

  replyDiscussion: [
    './private/community/replyDiscussion/replyDiscussion-spec.js'
  ],

  deleteDiscussion: [
    './private/community/deleteDiscussion/deleteDiscussion-spec.js'
  ],

  undoDeleteDiscussion: [
    './private/community/undoDeleteDiscussion/undoDeleteDiscussion-spec.js'
  ],

  createDiscussion: [
    './private/community/createDiscussion/createDiscussion-spec.js'
  ],

  searchForDiscussion: [
   './private/community/searchForDiscussion/searchForDiscussion-spec.js'
  ],

  createAnonymousDiscussion: [
    './private/community/createAnonymousDiscussion/createAnonymousDiscussion-spec.js'
   ],
 
   thankDiscussion: [
    './private/community/thankDiscussion/thankDiscussion-spec.js'
   ],
  
  searchVendors: [
    './private/community/searchVendors/searchVendors-spec.js'
  ],

  sendMessageToVendor: [
    './private/community/sendMessageToVendor/sendMessageToVendor-spec.js'
  ],
  
  searchTopic: [
    './private/community/searchTopic/searchTopic-spec.js'
  ],

  inviteColleagues: [
    './private/community/inviteColleagues/inviteColleagues-spec.js'
  ],
  
  searchDoc: [
    './private/community/searchDoc/searchDoc-spec.js'
  ],

  thankDoc: [
    './private/community/thankDoc/thankDoc-spec.js'
  ],

  reputationSystemAndLeaderboard: [
    './private/community/reputationSystemAndLeaderboard/reputationSystemAndLeaderboard-spec.js'
  ],

  sendFile: [
    './private/inbox/sendFile/sendFile-spec.js'
  ],

  sendMessage: [
    './private/inbox/sendMessage/sendMessage-spec.js'
  ],

  reportSpam: [
    './private/inbox/reportSpam/reportSpam-spec.js'
  ],

  downloadFile: [
    './private/inbox/downloadFile/downloadFile-spec.js'
  ],


 },

   capabilities: {
    browserName: 'firefox',
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
   jasmine.getEnv().addReporter(new SpecReporter({
     spec: {
       displayStacktrace: true
     }
   }));

 }

};