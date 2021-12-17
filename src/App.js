import React from "react";
import AddToppings from "./_tests_/components/AddToppings";
import BuildPizza from "./_tests_/components/BuildPizza";
import Header from "./_tests_/components/Header";
import Headline from "./_tests_/components/Headline";
import SauceChoice from "./_tests_/components/SauceChoice";
import GlutenFreeChoice from "./_tests_/components/GlutenFreeChoice";
import SpecialInstruction from "./_tests_/components/SpecialInstruction";
import QuantityButton from "./_tests_/components/QuantityButton";


const App = () => {
  return (
    <>
      <Header />
      <Headline />
      <BuildPizza />
      <SauceChoice />
      <AddToppings />
      <GlutenFreeChoice />
      <SpecialInstruction />
      <QuantityButton />
    </>
  );
};
export default App;
