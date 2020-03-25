function clickRemoveImage() {
    //  Klik na Remove image
    element(by.buttonText('Remove image')).click();
}

function checkPhotoIsRemoved() {
    // Proverava da li se sklonila slika
    expect(element(by.className('logo_placeholder')).isPresent()).toBe(true);
}

function checkEditImageButton() {
    // Proverava da li se pojavilo EDIT IMAGE dugme
    var xxx = element(by.className('btn btn-flat'));
    expect(xxx.getText()).toEqual('EDIT IMAGE');
}

module.exports = {
    clickRemoveImage,
    checkEditImageButton,
    checkPhotoIsRemoved,
}