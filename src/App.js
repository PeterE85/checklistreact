import React from "react";
import CheckList from "./Components/CheckList";
import CheckListForm from "./Components/CheckListForm";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <CheckList />
        </div>

        <div className="col-4">
          <CheckListForm />
        </div>
      </div>
    </div>
  )
};

export default App;
