import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FormPage from "./FormPage";
import DataPage from "./DataPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/datapage" element={<DataPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
