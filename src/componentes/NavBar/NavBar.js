import { AppBar, Toolbar } from "@mui/material"
import React from 'react'
import '../NavBar/NavBar.css'




export const NavBar = () => {

    return (
        <AppBar position="sticky" className="root">
            <Toolbar className="toolbar">
                <div>
                    <h1 className="logo">Portfolio en proceso..</h1>
                </div>
                
                
                
            </Toolbar>
        </AppBar>
    )
}

export default NavBar