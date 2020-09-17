import React from "react";
import { SUCCESS, ERROR } from "../constants/alert-status";
const Alert = ({ type, content }) => {
    const getType = type => {
        switch (type) {
            case SUCCESS:
                return "alert--success";
            case ERROR:
                return "alert--error";
            default:
                return "alert";
        }
    };
    return (
        <div className={`alert ${getType(type)}`}>
            {content.map(single => (
                <p key={single} className="alert__single">
                    {single}
                </p>
            ))}
        </div>
    );
};

export default Alert;
