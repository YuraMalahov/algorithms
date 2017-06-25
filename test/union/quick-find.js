"use strict";

const chai = require("chai");

const QuickFind = require("../../union/quick-find");

describe("quick find", function () {
    let qf = new QuickFind(10);
    
    describe("union", function () {
        it("union 0 -> 1", function () {
            chai.expect(qf.union(0, 1)).to.equal(true);
        });
    });
    
    describe("connected", function () {
        it("is connected 0 -> 1", function () {
            chai.expect(qf.connected(0, 1)).to.equal(true);
        });
    });
});
