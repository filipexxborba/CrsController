import React from "react";
import check from '../assets/check.png'
import show from '../assets/show.png'
import circle from '../assets/circle.png'
import { GlobalContext } from "../GlobalContext/GlobalContext";
import './Item.css';
import moment from 'moment';



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

  // Mostrar/Esconder descrição
  function handleClick() {
    setShowDesc(!showDesc);
    currentCrs.current.classList.toggle('active');
  }

  // Marcar como resolvido
  function handleDelete(event) {
      event.preventDefault();
      let data = JSON.parse(localStorage.getItem('ListaCRSs'));
      console.log(data, index);
      data.splice(index, 1);
      localStorage.setItem("ListaCRSs", JSON.stringify(data));
      teste(data);
      window.location.reload();
  }

  // Valida o tempo do chamado e mostra nos círculos
  moment().format('DD MM YYYY');
  let today = moment(new Date());
  let dataCrs = moment(data);
  const duration = moment.duration(today.diff(dataCrs));
  const days = duration.asDays();
  console.log(days);
  

  return (
    <div className="card">
      <div className="card__title" onClick={handleClick}>
        <div className="circle" ref={currentCircle}></div>
        <div className="card__title__text">
          <h2>{numeroCrs} - {motivo}.</h2>
          <h3>{nucleo} - {data}</h3>
        </div>
        <img className="controlButton" src={show} alt="Show Icon" ref={currentCrs}></img>
        
      </div>
      {showDesc ? (
        <div>
          <p className="descricao">
            {descricao}
          </p>
          <p className="descricao">
            Responsável: {responsavel !== ' ' ? responsavel : "Não informado"}.
          </p>
          <button className="button" onClick={handleDelete}><img src={check} alt="Check Icon"></img>Marcar como resolvido</button>
        </div>
      ) : null}
    </div>
  );
};

export default Item;
