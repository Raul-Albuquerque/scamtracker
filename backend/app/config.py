import os, pytz
from dotenv import load_dotenv

load_dotenv(override=True)

TIMEZONE = pytz.timezone("America/Sao_Paulo")
URL_DATABASE = os.getenv("URL_DATABASE")
