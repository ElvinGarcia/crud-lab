import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],}, action) {

  switch (action.type) {
    case "ADD_RESTAURNT":
      const obj = {
        text: action.text,
        id: cuidFn(),
      }
      return {
        ...state,restaurants:[...state.restaurants,obj]
      }
    default:
      return state;
  }

}
