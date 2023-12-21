import { useEffect, useState } from "react";
import articleService from "../services/article.service";
import { useParams } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import InputField from "../components/InputField";
import Select from "../components/Select";
import TextEditor from "../components/Editor";
import { Button } from "../components/Button";

const EditPost = () => {
  const { id } = useParams();
  const [dataArticle, setDataArticle] = useState({
    title: "",
    description: "",
    content: "",
    category_id: "",
    user_id: "",
  });

  console.log(id);
  console.log(dataArticle);

  useEffect(() => {
    articleService.getDetailsArticles(id, (data) => {
      setDataArticle(data);
    });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDataArticle({ ...dataArticle, [name]: value });
  };

  const handleCategoryChange = (event) => {
    setDataArticle({
      ...dataArticle,
      category_id: event.target.value,
    });
  };

  const handleEditorChange = (newValue, editor) => {
    setDataArticle({
      ...dataArticle,
      content: newValue,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(dataArticle);
    try {
      const result = articleService.editArticles(id, dataArticle);
      if (result) {
        alert("Artikel Berhasil");
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DashboardLayout>
      <div className="p-20 lg:px-52 gap-30 h-auto bg-[#EFF0F4]">
        <h1 className="text-black font-semibold text-5xl mb-3">Edit Artikel</h1>
        <form
          className="form-control gap-4"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <InputField
            label="Judul"
            name="title"
            type="text"
            placeholder="Masukan judul artikel"
            onChange={handleInputChange}
            value={dataArticle.title}
          />
          <InputField
            label="Deskripsi"
            name="description"
            type="text"
            placeholder="Masukan deskripsi artikel"
            height="h-32"
            onChange={handleInputChange}
            value={dataArticle.description}
          />
          <div className="flex flex-wrap gap-2 items-center">
            <h2 className="text-black font-medium text-3xl">
              Kategori Artikel
            </h2>
            <Select onChange={handleCategoryChange} />
          </div>
          <TextEditor
            onEditorChange={handleEditorChange}
            value={dataArticle.content}
          />
          <div className="flex justify-between items-center">
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

export default EditPost;
