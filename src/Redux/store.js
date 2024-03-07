import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import {thunk} from 'redux-thunk'

import { countReducer } from "./Counter/countReducer";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store
