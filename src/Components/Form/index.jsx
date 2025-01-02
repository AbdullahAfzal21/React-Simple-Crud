import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const userData = { email, password };
    setData(userData);
    localStorage.setItem("userdata", JSON.stringify(userData)); 
    navigate("/users"); 
  };

  return (
    <>
   <h1 style={{textAlign:"center", marginTop: "20px" }}>Sign Up Form</h1>
   <h3  style={{textAlign:"center"}}>DEVELOPED BY ABDULLAH BHATTI</h3>
    <form
      onSubmit={handleSubmit}
      style={{ width: "50%", margin: "auto", marginTop: "50px" }}
    >
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
        style={{ marginBottom: "10px" }}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        required
        style={{ marginBottom: "10px" }}
      />
      <Button
        type="submit" 
        style={{ backgroundColor: "black", color: "white" }}
      >
        Click me
      </Button>
      {data && (
        <div>
          <h2>Email:</h2>
          <p>{email}</p>
          <h2>Password:</h2>
          <p>{password}</p>
        </div>
      )}
    </form>
    </>
  );
};
