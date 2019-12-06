function landOnFVPage() {
    // Dolazak na home stranu
    browser.get('https://qa.cbancnetwork.com/file_vault/vault/8a1fd448-0185-42bd-bfba-c27c0efa0c71'); 
    browser.sleep(2000);
}

function checkFVTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Title
    browser.wait(EC.titleIs('Dovla FV'), 5000);
}   

function checkHomeLink(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Home link
    browser.wait(EC.textToBePresentInElement($('.side_nav'), 'Home'), 5000);
}   

function checkTaskReportLink(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Task Report link
    browser.wait(EC.textToBePresentInElement($('.side_nav'), 'Task Report'), 5000);
}   

function checkAllActivityLink(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao All Activity link
    browser.wait(EC.textToBePresentInElement($('.side_nav'), 'All Activity'), 5000);
}   

function checkSearchLink(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Search link
    browser.wait(EC.textToBePresentInElement($('.side_nav'), 'Search'), 5000);
}   

function checkAdminlandLink(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Adminland link
    browser.wait(EC.textToBePresentInElement($('.side_nav'), 'Adminland'), 5000);
} 

function clickOnCreatedByMe() {
    element(by.className('row card-tabs', 'Created By Me')).click();
    // klik na Created By Me tab
    browser.sleep(2000);
}

function clickOnAssignedToMe() {
    element(by.className('row card-tabs', 'Assigned To Me')).click();
    // klik na Assigned To Me tab
    browser.sleep(2000);
}

function checkAssignedToMeTasks(){
    var EC = protractor.ExpectedConditions;
    // Provera da li su se ucitali Assigned To Me taskovi
    browser.wait(EC.textToBePresentInElement($('.main_card'), 'Z1'), 5000);}

function clickOnFABButton() {
    // Click to add Space
    element(by.className('btn-floating btn-large blue')).click();
    browser.sleep(2000);
}

function checkAddSpaceForm(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se otvorila Add Space Forma
    browser.wait(EC.textToBePresentInElement($('.space_form'), 'Space Name'), 5000);
}

function insertSpaceName() {
    // Unosenje imena Spacea
    element(by.name('space_name')).sendKeys('Protractor');
    browser.sleep(2000);
}

function clickOnCreateButton() {
    // Click to add Space
    element(by.className('btn-flat right hide-on-small-and-down', 'Create Space')).click();
    browser.sleep(2000);
}

function checkConfirmationCard(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavila confirmation kartica
    browser.wait(EC.textToBePresentInElement($('.main_card'), 'Protractor space was created'), 5000);
}

function clickOnViewSpaceButton() {
    // Click to view Space
    element(by.className('btn btn-flat', 'View Space')).click();
    browser.sleep(2000);
}

function checkIsSpaceAdded() {
    // Provera da li je Space napravljen
    var xxx = element(by.className('col center')).element(by.tagName('h5'));
    expect(xxx.getText()).toEqual('Protractor');
 }

function clickOnAddButton() {
    // Click to get options
    element(by.className('btn-floating btn-large')).click();
    browser.sleep(2000);
}

function checkForOptionOne(){
    // Provera da li se pojavila opcija jedan - create task
    var xxx = element(by.className('btn-floating create_task')).element(by.tagName('i'));
    expect(xxx.getText()).toEqual('assignment_turned_in');
}

function checkForOptionTwo(){
    // Provera da li se pojavila druga opcija - attach file
    var xxx = element(by.className('btn-floating create_doc')).element(by.tagName('i'));    // Provera da li su pojavila druga opcija - create doc
    expect(xxx.getText()).toEqual('attach_file');
}

function checkForOptionThree(){
    // Provera da li su pojavila treca opcija - add user
    var xxx = element(by.className('btn-floating add_user')).element(by.tagName('i'));    // Provera da li su pojavila druga opcija - create doc
    expect(xxx.getText()).toEqual('person_outline');
}

function clickOnTaskButton() {
    // Click to get options
    element(by.className('btn-floating create_task')).click();
    browser.sleep(5000);
}

function insertTaskTitle() {
    // Unosenje Task Title-a
    element(by.name('title')).sendKeys('Protractor Task 1');
    browser.sleep(2000);
}

function clickToAssign() {
    // Click to assign
    element(by.className('search_field autocomplete assignees')).click();
    browser.sleep(5000);
}

function clickOnUser() {
    // Klik na usera
    element(by.className('dropdown-content collection dropdown_show')).click();
    browser.sleep(5000);
}

function clickOnDateField() {
    // Klik na polje za datum
    element(by.className('input-field due_date')).click();
    browser.sleep(5000);
}

function clickToSelectDate() {
    // Izaberi datum
    element(by.className('edp-column edp-day-number edp-day-number-selected edp-day-number-today')).click();
    browser.sleep(5000);
}

function clickToConfirmDate() {
    // Klik na OK
    element(by.className('edp-body-section edp-bottom-section'), 'OK').click();
    browser.sleep(5000);
}

//function clickOnDescriptionField() {
    // Klik na Description polje
    //element(by.className('html_editor')).click();
    //browser.sleep(5000);
//}

//function insertDescText() {
    // Unosenje Description texta
    //element(by.className('html_editor')).sendKeys('Protractor Description text 1');
    //browser.sleep(5000);
//}

function clickOnCreateTask() {
    // Klik na Create Task
    element(by.buttonText('Create Task')).click();
    browser.sleep(5000);
}

function clickOnCreateDoc() {
    // Click na Create Doc
    element(by.className('btn-floating create_doc')).click();
    browser.sleep(5000);
}

function clickOnCreateCBArticle() {
    // Click na Create Article
    element(by.buttonText('Create KB Article')).click();
    browser.sleep(2000);
}

function insertDocTitle() {
    // Unosenje Doc Title-a
    element(by.name('title')).sendKeys('Protractor Doc 1');
    browser.sleep(2000);
}

function clickOnCreateCBArticleBtn() {
    // Click na Create Article Dugme
    element(by.className('btn-flat right hide-on-small-and-down'), 'Create Document').click();
    browser.sleep(2000);
}

function clickOnCheckMark() {
    // Click na Check Mark
    element(by.className('back')).click();
    browser.sleep(5000);
}

function checkActivityTab(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je Activity tab tu
    browser.wait(EC.textToBePresentInElement($('.card-tabs'), 'ACTIVITY'), 5000);
}

function checkTaskTab(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je Task tab tu
    browser.wait(EC.textToBePresentInElement($('.card-tabs'), 'TASKS'), 5000);
}

function clickOnSpaceInHeader() {
    // Click na Space u header-u
    element(by.className('pt_text truncate'), 'Protractor').click();
    browser.sleep(5000);
}

function clickOnAddUser() {
    // Click na Add User
    element(by.className('btn-floating add_user')).click();
    browser.sleep(5000);
}

function checkSpaceUsers(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je Space Users tab tu
    browser.wait(EC.textToBePresentInElement($('.card-tabs'), 'SPACE USERS'), 5000);
}

function checkAvailableUsers(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je Available Users tab tu
    browser.wait(EC.textToBePresentInElement($('.card-tabs'), 'AVAILABLE USERS'), 5000);
}

function clickOnAvailableUsers() {
    // Click na Available Users
    element(by.className('card-tabs', 'Available Users')).click();
    browser.sleep(5000);
}

function clickToSelectUser() {
    // Click na Usera
    element(by.className('person_icon', 'Vlada Drobnyak')).click();
    browser.sleep(5000);
}

function clickToAddUser() {
    // Click da dodas User
    element(by.className('valign-wrapper dropdown-button', 'Add User')).click();
    browser.sleep(5000);
}

function clickToConfirmAdding() {
    // Click da potvrdis dodavanje Usera
    element(by.className('btn-flat right', 'Ok')).click();
    browser.sleep(5000);
}

function checkIsUserAdded(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je User dodat
    browser.wait(EC.textToBePresentInElement($('div.collection-item.avatar.user_item'), 'Vlada Drobnyak'), 5000);
}

function clickOnTaskReport() {
    // Click na Task Report
    element(by.partialLinkText('Task Report')).click();
    browser.sleep(5000);
}

function clickOnAllTasks() {
    // Click na Task Report
    element(by.className('tab', 'All Tasks')).click();
    browser.sleep(5000);
}

function checkIsItURLAllTasks() {
    // Provera da li se ucitao All Tasks URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/file_vault/vault/8a1fd448-0185-42bd-bfba-c27c0efa0c71/tasks?s=all&q='), 5000);
}

function insertTaskNameInAllTasks() {
    // Trazenje taska u All Tasks 
    element(by.name('q')).sendKeys('Protractor');
    browser.sleep(5000);
}

function checkIsItTaskShows() {
    // Provera da li se pojavio task sa trazenim imenom
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.collection-item.avatar.task_item'), 'Protractor Task 1'), 5000);
}

 function clickOnX() {
    // Click na X
    element(by.className('clear_search enabled', 'close')).click();
    browser.sleep(5000);
}

function clickOnOpenTasks() {
    // Click na Open Task Report
    element(by.css('.tabs.tabs-fixed-width')).all(by.tagName('li')).get(1).click();     
    browser.sleep(5000);
}

function checkIsItURLOpenTasks() {
    // Provera da li se ucitao Open Tasks URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/file_vault/vault/8a1fd448-0185-42bd-bfba-c27c0efa0c71/tasks?s=open&q='), 5000);
}

function insertTaskNameInOpenTasks() {
    // Trazenje taska u Open Tasks 
    element(by.name('q')).sendKeys('Protractor');
    browser.sleep(5000);
}

function checkIsItOpenTaskShows() {
    // Provera da li se pojavio task sa trazenim imenom
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.collection-item.avatar.task_item'), 'Protractor Task 1'), 5000);
}

function clickOnCompletedTasks() {
    // Click na Task Report
    element(by.css('.tabs.tabs-fixed-width')).all(by.tagName('li')).get(2).click();
    browser.sleep(5000);
}

function checkIsItURLCompletedTasks() {
    // Provera da li se ucitao Completed Tasks URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/file_vault/vault/8a1fd448-0185-42bd-bfba-c27c0efa0c71/tasks?s=done&q='), 5000);
}

function insertTaskNameInCompletedTasks() {
    // Trazenje taska u Completed Tasks 
    element(by.name('q')).sendKeys('Z1');
    browser.sleep(5000);
}

function checkIsItCompletedTaskShows() {
    // Provera da li se pojavio task sa trazenim imenom
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.collection-item.avatar.task_item'), 'Z1'), 5000);
}

function clickOnAllActivity() {
    // Click na All Activity
    element(by.partialLinkText('All Activity')).click();
    browser.sleep(5000);
}

function checkAllActivityList() {
    // Provera All Activity liste
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.text_content'), 'Chicago Alberto Diaz FI'), 5000);
}

function clickOnSearch() {
    // Click na Search
    element(by.partialLinkText('Search')).click();
    browser.sleep(5000);
}

function insertTxtInSearch() {
    // Unosenje txt-a u search polje
    element(by.name('q')).sendKeys('Z1');
    browser.sleep(5000);
}

function checkSearchResult() {
    // Provera da li je search rezultat dobar
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.collection-item.avatar.task_item'), 'Z1'), 5000);
}

function clickOnAdminland() {
    // Click na Adminland
    element(by.partialLinkText('Adminland')).click();
    browser.sleep(5000);
}

function checkAdminlandURL() {
    // Provera da li se ucitao Adminland URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/file_vault/vault/8a1fd448-0185-42bd-bfba-c27c0efa0c71/users'), 5000);
}

function clickOnAddUserButton() {
    // Click na Add User dugme
    element(by.className('btn-floating btn-large blue')).click();
    browser.sleep(5000);
}

function insertEmailInSearchUserField() {
    // Unosenje user emaila u search polje
    element(by.name('q')).sendKeys('1@austin.com');
    browser.sleep(5000);
}

function clickOnPlus() {
    // Click na +
    element(by.className('btn-flat secondary-content')).click();
    browser.sleep(5000);
}

function clickOnOk() {
    // Click da potvrdis dodavanje Usera
    element(by.className('btn-flat right', 'Ok')).click();
    browser.sleep(5000);
}

function clickOnAddedUser() {
    // Click na upravo dodatog Usera
    element(by.className('person_icon', 'Austin Numero Uno User FI org')).click();
    browser.sleep(5000);
}

function clickOnThreeDots() {
    // Click da potvrdis dodavanje Usera
    element(by.className('page_menu')).click();
    browser.sleep(5000);
}

function clickOnRemoveUser() {
    // Click da removujes usera
    element(by.className('dropdown-content z-depth-3 expanded')).all(by.className('collection-item')).get(2).click();
    browser.sleep(5000);
}

function clickOnOkToRemove() {
    // Click da potvrdis remove Usera
    element(by.className('btn-flat right', 'Ok')).click();
    browser.sleep(5000);
}

function checkIsUserThere(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je User u listi
    browser.wait(EC.textToBePresentInElement($('div.user_item.collection-item.avatar'), 'Austin Numero Uno User FI org'), 5000);
}

function clickOnProtractorSpace() {
    // Click na Protractor space
    element(by.partialLinkText('Protractor')).click();
    browser.sleep(5000);
}

function clickOnTrashCan() {
    // Click na Trash Can
    element(by.className('page_menu', 'Delete Space')).click();
    browser.sleep(5000);
}

function clickToConfirmDeleting() {
    // Click na YES da potvrdis brisanje spacea
    element(by.className('btn-flat right', 'Yes')).click();
    browser.sleep(5000);
}

function checkIsSpaceDeleted(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je Space obrisan
    browser.wait(EC.textToBePresentInElement($('div.col.center'), 'The space "Protractor" has been deleted.'), 5000);
}


























module.exports = {
    landOnFVPage,
    checkFVTitleOnPage,
    checkHomeLink,
    checkTaskReportLink,
    checkAllActivityLink,
    checkSearchLink,
    checkAdminlandLink,
    clickOnCreatedByMe,
    clickOnAssignedToMe,
    checkAssignedToMeTasks,
    clickOnFABButton,
    checkAddSpaceForm,
    insertSpaceName,
    clickOnCreateButton,
    checkConfirmationCard,
    clickOnViewSpaceButton,
    checkIsSpaceAdded,
    clickOnAddButton,
    checkForOptionOne,
    checkForOptionTwo,
    checkForOptionThree,
    clickOnTaskButton,
    insertTaskTitle,
    clickToAssign,
    clickOnUser,
    clickOnDateField,
    clickToSelectDate,
    clickToConfirmDate,
    //clickOnDescriptionField,
    //insertDescText,
    clickOnCreateTask,
    clickOnCreateDoc,
    clickOnCreateCBArticle,
    insertDocTitle,
    clickOnCreateCBArticleBtn,
    clickOnCheckMark,
    checkActivityTab,
    checkTaskTab,
    clickOnSpaceInHeader,
    clickOnAddUser,
    checkSpaceUsers,
    checkAvailableUsers,
    clickOnAvailableUsers,
    clickToSelectUser,
    clickToAddUser,
    clickToConfirmAdding,
    checkIsUserAdded,
    clickOnTaskReport,
    clickOnAllTasks,
    checkIsItURLAllTasks,
    insertTaskNameInAllTasks,
    checkIsItTaskShows,
    clickOnX,
    clickOnOpenTasks,
    checkIsItURLOpenTasks,
    insertTaskNameInOpenTasks,
    checkIsItOpenTaskShows,
    clickOnCompletedTasks,
    checkIsItURLCompletedTasks,
    insertTaskNameInCompletedTasks,
    checkIsItCompletedTaskShows,
    clickOnAllActivity,
    checkAllActivityList,
    clickOnSearch,
    insertTxtInSearch,
    checkSearchResult,
    clickOnAdminland,
    checkAdminlandURL,
    clickOnAddUserButton,
    insertEmailInSearchUserField,
    clickOnPlus,
    clickOnOk,
    clickOnAddedUser,
    clickOnThreeDots,
    clickOnRemoveUser,
    clickOnOkToRemove,
    checkIsUserThere,
    clickOnProtractorSpace,
    clickOnTrashCan,
    clickToConfirmDeleting,
    checkIsSpaceDeleted,
    



}