import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ViewRecipe from "./pages/ViewRecipe";
import Favourites from "./pages/Favourites";
import PageNotFfound from "./pages/PageNotFfound";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/ViewRecipe" element={<ViewRecipe />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/*" element={<PageNotFfound />} />
            

          </Route>
        </Routes>

      </BrowserRouter>





    </div>
  );
}

export default App;