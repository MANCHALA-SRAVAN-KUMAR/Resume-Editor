# 📄 AI Resume Editor

This is a full-stack web application that allows users to upload, edit, enhance, save, and download resumes using a React frontend and a FastAPI backend.

---

## 🚀 Features

- ✅ Upload Resume (.pdf/.docx) – Mocked file parser
- ✅ Edit Resume – Fields like Name, Summary, Education, Experience, Skills
- ✅ Enhance with AI – Mocked enhancement via FastAPI endpoint
- ✅ Save Resume – Store JSON resume to backend
- ✅ Download Resume – Export edited resume as `.json`

---

## 🧱 Tech Stack

| Part       | Technology         |
|------------|--------------------|
| Frontend   | React.js           |
| Backend    | FastAPI (Python)   |
| Styling    | Inline CSS         |
| HTTP Client| Axios              |

---

## 📁 Folder Structure

resume-editor/
├── backend/
│ ├── main.py # FastAPI app
│ └── saved_resume.json # Saved resume (after POST)
├── frontend/
│ ├── src/
│ │ ├── App.js
│ │ └── components/
│ │ └── ResumeEditor.jsx
│ └── public/
├── README.md

---

## ⚙️ Setup Instructions

### 🔹 1. Backend (FastAPI)

```bash
cd backend
python -m venv venv
# Windows
.\venv\Scripts\activate
# macOS/Linux
source venv/bin/activate

pip install fastapi uvicorn
uvicorn main:app --reload

cd frontend
npm install
npm start


---

### ✅ What You Should Do Now

1. Replace:
   - `[your-username]` → your actual GitHub username
   - Your email/contact (if needed)

2. Place this file at the **root of your repo** as `README.md`

3. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/resume-editor.git
git push -u origin master

