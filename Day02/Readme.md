# 📘 React Concepts: Functional vs Class Components, Props, Prop Drilling, PropTypes, and defaultProps

---

## 📌 1. Functional vs Class Components

### 🔹 Functional Components

These are plain JavaScript functions that return JSX. They are:
- Easier to read, write, and test
- Introduced with Hooks in React 16.8 to support state and side effects
- Now the standard for writing components in React

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

```
or using arrow function:

```jsx
const Welcome = ({ name }) => <h1>Hello, {name}</h1>;
```

### 🔹 Class Components
Older React components using ES6 classes. Before Hooks, this was the only way to manage local state and use lifecycle methods.

```jsx

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
### 🔸 Comparison Table
|Feature           | 	Functional Component       |	Class Component
-------------------|-----------------------------|---------------------
|Syntax	           | Function	                   | ES6 Class
|State             | Management	Hooks (useState) |	this.state and this.setState
|Lifecycle Methods |	Hooks (useEffect)          |	componentDidMount, etc.
|Simplicity      	 | More concise and readable	 | More verbose
|Performance	     | Slightly better with Hooks	 | Slightly heavier
|Usage   (2024+)   | 	Recommended	               | Legacy/rare

## 📌 2. Props (Properties)
### 🔹 What are Props?
Short for "properties"
Read-only data passed from a parent to child component
Helps components stay reusable and configurable

```jsx

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}


<Greeting name="Akshay" />

```
### 🔹 Destructuring Props
Instead of using props.name, you can destructure:

```jsx

const Greeting = ({ name }) => <h1>Hello, {name}</h1>;
```

### 🔹 Props Are Immutable
Child components cannot modify the props they receive. If a value needs to change, lift the state up to a common parent and pass new props down.

## 📌 3. Prop Drilling
### 🔹 What is Prop Drilling?
Prop Drilling occurs when data is passed through many intermediate components just to reach a deeply nested component.

```jsx

<Parent>
  <Child>
    <GrandChild data={value} />
  </Child>
</Parent>

```
Even if Child doesn't need the data, it still has to forward it.

### 🔹 Problems with Prop Drilling
* Makes components tightly coupled 
* Hard to maintain

* Difficult to reuse components

### 🔹 Solutions
* React Context API: Allows global-like state access
* State Management Libraries: Like Redux, Zustand, Recoil

## 📌 4. PropTypes
### 🔹 What is PropTypes?
* PropTypes is a utility for type-checking props at runtime. Helps catch bugs early and improves documentation.

Install it:

```bash

npm install prop-types
```
Use it in a component:

```jsx

import PropTypes from 'prop-types';

function Card({ title }) {
  return <h2>{title}</h2>;
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

```
### 🔸 Common PropTypes
PropTypes	| Description
string	| Text
number	 | Numeric value
bool	 | Boolean
func	 | Function
array	 | Array
object	 | Object
node	 | Anything that can be rendered
element	 |React element
oneOf([...])	|Enum values
shape({...})	|Object with specific structure

📌 5. defaultProps
🔹 What is defaultProps?
defaultProps provide default values for props that are not explicitly passed by the parent component.

```jsx

function Card({ title }) {
  return <h2>{title}</h2>;
}

Card.defaultProps = {
  title: 'Default Title',
};

```
If the parent passes no title, the component uses the default.

### 🔸 Notes on defaultProps
* Works with both functional and class components

* Only used if the prop is undefined

* Best for optional props

💡 Bonus: How to Detect if a Default Prop Is Used
You can compare the prop value with the default value:

```jsx

if (title === Card.defaultProps.title) {
  console.log('Using default title');
}
```
📦 Real-world Example: Reusable Card Component
A Card component could accept props like:

```jsx

<Card 
  title="React Basics" 
  content="Props, State, Components" 
  footer="Read More"
/>

```

With PropTypes, defaultProps, and clean design, it becomes reusable across different modules.

🧠 Interview Tips
Question	|Best Answer
When would you use class components?	|Rarely now, unless working in legacy code
Can functional components handle state?	|Yes, using Hooks
What's the issue with prop drilling?	|Makes the component tree harder to manage
Why use PropTypes?	|To catch bugs, ensure correct prop types
What happens if a prop is missing?|	Use defaultProps to provide fallback



