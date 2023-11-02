import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "./helloReducer";
function HelloRedux() {
  //   const [message] = useState("Hello World");
  const { message } = useSelector((state) => state.helloReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hello Redux</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default HelloRedux;
