import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav";
import Account from "./pages/Account";
import MovieLanding from "./pages/MovieLanding";
import MovieHome from "./components/MovieHome";

function App() {
  return (
  <Router>
    <Nav />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/account" element={<Account />} />
    <Route path="/movieland/:searchTerm" element={<MovieLanding />} />
    <Route path="/movie/:id" element={<MovieHome />} />
  </Routes>
  </Router>
  );
}

export default App;
