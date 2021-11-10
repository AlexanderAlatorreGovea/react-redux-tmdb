import { truncateTitle } from "../utils/truncateString";

describe("truncateTitle()", () => {
  it("should allow for a string of 21 characters to append the string '...' at the end of the sentence and not allow extra charters after 20.", () => {
    const longString = "sssssssssssssssssssss";
    const expected = "ssssssssssssssssssss...";
    const result = truncateTitle(longString);

    expect(result).toEqual(expected);
  });

  it("should allow for a string of 32 characters to append the string '...' at the end of the sentence and not allow extra charters after 20.", () => {
    const longString = "ssssssssssssssssssssssssssssssss";
    const expected = "ssssssssssssssssssss...";
    const result = truncateTitle(longString);

    expect(result).toEqual(expected);
  });

  it("should return the original string if the character count doesn't exceed 20 characters", () => {
    const longString = "alex";
    const expected = "alex";
    const result = truncateTitle(longString);

    expect(result).toEqual(expected);
  });
});
