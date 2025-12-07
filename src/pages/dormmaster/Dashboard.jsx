import DashboardLayout from "../../components/Layout/DashboardLayout";
import StatCard from "../../components/Cards/StatCard";
import BarChart from "../../components/Charts/BarChart";

const menu = [
  { label: "Overview" },
  { label: "Upload Class Timetable" },
  { label: "Upload Exam Timetable" },
  { label: "View Uploaded Timetables" },
];

const DosDashboard = () => {
  return (
    <DashboardLayout menu={menu}>
      <>
        <style>{`
          .dashboard-title {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 28px;
            text-align: center;
            color: #0f172a;
          }

          .stat-cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 24px;
            margin-bottom: 32px;
          }

          .charts-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 24px;
          }

          @media (max-width: 768px) {
            .dashboard-title {
              font-size: 24px;
            }

            .stat-cards-grid {
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 16px;
            }

            .charts-grid {
              grid-template-columns: 1fr;
              gap: 16px;
            }
          }
        `}</style>

        <div className="dashboard-wrapper">
          <h1 className="dashboard-title">DOS Dashboard</h1>

          <div className="stat-cards-grid">
            <StatCard title="Timetables Uploaded" value="6" />
            <StatCard title="Pending Requests" value="3" />
            <StatCard title="Total Classes" value="36" />
          </div>

          <div className="charts-grid">
            <BarChart />
          </div>
        </div>
      </>
    </DashboardLayout>
  );
};

export default DosDashboard;