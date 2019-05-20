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
  opt: [
    './todo-spec.js',
  ],

  registracija: [
    './registracija/registracija-spec.js',
  ],

  login: [
    './login/login-spec.js',
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