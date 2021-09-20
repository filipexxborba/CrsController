import React from "react";
import Popup from "./Popup/Popup";
import "./HeaderMain.css";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const HeaderMain = () => {
  const { showCad, setShowCad, setShowDone, showDone } = React.useContext(GlobalContext);
  const [mostrarPopup, setMostrarPopup] = React.useState(false);
  function handleClick(event) {
    event.preventDefault();
    setMostrarPopup(!mostrarPopup);
    setShowCad(!showCad);
    setShowDone(!showDone);

  }
  return (
    <div className="container">
      <button className="buttonAdd" onClick={handleClick}>
        {!mostrarPopup ? <p>Adicionar uma nova CRS</p> : <p>Fechar</p>}
      </button>
      {mostrarPopup ? <Popup /> : null}
    </div>
  );
};

export default HeaderMain;
