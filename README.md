# React useEffect Cleanup Function Missing
This repository demonstrates a common error in React's `useEffect` hook: forgetting to include a cleanup function to prevent memory leaks. Specifically, a `setInterval` is started but not cleared when the component unmounts or updates, which can cause unexpected behavior.

## Bug Description:
The `setInterval` inside the `useEffect` hook continues to run even after the component is unmounted. This leads to memory leaks and potential performance issues. The solution demonstrates how to correctly use cleanup functions to prevent such issues.

## How to Reproduce:
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the count increasing every second. Even after navigating away from the component, the count continues to increase in the background, indicating a memory leak.

## Solution:
The `useEffect` hook should always include a cleanup function (returned as the result of the effect) if it starts timers or performs any side effects that need to be cleaned up when the component is unmounted. In this example, the `setInterval` is cleared using `clearInterval` within the cleanup function.