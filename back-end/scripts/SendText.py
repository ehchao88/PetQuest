import os
from twilio.rest import Client
import firebase_admin
from firebase_admin import db

account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']

firebase_admin.initialize_app(options={
    'databaseURL': ''
})

def send_reminder(phone_number):
    client = Client(account_sid, auth_token)
    message = client.messages.create(body="test", from_='+12016901137', to=phone_number)
    if message:
        return True
    else:
        return False
