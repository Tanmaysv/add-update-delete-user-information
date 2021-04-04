import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { CustomersState } from "../customers/redux/state";
import { RootActions } from "./actions";
import { ApplicationState, initalApplicationState } from "./applicationState";
import rootEpic from "./epic";
import rootReducer from "./reducer";

const epicMiddleware = createEpicMiddleware<
    RootActions,
    RootActions,
    CustomersState
>();

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState?: ApplicationState) => {
    const middlewares = [epicMiddleware];

    const enhancer = composeEnhancers(applyMiddleware(...middlewares));

    return createStore(rootReducer, initialState, enhancer);
};

const store = configureStore(initalApplicationState);

epicMiddleware.run(rootEpic);

export default store;
