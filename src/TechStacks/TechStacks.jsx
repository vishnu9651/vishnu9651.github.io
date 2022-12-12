
import "./stacks.css"
export const Stacks=()=>{

    return <div style={{fontWeight:"bold"}} >
        <h1 style={{ margin:"5px",fontWeight:"150px" ,fontSize:"50px",color:"#00baf2" ,textAlign:"center"}}>My Statistics</h1>
        <div className="Stacks1">
        <img src="https://github-readme-streak-stats.herokuapp.com?user=Vishnu9651&theme=tokyonight_duo" />
        </div>
        <br />
        <div className="Stacks">
       <div>
        <img src="https://github-readme-stats.vercel.app/api?username=Vishnu9651&theme=tokyonight_duo&hide_border=false&include_all_commits=true&count_private=true" />
        </div>
        <div>
        <img style={{marginTop:"25px"}} src="https://github-readme-stats.vercel.app/api/top-langs/?username=Vishnu9651&theme=tokyonight_duo&hide_border=false&include_all_commits=true&count_private=true&layout=compact" />
        </div>
        </div>
    </div>
}