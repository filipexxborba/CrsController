import React from "react";
import DoneItem from "../DoneItem/DoneItem";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import Item from "../Item/Item";

const ListaCrs = () => {
  const { crs, showDone, doneList } = React.useContext(GlobalContext);

  return (
    <>
      {showDone ? (
        <div className="container">
          {doneList ? (
            doneList.map((crs, index) => (
              <DoneItem
                key={index}
                index={crs._id}
                nucleo={crs.nucleo}
                motivo={crs.titulo}
                descricao={crs.descricao}
                responsavel={crs.responsavel}
                numeroCrs={crs.codigocrs}
                data={crs.data}
              />
            ))
          ) : (
            <p className="descricao">Não existe chamados resolvidos.</p>
          )}
        </div>
      ) : (
        <div className="container">
          {crs ? (
            crs.map((crs, index) => (
              <Item
                key={index}
                index={crs._id}
                nucleo={crs.nucleo}
                motivo={crs.titulo}
                descricao={crs.descricao}
                responsavel={crs.responsavel}
                numeroCrs={crs.codigocrs}
                data={crs.date}
              />
            ))
          ) : (
            <p>Carregando lista de chamados!</p>
          )}
        </div>
      )}
    </>
  );
};

export default ListaCrs;
