import AddBook from "./addBook";

export default function Books(){
    return(
        <>
        <div className="main">
           <AddBook />
           <hr style={{marginTop:"20px"}}></hr>
           <h1 className="title2">Books</h1>
           
        </div>
        </>
    )
}