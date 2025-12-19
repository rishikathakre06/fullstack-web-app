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

         axios.post(
  "https://fullstack-web-app-l18y.onrender.com/subscribe",
  { email }
);
alert("Subscribed");
        }}
      >
        Subscribe
      </button>

    </div>
  );
}
