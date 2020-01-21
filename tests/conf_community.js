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