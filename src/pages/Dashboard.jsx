import DashContent from "../Layout/DashContent";
import NavigationBar from "../Layout/NavigationBar";
import Sidebar from "../Layout/Sidebar";

const Dashboard = () => {
  return (
    <>
      <NavigationBar position="relative bg-white" />
      <Sidebar>
        <DashContent />
      </Sidebar>
    </>
  );
};
export default Dashboard;
