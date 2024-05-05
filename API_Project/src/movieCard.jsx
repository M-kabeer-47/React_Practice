export default function MovieCard(props){
    function showGenre(genre){
        return (
            <button>{genre.name}</button>
        )
    }
    const imageURL = props.imageURL;

    return(
        <div className="main">
            <div className="image">
                <img src={imageURL}></img>
            </div>
            <h1 className="title">{props.title}</h1>
            <div className="genres">
                {props.genres.map(showGenre)}
            </div>
            <div className="details">
                <h2>Company: <span>{props.company}</span></h2>
                <h2>Release Date: <span>{props.release_date}</span></h2>
                <h2>Popularity: <span>{props.popularity}</span></h2>
            </div>
        </div>
    )
}