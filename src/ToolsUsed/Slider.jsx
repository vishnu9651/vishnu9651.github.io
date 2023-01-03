import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
// import "./slider.css"
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
        <div style={{marginBottom:"50px",marginTop:"-50px"}} >
          <h1 style={{ margin:"5px",fontWeight:"bold" ,fontSize:"50px",color:"#00baf2" ,textAlign:"center"}}>Tools Used</h1>
          <div  style={{width:"80%" ,marginLeft:"39%"}} >
          <Stack direction={{base:"column", md:"column",lg:"row"}}>
<Flex gap={"5rem"}>
  <Box  boxSize={"10%"} fontSize={{base:"10px",md:"15px",lg:"15px"}}>
            <div className="tool1" >
                <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png" alt="im1"/>
            <h3 >VS Code</h3>
            </div>
            </Box>
            <Box  boxSize={"10%"}>
            <div >
                <img  src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="img2"/>
            <h3>Github</h3>
            </div>
            </Box>
            </Flex>
            </Stack>
          
          </div>
        </div>
      );
    }


    export default Tools


