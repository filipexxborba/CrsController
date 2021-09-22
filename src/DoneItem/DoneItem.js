import React from "react";
import check from "../assets/check.png";
import add from "../assets/add.png";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import "../Item/Item.css";
import moment from "moment";
import ObservacaoList from "../ObservacaoList/ObservacaoList";
import ObsCadastro from "../ObsCadastro/ObsCadastro";

const DoneItem = ({
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
  const [observacoes, setObservacoes] = React.useState(null);
  const [showCadObs, setShowCadObs] = React.useState(false);

  // Mostrar/Esconder descrição
  function handleClick() {
    setShowDesc(!showDesc);
  }

  async function deleteCrs(id) {
    const response = await fetch(`${apiURL}/v1/deletecrs/${id}`, {
      method: "DELETE",
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  }

  // Marcar como resolvido
  function handleDelete(event) {
    event.preventDefault();
    console.log("funcionando");
    deleteCrs(index);
    window.location.reload();
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
    if (days >= 0) {
      currentCircle.current.style.backgroundColor = "#71FF76";
    }
  }, [days]);

  return (
    <>
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
              Responsável: {responsavel !== " " ? responsavel : "Não informado"}
              .
            </p>
            <h3 onClick={handleObservacao}>Observações:</h3>
            {!observacoes ? null : <ObservacaoList index={index} />}
            {!observacoes ? (
              <div className="container-button">
                <button className="button-excluir" onClick={handleDelete}>
                  <img src={check} alt="Check Icon"></img>Excluir chamado
                </button>
              </div>
            ) : (
              <div>
                {showCadObs ? (
                  <ObsCadastro index={index} />
                ) : (
                  <button className="button" onClick={handleAddObs}>
                    <img src={add} alt="Check Icon"></img>Incluir observação
                  </button>
                )}
              </div>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default DoneItem;
