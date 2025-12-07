import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <style>{`
        .navbar-root {
          width: 100%;
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .navbar-container {
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 100%;
        }

        .navbar-title {
          font-size: 40px;
          font-weight: 600;
          color: #0f172a;
          margin: 0;
        }

        .navbar-logout-btn {
          padding: 16px 24px;
          background: #dc2626;
          color: #ffffff;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .navbar-logout-btn:hover {
          background: #b91c1c;
        }
      `}</style>

      <div className="navbar-root">
        <div className="navbar-container">
          <h2 className="navbar-title">School Management System</h2>
          <button
            onClick={handleLogout}
            className="navbar-logout-btn"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;