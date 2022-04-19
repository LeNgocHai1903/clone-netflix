import { NavBar } from "./containers/NavBar/NavBar";
import { LandingPage } from "./pages/LandingPage";
import { Footer } from "./containers/Footer/Footer";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
