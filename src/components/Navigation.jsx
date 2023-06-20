import React from "react";

const Navigation = () => {
  return (
    <div className="">
      <div className="flex justify-between mx-auto navigation desktop main-menu tablet w-nav">
        <div className="mx-6 my-3 ">
          <img
            className="sales-image image-156 w-60 "
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d857bb593d0d6f444528aa_full_logo-p-500.webp"
            alt=""
          />
        </div>
        <div className="flex drop-down-6 ">
          <div className="dropdown-toggle-4 w-dropdown-toggle">
            <div className=" text-block-9">Products</div>
          </div>
          <div className="dropdown-toggle-4 w-dropdown-toggle">
            <div className="text-block-9">Solutions</div>
          </div>
          <div className="dropdown-toggle-4 w-dropdown-toggle">
            <div className="text-block-9">Pricing</div>
          </div>
          <div className="dropdown-toggle-4 w-dropdown-toggle">
            <div className="text-block-9">Resources</div>
          </div>
          <div className="dropdown-toggle-4 w-dropdown-toggle">
            <div className="text-block-9">Support</div>
          </div>
        
        
          <button className="button-8 sign-in w-button">Sign In</button>
          <button className=" button-8 w-button">Get Started</button>
          </div>

        
      </div>
    </div>
  );
};

export default Navigation;
