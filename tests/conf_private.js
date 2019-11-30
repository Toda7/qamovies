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

  dashPage: [
    './private/dashboard/dashPage/dashPage-spec.js'
  ],

  loginAsVendor: [
    './private/dashboard/loginAsVendor/loginAsVendor-spec.js'
  ],

  dashComunity: [
    './private/dashboard/dashComunity/dashComunity-spec.js'
  ],

  dashLendwell: [
    './private/dashboard/dashLendwell/dashLendwell-spec.js'
  ],
 
  dashWorkspace: [
    './private/dashboard/dashWorkspace/dashWorkspace-spec.js'
  ],

  dashPeer: [
    './private/dashboard/dashPeerAnalysis/dashPeer-spec.js'
  ],

  dashRisk: [
    './private/dashboard/dashRiskAsses/dashRisk-spec.js'
  ],
  
  dashCielostar: [
    './private/dashboard/dashCielostar/dashCielostar-spec.js'
  ], 

  dashEducation: [
    './private/dashboard/dashEducation/dashEducation-spec.js'
  ],

  dashVendorMng: [
    './private/dashboard/dashVendorMng/dashVendorMng-spec.js'
  ],

  dashCbancPremium: [
    './private/dashboard/dashCbancPremium/dashCbancPremium-spec.js'
  ],

  dashAbout: [
    './private/dashboard/dashAbout/dashAbout-spec.js'
  ],

  dashFAQ: [
    './private/dashboard/dashFAQ/dashFAQ-spec.js'
  ],

  dashContact: [
    './private/dashboard/dashContact/dashContact-spec.js'
  ],

  dashVendors: [
    './private/dashboard/dashVendors/dashVendors-spec.js'
  ],

  dashCareers: [
    './private/dashboard/dashCareers/dashCareers-spec.js'
  ],

  dashBlog: [
    './private/dashboard/dashBlog/dashBlog-spec.js'
  ],

  dashPrivacyPolicy: [
    './private/dashboard/dashPrivacyPolicy/dashPrivacyPolicy-spec.js'
  ],

  dashTermsOfService: [
    './private/dashboard/dashTermsOfService/dashTermsOfService-spec.js'
  ],   

  dashCodeOfConduct: [
    './private/dashboard/dashCodeOfConduct/dashCodeOfConduct-spec.js'
  ],

  peerA: [
    './private/peer_analysis/peerGroupAnalysis/peerGroupAnalysis-spec.js'
  ],

  peerToolLunch: [
    './private/peer_analysis/peerToolLunch/peerToolLunch-spec.js'
  ],

  peerToolShortReport: [
    './private/peer_analysis/peerToolShortReport/peerToolShortReport-spec.js'
  ],

  peerToolReport: [
    './private/peer_analysis/peerToolReport/peerToolReport-spec.js'
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