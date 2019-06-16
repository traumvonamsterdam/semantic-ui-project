import _ from "lodash";
import React from "react";
import { Dropdown } from "semantic-ui-react";

const getOptions = (number, prefix = "Choice ") =>
  _.times(number, index => ({
    key: index,
    text: `${prefix}${index}`,
    value: index
  }));

const ScrollDropdown = () => (
  <Dropdown
    placeholder="Select choice"
    fluid
    selection
    scrolling
    options={getOptions(15)}
  />
);

export default ScrollDropdown;
