"use strict";

const Bag = require('../bag');

class Graph {
    /**
     * @param {number} vertices
     */
    constructor(vertices) {
        this._vertices = vertices;
        this._edgess = 0;
        this._adjacent = [];

        for (let i = 0; i < vertices; i++) {
            this._adjacent.push(Bag.createBag());
        }
    }

    /**
     * @return {number}
     */
    getVerticesCount() {
        return this._vertices;
    }

    /**
     * @return {number}
     */
    getEdgesCount() {
        return this._edgess;
    }

    /**
     * @param {number} from
     * @param {number} to
     * @return {boolean}
     */
    addEdge(from, to) {
        if (this._vertices >= from && this._vertices >= to && from >= 0 && to >= 0) {
            this._adjacent[from].add(to);
            this._adjacent[to].add(from);
            this._edgess++;

            return true;
        }

        return false;
    }

    /**
     * @param {number} vertex
     * @return {Bag}
     */
    adjacent(vertex) {
        return this._adjacent[vertex];
    }

    /**
     * @return {string}
     */
    toString() {
        let str = `${this.getVerticesCount()} vertices, ${this.getEdgesCount()} edges\n`;

        for (let vertex = 0; vertex < this.getVerticesCount(); vertex++) {
            str += `${vertex}:`;
            for (let adjVertex of this.adjacent(vertex)) {
                str += ` ${adjVertex}`;
            }
            str += "\n";
        }

        return str;
    }


    /**
     * @param {Graph} graph
     * @param {number} vertex
     */
    static degree(graph, vertex) {
        let degree = 0;

        for (let adjVertex of graph.adjacent(vertex)) {
            degree++;
        }

        return degree;
    }

    /**
     * @param {Graph} graph
     * @return {number}
     */
    static maxDegree(graph) {
        let max = 0;

        for (let i = 0; i < graph.getVerticesCount(); i++) {
            let count = this.degree(graph, i);
            if (count > max) {
                max = count;
            }
        }

        return max;
    }

    /**
     * @param {Graph} graph
     * @returns {number}
     */
    static avgDegree(graph) {
        return Math.floor(2 * graph.getEdgesCount() / graph.getVerticesCount());
    }

    /**
     * @param {Graph} graph
     * @returns {number}
     */
    static numberOfLoops(graph) {
        let count = 0;

        for (let i = 0; i < graph.getVerticesCount(); i++) {
            for (let vertex of graph.adjacent(i)) {
                if (i === vertex) {
                    count++;
                }
            }
        }

        return Math.floor(count / 2);
    }
}

module.exports = Graph;
