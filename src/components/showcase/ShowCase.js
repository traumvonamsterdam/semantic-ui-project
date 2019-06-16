import React from "react";
import { Container } from "semantic-ui-react";
import Header from "./Header";
import Heading from "./Heading";
import Menu from "./Menu";
import ContainerExample from "./Container";
import TextContainer from "./TextContainer";
import Buttons from "./Buttons";
import Dropdowns from "./Dropdowns";
import ExcAccordion from "./ExcAccordion";
import Segments from "./Segments";
import NestedSegments from "./NestedSegments";
import ProfileCards from "./ProfileCards";
import TextCards from "./TextCards";
import CelledGrids from "./CelledGrids";
import Forms from "./Forms";

const ShowCase = () => (
  <Container style={{ margin: 5 }}>
    <Header />
    <Menu />
    <Heading />
    <ContainerExample>
      <TextContainer />
    </ContainerExample>
    <Buttons />
    <Dropdowns />
    <ExcAccordion />
    <Segments />
    <NestedSegments />
    <ProfileCards />
    <TextCards />
    <CelledGrids />
    <Forms />
  </Container>
);

export default ShowCase;
