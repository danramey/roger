#!/usr/bin/python
from pybrain.tools.shortcuts import buildNetwork
from pybrain.supervised.trainers import BackpropTrainer
from pybrain.datasets import SupervisedDataSet
from pybrain.structure import TanhLayer

# create a network with 2 inputs, 3 hidden and 1 output
net = buildNetwork(2, 3, 1, bias=True, hiddenclass=TanhLayer)

# create training data set that supports two dimensional inputs and one dimensional targets 
ds = SupervisedDataSet(2, 1)

# add training data
ds.addSample((0, 0), (0,))
ds.addSample((0, 1), (1,))
ds.addSample((1, 0), (1,))
ds.addSample((1, 1), (0,))

# create the trainer
trainer = BackpropTrainer(net, ds)

print trainer.train()
# trainer.trainUntilConvergence()
print net.activate([0, 0])
print net.activate([0, 1])
print net.activate([1, 0])
print net.activate([1, 1])