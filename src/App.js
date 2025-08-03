import Header from "./Components/Header";

import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";

import PrivateRoute from "./Components/PrivateRoute";
import { Routes, Route} from "react-router";
import { useState } from "react";




function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center bg-[#000814] text-white overflow-x-hidden">

      <div className="w-[85vw]">
        <Header isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>
        
          <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
            <Route path="/login" element={<Login setisLoggedIn={setisLoggedIn}/>} />
            <Route path="/signup" element={<Signup setisLoggedIn={setisLoggedIn}/>} />
            <Route path="/dashboard" element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Dashboard />
              </PrivateRoute>
             
              } />
              <Route path="*" element={<NotFound/>}/>
          </Routes>
        
      </div>

    </div>
  );
}

export default App;
