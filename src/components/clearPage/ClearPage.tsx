import React from "react";
import Img from "../../assets/img/page.png";
import "../clearPage/page.scss";

interface IProps {
  handleCreate: Function;
}

const ClearPage = (props: IProps) => {
  const { handleCreate } = props;

  const handleEditOpen = (task: any) => {
    handleCreate(task);
  };

  return (
    <div className={"empty-page"}>
      <img className={"img"} src={Img} alt="" />
      <div className={"empty-page-add"}>
        <h2 className={"clear-page-text"}>Add task</h2>
        <button onClick={handleEditOpen} className={"empty-page-button"}>
          Create task
        </button>
      </div>
    </div>
  );
};

export default ClearPage;
