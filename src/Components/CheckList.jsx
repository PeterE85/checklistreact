import React, {useState} from "react";
import CardList from "./CardList";

const initialList = [
  {
    Id: 1,
    title: 'List # 1',
    description: 'Desc List #1',
    completed: false

  },
  {
    Id: 2,
    title: 'List # 2',
    description: 'Desc List #2',
    completed: true
  }
]

const CheckList = () => {

  const [listas, setListas] = useState(initialList);
  

  return(
    <div>
      <h1 className="text-end">Soy CheckList</h1>
      {
        listas.map( elemento => <CardList lista={elemento} key={elemento.Id} />)
      }    
    </div>
  );
}

export default CheckList;