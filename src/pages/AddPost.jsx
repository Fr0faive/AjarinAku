import DashboardLayout from "../Layout/DashboardLayout";
import { Button } from "../components/Button";
import TextEditor from "../components/Editor";
import InputField from "../components/InputField";
import Select from "../components/Select";
import cross from "../assets/cross.svg";

const AddPost = () => {
  return (
    <DashboardLayout>
      <div className="p-20 lg:px-52 gap-30 h-auto bg-[#EFF0F4]">
        <h1 className="text-black font-semibold text-5xl mb-3">
          Tambah Artikel Baru
        </h1>
        <form className="form-control gap-4">
          <InputField
            label="Judul"
            name="title"
            type="text"
            placeholder="Masukan judul artikel"
          />
          <InputField
            label="Deskripsi"
            name="description"
            type="text"
            placeholder="Masukan deskripsi artikel"
            height="h-32"
          />
          <div className="flex flex-wrap gap-2 items-center">
            <h2 className="text-black font-medium text-3xl">
              Kategori Artikel
            </h2>
            <Select />
          </div>
          <TextEditor />
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap gap-10 items-center">
              <h2 className="text-black font-medium text-3xl">Impor Media</h2>
              <div className="flex items-center justify-center ">
                <label
                  for="dropzone-file"
                  className="flex justify-center items-center border-dotted rounded-xl border-2 border-[#00419E] bg-white w-[100px] h-[100px]"
                >
                  <img src={cross} alt="cross" className="w-10" />
                  <input
                    type="file"
                    id="dropzone-file"
                    className="hidden"
                    accept="image/*"
                  />
                </label>
              </div>
            </div>
            <Button
              value="Simpan"
              type="submit"
              width="w-40"
              color="bg-biruTua"
            />
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};
export default AddPost;
