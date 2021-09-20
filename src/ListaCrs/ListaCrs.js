import React from "react";
import DoneItem from "../DoneItem/DoneItem";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import Item from "../Item/Item";

const ListaCrs = () => {
  const { crs, showDone, doneList } = React.useContext(GlobalContext);

  return (
    <>
      {showDone ? (
        <div>
          {doneList ? (
            doneList.map((crs, index) => (
              <DoneItem
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
            <p className="descricao">Não existe chamados resolvidos.</p>
          )}
        </div>
      ) : (
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
      )}
    </>
  );
};

export default ListaCrs;
