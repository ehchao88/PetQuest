import os
from twilio.rest import Client

account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']

def send_reminder(phone_number, tasks):
    client = Client(account_sid, auth_token)
    msg = "Hey, keep your pet healthy! Make sure to complete your to-do list! These are the things you need to do:"
    for task in tasks:
        msg += '\n- '+ task['name']
    message = client.messages.create(body=msg, from_='+12016901137', to=phone_number)
    if message:
        return True
    else:
        return False
