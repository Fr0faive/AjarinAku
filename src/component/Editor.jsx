import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const Editor = ({ onEditorChange }) => {
  return (
    <Editor
      apiKey="YOUR_TINYMCE_API_KEY"
      initialValue="<p>Initial content</p>"
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

export default Editor;
