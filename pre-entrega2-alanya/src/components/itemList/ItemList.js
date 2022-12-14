import React from 'react'
import { Item } from '../item/Item'
import { useEffect, useState } from "react"
import { productos } from "../../Data/productosMock.js";

const ItemList = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const itemsPromesa = new Promise((resolve, reject) => {
      setTimeout(() => { resolve(productos) }, 2000)
    });

    itemsPromesa
    .then((item) => { setItems(item) })
    .catch((err) => {console.log("se rechazo solicitud") })
    console.log(items)

  }, [
    
  ]);

  return (
    <div>
      <div>
        {items.map((elemento) => { return (<Item key={elemento.name} elemento = {elemento} />) })}

      </div>

    </div>
  )
}

export default ItemList

