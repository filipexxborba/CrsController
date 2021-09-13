import React from "react";
import check from "../assets/check.png";
import show from "../assets/show.png";
import tool from "../assets/tools.png";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import "./Item.css";
import moment from "moment";
import EditingPopup from "../EditingPopUp/EditingPopup";

const Item = ({
  index,
  nucleo,
  motivo,
  descricao,
  responsavel,
  numeroCrs,
  data,
}) => {
  const currentCrs = React.useRef();
  const currentCircle = React.useRef();
  const { teste } = React.useContext(GlobalContext);
  const [showDesc, setShowDesc] = React.useState(false);
  const [editing, setEditing] = React.useState(false);

  // Mostrar/Esconder descrição
  function handleClick() {
    setShowDesc(!showDesc);
    currentCrs.current.classList.toggle("active");
  }

  // Marcar como resolvido
  function handleDelete(event) {
    event.preventDefault();
    let data = JSON.parse(localStorage.getItem("ListaCRSs"));
    console.log(data, index);
    data.splice(index, 1);
    localStorage.setItem("ListaCRSs", JSON.stringify(data));
    teste(data);
    window.location.reload();
  }

  // Abrir a tela o popup de edição passando o index;
  function handleEdit() {
    setEditing(!editing);
  }

  // Valida o tempo do chamado e mostra nos círculos
  let today = moment(new Date());
  const duration = moment.duration(today.diff(data));
  const days = Math.round(duration.asDays());

  // Condicionais para variar a cor
  React.useEffect(() => {
    if (days >= 0 && days <= 3) {
      currentCircle.current.style.backgroundColor = "#71FF76";
    }
    if (days > 3 && days <= 5) {
      currentCircle.current.style.backgroundColor = "#FFBE71";
    }
    if (days > 5) {
      currentCircle.current.style.backgroundColor = "#FF7171";
    }
  }, [days]);

  return (
    <>
      {!editing ? (
        <div className="card container">
          <div className="card__title" onClick={handleClick}>
            <div className="circle" ref={currentCircle}></div>
            <div className="card__title__text">
              <h2>
                {numeroCrs} - {motivo}.
              </h2>
              <h3>
                {nucleo} - {moment(data).format("DD/MM/YYYY")}
              </h3>
            </div>
            <img
              className="controlButton"
              src={show}
              alt="Show Icon"
              ref={currentCrs}
            ></img>
          </div>
          {showDesc ? (
            <div>
              <p className="descricao">{descricao}</p>
              <p className="descricao">
                Responsável:{" "}
                {responsavel !== " " ? responsavel : "Não informado"}.
              </p>
              <div className="container-button">
                <button className="button" onClick={handleDelete}>
                  <img src={check} alt="Check Icon"></img>Marcar como resolvido
                </button>
                <button className="button" onClick={handleEdit}>
                  <img src={tool} alt="Check Icon"></img>Editar chamado
                </button>
              </div>
            </div>
          ) : null}
        </div>
      ) : <EditingPopup index={index} />}
    </>
  );
};

export default Item;
