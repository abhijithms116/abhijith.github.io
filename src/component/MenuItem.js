import React from "react";

function MenuItem({ imag, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${imag})` }}> </div>
      <h1> {name} </h1>
      <b><p> Rupees:{price} </p></b>
    </div>
  );
}

export default MenuItem;