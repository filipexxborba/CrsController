import React from "react";
import Popup from "./Popup/Popup";
import './HeaderMain.css';

const HeaderMain = () => {
  const [mostrarPopup, setMostrarPopup] = React.useState(false);
  function handleClick(event) {
    event.preventDefault();
    setMostrarPopup(!mostrarPopup);
  }
  return (
    <div>
      <button className="buttonAdd" onClick={handleClick}>
        {!mostrarPopup ? <p>Adicionar uma nova CRS</p> : <p>Fechar</p>}
      </button>
      {mostrarPopup ? <Popup /> : null}
    </div>
  );
};

export default HeaderMain;
