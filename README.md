SpendWise - JavaScript Foundation
What your SpendWise project does
SpendWise is a simple budget tracking application that helps users manage their monthly income and expenses. It collects income and three expense items from the user, calculates total expenses and remaining balance, and warns if the user is overspending.

The JavaScript concepts implemented
Variables (let)
Data Types (Number, String)
User Input (prompt)
Calculations (arithmetic operators)
Functions (reusable functions)
Conditional Logic (if/else)
Console Output (console.log)
DOM Manipulation (getElementById)
How variables are being used
monthlyIncome: Stores user's monthly income
expense1, expense2, expense3: Store individual expense amounts
totalExpenses: Stores sum of all expenses
remainingBalance: Stores income minus expenses
Variables use let and are parsed to float for calculations.
How user input is collected
User input is collected through JavaScript prompt() dialogs. The app asks for monthly income and three expense names with their amounts. Inputs are converted from string to numbers using parseFloat() for accurate calculations.

How calculations are performed
Calculations use arithmetic operators:

Total Expenses = expense1 + expense2 + expense3
Remaining Balance = monthlyIncome - totalExpenses These are done inside the calculateBudget() function.
How functions help organize the code
Functions separate concerns:

collectUserInput() - Handles all input collection
calculateBudget() - Handles only math logic
displayResults() - Handles output to console and page
startBudgetApp() - Main controller that calls other functions in order This makes code reusable, readable, and easy to maintain.
