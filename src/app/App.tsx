import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import Dashboard from "../features/dashboard/ui/dashboard";

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/catalog" element={<Dashboard />} />
          <Route path="/about" element={<div>About</div>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
