import React from 'react';
import Router from "./router/router.js"
import {BrowserRouter} from "react-router-dom";
import GlobalStyles from "./styles/ThemeGlobal";
import Header from "./components/Navbar";
function App() {
  return (
    <>
    <BrowserRouter>
    <GlobalStyles/>
    <Header/>
    <Router/>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
