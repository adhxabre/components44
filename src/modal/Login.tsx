import React from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

import Register from "./Register";

export default function Login(props: any) {
  const [showLogin, setShowLogin] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);

  return (
    <>
      <Modal {...props} centered>
        <div>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>Bro test doang bro</Modal.Body>
          <Modal.Footer>
            <h1>
              Test doang yo <a onClick={props.handleRegister}>Click here</a>
            </h1>
          </Modal.Footer>
        </div>
        <Register show={showRegister} onHide={() => setShowRegister(false)} />
        <Login show={showLogin} onHide={() => setShowLogin(false)} />
      </Modal>
    </>
  );
}
