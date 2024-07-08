import React, { useContext, useEffect, useState } from "react";
import "./myStyles.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from "D:\\projects\\livechatapp\\client\\src\\icons\\communication.png";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

function User() {
  return (
    <div className="list-container">
        <div className={"ug-header"}>
            <img
                src={logo}
                style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
            />
            <p className={"ug-title"}>Available Users</p>

        </div>
        <div className="sb-search">
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input
                placeholder="Search"
                className={"search-box" }
            />

        </div>
        <div className="ug-list">
            <div className="list-item">
                <p className='con-icon'>T</p>
                <p className='con-title'>test user</p>
            </div>

        </div>
    </div>
  )
}

export default User