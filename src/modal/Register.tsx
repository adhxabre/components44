import React from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

import Login from "./Login";

export default function Register(props: any) {
  const [showLogin, setShowLogin] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);

  return (
    <>
      <Modal {...props} centered>
        <div>
          <Modal.Header>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>Bro test doang bro</Modal.Body>
          <Modal.Footer>
            <h1>
              Test doang yo <a onClick={props.handleLogin}>Click here</a>
            </h1>
          </Modal.Footer>
        </div>
        <Register show={showRegister} onHide={() => setShowRegister(false)} />
        <Login show={showLogin} onHide={() => setShowLogin(false)} />
      </Modal>
    </>
  );
}
