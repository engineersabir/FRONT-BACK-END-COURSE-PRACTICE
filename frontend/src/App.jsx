import './css/App.css'
import Home  from '../pages/home';
import {Routes,Route} from "react-router-dom"
import Favorites from '../pages/favorites';
function App() {
    return (
    <>
    <div>
    <NavBar/>
    </div>
    <main className='main-content'>
    <routes>

<Route path='/' element={<Home/>}/>
<Route path='/favorites' element={<Favorites/>}/>
    </routes>

    </main>
</>
);
}

export default App
