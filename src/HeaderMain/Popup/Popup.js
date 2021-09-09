import React from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import './Form.css'

const Popup = () => {
  const { crs, teste } = React.useContext(GlobalContext);
  const [disabled, setDisabled] = React.useState(true);
  const [form, setForm] = React.useState({
    motivo: "",
    descricao: "",
    responsavel: "",
    numeroCrs: "",
  });
  const [select, setSelect] = React.useState("Compras");

  function handleChange({ target }) {
    if (
      form.motivo !== "" &&
      form.descricao !== "" &&
      form.responsavel !== "" &&
      form.numeroCrs !== ""
    ) {
      setDisabled(false);
    }
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }
  function handleClick(event) {
    event.preventDefault();
    if (
      form.motivo !== "" &&
      form.descricao !== "" &&
      form.responsavel !== "" &&
      form.numeroCrs !== ""
    ) {
      let data = crs;
      if (!crs) {
        data = [];
      }
      let today = new Date();
      let tempData = {
        nucleo: select,
        motivo: form.motivo,
        descricao: form.descricao,
        responsavel: form.responsavel,
        numeroCrs: form.numeroCrs,
        data: today,
      };
      data.push(tempData);

      localStorage.setItem("ListaCRSs", JSON.stringify(data));
      teste(data);
      form.descricao = "";
      form.motivo = "";
      form.numeroCrs = "";
      form.responsavel = "";
      setSelect("Compras");
      setDisabled(true);
      window.location.reload();
    }
  }
  return (
    <form className="container">
      <label htmlFor="nucleo:">Núcleo:</label>
      <select
        id="nucleo"
        value={select}
        onChange={({ target }) => setSelect(target.value)}
      >
        <option value="Compras">Compras</option>
        <option value="Contábil">Contábil</option>
        <option value="Financeiro">Financeiro</option>
        <option value="Fiscal">Fiscal</option>
        <option value="Técnico">Técnico</option>
        <option value="Vendas e Logística">Vendas e Logística</option>
        <option value="Pós Implantação">Pós Implantação</option>
      </select>

      <label htmlFor="motivo" required>
        Motivo:
      </label>
      <input
        type="text"
        id="motivo"
        value={form.motivo}
        onChange={handleChange}
      ></input>

      <label htmlFor="descricao" required>
        Descrição:
      </label>
      <input
        type="text"
        id="descricao"
        value={form.descricao}
        onChange={handleChange}
      ></input>

      <label htmlFor="responsavel" required>
        Responsável:
      </label>
      <input
        type="text"
        id="responsavel"
        value={form.responsavel}
        onChange={handleChange}
      ></input>

      <label htmlFor="numeroCrs" required>
        Número da CRS:
      </label>
      <input
        type="number"
        id="numeroCrs"
        value={form.numeroCrs}
        onChange={handleChange}
      ></input>

      <button className="buttonSave" disabled={disabled} onClick={handleClick}>
        Salvar
      </button>
    </form>
  );
};

export default Popup;
