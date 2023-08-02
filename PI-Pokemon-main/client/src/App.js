import './App.css';

import { Route,Routes,useLocation } from "react-router-dom";
import SearchBar from './components/searchBar/searchBar';
import Home from "./views/homePage/home.jsx";
import Landing from "./views/landingPage/landing.jsx";
import Form from "./views/formPage/form.jsx";
import Detail from "./views/detailPage/detail.jsx";

function App() {
  const location = useLocation();

  return (
    <div>

      {(location.pathname !== "/" && location.pathname !== "/home") && (<SearchBar />)}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>

    </div>
  );
}

export default App;
