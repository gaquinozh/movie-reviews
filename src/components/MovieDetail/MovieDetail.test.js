import React from "react";
import { shallow } from "enzyme";
import MovieDetail from "./MovieDetail";

describe("MovieDetail", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<MovieDetail />);
    expect(wrapper).toMatchSnapshot();
  });
});
