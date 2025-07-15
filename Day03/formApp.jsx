import React, { useState } from "react";

function FormApp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name", name);
    console.log("email", email);
  };

  return (
    <div>
      <h2>Simple React Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <h3>Captured Data:</h3>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
}

export default FormApp;
