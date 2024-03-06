import { createStore } from "redux";

import { countReducer } from "./Counter/countReducer";

const store = createStore(countReducer)

export default store
