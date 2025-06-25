import os, pytz
from dotenv import load_dotenv
from datetime import datetime, timezone, timedelta

load_dotenv(override=True)

TIMEZONE = pytz.timezone("America/Sao_Paulo")
URL_DATABASE: str = os.getenv("URL_DATABASE")
BASE_URL: str = os.getenv("BASE_URL")
AUTH_SECRET_KEY: str = os.getenv("AUTH_SECRET_KEY")
AUTH_ALGORITHM: str = os.getenv("AUTH_ALGORITHM")
