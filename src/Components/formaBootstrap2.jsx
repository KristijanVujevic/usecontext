import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import FormRange from "react-bootstrap/FormRange";

const FormaBootstrap2 = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const handleChange = (e) => {
    setRangeValue(e.target.value);
  };
  return (
    <Form data-bs-theme="dark">
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" visuallyHidden>
            Ime
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder="Imenuj se"
          />
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Kor. Ime
          </Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroup"
              placeholder="Korisnicko ime"
            />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Form.Check
            type="checkbox"
            id="autoSizingCheck"
            className="mb-2"
            label="Sjeti me se nekada"
          />
        </Col>
        <Col xs="auto">
          <Button type="submit" className="mb-2">
            Potvrdi
          </Button>
        </Col>
      </Row>
      <Form.Label>How hard was this?</Form.Label>
      <FormRange value={rangeValue} onChange={handleChange} />
      <p>Ovoliko tesko: {rangeValue} %</p>
    </Form>
  );
};

export default FormaBootstrap2;
