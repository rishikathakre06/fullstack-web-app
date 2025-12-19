import axios from "axios";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <div className="newsletter">

      <input
        placeholder="Enter Email Address"
        onChange={e => setEmail(e.target.value)}
      />

      <button
        onClick={() => {

          if (!email || !email.includes("@")) {
            alert("Invalid email");
            return;
          }

          axios.post("http://localhost:5000/subscribe", { email });
          alert("Subscribed");
        }}
      >
        Subscribe
      </button>

    </div>
  );
}
