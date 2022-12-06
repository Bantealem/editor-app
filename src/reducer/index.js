const initialState = [];

export const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE":
      let updated = state.map((value) => {
        if (value.id === action.payload.id) {
          value.content = action.payload.content;
        }
        return value;
      });
      console.log(updated);
      return updated;
    case "ADD":
      return [
        ...state,
        {
          id: action.payload.id,
          type: action.payload.type,
          content: action.payload.content,
        },
      ];
    case "DELETE":
      const newState = state.filter(
        (content) => content.id !== action.payload.id
      );
      return newState;
    default:
      return state;
  }
};
