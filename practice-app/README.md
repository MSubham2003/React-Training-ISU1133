# React Practice App

A foundational React project built using Vite, covering core concepts like components, JSX, styling, and project structure.

---

## Created By

**Subham Mohanty**

---

## Project Overview

This project is a hands-on implementation of core React fundamentals:

* Component-based architecture
* JSX and dynamic rendering
* Clean folder structuring
* Basic CSS styling
* Reusable UI components

---

## Tech Stack

* React
* Vite
* JavaScript (ES6+)
* CSS

---

## Getting Started

### 1. Create the Project

```bash
npm create vite@latest practice-app
cd practice-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm run dev
```

---

## Project Structure

```
practice-app/
│
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── DateComponent.jsx
│   │   ├── DummyComponent.jsx
│   │   └── Header.jsx
│   │
│   ├── style/
│   │   ├── Header.css
│   │   └── App.css
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── Exercises.txt
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## Implemented Exercises

### Exercise 1: React Usage

* Documented real-world usage of React in `Exercises.txt`
* Understood reusable UI components concept

---

### Exercise 2: Vite Setup

* Initialized project using Vite
* Updated UI to display:

```jsx
<h1>Hello World</h1>
```

---

### Exercise 3: Components & Structure

* Created `components/` directory
* Added `DummyComponent.jsx`
* Imported and rendered in `App.jsx`

---

### Exercise 4: JSX & Dynamic Rendering

* Created `DateComponent.jsx`
* Displayed current year dynamically using:

```jsx
new Date().getFullYear()
```

---

### Exercise 5: Header Component

* Built a reusable `Header` component

* Implemented navigation bar with:

  * Home
  * About
  * Contact

* Styled using CSS:

  * Removed list bullets
  * Used flexbox for horizontal layout

---

## Main App Implementation

```jsx
import './App.css'
import DateComponent from './components/DateComponent'
import DummyComponent from './components/DummyComponent'
import Header from './components/Header'

function App() {
  return (
    <>
      {/* Exercise 5 */}
      <Header />

      {/* Exercise 2 */}
      <h1>Hello World</h1>

      {/* Exercise 3 */}
      <DummyComponent />

      {/* Exercise 4 */}
      <DateComponent />
    </>
  )
}

export default App
```

## Thank You for your Time