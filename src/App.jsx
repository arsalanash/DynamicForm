import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Landing";
import Level1 from "./Level1/Level1";
import Level2 from "./Level2/Level2";
import Level3 from "./Level3/Level3";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/Level1" element={<Level1 />}></Route>
          <Route path="/level2" element={<Level2 />}></Route>
          <Route path="/level3" element={<Level3 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
