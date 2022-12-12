import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { itemslist } from "./itemslist";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addtoCartRedux } from "./actions/index";

const Items = ({ changeCart }) => {
  let [items, setItems] = useState([]);
  let [dataLoaded, setdataLoaded] = useState(false);
  //let [isdisabled, setDisable] = useState(false);

  const addCount = useSelector((state) => state.addtoCartReducer);
  const dispatch = useDispatch();

  const getData = () => {
    //console.log(itemlist);
    setItems(itemslist);
    console.log(itemslist);
    setdataLoaded(true);
  };

  // const addtoCart = (id) => {
  //   console.log("id is - " + id);
  //   changeCart(id);
  // };
  const doDisable = (event) => {
    console.log("Event is :", event);
    event.currentTarget.disabled = true;
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{ marginTop: "80px" }}>
      <Container>
        <Row>
          {dataLoaded ? (
            items.map((item, index) => {
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
                      <Button
                        variant="primary"
                        onClick={(event) => {
                          //addtoCart(item.id);
                          doDisable(event);
                          dispatch(addtoCartRedux(item.id));
                        }}
                      >
                        ADD
                      </Button>
                      {console.log(addCount)}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <h1>No data</h1>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Items;
