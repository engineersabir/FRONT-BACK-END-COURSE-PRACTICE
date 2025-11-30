import MovieCard from "../src/App"
import { useState } from "react ";


function Home(){

    const [searchQuery, setSearchQuery]=useState("");
    const movies=[
        {id:1, title:"John Wick", release_date:"2023"},
        {id:1, title:"John hilton", release_date:"2020"},
        {id:1, title:"Michael Wick", release_date:"2013"},
    ];

    const handleSearch=(e)=>{
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("")
    }

    return <div className="home">
    <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search for movies" className="search-input" value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}></input>
   
   <button type="submit" className="search-button">Search</button>
    </form>

<div className="movies-grid">
(movies.map(movie)=>{
    
})
{movies.map((movie=> <MovieCard movie={movie} key={movie.id}/>))}

</div>
    </div>
}

export default Home