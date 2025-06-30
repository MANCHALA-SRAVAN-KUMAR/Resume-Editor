import React, { useState } from 'react';
import axios from 'axios';

function ResumeEditor() {
  const [resume, setResume] = useState({
    name: " ",
    summary: " ",
    education: "",
    experience: "",
    skills: ""
  });

  const handleChange = (field, value) => {
    setResume(prev => ({ ...prev, [field]: value }));
  };

  const enhance = async (field) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/ai-enhance", {
        section: field,
        content: resume[field]
      });
      handleChange(field, res.data.enhanced_content);
    } catch (error) {
      alert("Enhance failed. Is the backend running?");
    }
  };

  const saveResume = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/save-resume", { resume });
      alert("Resume saved to backend!");
    } catch (error) {
      alert("Save failed. Check backend.");
    }
  };

  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(resume, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resume.json";
    link.click();
  };

  const mockUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`Pretending to parse: ${file.name}`);
      // Replace resume with mocked content
      setResume({
        name: "Parsed Name",
        summary: "Parsed summary from resume.",
        education: "Parsed Education Info",
        experience: "Parsed Experience Info",
        skills: "Parsed Skills"
      });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📄 AI Resume Editor</h1>

      <input type="file" accept=".pdf,.docx" onChange={mockUpload} style={{ marginBottom: "20px" }} />
      <br /><br />

      {Object.entries(resume).map(([field, value]) => (
        <div key={field} style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "bold" }}>{field.toUpperCase()}</label>
          <textarea
            rows={3}
            style={{ width: "100%", marginTop: "5px", padding: "10px" }}
            value={value}
            onChange={(e) => handleChange(field, e.target.value)}
          />
          <button onClick={() => enhance(field)} style={{ marginTop: "5px" }}>Enhance with AI</button>
        </div>
      ))}

      <button onClick={saveResume} style={{ marginRight: "10px" }}>💾 Save Resume</button>
      <button onClick={downloadJSON}>⬇️ Download JSON</button>
    </div>
  );
}

export default ResumeEditor;
