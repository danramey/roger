# Import flask dependencies
from flask import Blueprint, request

# Define the blueprint: 'story', set its url prefix: app.url/story
story = Blueprint('story', __name__, url_prefix='/story')

# Set the route and accepted methods
@story.route('/<int:story_id>', methods=['GET', 'PUT', 'DELETE'])
def get_story(story_id):
  if request.method == 'PUT':
      return 'update %d' % story_id
  elif request.method == 'DELETE':
      return 'delete %d\n' % story_id
  else:
      return 'Story %d\n' % story_id

@story.route('/', methods=['GET', 'POST'])
def login():
  if request.method == 'POST':
      return "create story: %s \n" % request.form['content']
  else:
      return "list stories\n"