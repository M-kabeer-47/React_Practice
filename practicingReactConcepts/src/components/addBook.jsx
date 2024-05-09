export default function AddBook(){
    return(
        <div className="addBook">
        <div className="userInputs">
        <div className="inputs name">
            <label htmlFor="">Name</label>
            <input type="text" className="bookInputs" />
        </div>
        <div className="inputs price">
            <label htmlFor="">Price</label>
            <input type="number"className="bookInputs" />
        </div>
        <div className="inputs author">
            <label htmlFor="">Author </label>
            <input type="text" className="bookInputs"/>
        </div>
        </div>
        <button className="addButton">Add</button>
        
    </div>
    )
}