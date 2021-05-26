import { createStore } from "redux";
import rootReducer from "../reducers";

export default createStore(rootReducer);

// import { compose, createStore } from "redux";
// ​
// import rootReducer from "../reducers";
// ​
// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;
// ​
// const enhancers = composeEnhancers();
// ​
// export default createStore(rootReducer, enhancers);
