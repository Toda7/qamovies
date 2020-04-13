var dashPage = require('./dashPage-po');


describe('Cekiranje Dashboard strane', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false); //stavlja se na pocetak fajla da ne bi cekao Angular element
});  

it('Provera Dashboard urla', function(){
    dashPage.checkDashPageUrl();
    //browser.sleep(5000);

}); 

// it('Da li se ucitalo DM icon', function(){
//     dashPage.checkDmIcon();
//     //browser.sleep(2000);

// });

// nemamo vise premium ad zbog korone
// it('Da li se ucitalo Premuim Ad', function(){
//     dashPage.checkPremiumAd();
//     //browser.sleep(5000);

// });

it('Da li se ucitao Community drop', function(){
    dashPage.checkCommunityDrop();
    browser.sleep(5000);

});

it('Da li se ucitao Education drop', function(){
    dashPage.checkEducationDrop();
    browser.sleep(5000);

});

it('Da li se ucitao More drop', function(){
    dashPage.checkMoreDrop();
    browser.sleep(5000);

});

it('Proverava da li se ucitao footer', function(){
    dashPage.checkFooter();
});


// it('Click na User menu', function(){
//     dashPage.clickOnUserMenu();
// });

// it('Click na Signout', function(){
//     dashPage.clickOnSignOut();
//     browser.sleep(5000);
// });

// it('Sign in', function(){
//     dashPage.clickOnSignIn();
// });

// it('Provera da li smo landovali na sign in stranu', function(){
//     dashPage.checkSignInUrl();
//     browser.sleep(2000);
// });

// it('Unosenje emaila', function(){
//     dashPage.enterEmail();
// });

// it('Unosenje lozinke', function(){
//     dashPage.enterPass();
// });

// it('Logovanje kao Vendor', function(){
//     dashPage.submit();
// });

// it('Provera da li smo se logovali', function(){
//     dashPage.checkLogInUrl();
//     browser.sleep(2000);
// });

// it('Klik na comunity', function(){
//     dashPage.clickOnComunity();
//     browser.getAllWindowHandles().then(function (handles) {
//     browser.switchTo().window(handles[1]);
    
//     });
//     });

//     it('Provera comunity url zatvaranje taba', function(){
//         dashPage.checkComunityUrl();
//         browser.sleep(2000);
//         browser.getAllWindowHandles().then(function (handles) {
//         browser.driver.switchTo().window(handles[1]);
//         browser.driver.close();
//         browser.driver.switchTo().window(handles[0]);
//         }); 
//     });

//     // it('Klik na Education', function(){
//     //     dashPage.clickOnEducation();
//     //     browser.getAllWindowHandles().then(function (handles) {
//     //     browser.switchTo().window(handles[1]);
//     //     });
//     // });  
    
//     // it('Provera Education url zatvaranje taba', function(){
//     //     dashPage.checkEducationUrl();
//     //     browser.sleep(2000);
//     //     browser.getAllWindowHandles().then(function (handles) {
//     //     browser.driver.switchTo().window(handles[1]);
//     //     browser.driver.close();
//     //     browser.driver.switchTo().window(handles[0]);
//     //     }); 
//     // });
    
//     it('Klik na ViewFinder', function(){
//         dashPage.clickOnViewFinder();
//         browser.getAllWindowHandles().then(function (handles) {
//         browser.switchTo().window(handles[1]);
        
//         });
//         });
    
//         it('Provera ViewFinder url zatvaranje taba', function(){
//             dashPage.checkViewFinderUrl();
//             browser.sleep(2000);
//             browser.getAllWindowHandles().then(function (handles) {
//             browser.driver.switchTo().window(handles[1]);
//             browser.driver.close();
//             browser.driver.switchTo().window(handles[0]);
//             }); 
//         });

//         it('Klik na Workspace', function(){
//             dashPage.clickOnWorkspace();
//             browser.getAllWindowHandles().then(function (handles) {
//             browser.switchTo().window(handles[1]);
            
//             });
//             });
        
//             it('Provera Workspace url zatvaranje taba', function(){
//                 dashPage.checkWorkspaceUrl();
//                 browser.sleep(2000);
//                 browser.getAllWindowHandles().then(function (handles) {
//                 browser.driver.switchTo().window(handles[1]);
//                 browser.driver.close();
//                 browser.driver.switchTo().window(handles[0]);
//                 }); 
//             }); 
            
//             it('Click na User menu', function(){
//                 dashPage.clickOnUserMenu();
//             });
            
//             it('Click na Signout', function(){
//                 dashPage.clickOnSignOut();
//                 browser.sleep(5000);
//             });

//             it('Sign in', function(){
//                 dashPage.clickOnSignInV();
//             });
            
//             it('Provera da li smo landovali na sign in stranu', function(){
//                 dashPage.checkSignInUrlV();
//                 browser.sleep(2000);
//             });
            
//             it('Unosenje emaila', function(){
//                 dashPage.enterEmailV();
//             });
            
//             it('Unosenje lozinke', function(){
//                 dashPage.enterPassV();
//             });
            
//             it('Logovanje kao FI user opet', function(){
//                 dashPage.submitV();
//             });
            
//             it('Provera da li smo se logovali', function(){
//                 dashPage.checkLogInUrlV();
//                 browser.sleep(2000);   
//             });

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});