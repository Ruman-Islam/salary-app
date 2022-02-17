//.. Utility functions Start ..//

// parseFloat blending function //
function parseBlender(id) {
    const inputField = document.querySelector(id);
    return parseFloat(inputField.value);
}
/* ..................................*/
/* ..................................*/

// Function to Empty Inner Texts //
function setInnerTextEmpty(idOne, idTwo, idThree, idFour) {  // This is a very much dynamic function to set value at same time //
    document.querySelector(idOne).innerText = '';
    document.querySelector(idTwo).innerText = '';
    document.querySelector(idThree).innerText = '';
    document.querySelector(idFour).innerText = '';
}
/* ..................................*/
/* ..................................*/

// Function to Set any kind of value as inner text //
function setInnerText(id, value) {
    document.querySelector(id).innerText = value;
}
/* ..................................*/
/* ..................................*/

//.... Utility Functions End.... //


// ....Total Expenses Calculation... //
function expenseCalculator() {
    const incomeAmount = parseBlender('#income-input');
    const foodAmount = parseBlender('#food-input');
    const rentAmount = parseBlender('#rent-input');
    const clothesAmount = parseBlender('#clothes-input');
    if (isNaN(incomeAmount) || incomeAmount < 0) {
        if (incomeAmount < 0) {
            setInnerText('#income-error-field', 'Negative number');
        } else {  // validation
            setInnerText('#income-error-field', 'Invalid input');
        }
    } else if (isNaN(foodAmount) || foodAmount < 0) {
        if (foodAmount < 0) {
            setInnerText('#food-error-field', 'Negative number');
        } else {  // validation
            setInnerText('#food-error-field', 'Invalid input');
        }
    } else if (isNaN(rentAmount) || rentAmount < 0) {
        if (rentAmount < 0) {
            setInnerText('#rent-error-field', 'Negative number');
        } else {  // validation
            setInnerText('#rent-error-field', 'Invalid input');
        }
    } else if (isNaN(clothesAmount) || clothesAmount < 0) {
        if (clothesAmount < 0) {
            setInnerText('#clothes-error-field', 'Negative number');
        } else {  // validation
            setInnerText('#clothes-error-field', 'Invalid input');
        }
    } else {
        const totalExpenses = foodAmount + rentAmount + clothesAmount;
        if (totalExpenses > incomeAmount) {
            setInnerText('#balance', 'Over expenses');
        } else {  // validation
            setInnerText('#balance', incomeAmount - totalExpenses);
        }
        setInnerText('#total-expenses', totalExpenses);
        setInnerTextEmpty('#income-error-field', '#food-error-field', '#rent-error-field', '#clothes-error-field');
    }
}
/* .......................................................................*/
/* .......................................................................*/



//.... Savings Calculation...... //
function savingsCalculator() {
    const incomeAmount = parseBlender('#income-input');
    const savingsAmount = parseBlender('#savings-input');
    const totalBalance = parseFloat(balance.innerText);   // Directly captured from dom //
    const totalSavings = incomeAmount * (savingsAmount / 100);
    if (isNaN(savingsAmount) || savingsAmount < 0) {
        if (savingsAmount < 0) {
            setInnerText('#savings-error-field', 'Negative number');
        } else {  // validation
            setInnerText('#savings-error-field', 'Invalid input');
        }
    } else if (isNaN(incomeAmount) || incomeAmount < 0) {
        if (incomeAmount < 0) {
            setInnerText('#income-error-field', 'Negative number');
            setInnerTextEmpty('#savings-error-field', '#error-absorber', '#error-absorber', '#error-absorber');
        } else {  // validation
            setInnerText('#income-error-field', 'Invalid input');
            setInnerTextEmpty('#savings-error-field', '#error-absorber', '#error-absorber', '#error-absorber');
        }
    } else {
        if (totalBalance < totalSavings) {
            if (totalBalance === 0) {  // validation
                setInnerText('#balance', incomeAmount);
                setInnerText('#savings-amount', totalSavings);
                setInnerText('#remaining-balance', incomeAmount - totalSavings);
                setInnerTextEmpty('#income-error-field', '#savings-error-field', '#error-absorber', '#error-absorber');
            } else {
                setInnerText('#savings-amount', totalSavings);
                setInnerText('#remaining-balance', 'Not enough money');
                setInnerTextEmpty('#income-error-field', '#error-absorber', '#error-absorber', '#error-absorber');
            }
        } else {
            setInnerText('#savings-amount', totalSavings);
            setInnerText('#remaining-balance', totalBalance - totalSavings);
            setInnerTextEmpty('#savings-error-field', '#income-error-field', '#error-absorber', '#error-absorber');
        }
    }
}
/* .......................................................................*/
/* .......................................................................*/
// ..............Thank You................ //