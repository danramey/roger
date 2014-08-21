#!/usr/bin/python
from flask import Flask
import config
from modules.story import story

app = Flask(__name__)

@app.route('/')
def index():

	return "Hello, I'm Roger."
	
# Register blueprint(s)
app.register_blueprint(story)

if __name__ == '__main__':
	
	app.run(host="0.0.0.0", port=int("5000"), debug=True)
