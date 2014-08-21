#!/usr/bin/python

import nltk
import numpy
from nltk.tokenize import sent_tokenize
from nltk.tokenize import word_tokenize
from nltk.corpus import treebank

# from models.user import User

nltk.data.path.append('/roger/nltk_data')

class Mapper:

	def __init__(self):
		print "Calling parent constructor"	

	def map(self, story):
		
		data = []
		# load the grammer file
		atis_grammar = nltk.data.load('file:/roger/nltk_data/grammars/large_grammars/atis.cfg')
		# simple_grammar = nltk.CFG.fromstring("""
		# 	S -> NP VP
		# 	PP -> P NP
		# 	NP -> Det N | Det N PP
		# 	VP -> V NP | VP PP
		# 	Det -> 'DT'
		# 	N -> 'NN'
		# 	V -> 'VBZ'
		# 	P -> 'PP'
		# """)
		parser = nltk.ChartParser(atis_grammar)
		# parser = nltk.parse.malt.MaltParser()
		print "parsing: %s" % story
		sentence_tokens = sent_tokenize(story)
		# for sentence_token in sentence_tokens:
		# 	word_tokens = word_tokenize(sentence_token)
		# 	# tagged_tokens = nltk.pos_tag(word_tokens)
		# 	print word_tokens
		# 	# pos_tags = [pos for (token,pos) in nltk.pos_tag(word_tokens)]
		
			
		# 	for tree in parser.parse(word_tokens):
		# 		print tree
		data = sentence_tokens;
		return data;
		# groucho_grammar = nltk.data.load('file:/roger/nltk_data/grammars/sample_grammars/groucho_grammar.cfg')
		# atis_grammar = nltk.data.load('file:/roger/nltk_data/grammars/large_grammars/atis.cfg')
		# # groucho_grammar = nltk.CFG.fromstring("""
		# # 	S -> NP VP
		# # 	PP -> P NP
		# # 	NP -> Det N | Det N PP | 'I'
		# # 	VP -> V NP | VP PP
		# # 	Det -> 'an' | 'my'
		# # 	N -> 'elephant' | 'pajamas'
		# # 	V -> 'shot'
		# # 	P -> 'in'
		# # 	""")
		# sent = ['I', 'shot', 'an', 'elephant', 'in', 'my', 'house']
		# parser = nltk.ChartParser(atis_grammar)
		# for tree in parser.parse(sent):
		# 	print(tree)


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


	def find_subject(self, data):
		# for token in data:
		# 		print token
		# 		self.data.append(tagged_token[0])
		# 		print nltk.help.upenn_tagset(tagged_token[1])
		return 2;
