import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navb from "./components/Navb";
import Home from "./views/Home";
import Albums from "./views/Albums";
import Artist from "./views/Artist";
import Fav from "./views/Fav";

function App() {
  return (
  <>
      <BrowserRouter>
      <Navb/>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Album" element={<Albums/>}/>
          <Route path="/Artist" element={<Artist/>}/>
          <Route path="/Fav" element={<Fav/>}/>
        </Routes>
      </BrowserRouter>
    
  <div>yalla shufer</div>
  </>
  )
}

export default App;
