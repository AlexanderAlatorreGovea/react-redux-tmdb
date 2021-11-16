import { truncateTitle } from "../utils/truncateString";

describe("truncateTitle()", () => {
  it("should allow for a string of 21 characters to append the string '...' at the end of the sentence and not allow extra charters after 20.", () => {
    //arrange
    const longString = "sssssssssssssssssssss";
    const expected = "ssssssssssssssssssss...";

    //act
    const actual = truncateTitle(longString);

    //assert
    expect(expected).toEqual(actual);
  });

  it("should allow for a string of 32 characters to append the string '...' at the end of the sentence and not allow extra charters after 20.", () => {
    //arrange
    const longString = "ssssssssssssssssssssssssssssssss";
    const expected = "ssssssssssssssssssss...";

    //act
    const actual = truncateTitle(longString);

    //assert
    expect(expected).toEqual(actual);
  });

  it("should return the original string if the character count doesn't exceed 20 characters", () => {
    //arrange
    const longString = "alex";
    const expected = "alex";

    //act
    const actual = truncateTitle(longString);

    //assert
    expect(expected).toEqual(actual);
  });
});
