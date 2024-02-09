"use client"
import { useState } from "react";
import axios from 'axios'

const page = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleRegister = async () => {
    // Mengambil data dari localStorage atau context/state management
    const { email, password } = JSON.parse(localStorage.getItem("registerData"));

    // Mengirim data ke server menggunakan Axios
    try {
      await axios.post("http://localhost:7000/api/createemailpassword", { email, password });
      await axios.post("http://localhost:7000/api/createnamerole", { email, password, name, role });

      localStorage.removeItem("registerData");

      window.location.href = 'https://rwlch619-3001.asse.devtunnels.ms/' // Redirect ke halaman sukses jika diperlukan
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Completed</h1>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Role:</label>
      <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default page;
