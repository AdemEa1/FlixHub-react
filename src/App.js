import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav";

function App() {
  return (
  <Router>
    <Nav />
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
  </Router>
  );
}

export default App;
