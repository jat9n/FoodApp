import React, { useState } from "react";
import { itemslist } from "./itemslist";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { itemCounterInc, itemCounterDec } from "./actions";
import { redirect, useNavigate } from "react-router-dom";
//import Receipt from "./Receipt";

const Cart = ({ cartItems }) => {
  const [show, setShow] = useState(false);
  const [inputName, setInputName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  let itemCount = useSelector((state) => state.itemCounter);
  console.log("Item count", itemCount);
  let dispatch = useDispatch();

  let addCount = useSelector((state) => state.addtoCartReducer);

  const handleInput = (event) => {
    setInputName(event.target.value);
  };
  const handleContact = (event) => {
    setContact(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleData = () => {
    // one case is pending if user wants to change the name then saving to localstorage the update data
    if (!(localStorage.getItem("Name") === inputName))
      localStorage.setItem("Name", inputName);
    if (!(localStorage.getItem("Contact") === contact))
      localStorage.setItem("Contact", contact);
    if (!(localStorage.getItem("Address") === address)) {
      localStorage.setItem("Address", address);
    }
    Swal.fire(
      `Congratulations! ${inputName}`,
      "Order Placed Successfully!",
      "success"
    );
    navigate("/");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (totalAmount(addCount) === 0)
      return Swal.fire(
        `Sorry ! ${inputName}`,
        "You forgot to add your items to the cart",
        "error"
      );
    setShow(true);
    if (localStorage.getItem("Name")) {
      setInputName(localStorage.getItem("Name"));
    }
    if (localStorage.getItem("Address")) {
      setAddress(localStorage.getItem("Address"));
    }
    if (localStorage.getItem("Contact")) {
      setContact(localStorage.getItem("Contact"));
    }
  };
  const totalAmount = () => {
    let sum = 0;
    itemslist
      .filter((item) => addCount.includes(item.id))
      .forEach((item) => {
        sum += item.price;
      });
    return sum;
  };

  return (
    <div className="cart">
      <h2>Confirm your dishes!</h2>
      <Container>
        <Row>
          {itemslist
            .filter((item) => addCount.includes(item.id))
            .map((item) => {
              return (
                <Col key={item.id} style={{ marginBottom: 7 }}>
                  <Card
                    style={{ width: "18rem", backgroundColor: "lightblue" }}
                  >
                    <Card.Img
                      variant="top"
                      src={item.img}
                      style={{ height: "190px" }}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Card.Text>Price : {item.price}</Card.Text>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          variant="primary"
                          onClick={() => dispatch(itemCounterDec())}
                        >
                          -
                        </Button>
                        <div>{itemCount}</div>
                        <Button
                          variant="primary"
                          onClick={() => dispatch(itemCounterInc())}
                        >
                          +
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
        <h2>Total Amount : {totalAmount(cartItems)}</h2>
        <Button variant="success" onClick={handleShow}>
          Pay
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Details for Billing</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>Full Name </label>
            <input
              type="text"
              value={inputName}
              className="forminput"
              onChange={handleInput}
            />
            <br />
            <label>Contact </label>
            <input
              type="number"
              className="forminput"
              value={contact}
              onChange={handleContact}
            />
            <br />
            <label>Address</label>
            <input
              type="text"
              className="forminput"
              value={address}
              onChange={handleAddress}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleClose();
                handleData();
              }}
            >
              Confirm & Pay
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Cart;
