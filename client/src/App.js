import "./App.css";
import StudentList from "./components/StudentList";
import StudentForm from "./components/Students";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<StudentForm />} />
        </Routes>
        <Routes>
          <Route exact path="/list" element={<StudentList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
