import React, { useState } from "react";
import axios from "axios";

function FileUploader() {
  const [link, setLink] = useState(undefined);

  const handleFile = async (event) => {
    try {
      const data = new FormData();
      data.append("file", event.target.files[0]);
      console.log("Files: ", event.target.files);

      const result = await axios.put(
        "http://http://localhost:3000/files/upload",
        data
      );
      setLink(result.data.link);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <input type={"file"} onChange={handleFile} />
      <hr />
      {link && (
        <div>
          <img src={link} alt={"Minha imagem"} />
          <p><a href={link}>
            Link para fazer o Download da imagem
          </a></p>
        </div>
      )}
    </div>
  );
}

export default FileUploader;
