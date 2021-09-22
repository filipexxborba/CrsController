import React from "react";
import check from "../assets/check.png";
import tool from "../assets/tools.png";
import add from "../assets/add.png";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import "./Item.css";
import moment from "moment";
import EditingPopup from "../EditingPopUp/EditingPopup";
import ObservacaoList from "../ObservacaoList/ObservacaoList";
import ObsCadastro from "../ObsCadastro/ObsCadastro";

const Item = ({
  index,
  nucleo,
  motivo,
  descricao,
  responsavel,
  numeroCrs,
  data,
}) => {
  const currentCircle = React.useRef();
  const { apiURL } = React.useContext(GlobalContext);
  const [showDesc, setShowDesc] = React.useState(false);
  const [editing, setEditing] = React.useState(false);
  const [observacoes, setObservacoes] = React.useState(null);
  const [showCadObs, setShowCadObs] = React.useState(false);

  async function resolverCrs(id) {
    fetch(`${apiURL}/v1/updatecrs/${id}`, {
      method: "PUT",
    });
    window.location.reload();
  }

  // Mostrar/Esconder descrição
  function handleClick() {
    setShowDesc(!showDesc);
  }

  // Marcar como resolvido
  function handleDelete(event) {
    event.preventDefault();
    resolverCrs(index);
    // window.location.reload();
  }

  // Abrir a tela o popup de edição passando o index;
  function handleEdit() {
    setEditing(!editing);
  }

  // Abrir observações
  function handleObservacao() {
    setObservacoes(!observacoes);
  }

  function handleAddObs() {
    setShowCadObs(!showCadObs);
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
          </div>
          {showDesc ? (
            <div>
              <p className="descricao">{descricao}</p>
              <p className="descricao">
                Responsável:{" "}
                {responsavel !== " " ? responsavel : "Não informado"}.
              </p>
              <h3 className="observacao-h3" onClick={handleObservacao}>{!observacoes ? "Observações" : "Esconder observações"}</h3>
              {!observacoes ? null : <ObservacaoList index={index} />}
              {!observacoes ? (
                <div className="container-button">
                  <button className="button" onClick={handleDelete}>
                    <img src={check} alt="Check Icon"></img>Marcar como
                    resolvido
                  </button>
                  <button className="button" onClick={handleEdit}>
                    <img src={tool} alt="Check Icon"></img>Editar chamado
                  </button>
                </div>
              ) : (
                <div>
                  {showCadObs ? (
                    <ObsCadastro index={index} />
                  ) : (
                    <button className="button button-incluir" onClick={handleAddObs}>
                      <img src={add} alt="Check Icon"></img>Incluir observação
                    </button>
                  )}
                </div>
              )}
            </div>
          ) : null}
        </div>
      ) : (
        <EditingPopup index={index} />
      )}
    </>
  );
};

export default Item;
