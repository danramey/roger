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
		
		result = []
		print "parsing: %s" % story
		
		# load the grammer file
		# note, the atis grammar will only work with the atis sample sentences 
		atis_grammar = nltk.data.load('file:/roger/nltk_data/grammars/large_grammars/atis.cfg')
		
		# create a new parser with the grammar
		parser = nltk.ChartParser(atis_grammar)

		# split the story into sentence tokens
		sentence_tokens = sent_tokenize(story)
		
		for sentence_token in sentence_tokens:
			
			# split each sentence in to word tokens
			word_tokens = word_tokenize(sentence_token)
			
			# map each possible sentence structure
			for tree in parser.parse(word_tokens):
				print tree
				result.append(tree)

		return result;


	def find_subject(self, data):
		# planned feature, stub for now
		return 0;
