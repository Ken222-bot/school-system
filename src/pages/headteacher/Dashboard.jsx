import DashboardLayout from "../../components/Layout/DashboardLayout";
import StatCard from "../../components/Cards/StatCard";
import BarChart from "../../components/Charts/BarChart";
import PieChart from "../../components/Charts/PieChart";

const menu = [
  { label: "Overview" },
  { label: "Teachers" },
  { label: "Departments" },
  { label: "Students" },
  { label: "Performance" },
  { label: "Reports" },
];

const HeadteacherDashboard = () => {
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
          <h1 className="dashboard-title">Headteacher Dashboard</h1>

          <div className="stat-cards-grid">
            <StatCard title="Total Students" value="1,240" />
            <StatCard title="Total Teachers" value="84" />
            <StatCard title="Departments" value="12" />
            <StatCard title="Pending Reports" value="5" />
          </div>

          <div className="charts-grid">
            <BarChart />
            <PieChart />
          </div>
        </div>
      </>
    </DashboardLayout>
  );
};

export default HeadteacherDashboard;