roger
=====

A Natural Language Mapper


start the VM
==================
- browse to ./box
vagrant up

to run the app
==================
./app/app.py


sample requests
==================

# create a new story
curl --data "content=list flights from cleveland ." http://localhost:5000/story/

# read a story
curl http://localhost:5000/story/1

# list stories
curl http://localhost:5000/story/


Planned features
===================

- parse NL articles into structured data

- answer NL queries about structured data