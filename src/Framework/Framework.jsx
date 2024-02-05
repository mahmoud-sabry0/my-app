import React from "react";
import Img1 from "../imgs/mahmou1 (1).svg";
import "./Framework.css";

export default function Framework() {
  return (
    <div className=" imgs text-center  justify-content-center align-items-center text-white">
      <img className="img text-center" src={Img1} alt="" />
      <div  className="text-center pt-4" >
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
          start Framework
        </h2>
        <div
         
          className="d-flex align-items-center justify-content-center mb-3"
        >
          <div
           
            className="line me-3"
           
          ></div>
          <i className="bi bi-moon-stars-fill"></i>
          <div
           
            className="line ms-3"
           
          ></div>
        </div>
        <div className="Artist" >Graphic Artist - Web Designer - Illustrator</div>
      </div>
    </div>
  );
}
