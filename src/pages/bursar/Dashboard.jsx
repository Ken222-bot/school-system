import DashboardLayout from "../../components/Layout/DashboardLayout";
import StatCard from "../../components/Cards/Statcard";
import BarChart from "../../components/Charts/BarChart";
import PieChart from "../../components/Charts/PieChart";

const menu = [
  { label: "Overview" },
  { label: "Fees Collection" },
  { label: "Expenditure" },
  { label: "Financial Reports" },
];

const BursarDashboard = () => {
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
          <h1 className="dashboard-title">Bursar Dashboard</h1>

          <div className="stat-cards-grid">
            <StatCard title="Expected Fees" value="UGX 120M" />
            <StatCard title="Fees Collected" value="UGX 98M" />
            <StatCard title="Outstanding Balance" value="UGX 22M" />
            <StatCard title="Total Expenditure" value="UGX 70M" />
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

export default BursarDashboard;