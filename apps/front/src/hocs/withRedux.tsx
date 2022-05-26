import { store } from "@front/entities";
import { Provider } from "react-redux";
import * as React from "react";

const withRedux = (component: () => React.ReactNode) => () =>
  <Provider store={store}>{component()}</Provider>;

export default withRedux;
