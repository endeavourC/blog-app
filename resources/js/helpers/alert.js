import React from "react";
import Alert from "../components/Alert";
export const showAlert = (errors, alertType) => {
    return Object.keys(errors).length > 0 ? (
        <Alert type={alertType} content={Object.values(errors)} />
    ) : null;
};
