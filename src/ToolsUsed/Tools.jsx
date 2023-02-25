import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

const skills = [
 
  {
    id: 1,
    image: "https://media.trustradius.com/product-logos/h3/JA/T1A83W5H538P.PNG",
    heading: "Postman"
  },{
    id: 2,
    image: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png",
    heading: "VS-Code"
  },{
    id: 3,
    image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    heading: "Github"
  },{
    id: 5,
    image: "https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png",
    heading: "Chakra-UI"
  },{
    
    id: 6,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
    heading: "Matlab"
  },{
    id: 1,
    image: "https://media.trustradius.com/product-logos/h3/JA/T1A83W5H538P.PNG",
    heading: "Postman"
  },{
    id: 2,
    image: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png",
    heading: "VS-Code"
  },{
    id: 3,
    image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    heading: "Github"
  },{
    id: 5,
    image: "https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png",
    heading: "Chakra-UI"
  },
  {
    
    id: 6,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
    heading: "Matlab"
  },{
    id: 1,
    image: "https://media.trustradius.com/product-logos/h3/JA/T1A83W5H538P.PNG",
    heading: "Postman"
  },{
    id: 2,
    image: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png",
    heading: "VS-Code"
  },{
    id: 3,
    image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    heading: "Github"
  },{
    id: 5,
    image: "https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png",
    heading: "Chakra-UI"
  },
  {
    
    id: 6,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
    heading: "Matlab"
  }
  
]

const Tools = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };
  return (
    <div style={{width:"98%", margin:"auto", marginTop:"120px"}} >
      <Heading fontSize={{ base: "22px",sm:"32px", md: "40px", lg: "48px" }} style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "50px" }}><Text color="blue.500">Tools Used</Text></Heading>
      <Slider {...settings}>
        {
          skills.map((el) => (
            <Box  key={el.id} h={"100px"} backgroundColor={"transparent"} alignItems={"center"} margin={"auto"} marginTop={"50px"}>
              <Box style={{width:"100%", height:"100%", margin:"auto"}}>
                <Image src={el.image} alt={el.heading} style={{width:"120px", height:"120px", objectFit:"cover", borderRadius:"10%"}}/>
              </Box>
              <Box m={"auto"} mt={"15%"} textAlign={"center"}>
                <Text fontWeight={"bold"} marginRight={{base: "80px", md:"100px", sm:"100px", lg:"80px"}}>{el.heading}</Text>
              </Box>
            </Box>
          ))
        }
      </Slider>

    </div>
  );
}

export default Tools




// import { Box, Flex, Stack } from "@chakra-ui/react";
// import React from "react";
// import Slider from "react-slick";
// // import "./slider.css"
// const Tools=()=>{

//     const settings = {
//         dots:true,
//         infinite: true,
//         slidesToShow:3,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 2000,
//         autoplaySpeed: 2000,
//         cssEase: "linear",
        
//       };
//       return (
//         <div style={{marginBottom:"50px",marginTop:"-50px"}} >
//           <h1 style={{ margin:"5px",fontWeight:"bold" ,fontSize:"50px",color:"#00baf2" ,textAlign:"center"}}>Tools Used</h1>
//           <div  style={{width:"80%" ,marginLeft:"39%"}} >
//           <Stack direction={{base:"column", md:"column",lg:"row"}}>
// <Flex gap={"5rem"}>
//   <Box  boxSize={"10%"} fontSize={{base:"10px",md:"15px",lg:"15px"}}>
//             <div className="tool1" >
//                 <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png" alt="im1"/>
//             <h3 >VS Code</h3>
//             </div>
//             </Box>
//             <Box  boxSize={"10%"}>
//             <div >
//                 <img  src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="img2"/>
//             <h3>Github</h3>
//             </div>
//             </Box>
//             </Flex>
//             </Stack>
          
//           </div>
//         </div>
//       );
//     }


//     export default Tools


