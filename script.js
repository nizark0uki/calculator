function clearDisplay() {
    document.getElementById('display').value = "";
}

function backSpace(){
    var display = document.getElementById('display');
    display.value = display.value.substring(0,display.value.length-1);
}

function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
}
    
function calculateResult() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}