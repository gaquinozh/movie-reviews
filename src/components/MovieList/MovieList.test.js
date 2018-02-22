import React from "react";
import MovieList from "./MovieList";
import { shallow } from "enzyme";

describe("MovieList", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<MovieList movies={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
