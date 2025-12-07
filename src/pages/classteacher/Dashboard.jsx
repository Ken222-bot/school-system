import DashboardLayout from "../../components/Layout/DashboardLayout";
import StatCard from "../../components/Cards/Statcard";
import BarChart from "../../components/Charts/BarChart";

const menu = [
  {label: "Dashboard", path: "/classteacher"},  
  { label: "Class List" },
  { label: "Enter Marks" },
  { label: "Edit Student" },
  { label: "Add Student" },
  { label: "Generate Report Cards" },
  { label: "Class Attendance" },
];

const ClassTeacherDashboard = () => {
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
          <h1 className="dashboard-title">Class Teacher</h1>

          <div className="stat-cards-grid">
            <StatCard title="Students in Class" value="54" />
            <StatCard title="Average performance" value="56%" />
            <StatCard title="Reports Pending" value="12" />
            <StatCard title="Attendance Today" value="92%" />
          </div>

          <div className="charts-grid">
            <BarChart />
          </div>
        </div>
      </>
    </DashboardLayout>
  );
};

export default ClassTeacherDashboard;