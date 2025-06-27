import React from "react";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";

function App(){
  return(
    <>
      <Toaster/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;