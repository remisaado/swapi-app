import React from "react";

const Card = ({className, onClick, title, releaseDate, children}) => {

  return (
    <div className={className} onClick={onClick}>
      <p style={styles.titleStyle}>{title}</p>
      <p style={styles.releaseDateStyle}>{releaseDate}</p>
    </div>
  );
}

const styles = {
  titleStyle:
  {
    fontSize: "0.95em"
  },
  releaseDateStyle:
  {
    fontSize: "0.60em",
    marginBottom: "8px",
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute"
  }
}

export {Card};
