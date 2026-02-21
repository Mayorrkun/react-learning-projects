import { createRoot } from "react-dom/client";
import "./css/index.css";
import Header from "./components/Header";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
  <Header/>
  </>
);