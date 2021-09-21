import React from "react";
import Icon from "../../assets/Icon/Icon";
import Alert from "@mui/material/Alert";
import "./alert.style.scss";

interface IProps {
  setClose: Function;
}

const CustomAlert = ({ setClose }: IProps) => {
  return (
    <div className={"alert-container"}>
      <Alert onClose={()=>setClose()} className={'alert'} severity="success">
        <div className={"alert-content"}>
          <span >You have successfully completed your task!</span>
        </div>
      </Alert>
    </div>
  );
};

export default CustomAlert;
