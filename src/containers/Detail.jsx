import React from "react";
import { useParams } from "react-router-dom";

const Detail = ({ t }) => {
  const { _id } = useParams();

  const element = t.find(tarea => tarea._id === Number(_id));

  return (
    <div>
      <h1>{element?.name}</h1>
      <h2>Es palindrome</h2>
    </div>
  );
};

export default Detail;
