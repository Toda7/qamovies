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

    createDiscussion: [
      './private/community/createDiscussion/createDiscussion-spec.js'
    ],

    editDiscussion: [
      './private/community/editDiscussion/editDiscussion-spec.js'
    ],

    checkDiscussionOnMyProfile: [
      './private/community/checkDiscussionOnMyProfile/checkDiscussionOnMyProfile-spec.js'
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

    createAnonymousDiscussion: [
      './private/community/createAnonymousDiscussion/createAnonymousDiscussion-spec.js'
    ],

    thankDiscussion: [
      './private/community/thankDiscussion/thankDiscussion-spec.js'
    ],

    replyDiscussion: [
      './private/community/replyDiscussion/replyDiscussion-spec.js'
    ],

    editReply: [
      './private/community/editReply/editReply-spec.js'
    ],

    commentDiscussion: [
      './private/community/commentDiscussion/commentDiscussion-spec.js'
    ],

    editComment: [
      './private/community/editComment/editComment-spec.js'
    ],

    deleteComment: [
      './private/community/deleteComment/deleteComment-spec.js'
    ],

    deleteReply: [
      './private/community/deleteReply/deleteReply-spec.js'
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

    rundeckReindex: [
      './private/community/rundeckReindex/rundeckReindex-spec.js'
    ],

    deleteDiscussionWithUndoneDeletion: [
      './private/community/deleteDiscussionWithUndoneDeletion/deleteDiscussionWithUndoneDeletion-spec.js'
    ],

    thankReply: [
      './private/community/thankReply/thankReply-spec.js'
    ],

    thankComment: [
      './private/community/thankComment/thankComment-spec.js'
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

    deleteAnonymousDiscussion: [
      './private/community/deleteAnonymousDiscussion/deleteAnonymousDiscussion-spec.js'
    ],

    myProfilePage: [
      './private/community/myProfilePage/myProfilePage-spec.js'
    ],

    myProfilePageLoadMore: [
      './private/community/myProfilePageLoadMore/myProfilePageLoadMore-spec.js'
    ],

    memberProfilePage: [
      './private/community/memberProfilePage/memberProfilePage-spec.js'
    ],

    followUnfollowMember: [
      './private/community/followUnfollowMember/followUnfollowMember-spec.js'
    ],

    checkNewDiscussionOnMemberProfile: [
      './private/community/checkNewDiscussionOnMemberProfile/checkNewDiscussionOnMemberProfile-spec.js'
    ],

    memberProfilePageLoadMore: [
      './private/community/memberProfilePageLoadMore/memberProfilePageLoadMore-spec.js'
    ],

    fiOrgDetailsPage: [
      './private/community/fiOrgDetailsPage/fiOrgDetailsPage-spec.js'
    ],

    fiOrgPageEmployees: [
      './private/community/fiOrgPageEmployees/fiOrgPageEmployees-spec.js'
    ],

    globalSearch: [
      './private/community/globalSearch/globalSearch-spec.js'
    ],

    globalSearchAll: [
      './private/community/globalSearchAll/globalSearchAll-spec.js'
    ],

    globalSearchUserForHisDocs: [
      './private/community/globalSearchUserForHisDocs/globalSearchUserForHisDocs-spec.js'
    ],

    globalSearchAllLoadMore: [
      './private/community/globalSearchAllLoadMore/globalSearchAllLoadMore-spec.js'
    ],

    globalSearchDiscussionByTitle: [
      './private/community/globalSearchDiscussionByTitle/globalSearchDiscussionByTitle-spec.js'
    ],

    globalSearchDiscussionByDescription: [
      './private/community/globalSearchDiscussionByDescription/globalSearchDiscussionByDescription-spec.js'
    ],

    globalSearchDiscussionsLoadMore: [
      './private/community/globalSearchDiscussionsLoadMore/globalSearchDiscussionsLoadMore-spec.js'
    ],

    globalSearchDocument: [
      './private/community/globalSearchDocument/globalSearchDocument-spec.js'
    ],

    globalSearchUserForHisDocsOnDocsTab: [
      './private/community/globalSearchUserForHisDocsOnDocsTab/globalSearchUserForHisDocsOnDocsTab-spec.js'
    ],

    globalSearchDocsLoadMore: [
      './private/community/globalSearchDocsLoadMore/globalSearchDocsLoadMore-spec.js'
    ],

    globalSearchMember: [
      './private/community/globalSearchMember/globalSearchMember-spec.js'
    ],

    globalSearchMembersLoadMore: [
      './private/community/globalSearchMembersLoadMore/globalSearchMembersLoadMore-spec.js'
    ],

    globalSearchOrgs: [
      './private/community/globalSearchOrgs/globalSearchOrgs-spec.js'
    ],

    globalSearchOrgsLoadMore: [
      './private/community/globalSearchOrgsLoadMore/globalSearchOrgsLoadMore-spec.js'
    ],

    inviteColleaguesAddEmail: [
      './private/community/inviteColleaguesAddEmail/inviteColleaguesAddEmail-spec.js'
    ],

    reputationTimelinePage: [
      './private/community/reputationTimelinePage/reputationTimelinePage-spec.js'
    ],

    reputationTimelineLoadMore: [
      './private/community/reputationTimelineLoadMore/reputationTimelineLoadMore-spec.js'
    ],

    reputationTimelineThankLogs: [
      './private/community/reputationTimelineThankLogs/reputationTimelineThankLogs-spec.js'
    ],

    reputationTimelineJoinLogNewUser: [
      './private/community/reputationTimelineJoinLogNewUsSer/reputationTimelineJoinLogNewUser-spec.js'
    ],

    reputationLeaderboardPage: [
      './private/community/reputationLeaderboardPage/reputationLeaderboardPage-spec.js'
    ],

    reputationLeaderboardLoadMore: [
      './private/community/reputationLeaderboardLoadMore/reputationLeaderboardLoadMore-spec.js'
    ],

    reputationLeaderboardNewUser: [
      './private/community/reputationLeaderboardNewUser/reputationLeaderboardNewUser-spec.js'
    ],

    groupEdit: [
      './private/community/groupEdit/groupEdit-spec.js'
    ],

    groupEditImageRemove: [
      './private/community/groupEditImageRemove/groupEditImageRemove-spec.js'
    ],

    groupEditCancel: [
      './private/community/groupEditCancel/groupEditCancel-spec.js'
    ],

    groupEditMembersTabLoadMore: [
      './private/community/groupEditMembersTabLoadMore/groupEditMembersTabLoadMore-spec.js'
    ],

    groupEditMembersTabSearch: [
      './private/community/groupEditMembersTabSearch/groupEditMembersTabSearch-spec.js'
    ],

    groupEditMemberCardDetails: [
      './private/community/groupEditMemberCardDetails/groupEditMemberCardDetails-spec.js'
    ],

    groupRemoveUser: [
      './private/community/groupRemoveUser/groupRemoveUser-spec.js'
    ],

    groupLeave: [
      './private/community/groupLeave/groupLeave-spec.js'
    ],

    groupPageDiscussionTabLoadMore: [
      './private/community/groupPageDiscussionTabLoadMore/groupPageDiscussionTabLoadMore-spec.js'
    ],

    groupPageMembersTabLoadMore: [
      './private/community/groupPageMembersTabLoadMore/groupPageMembersTabLoadMore-spec.js'
    ],

    groupMemberCardDetails: [
      './private/community/groupMemberCardDetails/groupMemberCardDetails-spec.js'
    ],

    groupInvite: [
      './private/community/groupInvite/groupInvite-spec.js'
    ],

    docLibraryCheck: [
      './private/community/docLibraryCheck/docLibraryCheck-spec.js'
    ],

    vendorDirectoryCheck: [
      './private/community/vendorDirectoryCheck/vendorDirectoryCheck-spec.js'
    ],

    vendorDetailsPage: [
      './private/community/vendorDetailsPage/vendorDetailsPage-spec.js'
    ],
    
    shareDocument: [
      './private/community/shareDocument/shareDocument-spec.js'
    ],

    logOut: [
      './private/education/logOutAsAdmin/logOutAsAdmin-spec.js'
    ],

    miloslogin: [
      './private/community/milosLogIn/login-spec.js'
    ],

    loadMoreOnDocLibPage: [
      './private/community/loadMoreOnDocLibPage/loadMoreOnDocLibPage-spec.js'
    ],

    searchOnDocLibPage: [
      './private/community/searchOnDocLibPage/searchOnDocLibPage-spec.js'
    ],

    documentDetailsPage: [
      './private/community/documentDetailsPage/documentDetailsPage-spec.js'
    ],

    anonymousDocumentDetailsPage: [
      './private/community/anonymousDocumentDetailsPage/anonymousDocumentDetailsPage-spec.js'
    ],

    shareDocument: [
      './private/community/shareDocument/shareDocument-spec.js'
    ],

    checkOptInMsgAfterDownloadDoc: [
      './private/community/checkOptInMsgAfterDownloadDoc/checkOptInMsgAfterDownloadDoc-spec.js'
    ],

    loadMoreOnVendorDirectoryPage: [
      './private/community/loadMoreOnVendorDirectoryPage/loadMoreOnVendorDirectoryPage-spec.js'
    ],

    searchOnVendorDirectoryPage: [
      './private/community/searchOnVendorDirectoryPage/searchOnVendorDirectoryPage-spec.js'
    ],

    followUnfollowVendor: [
      './private/community/followUnfollowVendor/followUnfollowVendor-spec.js'
    ],

    checkPollOnDocumentLibPage: [
      './private/community/checkPollOnDocumentLibPage/checkPollOnDocumentLibPage-spec.js'
    ],

    checkPollOnHomePage: [
      './private/community/checkPollOnHomePage/checkPollOnHomePage-spec.js'
    ],

    bannersOnVendorDetailsPage: [
      './private/community/bannersOnVendorDetailsPage/bannersOnVendorDetailsPage-spec.js'
    ],

    loadMoreOnVendorDetailsPage: [
      './private/community/loadMoreOnVendorDetailsPage/loadMoreOnVendorDetailsPage-spec.js'
    ],

    discussionDetailsFromVendorDetails: [
      './private/community/discussionDetailsFromVendorDetails/discussionDetailsFromVendorDetails-spec.js'
    ],

    productsPage: [
      './private/community/productsPage/productsPage-spec.js'
    ],

    productDetailsPage: [
      './private/community/productDetailsPage/productDetailsPage-spec.js'
    ],

    contactVendorFromProduct: [
      './private/community/contactVendorFromProduct/contactVendorFromProduct-spec.js'
    ],

    productDetailsPageFromSimilarProducts: [
      './private/community/productDetailsPageFromSimilarProducts/productDetailsPageFromSimilarProducts-spec.js'
    ],

    employeesPage: [
      './private/community/employeesPage/employeesPage-spec.js'
    ],

    dmLinkFromEmployees: [
      './private/community/dmLinkFromEmployees/dmLinkFromEmployees-spec.js'
    ],

    logOut: [
      './private/education/logOutAsAdmin/logOutAsAdmin-spec.js'
    ],

    login: [
      './private/account/login/login-spec.js'
    ],

    timeStampComment: [
      './private/community/timeStampComment/timeStampComment-spec.js'
    ],

    timeStampReply: [
      './private/community/timeStampReply/timeStampReply-spec.js'
    ],

    timeStampCommentMinute: [
      './private/community/timeStampCommentMinute/timeStampCommentMinute-spec.js'
    ],

    timeStampReplyMinute: [
      './private/community/timeStampReplyMinute/timeStampReplyMinute-spec.js'
    ],

    forYouSubUnsubOnTopic: [
      './private/community/forYouSubUnsubOnTopic/forYouSubUnsubOnTopic-spec.js'
    ],

    forYouSubUnsubOnDisc: [
      './private/community/forYouSubUnsubOnDisc/forYouSubUnsubOnDisc-spec.js'
    ],

    forYouSubUnsubOnVendor: [
      './private/community/forYouSubUnsubOnVendor/forYouSubUnsubOnVendor-spec.js'
    ],

    forYouSubUnsubOnVendorUser: [
      './private/community/forYouSubUnsubOnVendorUser/forYouSubUnsubOnVendorUser-spec.js'
    ],

    forYouLoadMore: [
      './private/community/forYouLoadMore/forYouLoadMore-spec.js'
    ],

    forYouDirectMessage: [
      './private/community/forYouDirectMessage/forYouDirectMessage-spec.js'
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

    discoverTopicDetailLoadMore: [
      './private/community/discoverTopicDetailLoadMore/discoverTopicDetailLoadMore-spec.js'
    ],

    discoverDiscDocTabCheck: [
      './private/community/discoverDiscDocTabCheck/discoverDiscDocTabCheck-spec.js'
    ],

    discoverTopicDetailSubUnsub: [
      './private/community/discoverTopicDetailSubUnsub/discoverTopicDetailSubUnsub-spec.js'
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
        reportTitle: 'CBANC Community Test Report',
        outputPath: './reports/Cbanc/',
        outputFilename: 'CBANC Community Report - ' + timeStamp,
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