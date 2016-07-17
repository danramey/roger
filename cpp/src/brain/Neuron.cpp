#include "Neuron.h"

using namespace brain;

Neuron::Neuron(int min, int max)
{
	this->minThreshold = min;
	this->maxThreshold = max;
	this->charge = 0;
}

void Neuron::addAxon(int weight, Neuron* successor)
{
	Axon* connection = new Axon(weight, this, (IFireable*)successor);
	this->connections.push_back(*connection);
}

void Neuron::stimulate(int input)
{
	this->charge += input;
	if( this->charge >= minThreshold && this->charge <= maxThreshold )
	{
		this->fire();
	}
}

void Neuron::fire()
{
	for (std::vector<Axon*>::iterator axon = this.connections.begin() ; axon != this.connections.end(); ++axon)
	{
    	axon->fire();
	}
}