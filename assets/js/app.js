const totalExpensesField = document.querySelector('#total-expenses');
const balance = document.querySelector('#balance');

function expenseCalculator() {
    const incomeAmount = parseBlender('#income');
    const foodAmount = parseBlender('#food');
    const rentAmount = parseBlender('#rent');
    const clothesAmount = parseBlender('#clothes');
    if (isNaN(incomeAmount) || incomeAmount < 0) {
        ExpenseErrorHandler('#income');
    } else if (isNaN(foodAmount) || foodAmount < 0) {
        ExpenseErrorHandler('#food');
    } else if (isNaN(rentAmount) || rentAmount < 0) {
        ExpenseErrorHandler('#rent');
    } else if (isNaN(clothesAmount) || clothesAmount < 0) {
        ExpenseErrorHandler('#clothes');
    } else {
        const totalExpenses = foodAmount + rentAmount + clothesAmount;
        const remainingBalance = incomeAmount - totalExpenses;
        if (totalExpenses > incomeAmount) {
            balance.innerText = 'Over expenses';
        } else {
            balance.innerText = remainingBalance;
        }
        totalExpensesField.innerText = totalExpenses;
        document.querySelector('#income-error-field').innerText = '';
        document.querySelector('#food-error-field').innerText = '';
        document.querySelector('#rent-error-field').innerText = '';
        document.querySelector('#clothes-error-field').innerText = '';
    }
}

// expense error handle function
function ExpenseErrorHandler(errorName) {
    document.querySelector(errorName + '-error-field').innerText = 'Enter any number';
    totalExpensesField.innerText = '';
    balance.innerText = '';
}

// parseFloat blending function
function parseBlender(inputName) {
    const inputField = document.querySelector(inputName + '-input');
    return parseFloat(inputField.value);
}



function savingsCalculator() {
    const incomeAmount = parseBlender('#income');
    const savingsAmount = parseBlender('#savings');
    const totalBalance = parseFloat(balance.innerText);
    const totalSavings = incomeAmount * (savingsAmount / 100);
    if (isNaN(savingsAmount) || savingsAmount < 0) {
        document.querySelector('#savings-error-field').innerText = 'Enter any number';
    } else if (isNaN(incomeAmount) || incomeAmount < 0) {
        document.querySelector('#savings-error-field').innerText = '';
        document.querySelector('#income-error-field').innerText = 'Enter any number';
    } else {
        if (totalBalance < totalSavings) {
            if (totalBalance === 0) {
                document.querySelector('#savings-amount').innerText = totalSavings;
                document.querySelector('#remaining-balance').innerText = incomeAmount - totalSavings;
                document.querySelector('#income-error-field').innerText = '';
                document.querySelector('#savings-error-field').innerText = '';
            } else {
                document.querySelector('#savings-amount').innerText = totalSavings;
                document.querySelector('#remaining-balance').innerText = 'Not enough money to save';
                document.querySelector('#income-error-field').innerText = '';
            }
        } else {
            document.querySelector('#savings-amount').innerText = totalSavings;
            document.querySelector('#remaining-balance').innerText = totalBalance - totalSavings;
            document.querySelector('#savings-error-field').innerText = '';
            document.querySelector('#income-error-field').innerText = '';
        }
    }
}
