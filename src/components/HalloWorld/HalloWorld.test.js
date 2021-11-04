import React from "react";
import { shallow } from "enzyme";
import HalloWorld from "./HalloWorld";

describe("HalloWorld", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HalloWorld />);
    expect(wrapper).toMatchSnapshot();
  });
});
