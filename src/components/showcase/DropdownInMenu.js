import React from "react";
import { Dropdown } from "semantic-ui-react";

const DropdownSelect = () => (
  <Dropdown item text="People">
    <Dropdown.Menu>
      <Dropdown.Item text="Elliot Fu" />
      <Dropdown.Item text="Jenny Hess" />
      <Dropdown.Item text="Christian" />
      <Dropdown.Item text="Justen Kitsune" />
    </Dropdown.Menu>
  </Dropdown>
);

export default DropdownSelect;
