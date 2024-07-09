import React, { useContext, useEffect, useState } from "react";
import "./myStyles.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from "D:\\projects\\livechatapp\\client\\src\\icons\\communication.png";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { refreshSidebarFun } from "../Features/refreshSidebar";
import { myContext } from "./MainContainer";

function User() {
    const [refresh, setRefresh] = useState(true);

    const [users, setUsers] = useState([]);
    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log("Data from LocalStorage : ", userData);
    const nav = useNavigate();
    const dispatch = useDispatch();
  
    if (!userData) {
      console.log("User not Authenticated");
      nav(-1);
    }
    useEffect(() => {
        console.log("Users refreshed");
        const config = {
          headers: {
            Authorization: `Bearer ${userData.data.token}`,
          },
        };
        axios.get("http://localhost:8000/user/fetchUsers", config).then((data) => {
          console.log("UData refreshed in Users panel ");
          setUsers(data.data);
          // setRefresh(!refresh);
        });
      },[refresh]);
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