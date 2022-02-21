import React, { Suspense, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";

import { useEagerConnect, useInactiveListener } from "hooks/useEagerConnect";
import { useAppSelector, useAppDispatch } from "hooks";
import { selectActivatingConnector, setActivatingConnector } from "containers/appSlice";
import history from "./routerHistory";
import Layout from "layout/Layout";
import { preLink } from "appConfig";
const Homepage = React.lazy(() => import("containers/Homepage"));
const MintPage = React.lazy(() => import("containers/Mintpage"));
const KriyanSoully = React.lazy(() => import("containers/KriyanSoully"));
const App = (): JSX.Element => {
  const { connector } = useWeb3React<Web3Provider>();
  const dispatch = useAppDispatch();
  const activatingConnector = useAppSelector(selectActivatingConnector);

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      dispatch(setActivatingConnector(undefined));
    }
  }, [activatingConnector, connector]);

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <Router history={history}>
      <Layout>
        <Suspense fallback="">
          <Switch>
            <Route exact path={preLink + "/"}>
              <Homepage />
            </Route>
            <Route exact path={preLink + "/get"}>
              <MintPage />
            </Route>
            <Route exact path={preLink + "/Kriyan-Soully"}>
              <KriyanSoully />
            </Route>
            <Redirect to={preLink + "/"} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
