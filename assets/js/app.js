//.. Utility functions Start ..//

// Input field validation using regular expression //
function inputValidator(e) {
    const regEx = /[^0-9.]/gi;
    if (regEx.test(e.value)) {
        e.value = (e.value).replace(regEx, '');
    }
}
/* ..................................*/
/* ..................................*/

// parseFloat blending //
function parseBlender(id) {
    const inputField = document.querySelector(id);
    const regEx = /[^0-9.]/gi;
    if (regEx.test(inputField.value)) {
        return '';
    } else {
        return parseFloat(inputField.value);
    }
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
    switch (true) {
        case (isNaN(incomeAmount)):
            setInnerText('#income-error-field', 'Invalid input');
            setInnerTextEmpty('#error-absorber', '#food-error-field', '#rent-error-field', '#clothes-error-field');
            break;
        case (isNaN(foodAmount)):
            setInnerText('#food-error-field', 'Invalid input');
            setInnerTextEmpty('#income-error-field', '#error-absorber', '#rent-error-field', '#clothes-error-field');
            break;
        case (isNaN(rentAmount)):
            setInnerText('#rent-error-field', 'Invalid input');
            setInnerTextEmpty('#income-error-field', '#food-error-field', '#error-absorber', '#clothes-error-field');
            break;
        case (isNaN(clothesAmount)):
            setInnerText('#clothes-error-field', 'Invalid input');
            setInnerTextEmpty('#income-error-field', '#food-error-field', '#rent-error-field', '#error-absorber');
            break;
        default:
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
    expenseCalculator();
    const incomeAmount = parseBlender('#income-input');
    const savingsAmount = parseBlender('#savings-input');
    const totalBalance = parseFloat(balance.innerText);   // Directly captured from dom //
    const totalSavings = incomeAmount * (savingsAmount / 100);
    if (isNaN(savingsAmount)) {  // validation
        setInnerText('#savings-error-field', 'Invalid input');
    } else if (isNaN(incomeAmount)) {  // validation
        setInnerText('#income-error-field', 'Invalid input');
        setInnerTextEmpty('#savings-error-field', '#error-absorber', '#error-absorber', '#error-absorber');
    } else {
        if (totalBalance < totalSavings) {
            if (totalBalance === 0) {  // validation
                setInnerText('#balance', incomeAmount);
                setInnerText('#savings-amount', totalSavings);
                setInnerText('#remaining-balance', incomeAmount - totalSavings);
                setInnerTextEmpty('#income-error-field', '#savings-error-field', '#error-absorber', '#error-absorber');
            } else {
                setInnerText('#savings-amount', totalSavings);
                setInnerText('#remaining-balance', 'Insufficient amount');
                setInnerTextEmpty('#income-error-field', '#error-absorber', '#error-absorber', '#error-absorber');
            }
        } else {
            setInnerText('#savings-amount', totalSavings);
            if (isNaN(totalBalance)) {
                setInnerText('#remaining-balance', 'Insufficient amount');
            } else {
                setInnerText('#remaining-balance', totalBalance - totalSavings);
                setInnerTextEmpty('#savings-error-field', '#income-error-field', '#error-absorber', '#error-absorber');
            }
        }
    }
}
/* .......................................................................*/
/* .......................................................................*/
// ..............Thank You................ //
