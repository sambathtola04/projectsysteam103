import React, { useState } from 'react';
import '../App.css';
import '../css/Login.css'; 

function Login({ login }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Logo តំណាងឱ្យរូបក្នុង browser របស់អ្នក */}
        <div style={{ fontSize: '40px', marginBottom: '10px' }}>🔳</div>
        <h2>Login to Frappe</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="input-icon">📧</span>
            <input 
              type="text" 
              placeholder="Email address / Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">ចូល (Login)</button>
        </form>
        
        <a href="#" className="forgot-password">Forget password</a>
        
      </div>
    </div>
  );
}

export default Login;