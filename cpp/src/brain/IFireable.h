#pragma once

#include <iostream>

namespace brain
{
	/**
	*	Class: represents an interface to fire Neurons in a neural network
	*/
	class IFireable
	{
	public:
		IFireable() {};
		virtual ~IFireable() = 0;

		/**
		* a previous neuron in the network chain has fired
		*/
		virtual void stimulate(int input) = 0;

	};
}