#include <iostream>

// project includes
#include "Network.h" 

int main()
{
	brain::Network* network = new brain::Network();
	std::string hex;
	std::cout << "Please enter a hex number to be categorized:" << std::endl;
	std::cin >> hex;

	std::string category;
	network->bootstrap();
	network->parse(&hex, &category);
}