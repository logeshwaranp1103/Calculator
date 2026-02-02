// ==================== CALCULATOR CLASS ====================
class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
        this.shouldResetScreen = false;
    }

    delete() {
        if (this.currentOperand === '0') return;
        if (this.currentOperand.length === 1) {
            this.currentOperand = '0';
        } else {
            this.currentOperand = this.currentOperand.slice(0, -1);
        }
    }

    appendNumber(number) {
        // Reset screen if needed (after operation)
        if (this.shouldResetScreen) {
            this.currentOperand = '0';
            this.shouldResetScreen = false;
        }

        // Prevent multiple decimal points
        if (number === '.' && this.currentOperand.includes('.')) return;
        
        // Replace initial zero unless adding decimal
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number;
        } else {
            this.currentOperand += number;
        }
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        
        // If there's a previous operation, calculate it first
        if (this.previousOperand !== '') {
            this.compute();
        }
        
        this.operation = operation;
        this.previousOperand = this.currentOperand + ' ' + operation;
        this.shouldResetScreen = true;
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                if (current === 0) {
                    alert('Cannot divide by zero!');
                    this.clear();
                    this.updateDisplay();
                    return;
                }
                computation = prev / current;
                break;
            default:
                return;
        }
        
        // Round to avoid floating point errors
        computation = Math.round(computation * 100000000) / 100000000;
        
        this.currentOperand = computation.toString();
        this.operation = undefined;
        this.previousOperand = '';
        this.shouldResetScreen = true;
    }

    percentage() {
        const current = parseFloat(this.currentOperand);
        if (isNaN(current)) return;
        this.currentOperand = (current / 100).toString();
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            });
        }
        
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandElement.textContent = this.getDisplayNumber(this.currentOperand);
        this.previousOperandElement.textContent = this.previousOperand;
    }
}

// ==================== INITIALIZATION ====================
const previousOperandElement = document.getElementById('previousOperand');
const currentOperandElement = document.getElementById('currentOperand');
const calculator = new Calculator(previousOperandElement, currentOperandElement);

// ==================== EVENT LISTENERS ====================

// Number buttons
const numberButtons = document.querySelectorAll('[data-number]');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.dataset.number);
        calculator.updateDisplay();
        addButtonAnimation(button);
    });
});

// Operator buttons
const operatorButtons = document.querySelectorAll('[data-operator]');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.dataset.operator);
        calculator.updateDisplay();
        addButtonAnimation(button);
    });
});

// Equals button
const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
    addButtonAnimation(equalsButton);
});

// Clear button
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
    addButtonAnimation(clearButton);
});

// Delete button
const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
    addButtonAnimation(deleteButton);
});

// Percentage button
const percentButton = document.getElementById('percent');
percentButton.addEventListener('click', () => {
    calculator.percentage();
    calculator.updateDisplay();
    addButtonAnimation(percentButton);
});

// ==================== KEYBOARD SUPPORT ====================
document.addEventListener('keydown', (e) => {
    // Numbers and decimal
    if ((e.key >= '0' && e.key <= '9') || e.key === '.') {
        calculator.appendNumber(e.key);
        calculator.updateDisplay();
        highlightButton(`[data-number="${e.key}"]`);
    }
    
    // Operators
    if (e.key === '+' || e.key === '-') {
        calculator.chooseOperation(e.key);
        calculator.updateDisplay();
        highlightButton(`[data-operator="${e.key}"]`);
    }
    
    if (e.key === '*') {
        calculator.chooseOperation('×');
        calculator.updateDisplay();
        highlightButton(`[data-operator="×"]`);
    }
    
    if (e.key === '/') {
        e.preventDefault(); // Prevent browser search
        calculator.chooseOperation('÷');
        calculator.updateDisplay();
        highlightButton(`[data-operator="÷"]`);
    }
    
    // Equals
    if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculator.compute();
        calculator.updateDisplay();
        highlightButton('#equals');
    }
    
    // Clear
    if (e.key === 'Escape' || e.key.toLowerCase() === 'c') {
        calculator.clear();
        calculator.updateDisplay();
        highlightButton('#clear');
    }
    
    // Delete/Backspace
    if (e.key === 'Backspace' || e.key === 'Delete') {
        calculator.delete();
        calculator.updateDisplay();
        highlightButton('#delete');
    }
    
    // Percentage
    if (e.key === '%') {
        calculator.percentage();
        calculator.updateDisplay();
        highlightButton('#percent');
    }
});

// ==================== HELPER FUNCTIONS ====================
function addButtonAnimation(button) {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = '';
    }, 100);
}

function highlightButton(selector) {
    const button = document.querySelector(selector);
    if (button) {
        addButtonAnimation(button);
    }
}

// ==================== INITIAL DISPLAY ====================
calculator.updateDisplay();
