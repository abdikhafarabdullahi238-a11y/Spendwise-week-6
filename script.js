// 2. STORE APPLICATION DATA - Variables for budgeting
let monthlyIncome = 0;
let expense1 = 0;
let expense2 = 0;
let expense3 = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// 5. CREATE REUSABLE FUNCTIONS

// Function to collect user input
function collectUserInput() {
    monthlyIncome = parseFloat(prompt("Enter your monthly income:"));
    let expenseName1 = prompt("Enter first expense name (e.g., Rent):");
    expense1 = parseFloat(prompt(Enter amount for ${expenseName1}:));
    
    let expenseName2 = prompt("Enter second expense name (e.g., Food):");
    expense2 = parseFloat(prompt(Enter amount for ${expenseName2}:));
    
    let expenseName3 = prompt("Enter third expense name (e.g., Transport):");
    expense3 = parseFloat(prompt(Enter amount for ${expenseName3}:));

    // Store names for display
    return { expenseName1, expenseName2, expenseName3 };
}

// Function for calculations
function calculateBudget() {
    totalExpenses = expense1 + expense2 + expense3;
    remainingBalance = monthlyIncome - totalExpenses;
    return { totalExpenses, remainingBalance };
}

// Function to display results
function displayResults(data) {
    console.log("====== SpendWise Budget Report ======");
    console.log(Monthly Income: $${monthlyIncome});
    console.log(${data.expenseName1}: $${expense1});
    console.log(${data.expenseName2}: $${expense2});
    console.log(${data.expenseName3}: $${expense3});
    console.log(Total Expenses: $${totalExpenses});
    console.log(Remaining Balance: $${remainingBalance});
    
    if (remainingBalance < 0) {
        console.log("Warning: You are overspending!");
    } else {
        console.log("Great! You are within budget.");
    }
    console.log("=====================================");

    // Also display on page
    document.getElementById("result").innerHTML = `
        <h3>Budget Summary</h3>
        <p><strong>Income:</strong> $${monthlyIncome}</p>
        <p><strong>Total Expenses:</strong> $${totalExpenses}</p>
        <p><strong>Remaining:</strong> $${remainingBalance}</p>
    `;
}

// Main function - connects everything
function startBudgetApp() {
    let names = collectUserInput();
    calculateBudget();
    displayResults(names);
}

// Auto-start when page loads for console testing
console.log("SpendWise loaded! Click 'Start Budgeting' button or call startBudgetApp() in console.");
