import React, { useState } from "react";
import "./tasks.style.scss";
import Icon from "../../assets/Icon/Icon";
import Task from "./task/Task";
import CreateModal from "../../modals/CreateModal";
import { completeTask, createTask, deleteTask, editTask, setLocalStorage } from "../../services/tasksService";
import { setTaskArray } from "../../helpers/helpers";
import CustomAlert from "../alert/CustomAlert";
import ClearPage from "../clearPage/ClearPage";
import classNames from "classnames";
import { ITask } from "../../types/Task";

const Tasks = () => {
  const [tasks, setTasks] = useState<Array<ITask>>(setTaskArray());
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleComplete = (task: any) => {
    
    setArray(completeTask(task, tasks));
    setOpenAlert(true);
    setTimeout(() =>{
      setOpenAlert(false);
    },3000)
  };

  const handleCreate = (task: any) => {
    setArray([...createTask(task, tasks)]);
  };
  const handleDelete = (id: number) => {
    setArray(deleteTask(id, tasks));
  };
  const handleEdit = (task: any) => {
    setArray([...editTask(task, tasks)]);
  };

  function setArray(tasksArray: any) {
    setTasks([...tasksArray]);
    setLocalStorage(tasksArray);
  }

  return (
    <div className={classNames({ "tasks-container": true, "tasks-container-home": !tasks.length })}>
      {tasks.length ? <Icon onClick={() => setOpen(true)} size={"30px"} className={"create"} icon={"create"} /> : null}

      {tasks.length ? (
        tasks.map((value: any) => {
          return (
            <Task
              key={value.id}
              handleEdit={(task: any) => handleEdit(task)}
              handleDelete={(id: number) => handleDelete(id)}
              handleComplete={(task: any) => handleComplete(task)}
              {...value}
            />
          );
        })
      ) : (
        <div className={"empty-page"}>
          <ClearPage handleCreate={() => setOpen(true)} />
        </div>
      )}
      <CreateModal handleClose={() => setOpen(false)} handleCreate={(task: any) => handleCreate(task)} open={open} />
      {openAlert ? <CustomAlert setClose={() => setOpenAlert(false)} /> : null}
    </div>
  );
};

export default Tasks;
