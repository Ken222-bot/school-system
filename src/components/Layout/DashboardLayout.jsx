// ...existing code...
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ menu, children }) => {
  return (
    <>
      {/* Embedded CSS so no external file is needed */}
      <style>{`
        .dashboard-root{
          display:flex;
          min-height:100vh;
          margin:0;
        }

        .dashboard-sidebar{
          /* leave width so your Sidebar component can fit */
          flex: 0 0 260px;
          max-width: 260px;
        }

        .dashboard-content{
          flex:1;
          display:flex;
          flex-direction:column;
        }

        .dashboard-main{
          padding:24px;
          overflow-y:auto;
          display:flex;
          justify-content:center; /* center children horizontally */
          align-items:flex-start; /* allow vertical flow, change to center if you want perfect vertical centering */
        }

        .dashboard-container{
          width:100%;
          max-width:1100px; /* controls box width for content */
        }

        /* small screen responsiveness */
        @media (max-width: 768px){
          .dashboard-root{ flex-direction:column; }
          .dashboard-sidebar{ flex:0 0 auto; max-width:100%; }
          .dashboard-main{ padding:16px; }
        }
      `}</style>

      <div className="dashboard-root">
        <div className="dashboard-sidebar">
          <Sidebar menu={menu} />
        </div>

        <div className="dashboard-content">
          <Navbar />

          <div className="dashboard-main">
            <div className="dashboard-container">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
// ...existing code...