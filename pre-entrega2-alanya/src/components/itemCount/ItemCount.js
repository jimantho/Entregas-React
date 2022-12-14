import {CustomItemCount} from "./CustomItemCount.js"
import { useState } from 'react'

let stock = 10;


const ItemCount = () => {

    const [valorCantidad,setValorCantidad] = useState(stock !== 0 ? 1: 0);
    
    const sumar = () => {
        valorCantidad < stock ? setValorCantidad(valorCantidad + 1) : setValorCantidad(valorCantidad);
    }

    const restar = () => {
        valorCantidad > 1 ? setValorCantidad(valorCantidad - 1) : setValorCantidad(valorCantidad)
    }

  return (
    <div>
        <CustomItemCount 
        valorCantidad={valorCantidad} setDescripcionStock={stock === 0 ? "Sin Stock":"Stock Disponible"} sumar = {sumar}  restar = {restar}></CustomItemCount>
    </div>
  )
}

export default ItemCount
