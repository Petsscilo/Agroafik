import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null); // stores logged in user
  const [form, setForm] = useState({ email: '', password: '' });
  const [isSignup, setIsSignup] = useState(false); // toggle between login/signup

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('agroafik-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAuth = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem('agroafik-auth'));
    
    if (isSignup) {
      // Signup
      if (!form.email || !form.password) return alert("Please fill all fields");
      localStorage.setItem('agroafik-auth', JSON.stringify(form));
      alert("Signup successful. You can now log in.");
      setIsSignup(false);
      setForm({ email: '', password: '' });
    } else {
      // Login
      if (savedUser && savedUser.email === form.email && savedUser.password === form.password) {
        setUser(savedUser);
        localStorage.setItem('agroafik-user', JSON.stringify(savedUser));
      } else {
        alert("Invalid credentials.");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('agroafik-user');
    setUser(null);
    setForm({ email: '', password: '' });
  };

  if (!user) {
    return (
      <div className="auth-container">
        <h2>{isSignup ? "Sign Up" : "Login"} to Agroafik</h2>
        <form onSubmit={handleAuth}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span onClick={() => setIsSignup(!isSignup)} className="toggle-link">
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>
        <Footer />
      </div>
    );
  }

  // HomePage after login
  return (
    <div className="home">
      <h1>Welcome, {user.email.split('@')[0]}</h1>
      <p>This is the Agroafik homepage. 🚀</p>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
      <Footer />
    </div>
  );
}

// Footer with animated credit
function Footer() {
  return (
    <footer className="footer">
      <p className="animate-text">Built by Ozoemelam 💡</p>
    </footer>
  );
}

export default App;
