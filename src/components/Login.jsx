import { useState, useContext } from "react";

function Login() {

  const [username, setUsername]=useState("")
  const [password, setPassword]=useState("")
  const handleSubmit=(){}
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="username" />
      <input tyoe="text" placeholder="password" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
