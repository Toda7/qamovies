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

module.exports = {
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
   
   }