import React from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const EditingPopup = ({ index, date }) => {
  const dateInput = React.useRef();
  const { teste } = React.useContext(GlobalContext);
  const [form, setForm] = React.useState({
    motivo: "",
    descricao: "",
    responsavel: "",
    numeroCrs: "",
  });
  const [select, setSelect] = React.useState("Compras");
  let data = JSON.parse(localStorage.getItem("ListaCRSs"));

  React.useEffect(() => {
    setSelect(data[index].nucleo);
    form.motivo = data[index].motivo;
    form.descricao = data[index].descricao;
    form.responsavel = data[index].responsavel;
    form.numeroCrs = data[index].numeroCrs;
  }, [index, data, form]);

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
      data[index].nucleo = select;
      data[index].motivo = form.motivo;
      data[index].descricao = form.descricao;
      data[index].responsavel = form.responsavel;
      data[index].numeroCrs = form.numeroCrs;
      console.log(dateInput.current.value);
      console.log(data[index].data);
      if(dateInput.current.value !== ''){
        data[index].data = dateInput.current.value;
      }
      console.log(data);
      localStorage.setItem("ListaCRSs", JSON.stringify(data));
      teste(data);
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
      <label htmlFor="data">Data:</label>
      <input id="data" type="date" ref={dateInput} required></input>

      <button className="buttonSave" onClick={handleClick}>
        Salvar
      </button>
    </form>
  );
};

export default EditingPopup;
