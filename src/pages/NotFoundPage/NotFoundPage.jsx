import React from "react";
import "./NotFoundPage.css";

function NotFoundPage({ message }) {

    return (
        <div className="notfound-page">
            <h1>{message || "404 | NOT FOUND"}</h1>
        </div>
    );
}

export default NotFoundPage;