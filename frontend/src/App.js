import { useState } from "react";

import Admin from "./Admin";
import Projects from "./Projects";
import Clients from "./Clients";
import Contact from "./Contact";
import Newsletter from "./Newsletter";

import "./index.css";

function App() {

  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <>

      <button
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 1000,
          padding: "10px 20px",
          cursor: "pointer"
        }}
        onClick={() => setShowAdmin(!showAdmin)}
      >
        {showAdmin ? "Back to Website" : "Admin Panel"}
      </button>

      {showAdmin ? (
        <Admin />
      ) : (
        <>
        
          <section className="hero">
            <h1>We Build Creative Digital Solutions</h1>
            <p>
              Delivering innovative web solutions for startups and enterprises
            </p>
            
          </section>

          <Projects />
          <Clients />
          <Contact />
          <Newsletter />
        </>
      )}
    </>
  );
}

export default App;
