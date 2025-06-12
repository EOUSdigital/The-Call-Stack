//TODO 📚 Module 4 - Lesson 13.01: The Call Stack


//TODO  🚀 Step 1: Explore the Topic — The Call Stack

//* 🔰 Concise Summary
//  The Call Stack is a fundamental data structure used by the JavaScript engine to manage the order of function execution. It works like a stack of plates — last in, first out (LIFO) — where each function call is added to the top of the stack, and removed once it is completed.


//* 🧠 Key Concepts
//  1. Stack Behavior (LIFO)
//      • The most recently invoked function sits at the top of the stack.
//      • As functions finish, they are popped off, and control returns to the function below.

//  2. Function Invocation and Return
//      • When a function is called: it is pushed onto the stack.
//      • When it completes: it is popped off the stack.

//  3. Single Threaded Execution
//  JavaScript executes one task at a time — the stack only processes one function context at a time.

//  4. Stack Trace (Debugging Insight)
//  When an error occurs, JavaScript logs a trace of the call stack so developers can see exactly how the code flowed before the failure.

//  5. Stack Overflow
//  If too many functions are added without being popped (e.g., infinite recursion), the stack exceeds its limit, causing a stack overflow error.


//* 🔍 Call Stack vs Execution Context
//  • The call stack manages the order of execution contexts.
//  • Each execution context contains the details of what the function is doing (variables, this, scope, etc.).

//* 💡 Exploration Prompts
//  • "What happens to the call stack when a deeply nested function throws an error?"
//! Answer: If a function throws an error, the call stack helps trace back to where the error originated.

//  • "Why is the stack emptied after setTimeout, even if the delay is 0?"
//! Answer: This is because even though setTimeout was called with a delay of zero, it's placed on a queue and scheduled to run at the next opportunity, not immediately. Currently, executing code must complete before functions on the queue are executed; thus, the resulting execution order may not be as expected.

//  • "How could recursive code break the stack?"
//! Answer: Recursion allocates a function's variables on the stack every time a recursive call is made, and then all of those variables get popped off the stack in rapid succession once the base case is reached.


//TODO  🌍 Step 2: Real-World Examples — The Call Stack

//* ✅ 1. Event Listeners Triggering Chains of Functions
//  Scenario: A user clicks a button that calls handleClick(), which in turn calls fetchUserData(), which calls formatData().

//  Stack Flow:
//  • Global → handleClick() → fetchUserData() → formatData()
//  • As each function completes, it is popped off the stack in reverse order.
//? 🔎 If an error occurs in formatData(), the stack trace helps pinpoint it by showing the chain of calls.

//! Code

// Event Listener triggers handleClick()
document.getElementById('fetchBtn').addEventListener('click', handleClick);

function handleClick() {
    console.log('Button clicked');
    fetchUserData();
}

function fetchUserData() {
    // Simulate fetching user data
    const userData = { name: "Alice", age: 30 };
    console.log('User data fetched:', userData);
    formatData(userData);
}

function formatData(data) {
    // Let's introduce an error for demonstration
    if (!data.email) {
        throw new Error("Email is missing in user data!");
    }
    // Format data (not reached if error is thrown)
    return `${data.name} (${data.email})`;
}

// Optional: Catch errors globally to display stack trace
window.addEventListener('error', function(e) {
    console.error("Global Error Handler:", e.error);
});

// ---------------------------------------------

//* ✅ 2. Console Stack Trace in Error Debugging
//  Scenario: We see this error in DevTools:

//!  Uncaught TypeError: Cannot read properties of undefined
//                      at processData (app.js:22)
//                      at fetchData (app.js:15)
//                      at loadPage (app.js:9)

//? 🔁 That is the call stack trace at the moment the error was thrown. We can follow the function call chain in reverse order to debug effectively.

//! Code

function loadPage() {
    fetchData();
}

function fetchData() {
    // Simulate a failed data fetch (undefined instead of an object)
    const data = undefined;
    processData(data);
}

function processData(obj) {
    // This line will throw: Cannot read properties of undefined (reading 'name')
    console.log(obj.name);
}

//  Start the chain
loadPage();

// ---------------------------------------------

//* ✅ 3. Recursion in DOM Tree Traversal
//  Scenario: A recursive function walks through every node in a nested DOM structure.

//  • Every recursive call is added to the stack.
//  • If the base case is not properly defined, this can lead to:
//      > ❌ Stack overflow
//      > 💥 Browser crash or halt due to memory exhaustion

//! Code

// Recursive DOM Traversal Example

function traverseDOM(node) {
    // Process the current node (for example, log its tag name)
    console.log(node.tagName);

    // Recursively process each child node
    for (let child of node.children) {
    traverseDOM(child);
    }
}

// Start traversal from the <body> element
traverseDOM(document.body);

// ---------------------------------------------

//* ✅ 4. setTimeout Misconception
//  Scenario:

console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");

//  🧠 Even though the delay is 0, B logs after C. Why?
//? ➡️ Because setTimeout does not go onto the call stack immediately. It is queued for later by the Web API + Event Loop, and only runs after the current stack is empty.


//TODO  ❓ Step 3: Quiz Questions

//? 1. What happens when a function is invoked in JavaScript?
//  A. It is queued until the call stack is empty
//  B. It is added to the top of the call stack
//  C. It is ignored if the stack is full
//  D. It is merged with the global context

//! Answer: B

//? 2. What does the term “LIFO” refer to in relation to the call stack?
//  A. Last In, First Out
//  B. Load In, Fast Out
//  C. Local Instance Function Optimization
//  D. Limit In Function Operation

//! Answer: A

//? 3. What causes a “stack overflow” in JavaScript?
//  A. Too many event listeners
//  B. An infinite loop
//  C. An API call failure
//  D. Excessive function calls without exiting

//! Answer: D

//? 4. Which of the following is true about `setTimeout(..., 0)`?
//  A. It is placed at the top of the call stack
//  B. It blocks the stack until executed
//  C. It runs immediately after it’s defined
//  D. It runs after the current call stack is clear

//! Answer: D

//? 5. What does a stack trace help a developer understand?
//  A. How much memory is being used
//  B. Which files need to be compiled
//  C. The order of function calls before an error
//  D. Which variables are in global scope

//! Answer: C
