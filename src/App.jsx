import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === "admin" && password === "1234") {
      setUser({ name: username });
    } else {
      alert("Wrong password");
    }
  };

  const logout = () => setUser(null);

  if (user) return <Dashboard user={user} logout={logout} />;

  return <Login login={login} />;
}

export default App;