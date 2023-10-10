import { firstFourroducts } from "../main";

describe("First four products", () => {
  it("should return null", () => {
    const result = firstFourroducts(null);
    expect(result).toBeNull();
  });
});