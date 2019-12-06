var account = require('./myAccount-po.js');

describe('account', function(){


it('Dolazak na My Account stranu', function(){
    account.landOnMyAccountPage();
});

it('Brisanje First Name-a', function(){
    account.clearFirstName();
});

it('Brisanje Last Name-a', function(){
    account.clearLasttName();
});

it('Brisanje Job Title-a', function(){
    account.clearJobTitle();
});

it('Brisanje Website-a', function(){
    account.clearWebsite();
});

it('Brisanje Tagline-a', function(){
    account.clearTagline();
});

it('Brisanje Bio-a', function(){
    account.cleartBio();
});

it('Brisanje Primary Role-a', function(){
    account.clearPrimaryRole();
});

it('Brisanje Role Level-a', function(){
    account.clearRoleLevel();
});

it('klik na Show email switch OFF', function(){
    account.clickOnShowEmailSwitchNaOff();
});

it('klik na Save', function(){
    account.clickOnSave();
});

it('Unosenje First Name-a', function(){
    account.insertFirstName();
});

it('Unosenje Last Name-a', function(){
    account.insertLasttName();
});

it('Unosenje Job Title-a', function(){
    account.insertJobTitle();
});

it('Unosenje Website-a', function(){
    account.insertWebsite();
});

it('Unosenje Tagline-a', function(){
    account.insertTagline();
});

it('Unosenje Bio-a', function(){
    account.insertBio();
});

it('Unosenje Primary Role-a', function(){
    account.insertPrimaryRole();
});

it('Unosenje Role Level-a', function(){
    account.insertRoleLevel();
});

it('Klik na Show email switch ON', function(){
    account.clickOnShowEmailSwitchNaOn();
});

it('Klik na Save', function(){
    account.clickOnSave();
});

it('Provera da li je save-ovano', function(){
    account.checkSuccessMessage();
});

it('Klik na Notification tab', function(){
    account.clickOnNotification();
});

it('Klik na Email marketing switch', function(){
    account.clickOnEmailMarketing();
});

it('Klik na Activity Summary switch', function(){
    account.clickOnWeeklyActivity();
});

it('Klik na Vendor Weekly Digest', function(){
    account.clickOnVendorWeeklyDigest();
});

it('Klik na New Discussion', function(){
    account.clickOnNewDiscussionCXO();
});

it('Izaberi Group Digest', function(){
    account.selectGroupDigestCXO();
});

it('Klik na Save Ntf', function(){
    account.clickOnSaveNtf();
});

it('Klik na Email marketing switch', function(){
    account.clickOnEmailMarketing();
});

it('Klik na Activity Summary switch', function(){
    account.clickOnWeeklyActivity();
});

it('Klik na Vendor Weekly Digest', function(){
    account.clickOnVendorWeeklyDigest();
});

it('Klik na New Discussion', function(){
    account.clickOnNewDiscussionCXO();
});

it('Izaberi NEVER u Group Digest', function(){
    account.selectNeverInGroupDigestCXO();
});

it('Klik na Save Ntf', function(){
    account.clickOnSaveNtf();
});

it('Klik na Avatar tab', function(){
    account.clickOnAvatarTab();
});

it('Upload myphoto to profile picture', function(){
    account.addProfilePhoto();
});

it('Provera da li je save-ovano', function(){
    account.checkSuccessMessageForPhoto();
});

// it('Klik na Email tab', function(){
//     account.clickOnEmailTab();
// });

// it('Unesi novi email', function(){
//     account.insertNewEmail();
// });

// it('Unesi novi email 2', function(){
//     account.insertNewEmail2();
// });

// it('Klik na Change Email btn', function(){
//     account.clickOnChangeEmailBtn();
// });

// it('Unesi prethodni email', function(){
//     account.insertPreviousEmail();
// });

// it('Unesi prethodni email 2', function(){
//     account.insertPreviousEmail2();
// });

// it('Klik na Change Email btn', function(){
//     account.clickOnChangeEmailBtn();
// });

it('Klik na Password tab', function(){
    account.clickOnPasswordTab();
});

it('Klik na Password Reset btn', function(){
    account.clickOnPassResetBtn();
});

it('Provera da li je poslat email za reset pass', function(){
    account.checkSuccessMessageForPassreset();
});

it('Klik na Alerts tab', function(){
    account.clickOnAlertsTab();
});

it('Unosenje My Alerta', function(){
    account.insertMyAlert();
});

it('Klik na Create Alert btn', function(){
    account.clickOnCreateAlertBtn();
});

it('Da li se ucitao alert', function(){
    account.checkIsAlertHere();
});

it('Klik na Delete Alert', function(){
    account.clickOnDeleteAlert();
});

it('Klik na Delete Alert Confirm', function(){
    account.clickOnDeleteAlertConfirm();
});








beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});