import './App.css'
import React, {useEffect, useState} from 'react';
import json from './assets/data.json'
import GoogleFontLoader from 'react-google-font-loader';
import PostPage from './pages/PostPage/PostPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';



const App = () => {
  console.log("JSON", json)
  const [data, setData] = useState(json);

  console.log("DATA", data)

  return (
    <Router>
      <div className="App">
        <GoogleFontLoader fonts={[{ font: 'Poppins', weights: [400, 500, 600, 700] }]}/>
        <Routes>
          <Route path='/' element={ <HomePage data={data} /> } />
          <Route path='/post/:id' element={ <PostPage data={data.posts}/> } />
          <Route path='/about' element={ <AboutPage /> } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
