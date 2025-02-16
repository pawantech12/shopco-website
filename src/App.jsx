import React from "react";
import Navbar from "./components/Navbar";

const App = ({ element }) => {
  return (
    <>
      <Navbar />
      <main>{element}</main>
    </>
  );
};

export default App;
