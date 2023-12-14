function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function setRandomPositions() {
    const buttons = document.querySelectorAll('.button-container button');

    buttons.forEach(button => {
        const containerWidth = window.innerWidth - button.clientWidth;
        const containerHeight = window.innerHeight - button.clientHeight;

        const randomX = getRandomNumber(0, 1000);
        const randomY = getRandomNumber(0, 500);

        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    });
}


function floatButtons() {
    const buttons = document.querySelectorAll('.button-container button');

    buttons.forEach(button => {
        const randomX = getRandomNumber(0, 100);
        const randomY = getRandomNumber(0, 100);
        const scale = getRandomNumber(1,3);
        const rotation = getRandomNumber(0,360);
        

        button.style.transform = `translate(${randomX}px, ${randomY}px) scale(${scale}) rotate(${rotation}deg)`;
    });

    setTimeout(floatButtons, 1000); 
}




window.addEventListener('load', function () {
    setRandomPositions();
    floatButtons();
});


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
    const formattedNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    document.getElementById('phone-input').value = formattedNumber;
}

function submitPhoneNumber() {
    alert("Phone number submitted successfully!\nBut you won't get any calls because this is a fake example.");
    clearInput();
}
