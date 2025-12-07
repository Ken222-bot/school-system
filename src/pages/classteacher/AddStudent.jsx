import DashboardLayout from "../../components/Layout/DashboardLayout";

const menu = [
  { label: "Dashboard", path: "/classteacher" },
  { label: "Class List", path: "/classteacher/class-list" },
  { label: "Enter Marks", path: "/classteacher/enter-marks" },
  { label: "Edit Student", path: "/classteacher/edit-student" },
  { label: "Add Student", path: "/classteacher/add-student" },
  { label: "Report Cards", path: "/classteacher/report-cards" },
  { label: "Class Attendance", path: "/classteacher/attendance" },
];

const ClassList = () => {
  return (
    <DashboardLayout menu={menu}>
      <h1>Class List Page</h1>
    </DashboardLayout>
  );
};

export default ClassList;
