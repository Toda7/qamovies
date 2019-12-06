
var file_vault = require('./fileVault-po.js');

describe('File Vault', function(){


it('Dolazak na FV stranu', function(){
    file_vault.landOnFVPage();
});

it('Provera dal se ucitao FV title on page', function(){
    file_vault.checkFVTitleOnPage();
});

it('Provera dal se ucitao home link on page', function(){
    file_vault.checkHomeLink();
});

it('Provera da li se ucitao Task Report link', function(){
    file_vault.checkTaskReportLink();
});

it('Provera da li se ucitao All Activity link', function(){
    file_vault.checkAllActivityLink();
});

it('Provera da li se ucitao Search link', function(){
    file_vault.checkSearchLink();
});

it('Provera da li se ucitao Adminland link', function(){
    file_vault.checkAdminlandLink();
});

it('Klik na Created By Me', function(){
    file_vault.clickOnCreatedByMe();
});

it('Klik na Assigned To Me', function(){
    file_vault.clickOnAssignedToMe();
});

it('Provera da li su se ucitali Assigned To Me taskovi', function(){
    file_vault.checkAssignedToMeTasks();
});

it('Klik na FAB button', function(){
    file_vault.clickOnFABButton();
});

it('Provera da li se otvorila Add Space Forma', function(){
    file_vault.checkAddSpaceForm();
});

it('Unesi ime Spacea', function(){
    file_vault.insertSpaceName();
});

it('Klik na Create button', function(){
    file_vault.clickOnCreateButton();
});

it('Provera da li se pojavila confirmation kartica', function(){
    file_vault.checkConfirmationCard();
});

it('Klik na View Space', function(){
    file_vault.clickOnViewSpaceButton();
});

it('Provera da li je Space napravljen', function(){
    file_vault.checkIsSpaceAdded();
});

it('Klik na Add Button', function(){
    file_vault.clickOnAddButton();
});

it('Provera da li se pojavila prva opcija - create task', function(){
    file_vault.checkForOptionOne();
});

it('Provera da li se pojavila druga opcija - attach file', function(){
    file_vault.checkForOptionTwo();
});

it('Provera da li se pojavila treca opcija - add user', function(){
    file_vault.checkForOptionThree();
});

it('Klik na Task Button', function(){
    file_vault.clickOnTaskButton();
});

it('Insert Task Title', function(){
    file_vault.insertTaskTitle();
});

it('Klik na Assign To', function(){
    file_vault.clickToAssign();
});

it('Klik na Usera', function(){
    file_vault.clickOnUser();
});

it('Klik na Polje za Datum', function(){
    file_vault.clickOnDateField();
});

it('Izaberi Datum', function(){
    file_vault.clickToSelectDate();
});

it('Klik na OK', function(){
    file_vault.clickToConfirmDate();
});

//it('Klik na Description polje', function(){
    //file_vault.clickOnDescriptionField();
//});

//it('Unesi Neki Description Text', function(){
    //file_vault.insertDescText();
//});

it('Klik na Create Task', function(){
    file_vault.clickOnCreateTask();
});

it('Klik na Add Button', function(){
    file_vault.clickOnAddButton();
});

it('Klik na Create Doc', function(){
    file_vault.clickOnCreateDoc();
});

it('Klik na Create Article', function(){
    file_vault.clickOnCreateCBArticle();
});

it('Insert Doc Title', function(){
    file_vault.insertDocTitle();
});

it('Klik na Create Article Dugme', function(){
    file_vault.clickOnCreateCBArticleBtn();
});

it('Klik na Check Mark', function(){
    file_vault.clickOnCheckMark();
});

it('Provera da li je Activity tab tu', function(){
    file_vault.checkActivityTab();
});

it('Provera da li je Task tab tu', function(){
    file_vault.checkTaskTab();
});

it('Klik na Space u Headeru', function(){
    file_vault.clickOnSpaceInHeader();
});

it('Klik na Add Button', function(){
    file_vault.clickOnAddButton();
});

it('Klik na Add User', function(){
    file_vault.clickOnAddUser();
});

it('Provera da li je Space Users tab tu', function(){
    file_vault.checkSpaceUsers();
});

it('Provera da li je Available Users tab tu', function(){
    file_vault.checkAvailableUsers();
});

it('Klik na Available Users', function(){
    file_vault.clickOnAvailableUsers();
});

it('Klik na Usera', function(){
    file_vault.clickToSelectUser();
});

it('Klik da dodas Usera', function(){
    file_vault.clickToAddUser();
});

it('Klik da potvrdis dodavanje Usera', function(){
    file_vault.clickToConfirmAdding();
});

it('Provera da li je User dodat', function(){
    file_vault.checkIsUserAdded();
});

it('Klik na Task Report', function(){
    file_vault.clickOnTaskReport();
});

it('Klik na All Tasks', function(){
    file_vault.clickOnAllTasks();
});

it('Provera da li se ucitao All Tasks URL', function(){
    file_vault.checkIsItURLAllTasks();
});

it('Unesi ime taska koji trazimo u All Tasks', function(){
    file_vault.insertTaskNameInAllTasks();
});

it('Provera da li se pojavio task sa trazenim imenom', function(){
    file_vault.checkIsItTaskShows();
});

it('Klik na X', function(){
    file_vault.clickOnX();
});

it('Klik na Open Tasks', function(){
    file_vault.clickOnOpenTasks();
});

it('Provera da li se ucitao Open Tasks URL', function(){
    file_vault.checkIsItURLOpenTasks();
});

it('Unesi ime taska koji trazimo u Open Tasks', function(){
    file_vault.insertTaskNameInOpenTasks();
});

it('Provera da li se pojavio task sa trazenim imenom', function(){
    file_vault.checkIsItOpenTaskShows();
});

it('Klik na X', function(){
    file_vault.clickOnX();
});

it('Klik na Completed Tasks', function(){
    file_vault.clickOnCompletedTasks();
});

it('Provera da li se ucitao Completed Tasks URL', function(){
    file_vault.checkIsItURLCompletedTasks();
});

it('Unesi ime taska koji trazimo u Completed Tasks', function(){
    file_vault.insertTaskNameInCompletedTasks();
});

it('Provera da li se pojavio task sa trazenim imenom', function(){
    file_vault.checkIsItCompletedTaskShows();
});

it('Klik na All Activity', function(){
    file_vault.clickOnAllActivity();
});

it('Provera All Activity liste', function(){
    file_vault.checkAllActivityList();
});

it('Klik na Search', function(){
    file_vault.clickOnSearch();
});

it('Unosenje txt-a u search polje', function(){
    file_vault.insertTxtInSearch();
});

it('Provera da li je search rezultat dobar', function(){
    file_vault.checkSearchResult();
});

it('Klik na Adminland', function(){
    file_vault.clickOnAdminland();
});

it('Provera da li se ucitao Adminland URL', function(){
    file_vault.checkAdminlandURL();
});

it('Klik na Add User dugme', function(){
    file_vault.clickOnAddUserButton();
});

it('Unosenje user emaila u search polje', function(){
    file_vault.insertEmailInSearchUserField();
});

it('Klik na +', function(){
    file_vault.clickOnPlus();
});

it('Klik na OK', function(){
    file_vault.clickOnOk();
});

it('Klik na Adminland', function(){
    file_vault.clickOnAdminland();
});

it('Klik na upravo dodatog usera', function(){
    file_vault.clickOnAddedUser();
});

it('Klik na Three dots menu', function(){
    file_vault.clickOnThreeDots();
});

it('Klik da removujes usera', function(){
    file_vault.clickOnRemoveUser();
});

it('Klik da potvrdis remove usera', function(){
    file_vault.clickOnOkToRemove();
});

it('Klik na Add User dugme', function(){
    file_vault.clickOnAddUserButton();
});

it('Unosenje user emaila u search polje', function(){
    file_vault.insertEmailInSearchUserField();
});

it('Provera da li je obrisani user u listi', function(){
    file_vault.checkIsUserThere();
});

it('Klik na Protractor space', function(){
    file_vault.clickOnProtractorSpace();
});

it('Klik na Trash Can', function(){
    file_vault.clickOnTrashCan();
});

it('Klik na YES da potvrdis brisanje spacea', function(){
    file_vault.clickToConfirmDeleting();
});

it('Provera da li je Space obrisan', function(){
    file_vault.checkIsSpaceDeleted();
});















beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});