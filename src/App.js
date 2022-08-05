import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import TouchNav from "./components/TouchNav";
// import Video from "./components/Video";
import "./main.scss";

function App() {
  return (
    <div class="block" className="App">
      <div class="block">
        <TouchNav />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/video" element={<Video />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
