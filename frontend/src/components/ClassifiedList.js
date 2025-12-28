import React from 'react';
import ClassifiedItem from './ClassifiedItem';

import './ClassifiedList.css';

export default function ClassifiedList({ classifieds }) {
  if(classifieds.length === 0) {
    return (
      <p>Não há nenhum Classificado cadastrado!</p>
    )
  }else {
    classifieds = classifieds.slice(0).reverse(); // inverts positions in the array (to make the most recent ones first)

    return (
      <div className="list">
        {classifieds.map((classified) => (
          <ClassifiedItem
            key={`${classified.id}`}
            classified={classified}
          />
        ))}
        
      </div>
    );
  }
}
