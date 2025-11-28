import './App.css'
import {MovieCard}  from './components/movieCard';
function App() {
  return (
    <>

<MovieCard movie={{title:"tim's", release_date:"2025"}} />
<MovieCard movie={{title:"Joe's", release_date:"2026"}} />


    
</>
)
}

export default App
