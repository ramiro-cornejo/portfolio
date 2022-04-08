import { AppBar, Toolbar } from "@mui/material"
import React from 'react'
import '../NavBar/NavBar.css'




export const NavBar = () => {

    return (
        <AppBar position="sticky" className="root">
            <Toolbar className="toolbar">
                <h1 className="logo">Logo</h1>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar