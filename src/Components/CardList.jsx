import React from 'react';

const CardList = (props) => {
  return (
    <div className="card mt-2">    
      <div className="card-body">
        <h3 className="card-title text-end">{props.lista.title} 
          <button className="btn btn-sm btn-outline-success ms-2">Terminar</button>
        </h3>
        <p className="card-text text-end">{props.lista.description}</p>
        <hr />

        <div className="d-flex justify-content-end">
          <button className="btn btn-sm btn-outline-primary me-2">Editar</button>
          <button className="btn btn-sm btn-outline-danger">Eliminar</button>
        </div>
      </div>      
    </div>
  );
}

export default CardList;