import React from "react";
import { Image } from "react-bootstrap";
import image from "./homeimage.jpg";

const Home = () => {
  return (
    <div
      style={{
        border: "3px dashed green",
        padding: "10px",
        marginTop: "60px",
        // backgroundImage: `url(${image})`,
      }}
    >
      <Image fluid src={image} style={{ height: "85vh", width: "200vw" }} />
    </div>
  );
};

export default Home;
