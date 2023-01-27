import React, { useState } from 'react'
import "../CSS/ItemCard.css"
// import MenuElement from "../components/MenuApi"

function ItemCard({menuData}) {
    // console.log(menuData);

  return (
    <>
    {menuData.map((element) => {
        return(
            <>
            <div className="card" key={element.id}>
                <div className="id">{element.id}</div>
                <div className="category">{element.category}</div>
                <div className="itemName"><h4>{element.itemName}</h4></div>
                <div className="text">{element.text}</div>
                <br />
                <div className="price">{element.price}</div>
                <div className="image">
                    <img src={element.image} alt="" />
                </div>
            </div>

            
            </>
        )
    })}
    
    
    </>
  )
}

export default ItemCard