import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "50px"
        }}>Page not found
            <Link to={'/'}>Home from Link</Link>
            {/* <a href="/">Home from anchor tag</a> */}
        </div>
        
    )
}