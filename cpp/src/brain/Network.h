#pragma once

#include <iostream>
#include <vector>
#include "Neuron.h"

namespace brain
{
	/**
	*	Class: represents a basic Neural Network
	*/
	class Network
	{
	public:
		Network();
		~Network();

		void bootstrap();
		void parse(std::string* input);

	private:
		std::vector<Neuron*> inputNeurons;

	};
}