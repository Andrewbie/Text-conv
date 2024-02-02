import React from "react";
// import PropTypes from 'prop-types'

export default function Alert(props) {
  return (
    <div className="container" style={{height:"50px"}}>
    {props.alert && <div className={`alert alert-${props.alert.type}`} data-bs-theme={props.mode} role="alert">
    {props.alert.msg}
  </div>}
  </div>
  );
}
