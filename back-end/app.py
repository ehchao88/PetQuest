import os
from flask import Flask, request, redirect, url_for, flash, abort
from scripts.SendText import *

import firebase_admin
from firebase_admin import db, credentials, firestore

account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']

cred = credentials.Certificate('')
#firebase_admin.initialize_app(cred)

db = firestore.client()
users_ref = db.collection(u'users')
pets_ref = db.collection(u'pets')


app = Flask(__name__)
app.secret_key = os.urandom(24)

@app.route('/reminders', methods=['GET','POST'])
def remind():
    if request.method == 'POST':
        if request.form['send'] == 'send':
            numbers = users_ref.stream()
            for number in numbers:
                phone_number = number.id
                send_reminder(phone_number)
            return 'success'
        else:
            return 'fail'
@app.route('/', methods=['GET','POST'])
def index():
    if request.method == 'POST':
        phone_number = request.form['number']
        send_reminder(phone_number)
        return 'Success'
    return 'Hello World'


def ensure_number(phone_number):
    user = USERS.child(phone_number).get()
    if not user:
        return abort(404)
    return user

if __name__ == '__main__':
    app.run()