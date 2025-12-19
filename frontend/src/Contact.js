import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({});

  return (
    <section className="contact-wrapper">
      <div className="contact-box">

        <h2>Get a Free Consultation</h2>

        <input
          placeholder="Full Name"
          onChange={e => setForm({ ...form, fullname: e.target.value })}
        />

        <input
          placeholder="Email Address"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Mobile Number"
          onChange={e => setForm({ ...form, mobile: e.target.value })}
        />

        <input
          placeholder="Area, City"
          onChange={e => setForm({ ...form, city: e.target.value })}
        />

        <button
          onClick={() => {

            if (!form.email || !form.email.includes("@")) {
              alert("Enter valid email");
              return;
            }

            if (!form.mobile || form.mobile.length !== 10) {
              alert("Mobile must be 10 digits");
              return;
            }

           axios.post(
  "https://fullstack-web-app-l18y.onrender.com/addContact",
  form
);

            alert("Submitted");
          }}
        >
          Get Quick Quote
        </button>

      </div>
    </section>
  );
}
