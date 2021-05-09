const unixToPhotoName =  require("./unixToPhotoName")

// console.log(unixToPhotoName(1620524691 * 1000))

test("Returns date inside photo name format", () => {
    expect(unixToPhotoName(1620524691 * 1000)).toBe("20210508_224451");
});