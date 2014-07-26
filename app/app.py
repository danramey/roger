#!/usr/bin/python
from flask import Flask
import config
from modules.story import story
# from flask.ext.sqlalchemy import SQLAlchemy
# Import a module / component using its blueprint handler variable (mod_story)

app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
# db = SQLAlchemy(app)

@app.route('/')
def index():
	# admin = app.User('admin', 'admin@example.com')
	print admin
	return "Hello, I'm Roger."
	
# Register blueprint(s)
app.register_blueprint(story)

if __name__ == '__main__':
	# app.run(debug = True)
	app.run(host="0.0.0.0", port=int("5000"), debug=True)


# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(80), unique=True)
#     email = db.Column(db.String(120), unique=True)

#     def __init__(self, username, email):
#         self.username = username
#         self.email = email

#     def __repr__(self):
#         return '<User %r>' % self.username

# from flask import Flask
# from admin.views import admin
# from main.views import main

# app = Flask(__name__)
# app.register_blueprint(admin, url_prefix='/admin')
# app.register_blueprint(main, url_prefix='/main')

# print app.url_map

# app.run()