"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNext = () => {
    // Menyimpan data pada localStorage atau menggunakan context/state management
    localStorage.setItem("registerData", JSON.stringify({ email, password }));
    router.push("/signup/completed");
  };

  return (
    <div>
      <h1>Register</h1>
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default page;
