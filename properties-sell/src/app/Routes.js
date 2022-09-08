/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout";
import BasePage from "./BasePage";

export function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Layout>
            <BasePage />
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
}
