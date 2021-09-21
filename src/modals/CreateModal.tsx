import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Icon from "../assets/Icon/Icon";
import { Dialog } from "@material-ui/core";
import { textArea } from "../components/TextArea/TextArea";

interface Interface {
  handleClose: Function;
  handleCreate: Function;
  open: boolean;
  task?: any;
}

const CreateModal = ({ handleClose, handleCreate, open, task }: Interface) => {
  const [taskData, setTaskData] = useState({ title: "", description: "" });
  const close = () => handleClose();
  const submit = (values: any, { setSubmitting }: any) => {
    handleCreate(task ? { ...values, id: task.id, isCompleted:task.isCompleted } : values);
    setSubmitting(false);
    handleClose();
  };
  useEffect(() => {
    if (task) setTaskData({ title: task.title, description: task.description });
  }, [task]);

  const handleValidation = (values: any) => {
    const errors: any = {};
    if (!values.title) {
      errors.title = "Title is required";
    }
    if (!values.description) {
      errors.description = "Description is required";
    }
    return errors;
  };
  return (
    <Dialog open={open} onClose={close}>
      <Formik initialValues={taskData} onSubmit={submit} validate={handleValidation}>
        {({ isSubmitting }) => {
          return (
            <Form className={"form-container"}>
              <div className={"form"}>
                <div className={"input"}>
                  <div className={"input title-description-block"}>
                    <Field className={"edit-title"} placeholder={"title"} name={"title"} autoComplete={"false"} />
                    <ErrorMessage className={"error-title"} name={"title"} component={"div"} />
                  </div>
                  <div className={"input title-description-block"}>
                    <Field component={textArea} className={"edit-description"} placeholder={"description"} autoComplete={"false"} name={"description"} />
                    <ErrorMessage className={"error-description"} name={"description"} component={"div"} />
                  </div>
                  <div className={"edit-complete"}>
                    <button disabled={isSubmitting} className={"button-submit"} type={"submit"}>
                      <Icon size={"25px"} className={"modal-complete"} icon={"complete"} color={"#7dc383"} />
                    </button>
                    <Icon onClick={close} size={"25px"} className={"modal-delete"} icon={"delete"} color={"red"} />
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default CreateModal;
