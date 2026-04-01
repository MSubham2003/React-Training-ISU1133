# React CSS Modules & Dynamic Styling Exercises

## 📌 Overview

This repository contains hands-on exercises focused on **CSS Modules** and **dynamic styling in React**. The goal is to build a strong foundation in **scoped styling, component reusability, and state-driven UI behavior**.

---

## ✅ Exercises Completed

### 🔹 Exercise 1: Card Component with CSS Modules

#### Objective

* Understand how CSS Modules work
* Apply scoped styles to a React component
* Observe how class names are hashed to avoid conflicts

#### Implementation

* Created `Card.module.css` with:

  * `.container` → border, padding, shadow
  * `.title` → bold, blue text
* Imported styles into `Card.jsx`
* Applied styles using:

  ```jsx
  className={styles.container}
  ```

#### Key Learning

* CSS Modules generate unique class names like:

  ```
  Card_container__hash#12345
  ```
* Prevents global CSS conflicts
* Enables scalable styling architecture

---

### 🔹 Exercise 2: ThemeButton (Light/Dark Mode Toggle)

#### Objective

* Use React state (`useState`)
* Dynamically apply CSS classes
* Implement conditional rendering

#### Implementation

* Created `ThemeButton.module.css` with:

  * `.base` → shared button styling
  * `.lightMode` → light theme styles
  * `.darkMode` → dark theme styles
* Used `useState` to toggle theme
* Applied classes dynamically:

  ```jsx
  className={`${styles.base} ${isDark ? styles.darkMode : styles.lightMode}`}
  ```

#### Key Learning

* UI can be controlled via state
* Conditional class application is critical for dynamic interfaces
* Separation of base and variant styles improves maintainability

---

## 🧠 Core Concepts Learned

* CSS Modules for scoped styling
* Avoiding global CSS conflicts
* Dynamic class binding
* State-driven UI updates
* Clean component structure

---

## ⚠️ Common Pitfalls Avoided

* Using global class names instead of CSS Modules
* Incorrect file paths for imports
* Misusing className without `styles`
* Mixing `id` and `className` concepts

---

## 💼 Practical Takeaway

These exercises simulate real-world frontend challenges:

* Building reusable UI components
* Managing styles at scale
* Writing maintainable and conflict-free CSS

Mastering these fundamentals is critical for working in **production-grade React applications**.

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── Card.jsx
 │    └── ThemeButton.jsx
 ├── style/
 │    ├── Card.module.css
 │    └── ThemeButton.module.css
```

---

## 🏁 Conclusion

This marks the completion of foundational exercises in:

* Component styling
* State management
* UI behavior control

Consistency in applying these patterns will directly impact your ability to build scalable frontend systems.

---
