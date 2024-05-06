import { useState } from "react";
import MovieCard from "./movieCard.jsx";
const movies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "Uncharted",
  "Ambulance",
  "Morbius",
  "The Good, the Bad and the Ugly",
  "Fight Club",
  "Forrest Gump",
  "Inception",
  "Men in Black",
  "Star Wars",
  "The Lord of the Rings: The Two Towers",
  "The Matrix",
  "The Batman",
  "Bullet train",
  "Dhol",
  "Se7en",
  "Rampage",
  "The Silence of the Lambs",
  "tomorrow war",
  "Joker",
  "The Usual Suspects",
  "Karate Kid",
  "King Kong",
  "Black Adam",
  "Smile",
  "Interstellar",
  "Gray man",
  "John Wick 4",
  "The Pianist",
  "The Departed",
  "Gladiator",
  "Whiplash",
  "The Lion King",
  "Nope",
  "The Intouchables",
  "Twilight",
  "Memento",
  "Apocalypse Now",
  "Creed 3",
  "Spiderman no way home",
  "65",
  "Avengers Endgame",
  "The Terminator",
  "Iron man",
  "The Great Dictator",
  "Plane",
  "The Dark Knight Rises",
  "Incredible Hulk",
  "Spencer",
  "Thor the dark world",
  "X-men",
  "Fall",
  "Final Destination",
  "Witness for the Prosecution",
  "12 strong",
  "Golmaal",
  "Venom let there be carnage",
  "Shang chi",
  "Doctor Strange",
  "Reservoir Dogs",
  "Renfield",
  "Braveheart",
  "Toy Story",
  "Sisu",
  "A Clockwork Orange",
  "Lawrence of Arabia",
  "Double Indemnity",
  "Faxt X",
  "Dead reckoning",
  "The Sting",
  "Transformers",
  "Equalizer",
  "All About Eve",
  "F9",
  "Scarface",
  "Escape Plan 2",
  "Blue beetle",
  "Godzilla",
  "On the Waterfront",
  "The Third Man",
  "Good Will Hunting",
  "The Hunt",
  "Trainspotting",
  "It",
  "Conjuring",
  "The marvels",
  "Spiderman 2",
  "Home alone",
  "Saw X",
  "Dangal",
  "Drive",
  "Fan",
  "John Wick 3",
  "Batman v superman",
  "American psycho",
  "Inglourious Basterds",
  "The Apartment",
  "The Elephant Man",
  "Sultan",
  "The Night of the Hunter",
  "The Graduate",
  "Flash",
  "Aquaman",
  "World war z",
  "Justice league",
  "Superman",
  "Tokyo Drift",
  "Animal",
  "12th fail",
  "Race 2",
  "Top gun maverick",
  "Oppenheimer",
  "Ben 10",
  "Tenet",
  "Fall guy",
  "Imaginary",
  "Madame Web",
  "Migration"
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
  let style  = {};
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
    style = {
      paddingTop: "0px"
    }

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


  <div className="section" style={{paddingTop: toggle && '0px'}}>
  {!toggle && <button className="generate top effect" onClick={addToList}>Generate</button>}
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
 {toggle && <button className="generate toggle effect" onClick ={replaceMovies}>Toggle</button>}

  </div>
 
  
  
  </>
}