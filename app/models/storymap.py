#!/usr/bin/python

class Word:

	def __init__(self, term):

		self.term = term;
		self.root = get_root(term)

	def get_root(self, term):
		return ''


class Verb( Word ):

	def __init__(self, term, who, what, modifiers):
		
		self.term = who;
		self.term = what;
		self.term = modifiers;
		self.tense = get_tense(term)

	def get_tense(self, term):
		return ''


class Adj( Word ):

	def __init__(self, term, subject, modifiers):
		
		self.term = term;
		self.term = subject;
		self.term = modifiers;
		self.root = get_root(term)

	