export default function loginReducer(state, action) {
  switch (action.type) {
    case "field":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "login":
      return {
        ...state,
        loading: true,
        formError: null,
      };
    case "logout":
      return {
        ...state,
        loggedIn: false,
        formError: null,
        username: "",
        password: "",
      };
    case "reset":
      return {
        ...action.value,
      };
    case "success":
      return {
        ...action.value,
        loggedIn: true,
        loading: false,
      };
    case "error":
      return {
        ...state,
        formError: action.value,
        loading: false,
        username: "",
        password: "",
      };
    default:
      return state;
  }
}
