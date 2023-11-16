import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Dropdowns = () => {
  return (
    <div data-bs-theme="dark">
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Padajuci izbornik"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Nesto</Dropdown.Item>
          <Dropdown.Item href="#">Nesto broj dva</Dropdown.Item>
          <Dropdown.Item href="#">Nesto trece</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Neki link</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control aria-label="Text input with dropdown button" />

        <DropdownButton
          variant="outline-secondary"
          title="Padajuci desni"
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item href="#">Nesto</Dropdown.Item>
          <Dropdown.Item href="#">Nesto broj dva</Dropdown.Item>
          <Dropdown.Item href="#">Nesto trece</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Neki link</Dropdown.Item>
        </DropdownButton>
      </InputGroup>

      <InputGroup>
        <DropdownButton
          variant="outline-secondary"
          title="Padajuci lijevi"
          id="input-group-dropdown-3"
        >
          <Dropdown.Item href="#">Nesto</Dropdown.Item>
          <Dropdown.Item href="#">Nesto broj dva</Dropdown.Item>
          <Dropdown.Item href="#">Nesto trece</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Neki link</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with 2 dropdown buttons" />
        <DropdownButton
          variant="outline-secondary"
          title="Padajuci desni"
          id="input-group-dropdown-4"
          align="end"
        >
          <Dropdown.Item href="#">Nesto</Dropdown.Item>
          <Dropdown.Item href="#">Nesto broj dva</Dropdown.Item>
          <Dropdown.Item href="#">Nesto trece</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">SNeki link</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    </div>
  );
};

export default Dropdowns;
