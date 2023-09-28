import './App.css';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

//pages
import Loader from './pages/Loader/Loader';
//page
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Exp from './pages/Exp';
import Project from './pages/Project';

import Navbar from './components/Navbar/Navbar';

function App() {

  const personDetailes = {
    name: "AFNAN JEHUBONG",
    phone: "+66-90-956-8053",
    email: "dev@gmail.com"
  };

  const PageLocation = useLocation();

  const [showLoader, setShowLoader] = useState(true);

  const [ originalTitle, setOriginalTitle ] = useState();

  useEffect(() => {
    if(PageLocation.pathname !== "/") {
      setShowLoader(false);
    };
    if(!originalTitle) {
      setOriginalTitle(document.title);
    };

    const handleTabChange = () => {
      if(document.hidden) {
        document.title = "👋🏻 Git pulling you back in!";
      } else {
        document.title = originalTitle;
      }
    };
    window.addEventListener("visibilitychange", handleTabChange);
    return() => window.removeEventListener("visibilitychange", handleTabChange);
  }, [PageLocation, originalTitle]);

  return (
    <div >
      {showLoader ? (
        <Loader setShowLoader={setShowLoader} />
      ) : (
        <div>
          <Navbar />
          <Routes location={PageLocation} key={PageLocation.pathname}>
            <Route path='/' element={< Home name={personDetailes.name} />} />
            <Route path='/about' element={< About />} />
            <Route path='/skill'  element={< Skill />}/>
            <Route path='/project' element={< Project />} />
            <Route path='/experience' element={< Exp />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
