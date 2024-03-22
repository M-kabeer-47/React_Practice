import "./styles.css"
import Img from "./img.jsx"
import Details from "./Details.jsx"
export default function Card(props){
    return (
        <>
        <div className="card">
        <div className="top">
          
          <h2 className="name">{props.name}</h2>
          <Img src= {props.src}/>
        </div>
        <div className="bottom ">
         <Details tel = {props.tel} email = {props.email}/>
        </div>
      </div>
        </>
    )
}