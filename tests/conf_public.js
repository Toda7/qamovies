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

    home: [
      './public/home/home-spec.js',
    ],

    lendwell: [
      './public/lendwell/lendwell-spec.js',
    ],

    vendor: [
      './public/vendor/vendor-spec.js',
    ],
    vm: [
      './public/vendor_management/vendor_management-spec.js',
    ],
    ra: [
      './public/risk_assessment/risk_assessment-spec.js',
    ],
    pa: [
      './public/peer_analysis/peer_analysis-spec.js',
    ],
    cielostar: [
      './public/cielostar/cielostar-spec.js',
    ],

    upcoming: [
      './public/upcoming/upcoming-spec.js',
    ],

    ondemand: [
      './public/ondemand/ondemand-spec.js',
    ],

    orders: [
      './public/orders/orders-spec.js',
    ],

    accessplus: [
      './public/accessplus/accessplus-spec.js',
    ],

    reserveseat: [
      './public/reserveseat/reserveseat-spec.js',
    ],

    topics: [
      './public/topics/topics-spec.js',
    ],
    topicsearch: [
      './public/topicSearch/topicSearch-spec.js',
    ],
    docss: [
      './public/docLibSearch/docLibSearch-spec.js',
    ],
    doc: [
      './public/docLib/docLib-spec.js',
    ],

    questions: [
      './questions/questions-spec.js',
    ],

    searchWebinars: [
      './public/searchWebinars/searchWebinars-spec.js',
    ],

    footAbout: [
      './public/footAbout/footAbout-spec.js',
    ],

    footFAQ: [
      './public/footFAQ/footFAQ-spec.js',
    ],

    footContact: [
      './public/footContact/footContact-spec.js'
    ],

    footVendors: [
      './public/footVendors/footVendors-spec.js'
    ],

    footCareers: [
      './public/footCareers/footCareers-spec.js'
    ],

    footBlog: [
      './public/footBlog/footBlog-spec.js'
    ],

    footPrivacy: [
      './public/footPrivacy/footPrivacy-spec.js'
    ],

    footTerms: [
      './public/footTerms/footTerms-spec.js'
    ],

    footCode: [
      './public/footCode/footCode-spec.js'
    ]

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

    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './',
      filePrefix: 'xmlresults'
    }));

    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));

  },

  //HTMLReport called once tests are finished
  onComplete: function () {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');
      platform = caps.get('platform');

      var HTMLReport = require('protractor-html-reporter-2');

      testConfig = {
        reportTitle: 'CBANC Public Report',
        outputPath: './',
        outputFilename: 'CBANC Public Report',
        screenshotPath: './screenshots',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
        testPlatform: platform
      };
      new HTMLReport().from('xmlresults.xml', testConfig);
    });
  }

};