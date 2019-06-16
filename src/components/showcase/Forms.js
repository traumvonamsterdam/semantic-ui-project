import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea
} from "semantic-ui-react";
import StyledH2 from "../StyledElements/StyledH2";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" }
];

class FormExampleFieldControl extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <>
        <StyledH2>Forms</StyledH2>
        <Form style={{ margin: "15pt 0" }}>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="First name"
              placeholder="First name"
            />
            <Form.Field
              control={Input}
              label="Last name"
              placeholder="Last name"
            />
            <Form.Field
              control={Select}
              label="Gender"
              options={options}
              placeholder="Gender"
            />
          </Form.Group>
          <Form.Group inline>
            <label>Quantity</label>
            <Form.Field
              control={Radio}
              label="One"
              value="1"
              checked={value === "1"}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              label="Two"
              value="2"
              checked={value === "2"}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              label="Three"
              value="3"
              checked={value === "3"}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label="About"
            placeholder="Tell us more about you..."
          />
          <Form.Field
            control={Checkbox}
            label="I agree to the Terms and Conditions"
          />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>

        <Form style={{ margin: "15pt 0" }}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="First name"
              placeholder="First name"
              error
            />
            <Form.Input fluid label="Last name" placeholder="Last name" />
          </Form.Group>
          <Form.Select options={options} placeholder="Gender" error />
          <Form.Checkbox label="I agree to the Terms and Conditions" error />
        </Form>

        <Form style={{ margin: "15pt 0" }}>
          <Form.Group>
            <Form.Input label="First name" placeholder="First Name" width={6} />
            <Form.Input
              label="Middle Name"
              placeholder="Middle Name"
              width={4}
            />
            <Form.Input label="Last Name" placeholder="Last Name" width={6} />
          </Form.Group>
          <Form.Group>
            <Form.Input placeholder="2 Wide" width={2} />
            <Form.Input placeholder="12 Wide" width={12} />
            <Form.Input placeholder="2 Wide" width={2} />
          </Form.Group>
          <Form.Group>
            <Form.Input placeholder="8 Wide" width={8} />
            <Form.Input placeholder="6 Wide" width={6} />
            <Form.Input placeholder="2 Wide" width={2} />
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default FormExampleFieldControl;
