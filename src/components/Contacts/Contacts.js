import React from "react";
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';
const Contacts = () => {
  return (
    <div>
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={1}>
            Email
          </Label>
          <Col sm={5}>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="email"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={1}>
            Text Area
          </Label>
          <Col sm={5}>
            <Input id="exampleText" name="text" type="textarea" />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col
            sm={{
              offset: 2,
              size: 10,
            }}
          >
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Contacts;
