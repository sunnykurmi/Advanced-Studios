import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App/>
  </Router>,
)
