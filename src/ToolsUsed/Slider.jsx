import React from "react";
import Slider from "react-slick";
import "./slider.css"
const Tools=()=>{

    const settings = {
        dots:true,
        infinite: true,
        slidesToShow:3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        
      };
      return (
        <div>
          <h1 style={{ margin:"5px",fontWeight:"bold" ,fontSize:"50px",color:"#00baf2" ,textAlign:"center"}}>Tools Used</h1>
          <div style={{width:"30%",marginLeft:"515px"}}>
          <Slider {...settings}>
            <div className="tool1" >
                <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png" alt="im1"/>
            <h3 >VS Code</h3>
            </div>
            <div className="tool1">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="im2"/>
            <h3>Github</h3>
            </div>
            <div className="tool1">
            <img src="https://media.trustradius.com/product-logos/h3/JA/T1A83W5H538P.PNG"alt="im3"/>
            <h3>Postman</h3>
            </div>
           
          </Slider>
          </div>
        </div>
      );
    }


    export default Tools


