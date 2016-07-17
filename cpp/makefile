APP_NAME := roger

CXX := g++
INCL_DIRS := ./src/brain
CXXFLAGS := -g -Wall -I$(INCL_DIRS)
SRC_FILES := $(shell find ./src -name "*.cpp")
OBJECTS  := $(patsubst %.cpp, %.o, $(SRC_FILES))


all: $(APP_NAME)

$(APP_NAME): $(OBJECTS)
	$(CXX) $(CXXFLAGS) -o $(APP_NAME) $(OBJECTS)

depend: .depend

.depend: $(srcfiles)
	rm -f ./.depend
	$(CXX) $(CXXFLAGS) -MM $^>>./.depend;

clean:
	rm -rf $(OBJECTS)

dist-clean: clean
	rm -f *~ .depend

include .depend