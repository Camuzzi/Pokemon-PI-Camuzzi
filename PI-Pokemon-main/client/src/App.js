import './App.css';

import { Route,Routes } from "react-router-dom";
import Home from "./views/homePage/home.jsx";
import Landing from "./views/landingPage/landing.jsx";
import Form from "./views/formPage/form.jsx";
import Detail from "./views/detailPage/detail.jsx";

function App() {
  return (
    <div>

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
