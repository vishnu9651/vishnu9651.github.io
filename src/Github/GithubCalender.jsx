import { Box } from "@chakra-ui/react"
import GitHubCalender from "react-github-calendar"

import "./GithubCalender.css"
export const Calender=()=>{
    
    return(
        <Box style={{ fontWeight:"bold", marginTop:"-30px"}} width={{base:"95%",sm:"95%",md:"85%",lg:"80%",xl:"80%"}} margin={"auto"}>
        <h1 style={{ marginRight:"14%",fontWeight:"150px" ,fontSize:"50px",color:"#00baf2"}} >My Github Calender</h1>
        <br />
        <br/>
<div >
        <GitHubCalender 
        style={{margin : "auto",color:"white", fontWeight: "bold"}} 
        blockSize={20}
        fontSize={18}
        username="Vishnu9651" />
        </div>
    </Box>
    )
}
