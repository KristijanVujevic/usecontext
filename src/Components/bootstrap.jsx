import React from "react";
import Button from "react-bootstrap/Button";

const Bootstrap = () => {
  return (
    <div>
      <Button as="a" variant="dark">
        Dark Button
      </Button>
      <hr />
      <Button as="a" variant="warning">
        Warning Button
      </Button>
    </div>
  );
};

export default Bootstrap;
