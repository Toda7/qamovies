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

    checkLinksOnFVHomePage: [
      './private/fileVault/checkLinksOnFVHomePage/checkLinksOnFVHomePage-spec.js',
    ],

    addSpace: [
      './private/fileVault/addSpace/addSpace-spec.js',
    ],

    addTask: [
      './private/fileVault/addTask/addTask-spec.js',
    ],

    addDoc: [
      './private/fileVault/addDoc/addDoc-spec.js',
    ],

    addUser: [
      './private/fileVault/addUser/addUser-spec.js',
    ],

    taskReport: [
      './private/fileVault/taskReport/taskReport-spec.js',
    ],

    allActivity: [
      './private/fileVault/allActivity/allActivity-spec.js',
    ],

    search: [
      './private/fileVault/search/search-spec.js',
    ],

    adminland: [
      './private/fileVault/adminland/adminland-spec.js',
    ],

    deleteSpace: [
      './private/fileVault/deleteSpace/deleteSpace-spec.js',
    ],

    general: [
      './private/account/general/general-spec.js',
    ],

    notifications: [
      './private/account/notifications/notifications-spec.js',
    ],

    avatar: [
      './private/account/avatar/avatar-spec.js',
    ],

    password: [
      './private/account/password/password-spec.js',
    ],

    alerts: [
      './private/account/alerts/alerts-spec.js',
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
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));

  }

};