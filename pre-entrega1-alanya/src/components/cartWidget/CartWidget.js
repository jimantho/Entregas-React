/* 
racfe export default
rafc export definido */

import {BsCart4} from "react-icons/bs"
import "./CartWidget.css"

import React from 'react'

export const CartWidget = () => {
  return (
    <div className="container-cart">
                <BsCart4 
                style={{
                    fontSize: "2rem",
                    color: "#f58d86"
                }}
                // size={30} 
                // color={"#f58d86"}
                />
            </div>
  )
}

