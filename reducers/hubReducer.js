import types from "../constants/actionTypes";

const initialState = {
   dataSource: []
};

export default (state = initialState, action) => {
   switch (action.type) {
      case types.APP_START_HUBS_GETALL: {
         return {
            dataSource: ["dfjnjn", "dksjf"]
         };
      }
      default: {
         return state;
      }
   }
};

//   const initialState = {
//     hubs: [],
//   };
//   ​
//  export default function hubReducer(state = initialState, action) {
//     switch (action.type) {
//       case APP_START_HUBS_GETALL:
//         return Object.assign({}, state, {
//           hubs: action.filter
//         })
//     //   case ADD_TODO:
//     //     return Object.assign({}, state, {
//     //       todos: [
//     //         ...state.todos,
//     //         {
//     //           text: action.text,
//     //           completed: false
//     //         }
//     //       ]
//     //     })
//       default:
//         return state
//     }
//   }
