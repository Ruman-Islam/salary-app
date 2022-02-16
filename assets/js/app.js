const calculateButton = document.querySelector('#calculate');
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
    const rentAmount = parseFloat(foodInput.value);
    const clothesAmount = parseFloat(foodInput.value);
    const totalExpenses = foodAmount + rentAmount + clothesAmount;
    const remainingBalance = incomeAmount - totalExpenses;
    totalExpensesField.innerText = totalExpenses;
    balance.innerText = remainingBalance;
});