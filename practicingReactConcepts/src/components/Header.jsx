import {NavLink, useLocation, useParams} from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchBook } from "../store/search";
// useEffect



export default function Header(){
    const location = useLocation();
    
    const [search,updateSearchedItem] = useState("")
    const search2 = useSelector((state)=>state.search.search)
    const dispatch = useDispatch()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [style,updateStyle] = useState({})
    const [toggleSearch,updateSearch] = useState({})
    function onClick(){
        updateStyle({
            right: "0%"
        })

        updateClick(!clicked)
    }
    const [clicked,updateClick] = useState(false)
   
    function handleCross(){
        updateStyle({
            right: "-100%"
        })
        updateClick(!clicked)
    }
    function onChange(e){
        const {value} = e.target;
        updateSearchedItem(value)
        dispatch(updateSearchBook(value))   

    }
    
  useEffect(() => {
    // Function to update windowWidth state when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log('Window resized. New width:', window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    

    // Cleanup: Remove event listener when the component unmounts
    return () => {
        console.log(windowWidth);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to ensure effect runs only once
    return(
        
        <div className="header">
            <NavLink className="link" to={"/"}><h2 className="home"> BooksVision</h2></NavLink>
            
            <div className="options" style={style}>
               {location.pathname !== '/aboutus' && location.pathname !== '/contactus' && <div className="searchside">
                {windowWidth < 900 && clicked === true ? <p style={{color: "white",boxSizing: "border-box",textAlign: "center", marginBottom: "20px",fontSize: "20px"}}>Find a book</p> : null}
                <div className="search" >
                
                    <CiSearch className="searchIcon" onClick={()=>{
                        console.log(search2);
                    }}/>
                <input type="text" className="search" onChange={onChange}/>
                </div>
                </div>
                } 
                
                
                <div className="links">
                <NavLink className="link" onClick={()=>{
                    
                }} to={"/aboutus"}>About Us</NavLink>
                <NavLink className="link" to={"/contactus"}>Contact Us</NavLink>
                </div>
                
            </div>
            {windowWidth < 900 && clicked === false ? <GiHamburgerMenu className="hamburger" onClick={onClick} /> : null}
            {windowWidth < 900 && clicked === true ? <RxCross2 className="hamburger" onClick={handleCross} /> : null}

        </div>
    )
}
