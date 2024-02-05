import React from "react";
import "./style.css";
export default function Home() {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div>
        <div>
          <h2 className="book text-center mb-3 fs-1 fw-bolder">about component</h2>
        </div>

        <div className="d-flex align-items-center justify-content-center mb-3">
          <div
           
            className="line me-3"
           
          ></div>
          <i class="bi bi-moon-stars-fill"></i>
          <div
           
            className="line ms-3"
            
          ></div>
        </div>

        <div className="container">
          <div className="row px-5">
            <div className=" col-md-6 ps-md-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className=" col-md-6 pe-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
