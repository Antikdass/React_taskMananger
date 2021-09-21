import React, { useEffect, useState } from "react";
import Icon from "../../../assets/Icon/Icon";
import DeleteModal from "../../../modals/DeleteModal";
import CreateModal from "../../../modals/CreateModal";
import classNames from "classnames";

interface IProps {
  title: string;
  description: string;
  handleDelete: Function;
  handleEdit: Function;
  handleComplete: Function;
  isCompleted: boolean;
  id: number;
}

const Task = (props: IProps) => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [descriptionText, setDescriptionText] = useState(props.description);
  const maxDescriptionSymbols = 140;
  const { title, description, handleDelete, handleEdit, id, handleComplete, isCompleted } = props;

  const handleOpenAlert = () => {
    handleComplete({ id: id, description: description, isCompleted: isCompleted, title: title });
  };

  useEffect(() => {
    if (description.length > maxDescriptionSymbols){
     setDescriptionText(description.slice(0, maxDescriptionSymbols)+ '...')
    } else{
      setDescriptionText(description) 
    };
  }, [description]);

  return (
    <div className={"main-div"}>
      <div className={classNames({ "task-div": true, "task-completed-div": isCompleted })}>
        <Icon onClick={() => setOpenEdit(true)} size={"20px"} className={"button-edit"} icon={"edit"} />

        <div className={"top-div"}>
          <h2 className={"title"}>{title}</h2>
        </div>
        <div className={"hr-div"}>
          <div className={"hr"}></div>
        </div>
        <div className={"bottom-content"}>
          <p className={"description"}>{descriptionText}</p>
          <div className={"complete-delete"}>
            <Icon onClick={handleOpenAlert} size={"20px"} className={"complete-icon"} icon={"complete"} color={"#7dc383"} />
            <Icon onClick={() => setOpenDelete(true)} size={"20px"} className={"delete-icon"} icon={"delete"} color={"red"} />
          </div>
        </div>
      </div>
      <DeleteModal handleClose={() => setOpenDelete(false)} handleDelete={(id: number) => handleDelete(id)} open={openDelete} id={id} />
      <CreateModal
        handleClose={() => setOpenEdit(false)}
        handleCreate={(task: any) => handleEdit(task)}
        open={openEdit}
        task={{ title: title, description: description, id: id }}
      />
    </div>
  );
};

export default Task;
