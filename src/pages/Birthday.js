import React from "react";
import { useParams } from "react-router-dom";

function Birthday() {
  const { id } = useParams();

  return <div>Birthday {id}</div>;
}

export default Birthday;
