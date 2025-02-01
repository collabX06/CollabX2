import React, { useState } from "react";
import axios from "axios";

const PostIdea: React.FC = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");

  const airtableApiUrl = "https://api.airtable.com/v0/appE318Hnw74Bg4Gc/Table%201";
  const airtableApiKey = "Bearer patPsietbrrfZAVib.085d545a72f58d9af337b5af7ebfcdc0a6172e27fdf4bc42197a6ec68eeb1241";

  const addIdea = async () => {
    if (!name || !title || !description || !technologies) {
      alert("Please fill all fields!");
      return;
    }

    try {
      await axios.post(
        airtableApiUrl,
        {
          fields: {
            Name: name,
            Title: title,
            Description: description,
            Technologies: technologies,
          },
        },
        {
          headers: {
            Authorization: airtableApiKey,
            "Content-Type": "application/json",
          },
        }
      );

      alert("Idea posted successfully!");
      setName(""); setTitle(""); setDescription(""); setTechnologies(""); // Clear form
    } catch (error) {
      console.error("Error adding idea:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>Post a Research Idea</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", width: "250px", margin: "5px" }}
        />
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "10px", width: "250px", margin: "5px" }}
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: "10px", width: "520px", height: "80px", margin: "5px", display: "block" }}
        />
        <input
          type="text"
          placeholder="Technologies (e.g. AI, Blockchain)"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
          style={{ padding: "10px", width: "520px", margin: "5px", display: "block" }}
        />
        <button onClick={addIdea} style={{ marginTop: "10px", padding: "10px 20px", fontSize: "16px" }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PostIdea;
