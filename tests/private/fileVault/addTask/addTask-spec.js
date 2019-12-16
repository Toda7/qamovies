var addTask = require('./addTask-po.js');

describe('Pravljenje Taska-a', function(){

    it('Klik na Add Button', function(){
        addTask.clickOnAddButton();
    });
    
    it('Provera da li se pojavila prva opcija - create task', function(){
        addTask.checkForOptionOne();
    });
    
    it('Provera da li se pojavila druga opcija - attach file', function(){
        addTask.checkForOptionTwo();
    });
    
    it('Provera da li se pojavila treca opcija - add user', function(){
        addTask.checkForOptionThree();
    });
    
    it('Klik na Task Button', function(){
        addTask.clickOnTaskButton();
    });
    
    it('Insert Task Title', function(){
        addTask.insertTaskTitle();
    });
    
    it('Klik na Assign To', function(){
        addTask.clickToAssign();
    });
    
    it('Klik na Usera', function(){
        addTask.clickOnUser();
    });
    
    it('Klik na Polje za Datum', function(){
        addTask.clickOnDateField();
    });
    
    it('Izaberi Datum', function(){
        addTask.clickToSelectDate();
    });
    
    it('Klik na OK', function(){
        addTask.clickToConfirmDate();
    });
    
    //it('Klik na Description polje', function(){
        //addTask.clickOnDescriptionField();
    //});
    
    //it('Unesi Neki Description Text', function(){
        //addTask.insertDescText();
    //});
    
    it('Klik na Create Task', function(){
        addTask.clickOnCreateTask();
    });

    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });
    });