import DashboardLayout from "../../components/Layout/DashboardLayout";

const menu = [
  { label: "Dashboard", path: "/classteacher" },
  { label: "Class List", path: "/classteacher/ClassList" },
  { label: "Enter Marks", path: "/classteacher/Enter-marks" },
  { label: "Edit Student", path: "/classteacher/Edit-student" },
  { label: "Add Student", path: "/classteacher/Add-student" },
  { label: "Report Cards", path: "/classteacher/Report-cards" },
  { label: "Class Attendance", path: "/classteacher/Attendance" },
];

const ClassList = () => {
  return (
    <DashboardLayout menu={menu}>
      <h1>Class List Page</h1>
    </DashboardLayout>
  );
};

export default ClassList;
