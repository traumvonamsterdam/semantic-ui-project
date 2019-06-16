import faker from "faker";
import _ from "lodash";
import React from "react";
import { Accordion } from "semantic-ui-react";
import StyledH2 from "../StyledElements/StyledH2";

const panels = _.times(3, i => ({
  key: `panel-${i}`,
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs()
}));

const AccordionExampleExclusive = () => (
  <>
    <StyledH2>Accordion</StyledH2>

    <div className="ui stackable equal width grid">
      <Accordion
        defaultActiveIndex={[1, 2]}
        panels={panels}
        exclusive={false}
        fluid
      />
    </div>
  </>
);

export default AccordionExampleExclusive;
