const total = require("../mock/total");

describe("testing NDS", () => {
  let shopList;

  beforeEach(() => {
    shopList = [500, 750, 2500, 5000];
    fn = jest.fn((x) => x * 1.2);
    total(shopList, fn);
  });
  test("call function NDS", () => {
    expect(fn).toHaveBeenCalled();
  });
  test("number of calls function NDS", () => {
    expect(fn).toHaveBeenCalledTimes(4);
  });
  test("checking the work function NDS = fn", () => {
    expect(fn.mock.results[0].value).toBe(600);
    expect(fn.mock.results[1].value).toBe(900);
    expect(fn.mock.results[2].value).toBe(3000);
    expect(fn.mock.results[3].value).toBe(6000);
  });
  test("mock value fn", () => {
    fn.mockReturnValueOnce("one")
      .mockReturnValueOnce("two")
      .mockReturnValue("total")
      .mockReturnValue("total");
    expect(fn()).toBe("one");
    expect(fn()).toBe("two");
    expect(fn()).toBe("total");
    expect(fn()).toBe("total");
  });
});
