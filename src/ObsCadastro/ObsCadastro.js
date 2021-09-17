import React from "react";
import "./ObsCadastro.css";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const ObsCadastro = ({ index }) => {
  const { crs, teste } = React.useContext(GlobalContext);
  const [form, setForm] = React.useState({
    descricao: "",
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleClick(event) {
    event.preventDefault();
    let tempData = JSON.parse(localStorage.getItem("ListaCRSs"));
    let currentCRS = tempData[index];
    let currentCRSObs = currentCRS.observacoes;
    if (form.descricao !== "") {
      if (currentCRSObs === undefined) {
        tempData[index].observacoes = [];
      }
      tempData[index].observacoes.push(form.descricao);
      localStorage.setItem("ListaCRSs", JSON.stringify(tempData));
      teste(tempData);
      window.location.reload();
    }
  }
  return (
    <form className="container" className="inForm">
      <label htmlFor="descricao">Descrição:</label>
      <input
        type="text"
        id="descricao"
        value={form.descricao}
        onChange={handleChange}
      ></input>
      <button className="buttonSave" onClick={handleClick}>
        Salvar
      </button>
    </form>
  );
};

export default ObsCadastro;
