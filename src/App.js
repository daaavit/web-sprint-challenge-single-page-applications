import React from "react";
import AddToppings from "./_tests_/components/AddToppings";
import BuildPizza from "./_tests_/components/BuildPizza";
import Header from "./_tests_/components/Header";
import Headline from "./_tests_/components/Headline";


const App = () => {
  return (
    <>
      <Header />
      <Headline />
      <BuildPizza />
      <AddToppings />
    </>
  );
};
export default App;
