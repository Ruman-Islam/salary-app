const calculateButton = document.querySelector('#calculate-button');
const savingsButton = document.querySelector('#savings-button');
const incomeInput = document.querySelector('#income-input');
const foodInput = document.querySelector('#food-input');
const rentInput = document.querySelector('#rent-input');
const clothesInput = document.querySelector('#clothes-input');
const savingsInput = document.querySelector('#savings-input');
const totalExpensesField = document.querySelector('#total-expenses');
const balance = document.querySelector('#balance');


calculateButton.addEventListener('click', function () {
    const incomeAmount = parseFloat(incomeInput.value);
    const foodAmount = parseFloat(foodInput.value);
    const rentAmount = parseFloat(rentInput.value);
    const clothesAmount = parseFloat(clothesInput.value);
    if (isNaN(incomeAmount) || incomeAmount < 0) {
        document.querySelector('#income-error-field').innerText = 'Enter any number';
        totalExpensesField.innerText = '';
        balance.innerText = '';
    } else if (isNaN(foodAmount) || foodAmount < 0) {
        document.querySelector('#food-error-field').innerText = 'Enter any number';
        totalExpensesField.innerText = '';
        balance.innerText = '';
    } else if (isNaN(rentAmount) || rentAmount < 0) {
        document.querySelector('#rent-error-field').innerText = 'Enter any number';
        totalExpensesField.innerText = '';
        balance.innerText = '';
    } else if (isNaN(clothesAmount) || clothesAmount < 0) {
        document.querySelector('#clothes-error-field').innerText = 'Enter any number';
        totalExpensesField.innerText = '';
        balance.innerText = '';
    } else {
        const totalExpenses = foodAmount + rentAmount + clothesAmount;
        const remainingBalance = incomeAmount - totalExpenses;
        if (totalExpenses > incomeAmount) {
            totalExpensesField.innerText = totalExpenses;
            balance.innerText = 'Over expenses';
        } else {
            totalExpensesField.innerText = totalExpenses;
            balance.innerText = remainingBalance;
        }
        document.querySelector('#income-error-field').innerText = '';
        document.querySelector('#food-error-field').innerText = '';
        document.querySelector('#rent-error-field').innerText = '';
        document.querySelector('#clothes-error-field').innerText = '';
    }
});


savingsButton.addEventListener('click', function () {
    const incomeAmount = parseFloat(incomeInput.value);
    const savingsAmount = parseFloat(savingsInput.value);
    const totalBalance = parseFloat(balance.innerText);
    const savings = savingsAmount / 100;
    const totalSavings = incomeAmount * savings;
    if (totalBalance < totalSavings) {
        document.querySelector('#savings-amount').innerText = totalSavings;
        document.querySelector('#remaining-balance').innerText = 'Not enough money to save';
    } else {
        document.querySelector('#savings-amount').innerText = totalSavings;
        document.querySelector('#remaining-balance').innerText = totalBalance - totalSavings;
    }
});