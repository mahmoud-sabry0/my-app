import React from "react";
import "./Gallery.css"
export default function Gallery() {
  return (
    <div class="w-50 p-3 mx-auto mp-5 ng-pristine ng-valid ng-touched gallery ">
      <label for="userName" class="position-relative top-0 __top">
        userName 
      </label>
      <input
        id="userName"
        type="text"
        placeholder="userName"
        name="userName"
        class="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
      />
      <label for="userAge" class="position-relative top-0 __top">
        userAge 
      </label>
      <input
        id="userAge"
        type="text"
        placeholder="userAge"
        name="userName"
        class="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
      />
      <label for="userEmail" class="position-relative top-0 __top">
        userEmail 
      </label>
      <input
        id="userEmail"
        type="text"
        placeholder="userEmail"
        name="userName"
        class="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
      />
      <label for="userPassword" class="position-relative top-0 __top">
        userPassword 
      </label>
      <input
        id="userPassword"
        type="text"
        placeholder="userPassword"
        name="userName"
        class="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
      />
      <button class="btn mt-4 bg-dark text-white"> send Message </button>
    </div>
  );
}
 