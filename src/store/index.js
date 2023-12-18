import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
// import Transition_family from "./reducers/Transition/transition_family/index";
// import Red_Cost_centre from "./reducers/HrOperations/Cost_Centre/index";

const reducers = combineReducers({
    // Transition_family,
    // Red_Cost_centre,
  });
  
  const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
  
  const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(ReduxThunk)));
  
  export default store;