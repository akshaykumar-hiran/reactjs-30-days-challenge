import React, { useState } from 'react';

function FormApp() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">React Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Captured Data:</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
      </div>
    </div>
  );
}

export default FormApp;
