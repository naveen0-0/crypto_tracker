import React, { useState, useEffect } from "react"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import HomePage from "./components/HomePage/HomePage"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
      </Routes>
    </Router>
  )
}

export default App
