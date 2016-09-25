"use strict";

const Stack = require('../stack');

class DepthFirstPaths {
    constructor(graph, searchedVertex) {
        this._marked = [];
        this._edgeTo = [];
        this._start = searchedVertex;

        this.dfs(graph, searchedVertex);
    }

    dfs(graph, vertex) {
        this._marked[vertex] = true;

        [...graph.adjacent(vertex)].forEach((adjacentVertex) => {
            if (!this._marked[adjacentVertex]) {
                this._edgeTo[adjacentVertex] = vertex;
                this.dfs(graph, adjacentVertex);
            }
        });
    }

    hasPathTo(vertex) {
        return this._marked[vertex];
    }

    pathTo(vertex) {
        if (!this.hasPathTo(vertex)) {
            return null;
        }

        let path = Stack.createStack();
        for (let x = vertex; x !== this._start; x = this._edgeTo[x]) {
            path.push(x);
        }
        path.push(this._start);
        
        return path;
    }
}

module.exports = DepthFirstPaths;
