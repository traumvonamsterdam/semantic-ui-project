import React from "react";
import { Container } from "semantic-ui-react";
import ScrollDropdown from "./ScrollDropdown";
import MultiSelectSearch from "./MultiSelectSearch";
import StyledH2 from "../StyledElements/StyledH2";

const Dropdowns = () => (
  <Container>
    <StyledH2>Dropdowns</StyledH2>
    <div className="ui stackable equal width grid">
      <div className="column">
        <ScrollDropdown />
      </div>

      <div className="column">
        <MultiSelectSearch />
      </div>
    </div>
  </Container>
);

export default Dropdowns;
