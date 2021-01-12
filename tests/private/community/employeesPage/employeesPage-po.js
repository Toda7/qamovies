function clickOnEmployeesLink() {
    // Klik on EMPLOYEES link
    element(by.buttonText('Employees')).click();
}

function checkFirstUserFromTheList() {
    //  Provera da li se ucitao prvi user u employees list
    var foo = element(by.className('collection-item avatar'));
     expect(foo.getText()).toEqual('VPP+VCA User Mandrill\nchat');
} 

function checkSecondUserFromTheList() {
    //  Provera da li se ucitao drugi user u employees list
    var foo = element.all(by.className('collection-item avatar')).get(1);
     expect(foo.getText()).toEqual('VPP User Mandrill\nchat');
} 

function checkThirdUserFromTheList() {
    //  Provera da li se ucitao treci user u employees list
    var foo = element.all(by.className('collection-item avatar')).get(2);
     expect(foo.getText()).toEqual('Admin User Mandrill\nQA\nchat');
} 

function checkFourthUserFromTheList() {
    //  Provera da li se ucitao cetvrti user u employees list
    var foo = element.all(by.className('collection-item avatar')).get(3);
     expect(foo.getText()).toEqual('Regular User Mandrill\nchat');
} 

function checkFifthUserFromTheList() {
    //  Provera da li se ucitao peti user u employees list
    var foo = element.all(by.className('collection-item avatar')).get(4);
     expect(foo.getText()).toEqual('VCA User Mandrill\n232\nchat');
} 

function count5Users() {
    // Provera da li se na strani nalazi 5 usera
    let list = element.all(by.css('.collection .collection-item.avatar'));
    expect(list.count()).toBe(5);
}

function clickOnFirstUserFromEmployeesList() {
    // Klik na prvog usera sa liste zaposlenih
    element(by.partialLinkText('VPP+VCA User Mandrill')).click();
}

function checkVendorOrgLinkOnUserDetails() {
    //  Provera da li se ucitao profile section 
    var foo = element(by.className('content'));
     expect(foo.getText()).toEqual('VPP+VCA User Mandrill\naccount_balance\nVendor Mandrill\nlocation_on\nTC\nstars\nReputation Score: 1\nshow_chart\nIn top of 99% of CBANC Members\npie_chart\nMoved up 0 spots this week');                          
} 

function checkVendorsGroupLink() {
    //  Provera da li se ucitao vendors link grupe
    var foo = element(by.className('title'));
     expect(foo.getText()).toEqual('Vendors');
} 

 module.exports = {
    clickOnEmployeesLink,
    checkFirstUserFromTheList,
    clickOnFirstUserFromEmployeesList,
    count5Users,
    checkSecondUserFromTheList,
    checkThirdUserFromTheList,
    checkFourthUserFromTheList,
    checkFifthUserFromTheList,
    checkVendorOrgLinkOnUserDetails,
    checkVendorsGroupLink,
}