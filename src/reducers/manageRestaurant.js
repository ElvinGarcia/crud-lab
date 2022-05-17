import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews:[],
}, action) {

  switch (action.type) {

    case "ADD_RESTAURANT":
      const obj = {
        text: action.text,
        id: cuidFn(),
      }
      return { ...state, restaurants: [...state.restaurants, obj] }

    case "DELETE_RESTAURANT":
      const restaurantList = state.restaurants.filter((restaurant) => restaurant.id !== action.id)
      return { ...state, restaurants:restaurantList }

    default:
      return state;
  }

}
