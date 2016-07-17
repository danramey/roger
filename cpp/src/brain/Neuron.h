#pragma once

#include <iostream>
#include <vector>
#include "IFireable.h"
#include "Axon.h"

namespace brain
{
	/**
	*	Class: represents a Neuron node of a neural network
	*/
	class Neuron : public IFireable
	{
	public:
		Neuron(
			int min, 
			int max
		);
		~Neuron();

		/**
		* When this neuron fires, stimulate the next neuron with the following weight
		*/
		void addAxon(
			int weight, ///< weight to be applied to the output
		 	Neuron* successor ///< neuron to stimulate by firing
		);

		/**
		* a previous neuron in the network chain has fired
		*/
		void stimulate(int input);

	private:

		/**
		* the input is in the range of threshold 
		*/
		void fire();

		int charge;
		int minThreshold; ///< lower value to compare to input
		int maxThreshold; ///< upper value to compare to input
		std::vector<Axon*> connections; ///< Axons representing connections between this Neuron and others

	};
}