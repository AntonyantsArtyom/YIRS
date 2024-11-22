import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./features/LoginForm/ui/LoginForm";
import DormitorySelection from "./features/DormitorySelection/ui/DormitorySelection";
import StudentsView from "./widgets/StudentsView/ui/StudentsView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/choosedormitory" element={<DormitorySelection />} />
        <Route path="/students" element={<StudentsView />} />
      </Routes>
    </Router>
  );
}

export default App;
