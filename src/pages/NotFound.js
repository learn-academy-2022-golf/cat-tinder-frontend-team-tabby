import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

function NotFound(args) {
  const [isOpen, setIsOpen] = useState(false);

  const NotFound = () => setIsOpen(!isOpen);

  return (
    <React.StrictMode>
      <Button color="primary" onClick={NotFound} style={{ marginBottom: '1rem' }}>
       Click Me
      </Button>
      <Collapse isOpen={isOpen} {...args}>
        <Card>
          <CardBody>
          Are you feeling depresso? 
          Because you are lacking espresso.

          Your entry is not found. 
          </CardBody>
        </Card>
      </Collapse>
    </React.StrictMode>
  );
}

export default NotFound