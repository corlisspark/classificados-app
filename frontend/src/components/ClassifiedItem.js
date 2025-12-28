import React from 'react';
//import { Link } from 'react-router-dom';
//import { EditIcon } from './icons';
import "./ClassifiedItem.css";

function ClassifiedItem({ classified, index }) {
  const { Id, title, description, date } = classified;

  const year = date.substr(0, 4)
  const month = parseInt(date.substr(5, 2))
  const day = date.substr(8, 2)

  const arrMonths = new Array ('janeiro', 'fevereiro', 'março', 'abril', 'Maio', 'junho', 'agosto', 'outubro', 'novembro', 'dezembro');
  const dateAux = `${day} de ${arrMonths[month-1]} de ${year}`;

  //const linkFormEdit = `form/${Id}`;

  return (
    <>
      <div className="div-grey card item">
      {/*<Link to={linkFormEdit}>
        <EditIcon color="blue" />
      </Link>*/}
      
        <h3>{title}</h3>
        <label>{dateAux}</label>
        <p>{description}</p>
      </div>
    </>
  );
}

export default ClassifiedItem;
