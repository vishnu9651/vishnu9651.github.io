import GitHubCalender from "react-github-calendar"

import "./GithubCalender.css"
export const Calender=()=>{
    
    return(
        <div style={{ marginLeft:"18%",fontWeight:"bold"}}>
        <h1 style={{ marginRight:"14%",fontWeight:"150px" ,fontSize:"50px",color:"#00baf2"}} >My Github Calender</h1>
        <br />
<div className="Cal1">
        <GitHubCalender username="Vishnu9651" />
        </div>
    </div>
    )
}
