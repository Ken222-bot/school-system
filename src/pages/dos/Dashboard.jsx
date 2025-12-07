import DashboardLayout from "../../components/Layout/DashboardLayout";
import StatCard from "../../components/Cards/Statcard";
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

      {/* ⭐ ADD WRAPPER TO CENTER CONTENT */}
      <div className="max-w-6xl mx-auto">

        {/* ⭐ CHANGE TITLE */}
        <h1 className="text-2xl font-bold mb-6 text-center">
          DOS
        </h1>

        {/* ⭐ STAT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <StatCard title="Timetables Uploaded" value="6" />
          <StatCard title="Pending Requests" value="3" />
          <StatCard title="Total Classes" value="36" />
        </div>

        {/* ⭐ CHART */}
        <BarChart />

      {/* ⭐ CLOSE WRAPPER */}
      </div>

    </DashboardLayout>
  );
};

export default DosDashboard;
