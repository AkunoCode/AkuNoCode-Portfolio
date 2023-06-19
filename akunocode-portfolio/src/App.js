import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar/NavBar'
import Home from './Home/Home'

function App() {
    // Routes
    return (
        <>
            <NavBar />
            <Home />
        </>
        // <BrowserRouter>
        //     <Routes>
        //         <Route path='/' element={<NavBar />}>
        //             <Route index element={<Home />} />
        //             <Route path='*' element={<h1 id='NotFound'>404 Not Found</h1>} />
        //         </Route>
        //     </Routes>
        // </BrowserRouter>
    )
}

export default App;