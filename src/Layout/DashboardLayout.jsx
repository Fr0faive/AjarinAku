import NavigationBar from "../Layout/NavigationBar";
import Sidebar from "../components/Sidebar";
const DashboardLayout = (props) => {
  const { children } = props;
  return (
    <>
      <NavigationBar position="relative bg-white" />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full bg-white">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
