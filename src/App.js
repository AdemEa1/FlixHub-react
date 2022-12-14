import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav";
import Account from "./pages/Account";

function App() {
  return (
  <Router>
    <Nav />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/account" element={<Account />} />
  </Routes>
  </Router>
  );
}

export default App;
