import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const FormaBootstrap = () => {
  return (
    <Form data-bs-theme="dark">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Unesi email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Lozinka</Form.Label>
          <Form.Control type="password" placeholder="Lozinka" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Adresa</Form.Label>
        <Form.Control placeholder="Ulica kralja..." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Adresa 2</Form.Label>
        <Form.Control placeholder="Tko ima drugu adresu??" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Grad</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Drzava</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Izaberi nesto</option>
            <option>...</option>
            <option>Hrvatska</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Postanski br.</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Potvrdi
      </Button>
    </Form>
  );
};

export default FormaBootstrap;
