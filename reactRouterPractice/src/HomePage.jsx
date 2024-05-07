import { Link } from "react-router-dom";
export default function HomePage(){
    return(
        <>
        <div className="header">
            React Router 
        </div>
        
        <div className="container">
        <h2>Our Services</h2>
        <div className="services">
        <Link to={"/products"}>Products</Link>
            <Link to={"/blog"}>Blog</Link>
        </div>
            
        </div>
        </>
    )
}