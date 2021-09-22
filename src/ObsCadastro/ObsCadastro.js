import React from "react";
import "./ObsCadastro.css";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const ObsCadastro = ({ index }) => {
  const { apiURL } = React.useContext(GlobalContext);
  const [form, setForm] = React.useState({
    descricao: "",
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  async function updateObs(id) {
    const response = await fetch(
      `${apiURL}/v1/updateobs/${index}&${form.descricao}`,
      {
        method: "PUT",
      }
    );
  }

  function handleClick(event) {
    event.preventDefault();
    updateObs(index);
    window.location.reload();
  }
  return (
    <form className="container inForm">
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
