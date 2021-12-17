import React from "react";
import AddToppings from "./_tests_/components/AddToppings";
import BuildPizza from "./_tests_/components/BuildPizza";
import Header from "./_tests_/components/Header";
import Headline from "./_tests_/components/Headline";
import SauceChoice from "./_tests_/components/SauceChoice";


const App = () => {
  return (
    <>
      <Header />
      <Headline />
      <BuildPizza />
      <SauceChoice />
      <AddToppings />
    </>
  );
};
export default App;
