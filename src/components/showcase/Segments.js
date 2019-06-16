import React from "react";
import { Button, Header, Icon, Segment } from "semantic-ui-react";
import StyledH2 from "../StyledElements/StyledH2";

const Segments = () => (
  <>
    <StyledH2>Segments</StyledH2>
    <Segment raised>Pellentesque habitant morbi tristique senectus.</Segment>
    <Segment stacked>Pellentesque habitant morbi tristique senectus.</Segment>
    <Segment piled>Pellentesque habitant morbi tristique senectus.</Segment>
    <Segment placeholder>
      <Header icon>
        <Icon name="pdf file outline" />
        No documents are listed for this customer.
      </Header>
      <Button primary>Add Document</Button>
    </Segment>
  </>
);

export default Segments;
