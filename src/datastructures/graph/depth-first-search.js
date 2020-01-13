"use strict";

class DepthFirstSearch {
    constructor(graph, searchedVertex) {
        this._marked = [];
        this._count = 0;
        this.dfs(graph, searchedVertex);
    }

    dfs(graph, vertex) {
        this._marked[vertex] = true;
        this._count++;
        [...graph.adjacent(vertex)].some((adjacentVertex) => {
            if (this.marked(adjacentVertex)) {
                return true;
            }

            this.dfs(graph, adjacentVertex);
        });
    }

    marked(vertex) {
        return this._marked[vertex];
    }

    count() {
        return this._count;
    }
}

module.exports = DepthFirstSearch;