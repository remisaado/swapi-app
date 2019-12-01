import React from "react";

const Spinner = () => {
// Loading spinner created with stylesheet from fontawesome
  return (
    <div className="loader center" style={styles.spinnerStyle}>
      <i className="fa fa-spinner fa-spin"/>
    </div>
  );
}

const styles = {
  spinnerStyle:
  {
    color: "#fff",
    fontSize: "100px",
    position: "absolute",
    top: "50%",
    left: "50%",
    msTransform: "translate(-50%, -50%)",
    WebkitTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)"
  }
}

export {Spinner};
