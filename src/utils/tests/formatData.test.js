import { getMappedArr, getFormattedBudget } from "../func/formatData";
import { test } from "@jest/globals";

describe("test getMappedArr", () => {
	test.each([
		{ a: [], expected: null },
		{ a: "", expected: null },
		{ a: null, expected: null },
	])("test № %#", ({ a, expected }) => {
		expect(getMappedArr(a)).toEqual(expected);
	});
});
describe("test getFormattedBudget", () => {
	test.each([
		{ a: "", expected: null },
		{ a: 0, expected: null },
	])("test № %#", ({ a, expected }) => {
		expect(getFormattedBudget(a)).toEqual(expected);
	});
});
