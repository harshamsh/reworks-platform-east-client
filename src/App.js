import React from 'react'
import { useState } from 'react';
import './App.css';
import './fonts.css';
// import './searchBar.js';
import ItemBox from './ItemBox';
/* <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,300&family=Smooch&display=swap" rel="stylesheet"></link> */




function App() {
  const [searchTerm, setSearchTerm] = useState('')


  return (
  <body>
  <div id='nav1'>
    <h1 id='title'>Platform East</h1>
  </div>
  <div class = "jambo">
    <p id='aboutText'>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
    the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
    but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
    containing Lorem Ipsumpassages, and more recently with desktop publishing software like Aldus PageMaker including versions of 
    Lorem Ipsum and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <div >
      <input id='searchBar' onChange= {({target: {value}}) => setSearchTerm(value)} value={searchTerm} type='text'></input>
    </div>
  </div>
  <ItemBox  searchVal = {searchTerm}  />  
  
  </body>

  );
};

export default App;
