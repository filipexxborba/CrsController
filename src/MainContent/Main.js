import React from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import HeaderMain from "../HeaderMain/HeaderMain";
import Item from "../Item/Item";

const Main = () => {
  const { crs } = React.useContext(GlobalContext);

  return (
    <div>
      <h1>CRS Controller | Santri</h1>
      <HeaderMain />
      {crs ? (
        crs.map((crs, index) => (
          <Item
            key={index}
            index={index}
            nucleo={crs.nucleo}
            motivo={crs.motivo}
            descricao={crs.descricao}
            responsavel={crs.responsavel}
            numeroCrs={crs.numeroCrs}
            data={crs.data}
          />
        ))
      ) : (
        <p>Não existe nenhuma CRS</p>
      )}
    </div>
  );
};

export default Main;
