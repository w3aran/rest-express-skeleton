import { expect } from "chai";
import { getDisplayString } from "../src/render";

describe("#getDisplayString", () => {
  [{
    name: "use the default value when no name is passed",
    inputName: undefined,
    expectedString: "Hello World!"
  },
  {
    name: "use the specified name value passed in",
    inputName: "Jono",
    expectedString: "Hello Jono!"
  }].forEach((test) => {
    it(`should ${test.name}`, () => {
      const result = getDisplayString(test.inputName);
      expect(result).to.equal(test.expectedString);
    });
  });
});