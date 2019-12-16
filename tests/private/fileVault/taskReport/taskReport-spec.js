var taskReport = require('./taskReport-po.js');

describe('Task Report', function(){

it('Klik na Task Report', function(){
    taskReport.clickOnTaskReport();
});

it('Klik na All Tasks', function(){
    taskReport.clickOnAllTasks();
});

it('Provera da li se ucitao All Tasks URL', function(){
    taskReport.checkIsItURLAllTasks();
});

it('Unesi ime taska koji trazimo u All Tasks', function(){
    taskReport.insertTaskNameInAllTasks();
});

it('Provera da li se pojavio task sa trazenim imenom', function(){
    taskReport.checkIsItTaskShows();
});

it('Klik na X', function(){
    taskReport.clickOnX();
});

it('Klik na Open Tasks', function(){
    taskReport.clickOnOpenTasks();
});

it('Provera da li se ucitao Open Tasks URL', function(){
    taskReport.checkIsItURLOpenTasks();
});

it('Unesi ime taska koji trazimo u Open Tasks', function(){
    taskReport.insertTaskNameInOpenTasks();
});

it('Provera da li se pojavio task sa trazenim imenom', function(){
    taskReport.checkIsItOpenTaskShows();
});

it('Klik na X', function(){
    taskReport.clickOnX();
});

it('Klik na Completed Tasks', function(){
    taskReport.clickOnCompletedTasks();
});

it('Provera da li se ucitao Completed Tasks URL', function(){
    taskReport.checkIsItURLCompletedTasks();
});

it('Unesi ime taska koji trazimo u Completed Tasks', function(){
    taskReport.insertTaskNameInCompletedTasks();
});

it('Provera da li se pojavio task sa trazenim imenom', function(){
    taskReport.checkIsItCompletedTaskShows();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});