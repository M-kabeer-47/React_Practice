export default function MovieCard(props){
    function displaygenre(name){
        return (
            <button className="genreButtons">{name}</button>
        )
    }
    function showGenre(genre){
        let genres = []
        for(let i =0;i<Math.min(3,genre.length);i++){
            let name = genre[i].name
            genres.push(displaygenre(name))
        }
        return genres;
    }
    const imageURL = props.imageURL;

    return(
        <div className="main">
            <div className="image">
                <img src={imageURL}></img>
            </div>
            <h1 className="title">{props.title}</h1>
            <div className="genres">
                {showGenre(props.genres)}
            </div>
            <div className="details">
                <h2>Company: <span>{props.company}</span></h2>
                <h2>Release Date: <span>{props.release_date}</span></h2>
                <h2>Popularity: <span>{props.popularity}</span></h2>
            </div>
        </div>
    )
}