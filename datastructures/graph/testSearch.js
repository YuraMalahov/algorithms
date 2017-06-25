"use strict";

const Graph = require("./graph");
const DepthFirstSearch = require("./depth-first-search");
const DepthFirstPaths = require("./depth-first-paths");

let graph = new Graph(6);
graph.addEdge(0, 2);
graph.addEdge(0, 1);
graph.addEdge(0, 5);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);
graph.addEdge(3, 4);

let search = new DepthFirstSearch(graph, 1);
let paths = new DepthFirstPaths(graph, 5);

console.log(graph.toString());
console.log(paths.hasPathTo(1));

[...paths.pathTo(1)].forEach(function (vertex) {
    console.log(vertex);
});


for (let i = 0, count = graph.getVerticesCount(); i < count; i++) {
    if (search.marked(i)) {
        console.log(i);
    }
}

if (search.count() !== graph.getVerticesCount) {
    console.log("not ");
}

console.log("connected");
