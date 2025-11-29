import './App.css'
import {MovieCard}  from './components/movieCard';
function App() {
    const movieNumber=2;
  return (
    <>
(movieNumber===1 ?(

)

<MovieCard movie={{title:"tim's", release_date:"2025"}} />
)
<MovieCard movie={{title:"Joe's", release_date:"2026"}} />


    
</>
)
}

export default App
