import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

function Footer(props) {
  const [state, setState] = useState(true);

  return (
    <Form>
      <FormGroup switch>
        <Input type="switch" role="switch" />
        <Label check>Online</Label>
      </FormGroup>
      <FormGroup switch>
        <Input
          type="switch"
          checked={state}
          onClick={() => {
            setState(!state);
          }}
        />
        <Label check>Are you near a coffee shop now?</Label>
      </FormGroup>
    </Form>
  );
}

export default Footer;