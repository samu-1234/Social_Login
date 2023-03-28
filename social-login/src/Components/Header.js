import React from 'react'
import {AppBar, Toolbar, Typography} from '@mui/material'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <AppBar
    position="sticky"
    style={{
      background: "white",
      boxShadow: "0px 1px 1px .5px #F2F3F6",
      overflow: "hidden",
    }}
  >
    <Toolbar>
      <Typography>
        <Link
          style={{ fontSize: "20px", color: "black", letterSpacing: "5px" }}
        >
          Techademy
        </Link>
      </Typography>

      <div className="lists">
        <Link to="/dashboard" className="links">
          Dashboard
        </Link>

        <Link to="/Manage" className="links">
          Manage
        </Link>

        <Link to="/Schedule" className="links">
          Schedule
        </Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
