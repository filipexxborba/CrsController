import React from "react";
import './ObsCadastro.css';

const ObsCadastro = ({ index }) => {
  const [form, setForm] = React.useState({
    descricao: "",
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleClick(event) {
    event.preventDefault();
  }
  return (
    <form className="container" className="inForm">
      <label htmlFor="descricao">
        Descrição:
      </label>
      <input
        type="text"
        id="motivo"
        value={form.motivo}
        onChange={handleChange}
      ></input>
      <label htmlFor="imagem">
        Imagem:
      </label>
      <input type="file" id="imagem" />
      <button className="buttonSave" onClick={handleClick}>
        Salvar
      </button>
    </form>
  );
};

export default ObsCadastro;
