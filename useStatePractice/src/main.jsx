import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

let time = new Date().toLocaleTimeString();
console.log(time);
ReactDOM.createRoot(document.getElementById('root')).render(
  
// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
