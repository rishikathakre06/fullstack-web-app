import axios from "axios";
import { useEffect, useState } from "react";
import "./Admin.css";

export default function Admin() {

 
  const [project, setProject] = useState({});
  const [client, setClient] = useState({});
  const [contacts, setContacts] = useState([]);
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/getContacts")
      .then(res => setContacts(res.data));

    axios.get("http://localhost:5000/getSubscribers")
      .then(res => setSubs(res.data));
  }, []);

  return (
    <div className="admin-wrapper">

      <h1>Admin Panel</h1>

      <div className="admin-section">
        <h2>Add Project</h2>

        <input
          placeholder="Project Image URL"
          onChange={e =>
            setProject({ ...project, image: e.target.value })
          }
        />

        <input
          placeholder="Project Name"
          onChange={e =>
            setProject({ ...project, name: e.target.value })
          }
        />

        <input
          placeholder="Project Description"
          onChange={e =>
            setProject({ ...project, description: e.target.value })
          }
        />

        <button
          onClick={() => {
            axios.post("http://localhost:5000/addProject", project);
            alert("Project Added");
          }}
        >
          Add Project
        </button>
      </div>

      {/* ================= ADD CLIENT ================= */}
      <div className="admin-section">
        <h2>Add Client</h2>

        <input
          placeholder="Client Image URL"
          onChange={e =>
            setClient({ ...client, image: e.target.value })
          }
        />

        <input
          placeholder="Client Name"
          onChange={e =>
            setClient({ ...client, name: e.target.value })
          }
        />

        <input
          placeholder="Client Description"
          onChange={e =>
            setClient({ ...client, description: e.target.value })
          }
        />

        <input
          placeholder="Designation (CEO, Developer...)"
          onChange={e =>
            setClient({ ...client, designation: e.target.value })
          }
        />

        <button
          onClick={() => {
            axios.post("http://localhost:5000/addClient", client);
            alert("Client Added");
          }}
        >
          Add Client
        </button>
      </div>

      <div className="admin-section admin-list">
        <h2>Contact Form Responses</h2>

        {contacts.map(c => (
          <div key={c.id}>
            <strong>{c.fullname}</strong><br />
            {c.email} | {c.mobile} | {c.city}
          </div>
        ))}
      </div>

      <div className="admin-section admin-list">
        <h2>Subscribed Emails</h2>

        {subs.map(s => (
          <div key={s.id}>{s.email}</div>
        ))}
      </div>

    </div>
  );
}
