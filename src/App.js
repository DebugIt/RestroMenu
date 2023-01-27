import React, { useState } from 'react';
import './App.css';

import ItemCard from './components/ItemCard';
import NavToggle from './components/NavToggle';
import MenuElement from "./components/MenuApi";

// search
// import {useRef} from 'react';


function App() {

  const [menuData, setMenuData] = useState(MenuElement);

  // search result hook
  const [srchItem, setSrchItem] = useState("");


  const filterItems = (category) => {
    const newList = MenuElement.filter((element) => {
      return element.category === category;
    });
    setMenuData(newList);
  }
  
  
  const SrchList = (event) => {
    const query = event.target.value;
    setSrchItem(query);

    const search = MenuElement.filter((item) => {
      return item.itemName.toLowerCase().indexOf(query.toLowerCase()) !== -1;

    });
    setMenuData(search);
  };

  
  
 

  
  return (
    <>

    <div className="Nav">
        <div className="navList">
        <h1>RestroMenu</h1>
            <ul>
                <div><strong><button onClick={() => {filterItems("BreakFast")}}>BreakFast</button></strong></div>
                <div><strong><button onClick={() => {filterItems("Lunch")}}>Lunch</button></strong></div>
                <div><strong><button onClick={() => {filterItems("Dinner")}}>Dinner</button></strong></div>
                <div><strong><button onClick={() => {filterItems("Snacks")}}>Snacks</button></strong></div>
                <div><strong><button onClick={() => {setMenuData(MenuElement)}}>All Items</button></strong></div>
            </ul>
        </div>
    </div>


    {/* Search Bar */}
    <div className="inputField">
      <input id='srchField' type="text"placeholder='Search Item' className='srchInput' value={srchItem} onChange={SrchList}/>
      {/* <button style={{marginLeft: "1rem", width: "6rem", height: "2rem", borderRadius: "10px", border: "none", backgroundColor: "snow"}} onClick={() => {searchResult()}}>
        Search
      </button> */}
    </div>
    

    <ItemCard menuData={menuData} />
    </>
  );
}

export default App;
