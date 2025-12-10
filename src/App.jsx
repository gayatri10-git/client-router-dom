import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Hero from "./components/hero";
import Team from "./components/team";
import Feature from "./components/feature";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/team" element={<Team />} />
        <Route path="/feature" element={<Feature />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
