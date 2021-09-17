import React from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import HeaderMain from "../HeaderMain/HeaderMain";
import ListaCrs from "../ListaCrs/ListaCrs";
import './Main.css';

const Main = () => {
  const { showCad } = React.useContext(GlobalContext);

  return (
    <div className="container">
      <h1>Controle de CRS - PHC & Santri</h1>
      <HeaderMain />
      {!showCad ? <ListaCrs className="crsList" /> : null}
      <div className='espaco'></div>
    </div>
  );
};

export default Main;
