import axios from "axios";
import { useEffect, useState } from "react";

export default function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fullstack-web-app-l18y.onrender.com/getProjects")

      .then(res => setData(res.data));
  }, []);

  return (
    <section>
      <h2>Our Projects</h2>

      <div className="projects-grid">
        {data.map(p => (
          <div className="project-card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <button>READ MORE</button>
          </div>
        ))}
      </div>
    </section>
  );
}
