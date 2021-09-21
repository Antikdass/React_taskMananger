import React from "react";
import Icon from "../assets/Icon/Icon";
import { Dialog } from "@material-ui/core";

interface Interface {
  handleClose: Function;
  handleDelete: Function;
  open: boolean;
  id: number;
}

const DeleteModal = ({ id, handleClose, handleDelete, open }: Interface) => {
  const close = () => handleClose();

  const submit = () => {
    handleDelete(id);
    handleClose();
  };
  return (
    <Dialog open={open} onClose={close}>
      <div className={"dialog"}>
        <h2>Are you sure you want to delete this task?</h2>
        <div className={"dialog-delete"}>
          <button className={"dialog-button"} onClick={submit}>
            <Icon size={"20px"} icon={"complete"} color={"#7dc383"} />
          </button>
          <button className={"dialog-button"} onClick={close}>
            <Icon size={"20px"} icon={"delete"} color={"red"} />
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default DeleteModal;
