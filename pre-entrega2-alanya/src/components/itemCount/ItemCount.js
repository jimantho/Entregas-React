import { CustomItemCount } from '../customItemCount/CustomItemCount'
import { useState } from 'react'

let stock = 0;

const ItemCount = () => {

    const [valorCantidad,setValorCantidad] = useState(0);
    

  return (
    <div>
        <CustomItemCount valorCantidad={valorCantidad} setValorCantidad = {setValorCantidad} stock={stock}  ></CustomItemCount>
    </div>
  )
}

export default ItemCount
