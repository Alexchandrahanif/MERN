let initialState = {
  Users: [],
  User: {},
};

function UserReducer(state = initialState, actions) {
  switch (actions.type) {
    case "Fetch/GetAllUser":
      return {
        ...state,
        Users: actions.payload,
      };
    case "Fetch/AddUser":
      return {
        ...state,
        Users: actions.payload,
      };
    case "Fetch/GetOneUser":
      return {
        ...state,
        User: actions.payload,
      };

    default:
      return state;
  }
}

export default UserReducer;
