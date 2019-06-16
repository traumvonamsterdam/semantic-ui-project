import React from "react";
import { Button, Icon } from "semantic-ui-react";
import StyledH2 from "../StyledElements/StyledH2";

const Buttons = () => {
  return (
    <>
      <StyledH2>Buttons</StyledH2>
      <div className="ui stackable equal width grid">
        <div className="column">
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
          <Button basic>Basic</Button>
          <Button compact>Compact</Button>

          <div className="ui divider" />
          <Button icon>
            <Icon name="heart" />
          </Button>
          <Button icon labelPosition="left">
            <Icon name="heart" />
            Labeled
          </Button>
          <Button icon labelPosition="right">
            <Icon name="heart" />
            Labeled
          </Button>
        </div>
      </div>
    </>
  );
};

export default Buttons;
