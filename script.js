let expenses = [];

// DOM Elements
const budgetInput = document.getElementById("budget");
const nameInput = document.getElementById("expenseName");
const amountInput = document.getElementById("expenseAmount");
const addBtn = document.getElementById("addBtn");
const calcBtn = document.getElementById("calculateBtn");
const expenseList = document.getElementById("expenseList");
const resultDiv = document.getElementById("result");

// 4. Handle User Interactions + 5. DOM - Event listeners
addBtn.addEventListener("click", function() {
    const expenseName = nameInput.value.trim();
    const expenseAmount = parseFloat(amountInput.value);

    // 1. Implement Decision Making - Conditional statements
    if (expenseName === "" || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert("Please enter valid expense name and amount");
        return;
    } else {
        // 2. Work with Multiple Records - Use arrays to store
        expenses.push({ name: expenseName, amount: expenseAmount });
        nameInput.value = "";
        amountInput.value = "";
        displayExpenses();
    }
});

// Update Dashboard Dynamically - DOM Manipulation
function displayExpenses() {
    expenseList.innerHTML = "";
    // 3. Process Data with Loops
    for (let exp of expenses) {
        const li = document.createElement("li");
        li.textContent = `${exp.name}: KSH ${exp.amount}`;
        expenseList.appendChild(li);
    }
}

calcBtn.addEventListener("click", function() {
    const budget = parseFloat(budgetInput.value);
    if (isNaN(budget) || budget <= 0) {
        alert("Enter valid budget");
        return;
    }

    let total = 0;
    // 3. Process Data with Loops - for loop
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    const balance = budget - total;
    let status = "";
    // 1. Decision Making - evaluate budgeting scenarios
    if (balance >= 0) {
        status = "Within Budget - Good job!";
    } else {
        status = "Overspent! Reduce expenses.";
    }

    // 4. Update Dashboard Dynamically - display on webpage
    resultDiv.innerHTML = `
        <p>Total Expenses: KSH ${total}</p>
        <p>Balance: KSH ${balance}</p>
        <p>Status: ${status}</p>
    `;
});