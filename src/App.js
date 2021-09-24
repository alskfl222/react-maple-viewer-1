import Header from './component/Header'
import Charactors from './component/Charactors';
import View from './component/View'
import Footer from './component/Footer';

// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [chars, setChars] = useState([[], []])
  const [date, setDate] = useState("")
  const [classes, setClasses] = useState([], [])
  useEffect (
    () => {
      fetch("http://192.168.50.130:5000/").then(res => res.json())
                                     .catch(msg => msg)
                                     .then(res => {
                                       setChars([JSON.parse(res.chars)[0], JSON.parse(res.chars)[0]])
                                       setDate(res.last_date)
                                       setClasses([JSON.parse(res.chars)[1], JSON.parse(res.chars)[1]])
                                     })
    }, []
  )

  const check = e => {
    if (e.target.dataset.value) {
      setChars([[e.target.dataset.value], chars[1]])
      setClasses([classes[1][chars[1].indexOf(e.target.dataset.value)], classes[1]])
    }
  }

  return (
    // <BrowserRouter>
      <div className="App">
        <Header chars={chars} classes={classes} change={[setChars, setClasses]}/>
        { chars[0].length !== 1 ?
          <div onClick={check}><Charactors chars={chars} classes={classes} date={date} change={[setChars, setClasses]}/></div>
          : <div><View char={chars} classes={classes} date={date} /></div>}
        <Footer />
      </div>
    // </BrowserRouter>
  );
}

export default App;
