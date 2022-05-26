import withRouter from "./withRouter";
import withRedux from "./withRedux";
import { compose } from "@reduxjs/toolkit";

export const withHocs = compose<() => JSX.Element>(withRouter, withRedux);
