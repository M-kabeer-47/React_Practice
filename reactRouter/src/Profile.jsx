import { useParams } from "react-router-dom"


export default function Profile(){
    const parameter =useParams()
    return(
        <h1>Profile Page {parameter.profileId}</h1>
    )
}