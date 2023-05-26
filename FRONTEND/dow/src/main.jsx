import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Body from './Body.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Body/>
    {/* <App /> */}
  </React.StrictMode>,
)