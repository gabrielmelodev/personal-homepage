import React from 'react';
import Router from "./router/router.js"
import {BrowserRouter} from "react-router-dom";
import GlobalStyles from "./styles/ThemeGlobal";

function App() {
  return (
    <>
    <BrowserRouter>
    <GlobalStyles/>
    <Router/>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
