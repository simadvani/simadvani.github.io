let phoneNumber = '';

function addNumber(num) {
    phoneNumber += num;
    updateInput();
}

function clearInput() {
    phoneNumber = '';
    updateInput();
}

function updateInput() {
    // Format the phone number with hyphens after every third character
    const formattedNumber = phoneNumber.match(/.{1,3}/g).join('-');
    document.getElementById('phone-input').value = formattedNumber;
}


function submitPhoneNumber() {
    alert("Phone number submitted successfully!\nBut you won't get any calls because this is a fake example.");
    clearInput();
}
