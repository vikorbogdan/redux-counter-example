const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    default:
      return state; // return the state unchanged
  }
};
export default loggedReducer;
