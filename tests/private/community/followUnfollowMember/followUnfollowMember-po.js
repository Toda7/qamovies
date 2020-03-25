function landOnMemberProfilePage() {
   // Dolazak na Profile stranu membera
   browser.get('https://qa.cbancnetwork.com/community/users/view/aeaeb491-6e60-4827-84b0-19212d48f189');    
}

function clickFollowButton() {
   // Klik na Follow dugme 
   element(by.buttonText('Follow')).click();    
}

function checkFollowSnackbar() {
   // Provera Snek Bara za Follow
   var foo = element(by.className('snackbar sb_message'));
   expect(foo.getText()).toEqual('You are following Admin User Mandrill.');
   browser.sleep(1000);
}

function clickUnfollowButton() {
   // Klik na Unfollow dugme 
   element(by.buttonText('Unfollow')).click();    
}

function checkUnfollowSnackbar() {
   // Provera Snek Bara za Unfollow
   var foo = element(by.className('snackbar sb_message'));
   expect(foo.getText()).toEqual('You are no longer following Admin User Mandrill.');
   browser.sleep(1000);
}

function checkFollowButton() {
   // Provera da li se na strani vratilo Follow dugme 
   var xxx = element.all(by.className('btn btn-flat')).get(1);
   expect(xxx.getText()).toEqual('FOLLOW');
}

module.exports = {
   landOnMemberProfilePage,
   clickFollowButton,
   checkFollowSnackbar,
   clickUnfollowButton,
   checkUnfollowSnackbar,
   checkFollowButton,
}