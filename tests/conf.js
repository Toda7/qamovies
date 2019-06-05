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

  // reg smo stavili u comment da ne bi okidali non stop emailove za novu registraciju(slobodno upaliti po potrebi)
  // registracija: [
  //   './registracija/registracija-spec.js',
  // ],

  // Test za log smo stavili u comment da bi mogli da pokrecemo ceo conf.js fajl (jer smo dobijali greske u terminalu zbog log in - slobodno upaliti po potrebi)
  // login: [
  //   './login/login-spec.js',
  // ],

  home: [
    './home/home-spec.js',
  ],

  lendwell: [
    './lendwell/lendwell-spec.js',
  ],
  vendor: [
    './vendor/vendor-spec.js',
  ],
  vm: [
    './vm/vm-spec.js',
  ],  
  ra: [
    './ra/ra-spec.js',
  ],
  pa: [
    './pa/pa-spec.js',
  ],    
  co: [
    './co/co-spec.js',
  ],    
  questions: [
    './questions/questions-spec.js',
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