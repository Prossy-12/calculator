let display = document.getElementById('display');

//function for clearing the display
function clearDisplay() {
    display.textContent = '0';
}

//function for attaching characters to the display
function attachCharacter(character) {
    if (display.textContent === '0') {
        display.textContent = character;
    } else {
        display.textContent += character;
    }
}

//function that calculators what is in the display
 function calculate(){
    try {
       display.textContent=eval(display. textContent) 
    } catch {
       display.textContent='oops,couldnt calculate' 
    }
 }
