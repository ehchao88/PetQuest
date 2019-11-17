import os
from flask import Flask, request, redirect, url_for, flash
from scripts.SendText import *

app = Flask(__name__)
app.secret_key = os.urandom(24)

@app.route('/', methods=['GET','POST'])
def index():
    if request.method == 'POST':
        phone_number = request.form['number']
        send_reminder(phone_number)
        return 'Success'
    return 'Hello World'

if __name__ == '__main__':
    app.run()