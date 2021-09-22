import React from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import moment from "moment";

const EditingPopup = ({ index, date }) => {
  const { apiURL } = React.useContext(GlobalContext);
  const dateInput = React.useRef();
  const [form, setForm] = React.useState({
    motivo: "",
    descricao: "",
    responsavel: "",
    numeroCrs: "",
  });
  const [select, setSelect] = React.useState("Compras");

  // Pegar as informações
  async function getCurrent(id) {
    const response = await fetch(`${apiURL}/v1/getcrs/${id}`, {
      method: "GET",
    });
    const jsonResponse = await response.json();
    setSelect(jsonResponse.nucleo);
    setForm({
      motivo: jsonResponse.titulo,
      descricao: jsonResponse.descricao,
      responsavel: jsonResponse.responsavel,
      numeroCrs: jsonResponse.codigocrs,
    });
    dateInput.current.value = moment(jsonResponse.date).format("yyyy-MM-DD");
  }

  // Dar update nas informações
  async function updateCurrent(id) {
    const tempDate = dateInput.current.value;
    fetch(
      `${apiURL}/v1/updateinfocrs/${index}&${form.motivo}&${form.descricao}&${form.responsavel}&${form.numeroCrs}&${select}&${tempDate}`,
      {
        method: "PUT",
      }
    );
    window.location.reload();
  }

  React.useEffect(() => {
    getCurrent(index);
  }, []);

  // Alteração dos forms
  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  // Salvar em cima os dados por cima
  function handleClick(event) {
    event.preventDefault();
    if (
      form.motivo !== "" &&
      form.descricao !== "" &&
      form.responsavel !== "" &&
      form.numeroCrs !== ""
    ) {
      updateCurrent(index);
      // window.location.reload();
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
      <label htmlFor="data">Data:</label>
      <input id="data" type="date" ref={dateInput} required></input>

      <button className="buttonSave" onClick={handleClick}>
        Salvar
      </button>
    </form>
  );
};

export default EditingPopup;
