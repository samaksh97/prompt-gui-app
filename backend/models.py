from pydantic import BaseModel

class PromptSettings(BaseModel):
    model: str
    promptType: str
    useCase: str

class PromptRequest(BaseModel):
    prompt: str
    settings: PromptSettings

class PromptResponse(BaseModel):
    result: str
