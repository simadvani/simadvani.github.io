function validatePhoneNumber() {
    const phoneNumber = document.getElementById('phone').value;
    const errorMessage = document.getElementById('error-message');

    // Check if the input is empty or contains non-numeric characters
    if (!phoneNumber || isNaN(phoneNumber)) {
        errorMessage.classList.remove('hidden');
    } else {
        errorMessage.classList.add('hidden');
        // Simulate frustration by delaying the success message
        setTimeout(() => alert('Phone number successfully entered!'), 2000);
    }
}
