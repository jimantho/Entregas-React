/* 
racfe export default
rafc export definido */

import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import { BsCart4 } from "react-icons/bs"
import { FaUserCircle } from "react-icons/fa"
import { BsTruck } from "react-icons/bs"
import "./CartWidget.css"
import {theme} from "../colorMui"
import {ThemeProvider } from '@mui/material/styles';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 3px',
    color: "white"
  },
}));

export const CartWidget = () => {
  return (
    <div className="container-cart">
      <FaUserCircle
        style={{
          fontSize: "2rem",
          color: "#f58d86"
        }}
      // size={30} 
      // color={"#f58d86"}
      />
      <BsTruck
        style={{
          fontSize: "2rem",
          color: "#f58d86"
        }}
      />
      <button>
        <BsCart4
          style={{
            fontSize: "2rem",
            color: "#f58d86"
          }}
        />
        <ThemeProvider theme={theme}>
          <StyledBadge badgeContent={4} color="primary" >
          </StyledBadge>
        </ThemeProvider>
      </button>

    </div>

  )
}

