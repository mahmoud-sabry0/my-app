import React from "react";
import "./About.css";
import Img1 from "../mahmou1.png";
import fa from "../../imgs/mahmou1 (2).png";
import na from "../../mahmou1 (3).png";
export default function About() {
  return (
    <>
      <div class="container home">
        <div class="row g-5">
          <div class="text-center pt-4">
            <h2 class="text-uppercase mb-3 fs-1 fw-bolder">
              portfolio component
            </h2>
            <div
              _ngcontent-blv-c6=""
              class="d-flex align-items-center justify-content-center mb-3"
            >
              <div
              
                class="line me-3"
               
              ></div>
              <i  class="fa-solid fa-star"></i>
              <div
               
                class="line ms-3"
                
              ></div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="rounded-3 overflow-hidden position-relative">
              <img alt="" class="w-100 rounded-3" src={Img1} />
              <div class="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i class="text-white bi bi-plus-lg "></i>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="rounded-3 overflow-hidden position-relative">
              <img alt="" class="w-100 rounded-3" src={fa} />
              <div class="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i class="text-white bi bi-plus-lg "></i>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="rounded-3 overflow-hidden position-relative">
              <img alt="" class="w-100 rounded-3" src={na} />
              <div class="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i class="text-white bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="rounded-3 overflow-hidden position-relative">
              <img alt="" class="w-100 rounded-3" src={Img1} />
              <div class="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i class="text-white bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="rounded-3 overflow-hidden position-relative">
              <img alt="" class="w-100 rounded-3" src={fa} />
              <div class="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i class="text-white bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="rounded-3 overflow-hidden position-relative">
              <img alt="" class="w-100 rounded-3" src={na} />
              <div class="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i class="text-white bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
