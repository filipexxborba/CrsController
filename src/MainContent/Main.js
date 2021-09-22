import React from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import HeaderMain from "../HeaderMain/HeaderMain";
import ListaCrs from "../ListaCrs/ListaCrs";
import "./Main.css";

const Main = () => {
  const { showCad, showDone, setShowDone } = React.useContext(GlobalContext);
  function handleClick(event) {
    event.preventDefault();
    setShowDone(!showDone);
  }

  return (
    <div className="container">
      <HeaderMain />
      {!showCad ? <ListaCrs className="crsList" /> : null}
      <div className="container">
        <button className="buttonAdd" onClick={handleClick}>
          {!showDone ? (
            <p>Mostrar lista de resolvidos</p>
          ) : (
            <p>Mostrar lista de CRSs</p>
          )}
        </button>
      </div>
    </div>
  );
};

export default Main;
