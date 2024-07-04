import React, { useState } from "react";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { create } from "@mui/material/styles/createTransitions";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

function CreateGroups() {
  return (
    <div className="createGroups-container">
      <input placeholder="enter grp name" className={"search-box"}/>
      <IconButton>
        <DoneOutlineRoundedIcon/>
      </IconButton>

    </div>
  )
}

export default CreateGroups