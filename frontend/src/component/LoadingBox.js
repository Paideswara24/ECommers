import React from "react";

function LoadingBox() {
    return (
        <React.Fragment>
            <div className="loading">
                <i className="fa fa-spinner fa-spin"></i>Loading...!!!
                <i>Hello</i>
            </div>
        </React.Fragment>
    )
}
export default LoadingBox;