import React, { useEffect, useState } from "react";
import axios from "axios";

interface BrowseIdeasProps {
  goBack: () => void; // Function to go back to the home page
}

const BrowseIdeas: React.FC<BrowseIdeasProps> = ({ goBack }) => {
  const [ideas, setIdeas] = useState<any[]>([]);
  const airtableApiUrl = "https://api.airtable.com/v0/appE318Hnw74Bg4Gc/Table%201";
  const airtableApiKey = "Bearer patPsietbrrfZAVib.085d545a72f58d9af337b5af7ebfcdc0a6172e27fdf4bc42197a6ec68eeb1241"; // Replace with your actual API key

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await axios.get(airtableApiUrl, {
          headers: { Authorization: airtableApiKey },
        });

        const fetchedIdeas = response.data.records.map((record: any) => ({
          id: record.id,
          name: record.fields.Name,
          title: record.fields.Title,
          description: record.fields.Description,
          technologies: record.fields.Technologies,
        }));

        setIdeas(fetchedIdeas);
      } catch (error) {
        console.error("Error fetching ideas:", error);
      }
    };

    fetchIdeas();
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>Browse Research Ideas</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {ideas.map((idea) => (
          <li key={idea.id} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
            <h3>{idea.title}</h3>
            <p><strong>Posted by:</strong> {idea.name}</p>
            <p>{idea.description}</p>
            <p><strong>Technologies:</strong> {idea.technologies}</p>
          </li>
        ))}
      </ul>
      
      {/* Back to Home Button */}
      <button onClick={goBack} style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}>
        Back to Home
      </button>
    </div>
  );
};

export default BrowseIdeas;

