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
  //   './public/registracija/registracija-spec.js',
  // ],

  // Test za log smo stavili u comment da bi mogli da pokrecemo ceo conf.js fajl (jer smo dobijali greske u terminalu zbog log in - slobodno upaliti po potrebi)
  // login: [
  //   './login/login-spec.js',
  // ],

  // home: [
  //   './public/home/home-spec.js',
  // ],

  lendwell: [
    './public/lendwell/lendwell-spec.js',
  ],
   
  // vendor: [
  //   './public/vendor/vendor-spec.js',
  // ],
  // vm: [
  //   './public/vendor_management/vendor_management-spec.js',
  // ],  
  // ra: [
  //   './public/risk_assessment/risk_assessment-spec.js',
  // ],
  // pa: [
  //   './public/peer_analysis/peer_analysis-spec.js',
  // ],    
  // cielostar: [
  //   './public/cielostar/cielostar-spec.js',
    
  // ],  
  // upcoming: [
  //   './public/upcoming/upcoming-spec.js',
  // ],  
  // ondemand: [
  //   './public/ondemand/ondemand-spec.js',
  // ],
  // orders: [
  //   './public/orders/orders-spec.js',
  // ],
  // accessplus: [
  //   './public/accessplus/accessplus-spec.js',
  // ],
  // reserveseat: [
  //   './public/reserveseat/reserveseat-spec.js',
  // ],    

  // topics: [
  //   './topics/topics-spec.js',
  // ],
  // topicsearch: [
  //   './topicSearch/topicSearch-spec.js',
  // ],
  // docss: [
  //   './docLibSearch/docLibSearch-spec.js',
  // ],
  // doc: [
  //   './docLib/docLib-spec.js',
  // ],  

  // questions: [
  //   './questions/questions-spec.js',
  // ],    
  // searchWebinars: [
  //   './searchWebinars/searchWebinars-spec.js',
  // ],    
  // footAbout: [
  //   './footAbout/footAbout-spec.js',
  // ],   
  // footFAQ: [
  //   './footFAQ/footFAQ-spec.js',
  // ],  
  // footContact: [
  //   './footContact/footContact-spec.js'
  // ],
  // footVendors: [
  //   './footVendors/footVendors-spec.js'
  // ],
  // footCareers: [
  // './footCareers/footCareers-spec.js'
  // ],
  // footBlog: [
  // './footBlog/footBlog-spec.js'
  // ],
  // footPrivacy: [
  // './footPrivacy/footPrivacy-spec.js'
  // ],
  // footTerms: [
  // './footTerms/footTerms-spec.js'
  // ],
  // footCode: [
  // './footCode/footCode-spec.js'
  // ]

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