import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import StyledH2 from "../StyledElements/StyledH2";

const ProfileCards = () => (
  <>
    <StyledH2>Group of Cards</StyledH2>
    <Card.Group itemsPerRow={4}>
      <Card href="#card-example-link-card">
        {/* Customize Card Content */}
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
      {/* Simpler version, but less customizability */}
      <Card
        image="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
        header="Elliot Baker"
        meta="Friend"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        extra={
          <a>
            <Icon name="user" />
            16 Friends
          </a>
        }
        href="#card-example-link-card"
      />
    </Card.Group>
  </>
);

export default ProfileCards;
