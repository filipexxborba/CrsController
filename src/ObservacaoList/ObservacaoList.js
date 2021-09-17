import React from "react";
import './ObservacaoList.css';
import { GlobalContext } from "../GlobalContext/GlobalContext";

const ObservacaoList = ({ index }) => {
  const { crs, teste } = React.useContext(GlobalContext);
  let localData = JSON.parse(localStorage.getItem("ListaCRSs"));
  let tempObservacoes = localData[index].observacoes;
  if (tempObservacoes === null || tempObservacoes === undefined) {
    tempObservacoes = ['Não existe observação'];
  }
  return (
    <>
      {tempObservacoes.map((item, index) => (
        <li className="liObservacao" key={index}>{item}</li>
      ))}
    </>
  );
};

export default ObservacaoList;
