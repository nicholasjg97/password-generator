// make the console clear on every refresh
console.clear();

//------PASSWORD SLIDER PROPERTIES--------//

// select the password length slider container which will effect the length property of the password
//-- const slider = document.querySelector();

// text which will be the value of the range slider
//-- const sliderValue = document.querySelector();

// use event listener to change value of text and fill slider
//-- slider.querySelector( 'input' ).addEventListener( 'input', event => {
//        sliderValue.setAttribute ( 'length', event.target.value);
//          applyFill( event.target);
// });

// the applyFill FUNCTION
function applyFill ( slider ) {
    const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
    sliderValue.setAttribute( 'length', sliderValue);
}

// selecting range and passing it through a applyFill function
// applyFill(slider.querySelector( 'input' ));

// Const of names we will use to create random letters of passwords
const randomLetter = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

//------ Generator Functions --------//

// function getRandomLower () {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber() {
//      return String.fromCharCode(Math.floor(secureMathRandom() * 10 + 48);
// }

// function getRandomSymbol() {
//     const symbols = '~!@#$%^&*()_+{}":?<>;.,';
//     return symbols[Math.floor(Math.random() * symbols.length)];
// }

// ---- Selecting DOM elements required ------ //

// const resultFin =