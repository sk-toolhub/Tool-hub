// Calculator Functions
function add() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const result = num1 + num2;
    document.getElementById('calcResult').textContent = `Result: ${result}`;
}

function subtract() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const result = num1 - num2;
    document.getElementById('calcResult').textContent = `Result: ${result}`;
}

function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const result = num1 * num2;
    document.getElementById('calcResult').textContent = `Result: ${result}`;
}

function divide() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    if (num2 === 0) {
        document.getElementById('calcResult').textContent = 'Error: Cannot divide by zero';
    } else {
        const result = num1 / num2;
        document.getElementById('calcResult').textContent = `Result: ${result}`;
    }
}

// Unit Converter
function convertUnit() {
    const inputValue = parseFloat(document.getElementById('converterInput').value) || 0;
    const converterType = document.getElementById('converterType').value;
    let result;

    switch(converterType) {
        case 'cmToM':
            result = inputValue / 100;
            break;
        case 'mToCm':
            result = inputValue * 100;
            break;
        case 'kmToM':
            result = inputValue * 1000;
            break;
        default:
            result = inputValue;
    }

    document.getElementById('converterResult').textContent = `Result: ${result}`;
}

// Notes Functions
function saveNotes() {
    const notes = document.getElementById('notes').value;
    localStorage.setItem('savedNotes', notes);
    alert('Notes saved successfully! ✅');
}

function clearNotes() {
    if(confirm('Kya aap sure hain notes delete karne ke liye?')) {
        document.getElementById('notes').value = '';
        localStorage.removeItem('savedNotes');
        alert('Notes cleared! 🗑️');
    }
}

// Load saved notes when page loads
window.onload = function() {
    const savedNotes = localStorage.getItem('savedNotes');
    if (savedNotes) {
        document.getElementById('notes').value = savedNotes;
    }
}
