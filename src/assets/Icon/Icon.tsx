import React from "react";
import IcomoonReact from "icomoon-react";
import iconSet from "./selection.json";

const Icon: React.FC<{
    color?: string;
    size: string | number;
    className?: any;
    icon: string;
    onClick?: Function;
    style?: any;
}> = (props) => {
    const {color, size = "100%", icon, style = ""} = props;
    return (
        <IcomoonReact onClick={props.onClick}
                      className={props.className}
                      style={{...style, cursor: 'pointer'}}
                      iconSet={iconSet}
                      color={color}
                      size={size}
                      icon={icon}/>
    );
};

export default Icon;