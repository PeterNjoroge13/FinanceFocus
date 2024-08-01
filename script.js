// JavaScript for handling the interactive elements

// Function to add an expense
function addExpense() {
    // Get values from the form
    const incomeSource = document.getElementById('income-source').value;
    const income = document.getElementById('income').value;
    const expenseCategory = document.getElementById('expense-category').value;
    const expenseAmount = document.getElementById('expense-amount').value;
    const recurringExpense = document.getElementById('recurring-expense').checked;
    
    // Perform any necessary calculations or processing here
    // For now, we'll just display the values
    const resultDiv = document.getElementById('budget-result');
    resultDiv.innerHTML = `
        <h4>Expense Added:</h4>
        <p><strong>Income Source:</strong> ${incomeSource}</p>
        <p><strong>Income:</strong> $${income}</p>
        <p><strong>Expense Category:</strong> ${expenseCategory}</p>
        <p><strong>Expense Amount:</strong> $${expenseAmount}</p>
        <p><strong>Recurring Expense:</strong> ${recurringExpense ? 'Yes' : 'No'}</p>
    `;
}

// Function to calculate the budget
function calculateBudget() {
    // Perform budget calculation here
    // For now, we'll display a placeholder message
    const resultDiv = document.getElementById('budget-result');
    resultDiv.innerHTML = '<p>Budget calculation functionality not implemented.</p>';
}

// Function to plan savings
function planSavings() {
    const savingsGoal = document.getElementById('savings-goal').value;
    const goalDescription = document.getElementById('goal-description').value;
    
    // Display the savings plan
    const resultDiv = document.getElementById('savings-result');
    resultDiv.innerHTML = `
        <h4>Savings Plan:</h4>
        <p><strong>Savings Goal:</strong> $${savingsGoal}</p>
        <p><strong>Goal Description:</strong> ${goalDescription}</p>
    `;
}

// Function to add debt
function addDebt() {
    const debtName = document.getElementById('debt-name').value;
    const debtAmount = document.getElementById('debt-amount').value;
    const debtInterest = document.getElementById('debt-interest').value;
    
    // Display the added debt
    const resultDiv = document.getElementById('debt-result');
    resultDiv.innerHTML = `
        <h4>Debt Added:</h4>
        <p><strong>Debt Name:</strong> ${debtName}</p>
        <p><strong>Debt Amount:</strong> $${debtAmount}</p>
        <p><strong>Interest Rate:</strong> ${debtInterest}%</p>
    `;
}

// Function to calculate loan
function calculateLoan() {
    const loanAmount = document.getElementById('loan-amount').value;
    const interestRate = document.getElementById('interest-rate').value;
    const loanTerm = document.getElementById('loan-term').value;
    
    // Display a placeholder for loan calculation
    const resultDiv = document.getElementById('loan-result');
    resultDiv.innerHTML = `
        <h4>Loan Calculation:</h4>
        <p><strong>Loan Amount:</strong> $${loanAmount}</p>
        <p><strong>Interest Rate:</strong> ${interestRate}%</p>
        <p><strong>Loan Term:</strong> ${loanTerm} years</p>
        <p>Loan calculation functionality not implemented.</p>
    `;
}
