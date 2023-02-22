import React from "react";
import Badge from "react-bootstrap/Badge";

export default function App() {
  return (
    <>
      <div className="p-5">
        <h1>Badge</h1>

        <h1 className="position-relative d-inline-flex align-items-center">
          <img
            src="https://ik.imagekit.io/CoffeeLatteShop/Icon_icon_dXDeWrdnd.png"
            alt="..."
            style={{ width: "10rem", height: "auto", borderRadius: "100%" }}
          />
          <Badge
            pill
            bg="danger"
            style={{ position: "absolute", top: 0, right: 0 }}
          >
            1
          </Badge>
        </h1>
      </div>
    </>
  );
}
