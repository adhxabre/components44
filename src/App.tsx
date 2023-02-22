import React from "react";
import Button from "react-bootstrap/Button";

import Login from "./modal/Login";
import Register from "./modal/Register";

function App() {
  const [showLogin, setShowLogin] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const popLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const popRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShowLogin}>
        Login
      </Button>

      <Button variant="primary" onClick={handleShowRegister}>
        Register
      </Button>

      <Login
        show={showLogin}
        onHide={() => handleCloseLogin()}
        handleRegister={() => popRegister()}
      />
      <Register
        show={showRegister}
        onHide={() => handleCloseRegister()}
        handleLogin={() => popLogin()}
      />
    </>
  );
}

export default App;
