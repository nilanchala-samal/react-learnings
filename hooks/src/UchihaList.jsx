import React, { useState } from "react";

function UchihaList() {
  const [uchihas, setUchihas] = useState(["Madara", "Sasuke"]);

  function handleAddUchiha() {
    const newUchiha = document.getElementById("newUchiha").value;
    document.getElementById("newUchiha").value = "";

    setUchihas([...uchihas, newUchiha]);
  }

  function handleRemoveUchiha(){
    const removeUchiha = document.getElementById("removeUchiha").value;
    document.getElementById("removeUchiha").value = "";

    setUchihas(uchihas.filter((_, i) => i != removeUchiha))
  }

  return (
    <div>
      <h1>Uchiha List</h1>
      <ol>
        {uchihas.map((uchiha, index) => (
          <li key={index}>{uchiha}</li>
        ))}
        
      </ol>
      <input type="text" placeholder="Enter the Uchiha name" id="newUchiha" />
      <button onClick={handleAddUchiha}>Add Uchiha</button><br /><br />
      <input type="number" placeholder="Enter the id of Uchiha name" id="removeUchiha"/>
      <button onClick={handleRemoveUchiha}>Remove Uchiha</button>
    </div>
  );
}

export default UchihaList;
