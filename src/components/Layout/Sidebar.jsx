const Sidebar = ({ menu }) => {
  return (
    <>
      <style>{`
        .sidebar-root {
          width: 260px;
          height: 100vh;
          background: #111827;
          color: #ffffff;
          padding: 24px 20px;
          overflow-y: auto;
        }

        .sidebar-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 40px;
          color: #ffffff;
        }

        .sidebar-menu {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sidebar-menu li {
          padding: 12px 16px;
          margin-bottom: 8px;
          cursor: pointer;
          border-radius: 6px;
          transition: background 0.2s ease, color 0.2s ease;
          font-size: 15px;
        }

        .sidebar-menu li:hover {
          background: #1f2937;
          color: #fcd34d;
        }
      `}</style>

      <div className="sidebar-root">
        <h3 className="sidebar-title">Menu</h3>

        <ul className="sidebar-menu">
          {menu.map((item) => (
            <li key={item.label}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;