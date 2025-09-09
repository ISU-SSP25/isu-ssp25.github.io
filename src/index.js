import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";  // Change BrowserRouter to HashRouter
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Home, ShortTermMission, LongTermVision, Contributors, Resources} from "./pages";
import { ScrollToTop } from "./components"; // Import your component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop /> {/* Add your component here */} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/short-term-mission" element={<ShortTermMission />} />
        <Route path="/long-term-vision" element={<LongTermVision />} />
        <Route path="/contributors" element={<Contributors />} /> 
        <Route path="/resources" element={<Resources />} />
        
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
