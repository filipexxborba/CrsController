import React from "react";
import Popup from "./Popup/Popup";

const HeaderMain = () => {
  const [mostrarPopup, setMostrarPopup] = React.useState(false);
  function handleClick(event) {
    event.preventDefault();
    setMostrarPopup(!mostrarPopup);
  }
  return (
    <div>
      <button onClick={handleClick}>
        Adicionar uma nova CRS
      </button>
      {mostrarPopup ? <Popup /> : null}
    </div>
  );
};

export default HeaderMain;
