const inputPassword = document.querySelector('#inputPassword');
const inputLength = document.querySelector('#inputLength');
const labelLength = document.querySelector('label[for="inputLength"]');
const btnGenerate = document.querySelector('#generate');
const checkNumber = document.querySelector('#checkNumber');
const checkUppercaseLett = document.querySelector('#checkUppercaseLett');
const checkLowercaseLett = document.querySelector('#checkLowercaseLett');
const checkSymbols = document.querySelector('#checkSymbols');

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "&", "%"];

const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const lowerCaseCaracters = caracters.map((item) => String.fromCharCode(item));
const upperCaseCaracters = lowerCaseCaracters.map((item) => item.toUpperCase());

labelLength.innerHTML = inputLength.value;
inputLength.addEventListener("change", () => {
    labelLength.innerHTML = inputLength.value
});

btnGenerate.addEventListener("click", () => {
    generatePassword(
        checkNumber.checked,
        checkSymbols.checked,
        checkLowercaseLett.checked,
        checkUppercaseLett.checked,
        inputLength.value,
    );
});

const generatePassword = (
    hasNumbers,
    hasSymbols,
    hasLowercase,
    hasUppercase,
    lenght
) => {
    const newArray = [
        ...(hasNumbers ? numbers : []),
        ...(hasSymbols ? symbols : []),
        ...(hasLowercase ? lowerCaseCaracters : []),
        ...(hasUppercase ? upperCaseCaracters : []),
    ];

    if (newArray.length === 0) return;
    
    let password = "";

    for (let i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * newArray.length)
        password += newArray[randomIndex]
    }

    inputPassword.value = password
};
