# Import flask dependencies
from flask import Blueprint, request
from modules.mapper import Mapper
import sys

# nltk.download()

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
def handle_story():
	if request.method == 'POST':
		mapper = Mapper()
		mapper.map(request.form['content'])
		result = mapper.get_result()
		sys.stdout.flush()
		return result
		# return "create story: %s \n" % content
	else:
		return "list stories\n"