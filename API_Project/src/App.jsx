import { useState } from "react";
import MovieCard from "./movieCard.jsx";
const movies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "Schindler's List",
  "Pulp Fiction",
  "The Lord of the Rings: The Return of the King",
  "The Good, the Bad and the Ugly",
  "Fight Club",
  "Forrest Gump",
  "Inception",
  "The Lord of the Rings: The Fellowship of the Ring",
  "Star Wars: Episode V - The Empire Strikes Back",
  "The Lord of the Rings: The Two Towers",
  "The Matrix",
  "The Batman",
  "One Flew Over the Cuckoo's Nest",
  "Seven Samurai",
  "Se7en",
  "Rampage",
  "The Silence of the Lambs",
  "It's a Wonderful Life",
  "Joker",
  "The Usual Suspects",
  "Karate Kid",
  "King Kong",
  "Saving Private Ryan",
  "The Green Mile",
  "Interstellar",
  "American History X",
  "John Wick 4",
  "The Pianist",
  "The Departed",
  "Gladiator",
  "Whiplash",
  "The Lion King",
  "The Prestige",
  "The Intouchables",
  "Twilight",
  "Memento",
  "Apocalypse Now",
  "Terminator 2: Judgment Day",
  "Spiderman no way home",
  "Raiders of the Lost Ark",
  "Avengers Endgame",
  "The Terminator",
  "Iron man",
  "The Great Dictator",
  "Cinema Paradiso",
  "The Dark Knight Rises",
  "Incredible Hulk",
  "Alien",
  "Thor the dark world",
  "Aliens",
  "Paths of Glory",
  "The Apartment",
  "Witness for the Prosecution",
  "12 strong",
  "Golmaal",
  "Venom let there be carnage",
  "Shang chi",
  "Doctor Strange",
  "Reservoir Dogs",
  "Requiem for a Dream",
  "Braveheart",
  "Toy Story",
  "To Kill a Mockingbird",
  "A Clockwork Orange",
  "Lawrence of Arabia",
  "Double Indemnity",
  "Eternal Sunshine of the Spotless Mind",
  "Full Metal Jacket",
  "The Sting",
  "Transformers",
  "Singin' in the Rain",
  "All About Eve",
  "Bicycle Thieves",
  "Scarface",
  "Escape Plan 2",
  "The Treasure of the Sierra Madre",
  "Godzilla",
  "On the Waterfront",
  "The Third Man",
  "Good Will Hunting",
  "The Hunt",
  "Trainspotting",
  "It",
  "Conjuring",
  "My Neighbor Totoro",
  "Spiderman 2",
  "Home alone",
  "Some Like It Hot",
  "Dangal",
  "Drive",
  "Fan",
  "John Wick 3",
  "Metropolis",
  "American psycho",
  "Inglourious Basterds",
  "The Apartment",
  "The Elephant Man",
  "Sultan",
  "The Night of the Hunter",
  "The Graduate"
];



async function fetchData(movieName){
  let movieObj;
  try {
    let movieSearchResponse = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=03233700a39482891296d65b411007b4`);
    let movie = await movieSearchResponse.json();   
    let {results} = movie;
  // console.log(results);
  const firstResult = results[0];
  // console.log(firstResult);
  let {poster_path} = firstResult
  // console.log(poster_path);
  let { id } = firstResult;
  console.log(id);
let movieDetailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=03233700a39482891296d65b411007b4`);
let movieData = await movieDetailsResponse.json();
// let response = await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=03233700a39482891296d65b411007b4`);
//     let imageData = await response.json();
//     console.log(imageData);

  movieObj = {movieData:movieData,
    imageData: poster_path
  
  } 
  
  
 
  // console.log(movie);
  
  
}
catch(error){
console.log("Error fetching data");
return null;
}
return movieObj;

}
function selectMovie(){
  const randomNumber = Math.floor(Math.random() * 100);
  let movieName = movies[randomNumber];
  return movieName;

}




export default function App(){
  const [toggle,updateToggle] = useState(false)

  const [moviesList,addMovie]= useState([])
  async function addToList(){
    updateToggle(!toggle);
    for(let i=0;i<3;i++){
      let {movieData,imageData} =  (await fetchData(selectMovie()))
      // console.log(fetchedData);
      let {original_title,genres,production_companies,release_date,popularity} = movieData;
      let name;
      // if(belongs_to_collection!=null){
      //   let {name} = belongs_to_collection;
      // }
      
      console.log(original_title);
      
      // let {name: genre1name} = genre1;
      // let {name: genre2name} = genre2;
      // console.log(genre2name); 
      const [company1] = production_companies;
      let {name: company1name} = company1
      console.log(company1name);
      // console.log(genre1name);
      console.log(release_date);
      console.log(popularity);
      console.log(genres);
      let newMovie = {
        title: original_title,
        genres: genres,
        company: company1name,
        release_date: release_date,
        popularity: popularity,
        imageData: `https://image.tmdb.org/t/p/w500${imageData}`
      }
      addMovie((prevValue)=>{
        return [...prevValue,newMovie]
      })
      
    }
  }
  async function generateMovie(){
    for(let i=0;i<3;i++){
      let {movieData,imageData} =  (await fetchData(selectMovie()))
      // console.log(fetchedData);
      let {original_title,genres,production_companies,release_date,popularity} = movieData;
      let name;
      // if(belongs_to_collection!=null){
      //   let {name} = belongs_to_collection;
      // }
      
      console.log(original_title);
      
      // let {name: genre1name} = genre1;
      // let {name: genre2name} = genre2;
      // console.log(genre2name); 
      const [company1] = production_companies;
      let {name: company1name} = company1
      console.log(company1name);
      // console.log(genre1name);
      console.log(release_date);
      console.log(popularity);
      console.log(genres);
      let newMovie = {
        title: original_title,
        genres: genres,
        company: company1name,
        release_date: release_date,
        popularity: popularity,
        imageData: `https://image.tmdb.org/t/p/w500${imageData}`
      }
      return newMovie;
  }
}
  async function replaceMovies(){
    let newMovies= []
    for(let i = 0;i<3;i++){
      await generateMovie().then((value)=>{
        newMovies.push(value);
      });
      
    }
    addMovie(newMovies);
    
    
  }
  
  return <>
<div className="text-container">
  Random Movies Generator
</div>


  <div className="section">
  <div className="movies">
  {moviesList.map((item,index)=>{
    return <MovieCard 
    key = {index}
    title = {item.title}
    company = {item.company}
    genres = {item.genres}
    release_date = {item.release_date}
    popularity = {item.popularity}
    imageURL = {item.imageData}
    
    />
  })}
  </div>
  {!toggle ? <button className="generate" onClick={addToList}>Generate</button>: <button className="generate toggle" onClick ={replaceMovies}>Toggle</button>}

  </div>
 
  
  
  </>
}