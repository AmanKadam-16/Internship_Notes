# 🚀 React.js Presentation Summary

## Presented by Satara Batch Interns MH11

### Introduction to React.js
React, a dynamic JavaScript library by Facebook, excels in crafting interactive user interfaces for single-page applications (SPAs). 🌐 It champions the creation of reusable UI components, making development efficient and scalable. ⚛️

### Components: The Building Blocks
In React, components are independent, reusable entities encapsulating parts of the UI. Examples include Application, Sidebar, Body, and Header. 🧩

### Installation Guide
Getting started with React is a breeze:

1. Install [Node.js](https://nodejs.org/en).
2. Open CMD/Terminal, create a new folder, and navigate into it.
3. Run:
   ```bash
   npm install -g npm
   npx create-react-app my-app
   cd my-app
   npm start
   ```
   Replace `my-app` with your desired app name. 🚀

### Understanding JSX
JSX, or JavaScript XML, a syntax extension for JavaScript, simplifies React development. It allows embedding HTML within React, enhancing code readability. 👀

#### Rules of Writing JSX
- Wrap HTML in a single top-level element.
   ```jsx
   <div>
      <h1>Hello World!</h1>
   </div>
   ```
- Enclose JS expressions in `{}`.
   ```jsx
   <div>
      <p>{5 + 5}</p>
   </div>
   ```
- Utilize Ternary operators for conditions.
   ```jsx
   <div>
      <p>{x > y ? 'X is bigger' : 'Y is bigger'}</p>
   </div>
   ```
- Replace `class` with `className`.
   ```jsx
   <div className="Container">
      <p>Hello World!</p>
   </div>
   ```

### Folder Structure in React
Understand the three main folders:
1. **Node Modules:** Dependencies.
2. **Public:** Single HTML file.
3. **src:** Core source code. 📂

### Navigation and Routes
Implement in-page navigation and set up routes for a seamless user experience. Define different routes using the `Route` component inside the `Router`. 🛣️

### List Rendering with Map
Easily display lists in React using the `map` function:

```jsx
const items = ['Title', 'Content'];

const renderedList = items.map((item, index) => (
   <div key={index}>
      <p>{item}</p>
   </div>
));
```

### Axios for API Communication
Axios, a robust library for HTTP requests, aids in CRUD operations and backend communication. Install it with:
```bash
npm install axios
```

#### Axios Methods
**1. GET:** Fetch data from a specified URL.
   ```javascript
   axios.get('/api/data')
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
   ```

**2. POST:** Send data to a server to create a resource.
   ```javascript
   axios.post('/api/data', { name: 'John' })
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
   ```

**3. PUT:** Update data on a server.
   ```javascript
   axios.put('/api/data/1', { name: 'Updated John' })
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
   ```

**4. DELETE:** Remove data from a server.
   ```javascript
   axios.delete('/api/data/1')
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
   ```

Feel free to explore these methods for seamless interaction with your backend. 🌐

## 🎉 Thank You!
Feel free to share your thoughts on this summary. Your feedback is valuable! Happy coding! 👩‍💻👨‍💻
