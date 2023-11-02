import React from "react";
import loader from "../../assets/gifs/loader.gif";
const Loader = () => {
  return (
    <div style={{ display: "grid", placeContent: "center" }}>
      <img height="100px" style={{ marginTop: "2rem" }} src={loader} alt="" />
    </div>
  );
};

export default Loader;
