import DashboardLayout from "../Layout/DashboardLayout";
import Table from "../components/Table";

const AllPost = () => {
  return (
    <DashboardLayout>
      <h1 className="text-black font-extrabold text-3xl ml-28 my-5">Semua Artikel</h1>
      <Table />
    </DashboardLayout>
  );
};

export default AllPost;
