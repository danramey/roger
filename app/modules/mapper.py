#!/usr/bin/python

import nltk
import numpy
from nltk.tokenize import sent_tokenize
from nltk.tokenize import word_tokenize
from nltk.corpus import treebank

# from models.user import User

nltk.data.path.append('/roger/nltk_data')

class Mapper:

	story = ''
	data = {}

	def __init__(self):
		print "Calling parent constructor"	

	def map(self, content):
		
		self.data = []
		self.story = content	
		groucho_grammar = nltk.data.load('file:/roger/nltk_data/grammars/sample_grammars/groucho_grammar.cfg')
		# groucho_grammar = nltk.CFG.fromstring("""
		# 	S -> NP VP
		# 	PP -> P NP
		# 	NP -> Det N | Det N PP | 'I'
		# 	VP -> V NP | VP PP
		# 	Det -> 'an' | 'my'
		# 	N -> 'elephant' | 'pajamas'
		# 	V -> 'shot'
		# 	P -> 'in'
		# 	""")
		sent = ['I', 'shot', 'an', 'elephant', 'in', 'my', 'house']
		parser = nltk.ChartParser(groucho_grammar)
		for tree in parser.parse(sent):
			print(tree)
		# atis_grammar = nltk.data.load('file:/roger/nltk_data/grammars/large_grammars/atis.cfg')
		# sent = content.split()
		# print sent
		# rd_parser = nltk.RecursiveDescentParser(atis_grammar,1)
		# for tree in rd_parser.parse(sent):
		# 	print(tree)
		


		# sentence_tokens = sent_tokenize(content)
		# for sentence_token in sentence_tokens:
		# 	word_tokens = word_tokenize(sentence_token)
		# 	tagged_tokens = nltk.pos_tag(word_tokens)
		# 	print tagged_tokens
		# 	entities = nltk.chunk.ne_chunk(tagged_tokens)
		# 	print entities


	# 		t = treebank.parsed_sents('wsj_0001.mrg')[0]
	# t.draw()

			# parser = nltk.ChartParser(tagged_tokens)
			# for tree in parser.parse(sent):
			# 	print(tree)
			# for token in data:
			# 	print token
			# 	self.data.append(tagged_token[0])
			# 	print nltk.help.upenn_tagset(tagged_token[1])
			# i = self.find_subject(tagged_tokens)
			# idea = {}
			# idea['subject'] = tagged_tokens[i][0]
			# idea['adjective'] = {}
			# idea['adjective']['color'] = tagged_tokens[2][0]
			# print admin


	def get_result(self):
		return str(self.data)

	def find_subject(self, data):
		# for token in data:
		# 		print token
		# 		self.data.append(tagged_token[0])
		# 		print nltk.help.upenn_tagset(tagged_token[1])
		return 2;
