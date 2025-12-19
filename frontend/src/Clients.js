import axios from "axios";
import { useEffect, useState } from "react";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get("https://fullstack-web-app-l18y.onrender.com/getClients")

      .then(res => setClients(res.data));
  }, []);

  return (
    <section>
      <h2>Happy Clients</h2>

      <div className="clients-grid">
        {clients.map(c => (
          <div className="client-card" key={c.id}>
            <img src={c.image} alt={c.name} />
            <p>{c.description}</p>
            <b>{c.name}</b>
            <small>{c.designation}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
