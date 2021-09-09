import React from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import Item from "../Item/Item";

const ListaCrs = () => {
    const { crs } = React.useContext(GlobalContext);
  return (
    <div>
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

export default ListaCrs;
