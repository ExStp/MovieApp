import { getMappedArr, getFormattedBudget } from "../func/formatData";

describe("test getMappedArr", () => {
	test("empty arr", () => expect(getMappedArr([])).toEqual(null));
	test("empty string", () => expect(getMappedArr("")).toEqual(null));
	test("null", () => expect(getMappedArr()).toEqual(null));
});

describe("test getFormattedBudget", () => {
	test("empty string", () => expect(getFormattedBudget("")).toEqual(null));
	test("num zero", () => expect(getFormattedBudget(0)).toEqual(null));
	test("empty arr", () => expect(getFormattedBudget([])).toEqual(null));
});
