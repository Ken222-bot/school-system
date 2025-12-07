import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!role) {
      alert("Please select a role");
      return;
    }
    if (!password) {
      alert("Please enter your password");
      return;
    }

    // TODO: Validate password using backend later
    console.log("Logging in as:", role, "with password:", password);

    // Redirect to dashboard
    navigate(`/dashboard/${role.toLowerCase()}`);
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h2 className="login-title">
          School System Login
        </h2>

        <div className="space-y-6">

          {/* ROLE SELECT */}
          <div className="form-group">
            <label className="form-label">
              Select Role
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="form-select"
            >
              <option value="">-- Choose Role --</option>
              <option value="headteacher">Headteacher</option>
              <option value="deputy">Deputy Head</option>
              <option value="dos">DOS</option>
              <option value="store">Store Manager</option>
              <option value="bursar">Bursar</option>
              <option value="classteacher">Class Teacher</option>
              <option value="dormmaster">Dorm Master</option>
            </select>
          </div>

          {/* PASSWORD FIELD */}
          <div className="form-group">
            <label className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="form-input"
            />
          </div>

          {/* LOGIN BUTTON */}
          <button
            onClick={handleLogin}
            className="btn-login"
          >
            LOGIN
          </button>

        </div>
      </div>
    </div>
  );
};

export default Login;
