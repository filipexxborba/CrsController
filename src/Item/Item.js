import React from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const Item = ({
  index,
  nucleo,
  motivo,
  descricao,
  responsavel,
  numeroCrs,
  data,
}) => {
  const { teste } = React.useContext(GlobalContext);
  const [showDesc, setShowDesc] = React.useState(false);
  function handleClick() {
    setShowDesc(!showDesc);
  }
  function handleDelete(event) {
      event.preventDefault();
      let data = JSON.parse(localStorage.getItem('ListaCRSs'));
      console.log(data, index);
      data.splice(index, 1);
      localStorage.setItem("ListaCRSs", JSON.stringify(data));
      teste(data);
      window.location.reload();
  }
  return (
    <div>
      <h2 onClick={handleClick}>
        {nucleo} | {motivo} | {numeroCrs}
      </h2>
      {showDesc ? (
        <div>
          <h3>
            {descricao} - {responsavel} - {data}
          </h3>
          <button onClick={handleDelete}>Excluir</button>
        </div>
      ) : null}
    </div>
  );
};

export default Item;
