import React from "react";
import {createRoot} from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import "./css/Header.css"
const root = createRoot(document.getElementById("root"));

root.render(<>
    <Header />
    <Main/>
</>);