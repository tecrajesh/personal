const { createStore } = require("redux");

const initialState = {
  age: 23
}
const myReducer = (state = initialState, action) => {

  console.log(state, action);

  return { state };
}
const store = createStore(myReducer);

store.dispatch({ type: "test" });

console.log(store.getState());

