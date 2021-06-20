'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor () {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight=0) {
    let adjacencies = this.adjacencyList.get(startVertex);
    console.log('list type: ', adjacencies);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  getNodes() {
    return this.adjacendyList;
  }

  size() {
    let len = [];

    this.adjacencyList.forEach( (value) => {
      console.log('value: ', value);
      len.push(value);

    });
    console.log('length:', len.length);
  }
}

const graph = new Graph();

const a = new Vertex('a');
const b = new Vertex('b');
const c = new Vertex('c');
const d = new Vertex('d');
const e = new Vertex('e');
const f = new Vertex('f');

graph.addVertex(a);
graph.addVertex(b);
graph.addVertex(c);
graph.addVertex(d);
graph.addVertex(e);
graph.addVertex(f);

console.log('build up graph', graph);

graph.addDirectedEdge(a, b);

console.log('one edge added', graph);

graph.addDirectedEdge(b, c);
graph.addDirectedEdge(c, a);

console.log('cyclical', graph);

