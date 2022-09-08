import React from "react";
import { Switch, Route } from "react-router-dom";
import { ItemListContainer, ItemDetailContainer } from "./pages";

export default function BasePage() {
  return (
    <Switch>
      <Route exact path="/" component={ItemListContainer} />
      <Route exact path="/detail/:id/:indexImg" component={ItemDetailContainer} />
      {/* <Route exact path="/category/:id" component={ItemListContainer} />
      <Route  path="*" component={Error} />  */}
    </Switch>
  );
};
