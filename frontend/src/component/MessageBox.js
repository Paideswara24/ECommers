import React from "react";

function MessageBox(props) {
    return (
        <React.Fragment>
            <div className={`alert alert-${props.veriant} || 'info`}>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default MessageBox;