import React from "react";

export const textArea = ({field, ...props}: any) => {
    return <textarea {...field} {...props}></textarea>
}