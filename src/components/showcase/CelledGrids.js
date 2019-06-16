import React from "react";
import { Grid, Image } from "semantic-ui-react";
import StyledH2 from "../StyledElements/StyledH2";

const imageLink = "https://react.semantic-ui.com/images/wireframe/image.png";
const pLink = "https://react.semantic-ui.com/images/wireframe/paragraph.png";
const cpLink =
  "https://react.semantic-ui.com/images/wireframe/centered-paragraph.png";

const CelledGrids = () => (
  <>
    <StyledH2>Celled Grids</StyledH2>
    <Grid celled="internally">
      <Grid.Row>
        <Grid.Column width={3}>
          <Image src={imageLink} />
        </Grid.Column>
        <Grid.Column width={10}>
          <Image src={cpLink} />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src={imageLink} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={3}>
          <Image src={imageLink} />
        </Grid.Column>
        <Grid.Column width={10}>
          <Image src={pLink} />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src={imageLink} />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid celled>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Image src={imageLink} />
        </Grid.Column>
        <Grid.Column>
          <Image src={imageLink} />
        </Grid.Column>
        <Grid.Column>
          <Image src={imageLink} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={4}>
        <Grid.Column>
          <Image src={imageLink} />
        </Grid.Column>
        <Grid.Column>
          <Image src={imageLink} />
        </Grid.Column>
        <Grid.Column>
          <Image src={imageLink} />
        </Grid.Column>
        <Grid.Column>
          <Image src={imageLink} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);

export default CelledGrids;
