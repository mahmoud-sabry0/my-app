import React from "react";
import "./Footer.css";
import { Container } from "reactstrap";
export default function Footer() {
  return (
    <>
      <footer className=" footer ">
        <div className="Container">
          <div className="row">
           
            <div className="col-4 ">
            <div className="card-body text-center">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-4 ">
            
              <div className="icon card-body text-center">
                <h3 >AROUND THE WEB</h3>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-globe2"></i>
              </div>
            </div>
            <div  className="col-4">
              <div className="card-body text-center">
                <h3>ABOUT FREELANCER</h3>
                <p >
                  
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-dark text-center text-light py-2   ">
        <div className="p">
          <p>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
