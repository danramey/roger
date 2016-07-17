#pragma once

#include <iostream>
#include "IFireable.h"

namespace brain
{
	/**
	*	Class: represents a connection between Neurons
	*/
	class Axon
	{
	public:
		Axon(
			int w, ///< weight to be applied to the output
		 	IFireable* pred, ///< previous neuron in the neural network graph
		 	IFireable* succ ///< next neuron in the neural network graph
		);
		~Axon();
		void fire();

	private:

		int weight; ///< weight to multiply
		IFireable* predecessor; ///< previous neuron in the neural network graph
		IFireable* successor; ///< next neuron in the neural network graph

	};
}