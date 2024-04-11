import React, { useState } from "react";
import axios from "axios";

export default function PdfTextExtract() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) return;
    setFile(event.target.files[0] as any);
  };

  const handleSubmit = async () => {
    if (!file) return;

    const formData = new FormData();

    formData.append("pdfFile", file);

    try {
      const response = await axios.post(
        `http://localhost:3002/api/text/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setText(response.data.text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: "block" }}>
      <div style={{ paddingBottom: "10px" }}>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => handleFileChange(e)}
        />

        <button onClick={handleSubmit}>Upload and Extract</button>
      </div>

      <textarea
        className="textarea-style"
        style={{ width: "400px", height: "200px", margin: "auto" }}
        placeholder="Your PDF text will appear here when extracted..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
