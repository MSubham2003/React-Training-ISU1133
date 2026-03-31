# React Practice Exercises 

## 📌 Overview

This project is a collection of fundamental React exercises designed to build a strong foundation in **component-based architecture, state management, event handling, and rendering patterns**.

It demonstrates practical implementations of commonly used React concepts in a modular and reusable way.

---

## 🛠️ Tech Stack

* React (Functional Components + Hooks)
* JavaScript (ES6+)
* CSS (Inline Styling)

---

## 📂 Project Structure

```
src/
│── components/
│   ├── Button.jsx
│   ├── TextMirror.jsx
│   ├── Toggle.jsx
│   ├── TrafficLight.jsx
│   ├── TodoList.jsx
│
│── event/
│   ├── HoverBox.jsx
│
│── App.jsx
│── App.css
```

---

## 📚 Implemented Exercises

### 1️⃣ Button Component

* Reusable button component
* Accepts `label` and `color` as props
* Demonstrates **dynamic inline styling**

---

### 2️⃣ Toggle Component

* Uses `useState` to toggle between **ON / OFF**
* Demonstrates **state updates and event handling**

---

### 3️⃣ Text Mirror

* Controlled input field
* Mirrors user input in real-time
* Demonstrates **two-way data binding**

---

### 4️⃣ Hover Box

* Changes background color on hover
* Uses `onMouseEnter` and `onMouseLeave`
* Demonstrates **event-driven UI behavior**

---

### 5️⃣ Traffic Light

* Accepts `color` prop (`red`, `yellow`, `green`)
* Displays corresponding message:

  * Red → Stop
  * Yellow → Slow Down
  * Green → Go
* Demonstrates **conditional rendering using switch**

---

### 6️⃣ Todo List

* Displays a list of todos using `.map()`
* Supports adding new todos at the **start of the list**
* Includes:

  * ✅ Correct implementation using `id` as key
  * ❌ Incorrect implementation using `index` as key

#### Key Learning:

* Importance of **stable keys in React**
* Understanding **React reconciliation**

---

## ⚙️ How to Run the Project

1. Clone the repository:

```
git clone <repo-url>
```

2. Navigate to project directory:

```
cd day-two
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm run dev
```

---

## 💡 Key Concepts Covered

* Functional Components
* Props Handling
* useState Hook
* Event Handling
* Conditional Rendering
* List Rendering
* Keys in React
* Component Reusability

---

## ⚠️ Important Notes

* Using `index` as a key in lists is **not recommended** when:

  * Items are reordered
  * Items are inserted or removed

* Inline styling is used for simplicity, but in production:

  * Prefer **CSS Modules / Tailwind / Styled Components**

---

## 🚀 Future Improvements

* Add **Edit/Delete functionality** in Todo List
* Convert Todo into a **CRUD app with backend**
* Implement **global state management**
* Add **form validation**
* Improve UI with a proper design system

---

## 🎯 Objective

The goal of this project is to transition from:

> "Writing React code" → "Thinking in React"

---

## 📌 Author

Subham Mohanty

---