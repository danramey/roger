#include "Axon.h"

using namespace brain;

Axon::Axon( int w, IFireable* pred, IFireable* succ )
{
	this->weight = w;
	this->predecessor = pred;
	this->successor = succ;
}

void Axon::fire()
{
	this->successor->stimulate(weight);
}