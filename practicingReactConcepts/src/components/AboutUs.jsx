import { useParams } from "react-router-dom";
import Header from "./Header";

export default function AboutUs() {
    
  return (
    <>
    <Header />
    <div className="aboutUs">
        
      <h1 style={{borderBottom:"1px solid black", maxWidth: "800px"}}>About Us</h1>
      
      <p>
        Welcome to our library management system! We are passionate about
        fostering a love for reading and providing access to knowledge for
        everyone in our community. Our mission is to create a welcoming and
        inclusive environment where patrons can explore a diverse collection of
        books, engage in lifelong learning, and discover new worlds through
        literature. With user-friendly features and dedicated staff, we strive
        to make borrowing, returning, and discovering books as seamless and
        enjoyable as possible. Whether you're a student, a book enthusiast, or
        simply looking for your next great read, we're here to support you on
        your literary journey. Thank you for choosing our library as your
        gateway to endless stories and adventures!
      </p>
    
    </div>
 
    </>
   
  );
}
