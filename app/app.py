#!/usr/bin/python
from flask import Flask
import config
from modules.story import story
# Import a module / component using its blueprint handler variable (mod_story)

app = Flask(__name__)

@app.route('/')
def index():
	return "Hello, I'm Roger."
	
# Register blueprint(s)
app.register_blueprint(story)

if __name__ == '__main__':
	# app.run(debug = True)
	app.run(host="0.0.0.0", port=int("5000"), debug=True)



# from flask import Flask
# from admin.views import admin
# from main.views import main

# app = Flask(__name__)
# app.register_blueprint(admin, url_prefix='/admin')
# app.register_blueprint(main, url_prefix='/main')

# print app.url_map

# app.run()