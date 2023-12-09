import React from "react";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "./Button";

const TextEditor = ({ onEditorChange }) => {
  const editorRef = useRef();

  return (
    <div>
      <Editor
        apiKey="k155dz1h9ka9jvfa2v1y5w9zzsitm4ucg9hjb750412ng481"
        onInit={(editor) => {
          editorRef.current = editor;
        }}
        initialValue="<p>Masukan isi artikel</p>"
        init={{
          height: 500,
          menubar: false,
          external_plugins: {
            tiny_mce_wiris:
              "node_modules/@wiris/mathtype-tinymce4/plugin.min.js",
          },
          plugins: [
            "powerpaste casechange searchreplace autolink directionality advcode visualblocks visualchars image link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker editimage help formatpainter permanentpen charmap tinycomments linkchecker emoticons advtable export print autosave",
          ],
          toolbar:
            "undo redo print spellcheckdialog formatpainter | blocks fontfamily fontsize | bold italic underline forecolor backcolor | link image addcomment showcomments  | alignleft aligncenter alignright alignjustify lineheight | checklist bullist numlist indent outdent | removeformat | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",
        }}
        onEditorChange={onEditorChange}
      />
    </div>
  );
};

export default TextEditor;
