# React Basics & Hello World App

## 📘 Introduction

This project is a simple React application that displays a "Hello World" message. It also includes detailed information on fundamental React concepts such as JSX, Virtual DOM, differences between frameworks, and project setup.

---

## 📌 Topics Covered

### 1. What is React?

React is an open-source JavaScript library used to build user interfaces, particularly for single-page applications. It allows developers to create reusable UI components and efficiently update the UI based on state changes.

**Key Features:**

* Component-based architecture
* Virtual DOM
* Declarative UI
* Unidirectional data flow
* React Hooks

---

### 2. Virtual DOM vs Actual DOM

In React, the DOM (Document Object Model) is a structured representation of the HTML elements in a web page or application. It organizes the UI as a tree-like structure, where each node represents an element or component.

**Actual DOM:**

* The real Document Object Model directly rendered and manipulated in the browser.
* It is a actual representation of a webpage.
* It re-renders the entire pages.
* It Suitable for static websites.

**Virtual DOM:**

* A lightweight JavaScript object copy of the real DOM.
* Used by React to track changes and update only the necessary parts of the UI efficiently.
* Ideal and good for dynamic and complex Single page application.

| Feature      | Virtual DOM                        | Actual DOM                           |
| ------------ | ---------------------------------- | ------------------------------------ |
| Type         | JavaScript Object                  | Browser API                          |
| Speed        | Faster updates via diffing         | Slower as it updates whole tree      |
| Efficiency   | Efficient with large-scale changes | Less efficient with frequent changes |
| Usage        | Used in libraries like React       | Used in frameworks like Angular      |
| Manipulation | Handled via libraries like React   | Directly via JS/DOM APIs             |

**Advantages of Virtual DOM:**

* High performance rendering
* Batch updates efficiently
* Cleaner, declarative UI code
* Avoids excessive DOM manipulations

**Disadvantages of Virtual DOM:**

* Slight overhead of diffing and reconciliation
* Abstracted away from real DOM (less control for complex scenarios)

**Advantages of Actual DOM:**

* Full direct access and control
* Standardized across all web browsers

**Disadvantages of Actual DOM:**

* Slower updates and rendering
* Expensive to manipulate repeatedly
* Leads to complex code for dynamic UIs

---

### 3. React vs Other Frameworks

| Feature        | React       | Angular   | Vue.js                |
| -------------- | ----------- | --------- | --------------------- |
| Type           | Library     | Framework | Progressive Framework |
| DOM            | Virtual DOM | Real DOM  | Virtual DOM           |
| Data Binding   | One-way     | Two-way   | Two-way               |
| Syntax         | JSX         | HTML + TS | HTML + JS             |
| Learning Curve | Medium      | High      | Low                   |

---

### 4. JSX and Babel

**JSX:**

* JSX stands for JavaScript XML.
* It allows writing HTML-like syntax in JavaScript.
* JSX gets transpiled to `React.createElement()` by Babel.

```jsx
const element = <h1>Hello, JSX</h1>;
```

**Babel:**

* Babel is a JavaScript compiler that converts modern JavaScript and JSX into browser-compatible JavaScript.

---

### 5. Setting up a React App

#### Option 1: Using Create React App (CRA)

```bash
npx create-react-app hello-world
cd hello-world
npm start
```

#### Option 2: Using Vite (faster dev build)

```bash
npm create vite@latest hello-world -- --template react
cd hello-world
npm install
npm run dev
```

---

## ✅ Project Tasks

### 1. Install Node.js

Download and install from [https://nodejs.org/](https://nodejs.org/)

Check versions:

```bash
node -v
npm -v
```

### 2. Create the React App (CRA)

```bash
npx create-react-app hello-world
cd hello-world
npm start
```
### OR
### Create React App using Vite

```bash
npm create vite@latest

Project name:
│  30-days-reactjs-challenge
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript

cd 30-days-reactjs-challenge
npm run dev

```

### 3. Understand Folder Structure

| File/Folder    | Purpose                              |
| -------------- | ------------------------------------ |
| `public/`      | Static assets (HTML, favicon, etc.)  |
| `src/`         | React components and JavaScript code |
| `App.js`       | Main React component                 |
| `index.js`     | Entry point for React DOM rendering  |
| `package.json` | Project metadata and dependencies    |

### 4. Hello World App

**App.js:**

```jsx
function App() {
  return (
    <>
      <div>
        <h1>Welcome to the 30 Days Reactjs Challenge</h1>
      </div>
    </>
  )
}
export default App;
```

**index.js/main.jsx:**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

---

## 🔍 index.js/main.jsx Code Explanation (for Interviews)

```js
import React from 'react';
```

* Imports the core React library.
* Necessary to use JSX syntax and React features like components, hooks, etc.

```js
import ReactDOM from 'react-dom/client';
```

* Imports the new `react-dom/client` API (introduced in React 18).
* Provides `createRoot` for concurrent rendering.

```js
import App from './App';
```

* Imports the main `App` component from the local `App.js` file.
* This component is the root of the component tree.

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
```

* `document.getElementById('root')` selects the `<div id="root">` from `public/index.html`.
* `ReactDOM.createRoot(...)` sets up a root to control the DOM node.

```js
root.render(<App />);
```

* Renders the `App` component into the DOM inside the `root` div.
* `<App />` is JSX syntax, representing a component instance.
* This is the starting point of your React app.

---

Happy Coding! 🎉
