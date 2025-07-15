# React Basics: useState, Handling Events, Forms

This project covers foundational React concepts:

- ✅ `useState` Hook
- ✅ Handling Events (`onClick`, `onChange`)
- ✅ Creating and Managing Forms

---

## 🔧 Topics Explained

### 1. `useState` Hook

The `useState` hook allows you to add state to functional components.

**Syntax:**
```js
const [state, setState] = useState(initialValue);
````

**Example:**

```js
const [count, setCount] = useState(0);
```

Here:

* `count` holds the current state.
* `setCount` updates the value of `count`.

---

### 2. Handling Events in React

React uses camelCase syntax for event handlers:

* `onClick` for button clicks
* `onChange` for input field changes
* `onSubmit` for form submission

**Example:**

```jsx
<button onClick={handleClick}>Click Me</button>
<input onChange={handleInput} />
```

Event objects in React are **synthetic events** which behave like native events but work consistently across all browsers.

---

### 3. Forms in React

Forms are used to capture user input. In React:

* Each input field should be **controlled** via `useState`.
* Updates to inputs are handled using `onChange`.

**Example:**

```jsx
<input name="name" value={formData.name} onChange={handleChange} />
```

**Submit Handling:**

```jsx
const handleSubmit = (e) => {
  e.preventDefault(); // Prevent page reload
  console.log(formData);
};
```

---

## 💡 Tasks

### Task 1: Counter App

A simple counter app with Increment/Decrement buttons.

#### ✅ Features:

* Uses `useState` to track the counter
* `onClick` event to update the state

**File:** `CounterApp.jsx`

---

### Task 2: Form Handling

A basic form with name and email input.

#### ✅ Features:

* Uses `useState` to store form data
* `onChange` for real-time updates
* `onSubmit` to capture form values

**File:** `FormApp.jsx`

Happy Coding 🌸 


