from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import PromptRequest, PromptResponse
import openai
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

openai.api_key = os.getenv("OPENAI_API_KEY")

@app.post("/run_prompt", response_model=PromptResponse)
async def run_prompt(req: PromptRequest):
    prompt_text = f"{req.settings.useCase} - {req.settings.promptType}: {req.prompt}"
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt_text}],
        max_tokens=500
    )
    return PromptResponse(result=response.choices[0].message.content.strip())
