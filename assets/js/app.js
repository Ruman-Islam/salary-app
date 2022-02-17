// Utility functions Start //
// parseFloat blending function
function parseBlender(id) {
    const inputField = document.querySelector(id);
    return parseFloat(inputField.value);
}

// Function of empty inner texts
function setInnerTextEmpty(idOne, idTwo, idThree, idFour) {
    document.querySelector(idOne).innerText = '';
    document.querySelector(idTwo).innerText = '';
    document.querySelector(idThree).innerText = '';
    document.querySelector(idFour).innerText = '';
}

// Function of set any kind of value as inner text
function setInnerText(id, value) {
    document.querySelector(id).innerText = value;
}
// Utility functions End //


// Total expenses calculation
function expenseCalculator() {
    const incomeAmount = parseBlender('#income-input');
    const foodAmount = parseBlender('#food-input');
    const rentAmount = parseBlender('#rent-input');
    const clothesAmount = parseBlender('#clothes-input');
    if (isNaN(incomeAmount) || incomeAmount < 0) {
        setInnerText('#income-error-field', 'Enter any number');
    } else if (isNaN(foodAmount) || foodAmount < 0) {
        setInnerText('#food-error-field', 'Enter any number');
    } else if (isNaN(rentAmount) || rentAmount < 0) {
        setInnerText('#rent-error-field', 'Enter any number');
    } else if (isNaN(clothesAmount) || clothesAmount < 0) {
        setInnerText('#clothes-error-field', 'Enter any number');
    } else {
        const totalExpenses = foodAmount + rentAmount + clothesAmount;
        if (totalExpenses > incomeAmount) {
            setInnerText('#balance', 'Over expenses');
        } else {
            setInnerText('#balance', incomeAmount - totalExpenses);
        }
        setInnerText('#total-expenses', totalExpenses);
        setInnerTextEmpty('#income-error-field', '#food-error-field', '#rent-error-field', '#clothes-error-field');
    }
}

// Savings Calculation
function savingsCalculator() {
    const incomeAmount = parseBlender('#income-input');
    const savingsAmount = parseBlender('#savings-input');
    const totalBalance = parseFloat(balance.innerText);
    const totalSavings = incomeAmount * (savingsAmount / 100);
    if (isNaN(savingsAmount) || savingsAmount < 0) {
        setInnerText('#savings-error-field', 'Enter any number');
    } else if (isNaN(incomeAmount) || incomeAmount < 0) {
        setInnerText('#income-error-field', 'Enter any number');
        setInnerTextEmpty('#savings-error-field', '#error-absorber', '#error-absorber', '#error-absorber');
    } else {
        if (totalBalance < totalSavings) {
            if (totalBalance === 0) {
                setInnerText('#balance', incomeAmount);
                setInnerText('#savings-amount', totalSavings);
                setInnerText('#remaining-balance', incomeAmount - totalSavings);
                setInnerTextEmpty('#income-error-field', '#savings-error-field', '#error-absorber', '#error-absorber');
            } else {
                setInnerText('#savings-amount', totalSavings);
                setInnerText('#remaining-balance', 'Not enough money to save');
                setInnerTextEmpty('#income-error-field', '#error-absorber', '#error-absorber', '#error-absorber');
            }
        } else {
            setInnerText('#savings-amount', totalSavings);
            setInnerText('#remaining-balance', totalBalance - totalSavings);
            setInnerTextEmpty('#savings-error-field', '#income-error-field', '#error-absorber', '#error-absorber');
        }
    }
}
