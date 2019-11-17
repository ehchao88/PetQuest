import os
from flask import Flask, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = os.urandom(24)

@app.route('/')
def index():
    return 'Hello World'

if __name__ == '__main__':
    app.run()