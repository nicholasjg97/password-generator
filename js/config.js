// make the console clear on every refresh
console.clear();

//------PASSWORD SLIDER PROPERTIES--------//

// select the password length slider container which will effect the length property of the password
const slider = $(".length-slider");

// text which will be the value of the range slider
const sliderValue = $(".length-title");

// use event listener to change value of text and fill slider
slider.querySelector( 'input' ).addEventListener( 'input', event =>
{ sliderValue.setAttribute ( "length", event.target.value);
    applyFill(event.target);
});

// the applyFill FUNCTION
function applyFill ( slider ) {
    const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
    sliderValue.setAttribute( 'length', sliderValue);
}

// selecting range and passing it through a applyFill function
applyFill(slider.querySelector( 'input' ));

// Const of names we will use to create random letters of passwords
const randomLetter = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

//------ Generator Functions --------//

function getRandomLower () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '~!@#$%^&*()_+{}":?<>;.,';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// ---- Selecting DOM elements required ------ //

// Result of random password
const resultFin = $("result");
// Input slider used to change length of password
const lengthPass = $("slider");

// Settings - checkboxes
const uppercaseFin = $("uppercase");
const lowercaseFin = $("lowercase");
const numberFin = $("number");
const symbolFin = $("symbol");

// Button to generate password
const generateBttn = $("generate");

// Result viewbox
const resultView = $(".result");


// When generator button is pushed
generateBttn.addEventListener("click", () => {
    const length = lengthPass.value;
    const incLower = lowercaseFin.checked;
    const incUpper = uppercaseFin.checked;
    const incNumber = numberFin.checked;
    const incSymbol = symbolFin.checked;
    resultFin.innerText = generatePassword(length, incLower, incUpper, incNumber, incSymbol);
});

// Function responsible for generating password

function generatePassword (length, lower, upper, number, symbol) {

    let generatedPW = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    if (typesCount === 0) {
        return "";
    }
    for (let i = 0; i < length; i++) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatePassword += randomFunc[funcName]();
        });
    }
    return generatePassword.slice(0, length);
}

// Make sure one checkbox is only selected

function oneCheckboxOnly () {

    let totalCheck = [uppercaseFin, lowercaseFin, numberFin, symbolFin].filter(fin => fin.checked)
    totalCheck.forEach(fin => {
        if (totalCheck.length == 1) {
            fin.disabled = true;
        } else {
            fin.disabled = false;
        }
    })
};

[uppercaseFin, lowercaseFin, numberFin, symbolFin].forEach(fin => {
    fin.addEventListener("click", () => {
        disableOnlyCheckBox()
    })
})