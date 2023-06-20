import React from "react";
const data = [
  {
    feature: "Healthcare",
    img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d32dfae5cd2e139e5_Group%2018673.svg",
  },
  {
    feature: "Dental",
    img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7c6aace717f0cd9c6b_Group%2018674.svg",
  },
  {
    feature: "Home Services",
    img:"https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7ee724d71235537f0b_Group%2018681.svg",
  },
  {
    feature:"retail",
    img:"https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d9f7f1bb4a89eedec_Group%2018675.svg"

  },
  {
    feature:"Hospitality",
    img:"https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7ddd5081b753e27b8c_Group%2018676.svg",
  },
  {
    feature:"Automotive",
    img:"https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d132cbe948c251a1b_Group%2018677.svg",
  },
  {
    feature:"Resataurants",
    img:"https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e8642e919312d89de_Group%2018678.svg",
  },
  {
    feature:"Wellness",
    img:"https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e13ffea380326cf92_Group%2018679.svg",
  },
  {
    feature:"Professional Service",
    img:"https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e8642e9d49c2d89dd_Group%2018680.svg",
  },
  {
    feature:"Care Services",
    img:"https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e9f7f1b11439eedef_Group%2018682.svg",
  },
  {
    feature:"Financial Services",
    img:"https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7eee175fd8089febf1_Group%2018683.svg",
  },
  {
    feature:"Recreational Services",
    img:"https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e9f7f1b73679eedee_Group%2018684.svg"
  }
  
];
const Features = (props) => {
  return (
    <div className="container-22 w-container">
      <h2 className="heading-4">
        <strong className="bold-text-3">
          SalesCaptain is designed for your business
        </strong>
        <p className="paragraph-15">Select your industry to see how it works</p>
      </h2>
      
      <div className=" w-layout-grid grid-8">
      {data.map((item)=>
        <div id=" flex   node-_0c61e870-cf59-5d7f-6ce4-385ebdbef42c-8dc347e6" className="pb-8  pt-7 div-block-18">
          <img
            className="flex mx-auto image-34"
            src={item.img}
          />
          <h4 className="heading-15">{item.feature}</h4>
        </div>
      )}
        
       
      </div>
    </div>
  );
};

export default Features;
