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

    deleteDiscussion: [
      './private/community/deleteDiscussion/deleteDiscussion-spec.js'
    ],

    undoDeleteDiscussion: [
      './private/community/undoDeleteDiscussion/undoDeleteDiscussion-spec.js'
    ],

    // searchForDiscussion: [
    //   './private/community/searchForDiscussion/searchForDiscussion-spec.js'
    // ],

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

    vmAddVendor: [
      './private/vm/vmAddVendor/vmAddVendor-spec.js'
    ],

    vmAddUnverifiedVendor: [
      './private/vm/vmAddUnverifiedVendor/vmAddUnverifiedVendor-spec.js'
    ],

    vmUploadDocument: [
      './private/vm/vmUploadDocument/vmUploadDocument-spec.js'
    ],

    vmAddTask: [
      './private/vm/vmAddTask/vmAddTask-spec.js'
    ],

    vmEditTask: [
      './private/vm/vmEditTask/vmEditTask-spec.js'
    ],

    vmCompleteTask: [
      './private/vm/vmCompleteTask/vmCompleteTask-spec.js'
    ],

    vmDeleteTask: [
      './private/vm/vmDeleteTask/vmDeleteTask-spec.js'
    ],

    vmDeleteDoc: [
      './private/vm/vmDeleteDoc/vmDeleteDoc-spec.js'
    ],

    vmReport: [
      './private/vm/vmReport/vmReport-spec.js'
    ],

    vmAddUser: [
      './private/vm/vmAddUser/vmAddUser-spec.js'
    ],

    vmRemoveUser: [
      './private/vm/vmRemoveUser/vmRemoveUser-spec.js'
    ],

    vmRemoveVendor: [
      './private/vm/vmRemoveVendor/vmRemoveVendor-spec.js'
    ],

    vmRemoveUnverifiedVendor: [
      './private/vm/vmRemoveUnverifiedVendor/vmRemoveUnverifiedVendor-spec.js'
    ],

    raHome: [
      './private/raPremium/raHome/raHome-spec.js'
    ],

    raDropMenu: [
      './private/raPremium/raDropMenu/raDropMenu-spec.js'
    ],

    raGoToLegacyApp: [
      './private/raPremium/raGoToLegacyApp/raGoToLegacyApp-spec.js'
    ],

    raCreateInprogressTemplate: [
      './private/raPremium/raCreateInprogressTemplate/raCreateInprogressTemplate-spec.js'
    ],

    raUnsavedChangesMessage: [
      './private/raPremium/raUnsavedChangesMessage/raUnsavedChangesMessage-spec.js'
    ],

    raSavedChangesMessage: [
      './private/raPremium/raSavedChangesMessage/raSavedChangesMessage-spec.js'
    ],

    raEditInprogressTemplate: [
      './private/raPremium/raEditInprogressTemplate/raEditInprogressTemplate-spec.js'
    ],

    raDeleteInprogressTemplate: [
      './private/raPremium/raDeleteInprogressTemplate/raDeleteInprogressTemplate-spec.js'
    ],

    raCreateCompleteTemplate: [
      './private/raPremium/raCreateCompleteTemplate/raCreateCompleteTemplate-spec.js'
    ],

    raEditCompleteTemplate: [
      './private/raPremium/raEditCompleteTemplate/raEditCompleteTemplate-spec.js'
    ],

    raDeleteCompleteTemplate: [
      './private/raPremium/raDeleteCompleteTemplate/raDeleteCompleteTemplate-spec.js'
    ],

    dumbleformFirstForm: [
      './private/dumbleform/completeYourProfile/completeYourProfile-spec.js'
    ],

    dumbleformSecondForm: [
      './private/dumbleform/followColleagues/followColleagues-spec.js'
    ],

    dumbleformThirdForm: [
      './private/dumbleform/vendorMapping/vendorMapping-spec.js'
    ],

    logOut: [
      './private/education/logOutAsAdmin/logOutAsAdmin-spec.js'
    ],

    loginAsAdmin: [
      './private/education/loginAsAdmin/loginAsAdmin-spec.js'
    ],

    createHostedWebinar: [
      './private/education/createHostedWebinar/createHostedWebinar-spec.js'
    ],

    buyingHostedWebinar: [
      './private/education/buyingHostedWebinar/buyingHostedWebinar-spec.js'
    ],

    usingInvoiceHosted: [
      './private/education/usingInvoiceHosted/usingInvoiceHosted-spec.js'
    ],

    setInactiveHosted: [
      './private/education/setInactiveHosted/setInactiveHosted-spec.js'
    ],

    createOutsourcedWebinar: [
      './private/education/createOutsourcedWebinar/createOutsourcedWebinar-spec.js'
    ],

    buyingOutsourcedWebinar: [
      './private/education/buyingOutsourcedWebinar/buyingOutsourcedWebinar-spec.js'
    ],

    usingInvoiceOutsourced: [
      './private/education/usingInvoiceOutsourced/usingInvoiceOutsourced-spec.js'
    ],

    setInactiveOutsourced: [
      './private/education/setInactiveOutsourced/setInactiveOutsourced-spec.js'
    ],

    createVideo: [
      './private/education/createVideo/createVideo-spec.js'
    ],

    buyingVideo: [
      './private/education/buyingVideo/buyingVideo-spec.js'
    ],

    usingInvoiceVideo: [
      './private/education/usingInvoiceVideo/usingInvoiceVideo-spec.js'
    ],

    setInactiveVideo: [
      './private/education/setInactiveVideo/setInactiveVideo-spec.js'
    ],

    allAccess: [
      './private/education/allAccess/allAccess-spec.js'
    ],

    setAllAccessToFalse: [
      './private/education/setAllAccessToFalse/setAllAccessToFalse-spec.js'
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
    // Ovaj deo koda je za HTML reporter
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './',
      filePrefix: 'xmlresults'
    }));

    // Ovaj deo koda je za Screenshotove
    var fs = require('fs-extra');

    fs.emptyDir('screenshots/', function (err) {
      console.log(err);
    });

    jasmine.getEnv().addReporter({
      specDone: function (result) {
        if (result.status == 'failed') {
          browser.getCapabilities().then(function (caps) {
            var browserName = caps.get('browserName');

            browser.takeScreenshot().then(function (png) {
              var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName + '.png');
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

      testConfig = {
        reportTitle: 'CABNC Private Test Report',
        outputPath: './',
        outputFilename: 'CABNC Private Test Report',
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