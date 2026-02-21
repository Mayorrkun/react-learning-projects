import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar"; 
import "./index.css";
import MainSection from "./components/Main.jsx";
const root = createRoot(document.getElementById("root"));

root.render(
<>
<Navbar/>
<MainSection/>
</>
);
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
