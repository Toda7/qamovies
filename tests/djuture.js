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

        logInAsUser: [
            './gfShop/logInAsUser/logInAsUser-spec.js'
        ],

        // mojkomentar : [
        //   './todo-spec.js',     (poziva 'todo' fajl koji ne sluz32131231231231232131231232131i nicemu. to je samo primer)
        // ],

        loginAsVendor: [
            './private/dashboard/loginAsVendor/loginAsVendor-spec.js'
        ],

        addUser: [
            './private/fileVault/addUser/addUser-spec.js',
        ],

        checkLinksOnFVHomePage: [
            './private/fileVault/checkLinksOnFVHomePage/checkLinksOnFVHomePage-spec.js',
        ],

        addSpace: [
            './private/fileVault/addSpace/addSpace-spec.js',
        ],

        // opt321321312312312321312312312312312312321312321321: [
        //   './todo-spec.js',     (poziva 'todo' fajl koji ne sluz32131231231231232131231232131i nicemu. to je samo primer)
        // ],

        dashComunity: [
            './private/dashboard/dashComunity/dashComunity-spec.js'
        ],

        loginToda2: [
            './private/account/login/login-spec.js'
        ],


        loginToda: [
            './private/account/login/login-spec.js'
        ],

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
                reportTitle: 'GF Shop Test Report',
                outputPath: './',
                outputFilename: 'GF Shop Test Report',
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