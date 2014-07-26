#!/usr/bin/python
from pybrain.structure import FeedForwardNetwork
from pybrain.structure import LinearLayer, SigmoidLayer
from pybrain.structure import FullConnection
from pybrain.supervised.trainers import BackpropTrainer
from pybrain.datasets import SupervisedDataSet

# create the network
n = FeedForwardNetwork()

# create each layer
inLayer = LinearLayer(2)
hiddenLayer = SigmoidLayer(3)
outLayer = LinearLayer(1)

# add them to the network
n.addInputModule(inLayer)
n.addModule(hiddenLayer)
n.addOutputModule(outLayer)

# define the network connections
in_to_hidden = FullConnection(inLayer, hiddenLayer)
hidden_to_out = FullConnection(hiddenLayer, outLayer)

# add the connections to the network
n.addConnection(in_to_hidden)
n.addConnection(hidden_to_out)

# internal initialization
n.sortModules()

print "params:"
print in_to_hidden.params
print hidden_to_out.params

ds = SupervisedDataSet(2, 1)

# add training data
ds.addSample((0, 0), (0,))
ds.addSample((0, 1), (1,))
ds.addSample((1, 0), (1,))
ds.addSample((1, 1), (0,))

trainer = BackpropTrainer(n, ds)
trainer.trainUntilConvergence()

print "params:"
print in_to_hidden.params
print hidden_to_out.params
print "result:"
print n.activate([0, 0])
print n.activate([0, 1])
print n.activate([1, 0])
print n.activate([1, 1])


print n.activate([0, 0])
print n.activate([0, 1])
print n.activate([1, 0])
print n.activate([1, 1])


print n.activate([0, 0])
print n.activate([0, 1])
print n.activate([1, 0])
print n.activate([1, 1])