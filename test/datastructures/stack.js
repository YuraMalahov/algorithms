"use strict";

const chai = require("chai");

const Stack = require("../../datastructures/stack");

describe("stack", function () {
    const testStack = new Stack();
    const testItem = {a: 1, b: 2};
  
    describe("construction", function () {
        it("new instance should be empty", function () {
            chai.expect(testStack.isEmpty()).to.equal(true);
        });
        it("pop of new instance should return null", function () {
            chai.expect(testStack.pop()).to.equal(null);
        });
    });
    
    describe("push", function () {
        it("push new item", function () {
            testStack.push(1);
            testStack.push("abc");
            testStack.push(testItem);
        });
        it("after push stack should not be empty", function () {
            chai.expect(testStack.isEmpty()).to.equal(false);
        });
    });

    describe("pop", function () {
        it("get first item", function () {
            chai.expect(testStack.pop()).to.equal(testItem);
        });
        it("after first pop stack should not be empty", function () {
            chai.expect(testStack.isEmpty()).to.equal(false);
        });
        it("get second item", function () {
            chai.expect(testStack.pop()).to.equal("abc");
        });
        it("after second pop stack should not be empty", function () {
            chai.expect(testStack.isEmpty()).to.equal(false);
        });
        it("get third item", function () {
            chai.expect(testStack.pop()).to.equal(1);
        });
        it("after third pop stack should be empty", function () {
            chai.expect(testStack.isEmpty()).to.equal(true);
        });
    });
});
