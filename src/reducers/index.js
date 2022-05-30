// src/reducers/index.js

/* Action types */
import { actionTypes } from '../actions';

export const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
};

export default (state = exampleInitialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};