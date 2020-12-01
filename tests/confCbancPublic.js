let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
// let failFast = require('protractor-fail-fast');


exports.config = {
  // plugins: [failFast.init()],
  // afterLaunch: function () {
  //   failFast.clean(); // Removes the fail file once all test runners have completed.
  // },
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',

  suites: {

    staticHome: [
      './public/staticHome/staticHome-spec.js',
    ],

    staticLendwell: [
      './public/staticLendwell/staticLendwell-spec.js',
    ],

    staticViewFinder: [
      './public/staticViewFinder/staticViewFinder-spec.js',
    ],

    // ne koristimo vise VM app 
    // staticVendorManagement: [
    //   './public/staticVendorManagement/staticVendorManagement-spec.js',
    // ],

    staticRiskAssessment: [
      './public/staticRiskAssessment/staticRiskAssessment-spec.js',
    ],

    staticPeerAnalysis: [
      './public/staticPeerAnalysis/staticPeerAnalysis-spec.js',
    ],

    staticEducation: [
      './public/staticEducation/staticEducation-spec.js',
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

    reserveseat: [
      './public/reserveseat/reserveseat-spec.js',
    ],

    searchWebinars: [
      './public/searchWebinars/searchWebinars-spec.js',
    ],

    topics: [
      './public/topics/topics-spec.js',
    ],

    topicsearch: [
      './public/topicSearch/topicSearch-spec.js',
    ],

    docLib: [
      './public/docLib/docLib-spec.js',
    ],

    docLibSearch: [
      './public/docLibSearch/docLibSearch-spec.js',
    ],

    questions: [
      './questions/questions-spec.js',
    ],

    staticAbout: [
      './public/staticAbout/staticAbout-spec.js',
    ],

    footFAQ: [
      './public/footFAQ/footFAQ-spec.js',
    ],

    staticSupport: [
      './public/staticSupport/staticSupport-spec.js'
    ],

    staticTrainingCcbp: [
      './public/staticTrainingCcbp/staticTrainingCcbp-spec.js'
    ],

    staticAdvertiseGetStarted: [
      './public/staticAdvertiseGetStarted/staticAdvertiseGetStarted-spec.js'
    ],

    staticLeadGenerationForFintech: [
      './public/staticLeadGenerationForFintech/staticLeadGenerationForFintech-spec.js'
    ],

    staticPremium: [
      './public/staticPremium/staticPremium-spec.js'
    ],

    staticCodeOfConduct: [
      './public/staticCodeOfConduct/staticCodeOfConduct-spec.js'
    ],

    staticPrivacyPolicy: [
      './public/staticPrivacyPolicy/staticPrivacyPolicy-spec.js'
    ],

    staticTermsOfService: [
      './public/staticTermsOfService/staticTermsOfService-spec.js'
    ],

    // ne koristimo vise VM app
    // staticVendorManagementStandardTerms: [
    //   './public/staticVendorManagementStandardTerms/staticVendorManagementStandardTerms-spec.js'
    // ],

    staticWebinarsCallForSpeakers: [
      './public/staticWebinarsCallForSpeakers/staticWebinarsCallForSpeakers-spec.js'
    ],

    staticCxo: [
      './public/staticCxo/staticCxo-spec.js'
    ],

    staticAft: [
      './public/staticAft/staticAft-spec.js'
    ],

    staticCareers: [
      './public/staticCareers/staticCareers-spec.js'
    ],

    staticLwbenefit: [
      './public/staticLwbenefit/staticLwbenefit-spec.js'
    ],

    staticLoanMarketPrivacy: [
      './public/staticLoanMarketPrivacy/staticLoanMarketPrivacy-spec.js'
    ],

    staticAdvertise: [
      './public/staticAdvertise/staticAdvertise-spec.js'
    ],

    staticLoanMarketplace: [
      './public/staticLoanMarketplace/staticLoanMarketplace-spec.js'
    ],
    
  },
  
  capabilities: {
    browserName: 'chrome',
    acceptInsecureCerts : true,
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
    // Ovaj deo koda je za HTML reporter
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './',
      filePrefix: 'xmlresults'
    }));

    // Ovaj deo koda je za Screenshotove
    var fs = require('fs-extra');

    jasmine.getEnv().addReporter({
      specDone: function (result) {
        if (result.status == 'failed') {
          browser.getCapabilities().then(function (caps) {
            var browserName = caps.get('browserName');

            

            browser.takeScreenshot().then(function (png) {
              var stream = fs.createWriteStream('reports/Cbanc/screenshots/' + browserName + '-' + result.fullName + '.png');
              stream.write(new Buffer(png, 'base64'));
              stream.end();
            });
          });
        }
      }
    });
    // Ovaj deo koda je za Jasmin reporter u terminalu
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

      var today = new Date(),
      timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + '-' + today.getMinutes() + '-' + + today.getSeconds();
      
      testConfig = {
        reportTitle: 'CBANC Public Report',
        outputPath: './reports/Cbanc/',
        outputFilename: 'CBANC Public Report - '+timeStamp,
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