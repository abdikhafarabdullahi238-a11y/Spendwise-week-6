# SpendWise Budget Tracker - Week 6

Interactive personal budget tracker built with HTML, CSS and JavaScript. This week I made SpendWise interactive and dynamic.

## Improvements Made This Week
This week I improved SpendWise from a static design to a fully interactive application. I added JavaScript logic to add expenses dynamically, calculate total spending, check remaining balance, and show budget status in real-time without reloading the page. Previously it was static HTML, now it is fully dynamic.

## How Conditionals Are Used
I used conditional logic (if/else) to check budget status. In script.js, I used `if(balance >= 0)` to check if the user is within budget and show "Within Budget" message, else I show "Overspent" warning. I also used `if(expenseName === "" || isNaN(expenseAmount))` to validate empty inputs and provide appropriate feedback based on user data.

## How Arrays Are Used
I used arrays to store and manage expense information rather than relying on individual variables. I created `let expenses = []` as an array of objects. Each expense is an object like `{name: "Rent", amount: 5000}`. When user clicks Add Expense, I push new object to array using `expenses.push()`. This array stores all multiple expense records.

## How The DOM Is Updated
I update the DOM to display information directly on the webpage rather than only in the browser console. I clear the expense list with `expenseList.innerHTML = ""` then use a `for...of` loop to create `li` elements with `document.createElement("li")` and append them with `appendChild`. I also update results section using `resultDiv.innerHTML` to show total, balance and status dynamically.

## How Events Are Handled
I handle user interactions through event listeners to allow users to interact through buttons and forms. I used `addEventListener("click")` for Add Expense button (`addBtn`) to add new expense to array and update dashboard, and for Calculate Budget button (`calculateBtn`) to calculate total using loops. This demonstrates how user actions trigger JavaScript logic, update data, and display results on the page.

## Challenges and Solutions
Challenge 1: My total was not calculating - I fixed it by using `for(let i=0; i<expenses.length; i++)` loop to sum all amounts correctly.
Challenge 2: Expense list was duplicating - I fixed it by clearing with `innerHTML = ""` before looping.
Challenge 3: GitHub branch error when editing files online - I fixed it by uploading files directly from main branch and ensuring repository is public.

## Expected Deliverable Checklist
- Make decisions using conditional statements: YES - if/else
- Store multiple expense records using arrays: YES - expenses array
- Process records using loops: YES - for and for...of
- Update dashboard content dynamically: YES - innerHTML
- Respond to user interactions: YES - addEventListener
- Display information directly on the webpage: YES
- Demonstrate clear flow between user actions and application updates: YES

## How To Run
1. Enter Monthly Budget (KSH)
2. Enter Expense Name
3. Enter Amount KSH
4. Click Add Expense - expense appears in list
5. Click Calculate Budget to see Total, Balance, Status

## Technologies
- HTML5
- CSS3
- JavaScript (Vanilla) - Conditionals, Arrays, Loops, DOM Manipulation, Event Handling