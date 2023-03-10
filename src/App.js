import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./views/AboutPage";
import './App.css';

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<AboutPage/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}
