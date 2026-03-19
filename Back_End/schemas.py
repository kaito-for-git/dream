from pydantic import BaseModel

class UserConfigBase(BaseModel):
    theme_color: str
    font_size: int
    is_dark_mode: bool
    language: str

class UserConfigResponse(UserConfigBase):
    id: int
    class Config:
        from_attributes = True