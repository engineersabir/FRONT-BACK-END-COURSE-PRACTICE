import MovieCard from "../src/App"

function Home(){
    const movies=[
        {id:1, title:"John Wick", release_date:"2023"},
        {id:1, title:"John hilton", release_date:"2020"},
        {id:1, title:"Michael Wick", release_date:"2013"},
    ];

    const handleSearch=()=>{}

    return <div className="home">
    <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search for movies"></input>
    </form>

<div className="movies-grid">
{movies.map((movie=> <MovieCard movie={movie} key={movie.id}/>))}

</div>
    </div>
}

export default Home