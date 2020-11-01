const reducer = (state = {num: 0, text: ''}, { type, payload }) => {
  switch(type) {
    case "INCREMENT":
      return {
        ...state,
        num: state.num + payload
      };
    case "DECREMENT":
      return {
        ...state,
        num: state.num - payload
      };
    case "CHANGE_TEXT":
      return {
        ...state,
        text: payload
      }
    default:
      return state;
  }
}

export default reducer