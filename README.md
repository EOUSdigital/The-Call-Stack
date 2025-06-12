# Lesson 13: The Call Stack

This lesson explores how the JavaScript call stack works as the core mechanism for managing function execution. You’ll learn how stack frames are created and removed, how recursion can lead to stack overflow, and how to read stack traces during debugging.

---

## ✅ Step 1: Explore the Topic

### Key Concepts

- **Call Stack**: A LIFO (Last In, First Out) structure that tracks function calls and manages execution order.
- **Execution Context**: Each function call creates its own execution context which is pushed to the stack.
- **Single Threaded**: JavaScript runs one command at a time via this stack — no true parallel execution.
- **Stack Overflow**: Too many unresolved function calls (e.g., infinite recursion) exceed stack limits.
- **Stack Trace**: When an error is thrown, JavaScript shows a trace of the functions on the call stack at that point.

---

## 🌍 Step 2: Real-World Examples

1. **Event Listeners Triggering Function Chains**
   - Shows the stacking and unstacking of handlers in response to user events.

2. **Console Stack Trace in Error Debugging**
   - Error messages show the exact order of nested function calls before failure.

3. **Recursion in DOM Tree Traversal**
   - Demonstrates how deep recursion can exhaust stack memory.

4. **setTimeout Execution Delay**
   - Even `setTimeout(..., 0)` is delayed until the call stack is clear.

---

## ❓ Step 3: Quiz Questions

1. What happens when a function is invoked in JavaScript?  
A. It is queued until the call stack is empty  
B. It is added to the top of the call stack  
C. It is ignored if the stack is full  
D. It is merged with the global context  

2. What does the term “LIFO” refer to in relation to the call stack?  
A. Last In, First Out  
B. Load In, Fast Out  
C. Local Instance Function Optimization  
D. Limit In Function Operation  

3. What causes a “stack overflow” in JavaScript?  
A. Too many event listeners  
B. An infinite loop  
C. An API call failure  
D. Excessive function calls without exiting  

4. Which of the following is true about `setTimeout(..., 0)`?  
A. It is placed at the top of the call stack  
B. It blocks the stack until executed  
C. It runs immediately after it’s defined  
D. It runs after the current call stack is clear  

5. What does a stack trace help a developer understand?  
A. How much memory is being used  
B. Which files need to be compiled  
C. The order of function calls before an error  
D. Which variables are in global scope  

---

Use this file as a reference to reinforce and  understand of the call stack.
