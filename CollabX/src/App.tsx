import React, { useState } from "react";
import BrowseIdeas from "./components/BrowseIdeas";
import PostIdea from "./components/PostIdea";

const App: React.FC = () => {
  const [view, setView] = useState<"home" | "browse" | "post">("home");

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      {view === "home" && (
        <>
          <h1>Welcome to CollabX</h1>
          <p>Innovate. Collaborate. Publish.</p>
          <button 
            onClick={() => setView("browse")} 
            style={{ margin: "10px", padding: "15px 30px", fontSize: "18px" }}>
            Browse Research Ideas
          </button>
          <button 
            onClick={() => setView("post")} 
            style={{ margin: "10px", padding: "15px 30px", fontSize: "18px" }}>
            Post a Research Idea
          </button>
        </>
      )}

      {view === "browse" && <BrowseIdeas goBack={() => setView("home")} />}
      {view === "post" && <PostIdea goBack={() => setView("home")} />}
    </div>
  );
};

export default App;
