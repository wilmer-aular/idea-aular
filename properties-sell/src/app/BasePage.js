import React from "react";
import { Switch, Route } from "react-router-dom";
import { ItemListContainer, ItemDetailContainer } from "./pages";

export default function BasePage() {
  return (
    <Switch>
      <Route path="/detail/:id/:indexImg" component={ItemDetailContainer} />
      <Route path="/" component={ItemListContainer} />

    </Switch>
  );
};
