import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const TextEditor = ({ onEditorChange }) => {
  return (
    <Editor
      apiKey="k155dz1h9ka9jvfa2v1y5w9zzsitm4ucg9hjb750412ng481"
      initialValue="<p>Masukan isi artikel</p>"
      init={{
        height: 500,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | " +
          "bold italic backcolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
      }}
      onEditorChange={onEditorChange}
    />
  );
};

export default TextEditor;
