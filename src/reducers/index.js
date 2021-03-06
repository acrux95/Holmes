const initialState = {
  'user': {},
  'myList': [],
  'list': [
    {
      'id': 2,
      'slug': 'metalslug',
      'year': 2020,
    },
  ],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'COLOMBIA':
      return {
        country: 'colombia',
      };
    case 'MEXICO':
      return {
        country: 'mexico',
      };
    // case 'SET_FAVORITE':
    //   return {
    //     ...state,
    //     myList: state.myList.some((items) => items.id === action.payload.id) ?
    //       [...state.myList] :
    //       [...state.myList, action.payload],

    //   };
    // case 'DELETE_FAVORITE':
    //   return {
    //     ...state,
    //     myList: state.myList.filter((items) => items.id !== action.payload),
    //   };
    // case 'LOGIN_REQUEST':
    //   return {
    //     ...state,
    //     user: action.payload,
    //   };
    // case 'LOGOUT_REQUEST':
    //   return {
    //     ...state,
    //     user: action.payload,
    //   };
    // case 'REGISTER_REQUEST':
    //   return {
    //     ...state,
    //     user: action.payload,
    //   };

    default:
      return state;
  }
};

export default reducer;
