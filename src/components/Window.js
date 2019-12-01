import React from "react";

const Window = ({className, clickedMovie, children}) => {

  return (
    <div className={className}>
      <h2>{clickedMovie}</h2>
      <h3>Characters</h3>
      {children}
    </div>
  );
}

export {Window};
