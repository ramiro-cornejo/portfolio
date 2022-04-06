import { AppBar, Toolbar } from "@mui/material"
import React from 'react'
import logo from "../images/logo.png"
import '../NavBar/NavBar.css'




export const NavBar = () => {

    return (
        <AppBar position="sticky" className="root">
            <Toolbar className="toolbar">
                <img src={logo} className="logo" alt="Logo" />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar