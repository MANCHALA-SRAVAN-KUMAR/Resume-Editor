from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json

app = FastAPI()

# CORS middleware for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or restrict to ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SectionRequest(BaseModel):
    section: str
    content: str

class ResumeRequest(BaseModel):
    resume: dict

@app.post("/ai-enhance")
def ai_enhance(req: SectionRequest):
    raw = req.content.replace("🌟", "").strip()
    if raw.lower().startswith("enhanced"):
        raw = raw.split(":", 1)[-1].strip()
    return {
        "enhanced_content": f"🌟 Enhanced {req.section}: {raw} 🌟"
    }

@app.post("/save-resume")
def save_resume(req: ResumeRequest):
    with open("saved_resume.json", "w") as f:
        json.dump(req.resume, f, indent=4)
    return {"status": "saved"}
