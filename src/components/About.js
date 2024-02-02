import React from "react";

export default function About(props) {
  return (
    <>
      <div className={`container fs-3 text text-${props.txtCol}`} data-bs-theme={props.mode}>
        <p className={`text-${props.txtCol}`}>
          <strong>Text-Conv</strong> is a free application build using React js
          to change case of your input Text and it also tells you the no. of
          character and words your input text contains.
        </p>
          <div className=".d-flex">
        <h3>
          <strong>Features</strong>
        </h3>
        <ul class="list-group fs-4 text" style={{ width: "400px" }}>
          <li class="list-group-item">Free to Use</li>
          <li class="list-group-item">Easy to Use</li>
          <li class="list-group-item">Easy Interaction</li>
          <li class="list-group-item">Dark Mode Enabled</li>
          <li class="list-group-item">Base Algorithm</li>
        </ul>
        <div className="container my-6" style={{ width: "400px" }}>
          <h3>Build and Maintained by</h3>
          <h2>_Andrewbie</h2>
          </div>
        </div>
      </div>
    </>
  );
}
