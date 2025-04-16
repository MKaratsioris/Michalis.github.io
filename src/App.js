import "./App.scss";

import { AllRoutes } from "./routes/AllRoutes";
import { NavBar } from "./components/AllComponents";
import ParticleFile from "./utils/particles";

import { useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const location = useLocation();
  const handleInit = async (main) => {
    await loadFull(main);
  };
  const renderParticleJs = location.pathname === "/";

  return (
    <div className="App">
      {renderParticleJs && (
        <Particles id="particles" init={handleInit} options={ParticleFile} />
      )}
      <NavBar />
      <div className="App-main-content">
        <AllRoutes />
      </div>
    </div>
  );
}

export default App;
