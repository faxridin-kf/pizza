// const initialState = {
//   items: [],
//   isLoaded: false
// }
// const pizzas = (state = initialState, action) => {
//   if(action.type === 'SER_PIZZAS'){
//     return{
//       ...state,
//       items: action.payload,
//       // isLoaded: true
//     }
//   }
//   return state;
// }

// export default pizzas;
const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default pizzas;
