import React, { Component } from "react";
import { Input, Menu, Segment } from "semantic-ui-react";
import DropdownInMenu from "./DropdownInMenu";
import StyledH2 from "../StyledElements/StyledH2";

export default class MenuExamplePointing extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <StyledH2>Menus</StyledH2>
        <Menu pointing>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="messages"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="friends"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          />
          <DropdownInMenu />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment>
          <div>{this.state.activeItem.toUpperCase()}</div>

          <img
            alt="par"
            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
          />
        </Segment>
      </div>
    );
  }
}
