import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

//Real time editor
function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      {/* if label prsent show it */}
      {/* By using Controller, you can effectively manage controlled components from external libraries within your React Hook Form, ensuring they integrate smoothly with the form's state and validation logic. */}
      <Controller
        name={name || "content "}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="l4jthmtdl9u8b00zq06muofm7hm3axtd6j1z0udt8d8hvisj"
            initialValue="Your thoughts"
            init={{
              initialValue: defaultValue, //What should be written there
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

export default RTE;
// https://muhammedsahad.medium.com/integrating-tiny-mce-editor-with-react-a-step-by-step-guide-3415f3063c33
