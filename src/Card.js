import React from "react";

import "./App.css";

const Card = ({ source = "", name = "", email = "" }) => {
  return (
    <div className=" col-xl-3 col-lg-3 col-md-6 col-sm-6">
      <div className="card">
        <br></br>
        <img
          src={require("./" + source + ".jpg")}
          className="card-image-top"
          alt="not found"
        />
        <br></br>
        <div className="card-body">
          <h1 className="card-title text-center">
            <b>{name}</b>
          </h1>
          <br></br>
          <h5 className="card-text text-center">{email}</h5>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Card;
