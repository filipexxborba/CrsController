import React from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const ObservacaoList = ({ index }) => {
  const { crs, teste } = React.useContext(GlobalContext);
  let localData = JSON.parse(localStorage.getItem("ListaCRSs"));
  let tempObservacoes = localData[index].observacoes;
  if(tempObservacoes === null || tempObservacoes === undefined){
      tempObservacoes = [];
  }
  console.log(tempObservacoes);

  return <div></div>;
};

export default ObservacaoList;
