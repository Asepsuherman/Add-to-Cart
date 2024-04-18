// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<main />} />
      </Routes>
    </>
  );
};

export default App;
