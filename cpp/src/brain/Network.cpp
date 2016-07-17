#include <sstream>
#include <iostream>
#include "Network.h"

using namespace brain;

Network::Network()
{
	std::cout << "new Network" << std::endl;

}

void Network::bootstrap()
{

	Neuron* r = new Neuron(100, 255);
	Neuron* g = new Neuron(100, 255);
	Neuron* b = new Neuron(100, 255);

	Neuron* red = new Neuron(100, 255);
	Neuron* orange = new Neuron(100, 255);
	Neuron* yellow = new Neuron(100, 255);
	Neuron* green = new Neuron(100, 255);
	Neuron* blue = new Neuron(100, 255);
	Neuron* indigo = new Neuron(100, 255);
	Neuron* violet = new Neuron(100, 255);

	// red connections
	r->addAxon(255, red);
	r->addAxon(0, orange);
	r->addAxon(0, yellow);
	r->addAxon(0, green);
	r->addAxon(0, blue);
	r->addAxon(0, indigo);
	r->addAxon(0, violet);

		// green connections
	g->addAxon(0, red);
	g->addAxon(0, orange);
	g->addAxon(0, yellow);
	g->addAxon(255, green);
	g->addAxon(0, blue);
	g->addAxon(0, indigo);
	g->addAxon(0, violet);

		// blue connections
	b->addAxon(0, red);
	b->addAxon(0, orange);
	b->addAxon(0, yellow);
	b->addAxon(0, green);
	b->addAxon(255, blue);
	b->addAxon(0, indigo);
	b->addAxon(0, violet);

	this->inputNeurons.push_back(r);
	this->inputNeurons.push_back(g);
	this->inputNeurons.push_back(b);
}

void Network::parse(std::string* input)
{	

	int hexValue;
	std::stringstream ss;
	ss << std::hex << input;
	ss >> hexValue;

	int r = ((hexValue >> 16) & 0xFF) / 255.0;  // Extract the RR byte
  	int g = ((hexValue >> 8) & 0xFF) / 255.0;   // Extract the GG byte
  	int b = ((hexValue) & 0xFF) / 255.0;        // Extract the BB byte

  	this->inputNeurons.at(0)->stimulate(r);
  	this->inputNeurons.at(1)->stimulate(g);
  	this->inputNeurons.at(2)->stimulate(b);
	
}