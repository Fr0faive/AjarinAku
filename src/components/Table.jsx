import EditIcon from "./Icons/EditIcon";
import DeleteIcon from "./Icons/DeleteIcon";

const Table = () => {
  const dataTable = [
    {
      id: 1,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, in.",
      author: "Faikar",
      category: "Kimia",
    },
    {
      id: 2,
      title: "Lorem, ipsum dolor sit amet consectetur",
      author: "Abel",
      category: "Matematika",
    },
    {
      id: 3,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, in.",
      author: "Kirei",
      category: "Biologi",
    },
    {
      id: 4,
      title: "Lorem, ipsum dolor sit",
      author: "Mas Abel",
      category: "Ilmu Komputer",
    },
  ];

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   setData(dataTable);
  // });

  return (
    <>
      <div className="ml-28">
        <table className="table w-5/6 text-black">
          <thead className="text-black text-lg">
            <tr>
              <th>Judul</th>
              <th>Penulis</th>
              <th>Kategori</th>
              <th>Sunting</th>
              <th>Hapus</th>
            </tr>
          </thead>
          {dataTable.map((data) => (
            <tbody>
              <tr className="text-biruTua">
                <td>{data.title}</td>
                <td>{data.author}</td>
                <td>{data.category}</td>
                <td className="text-center"><button><EditIcon/></button></td>
                <td className="text-center"><button><DeleteIcon/></button></td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Table;
