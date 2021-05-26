import {
  ADD_FAVOURITE_BEER,
  REMOVE_FAVOURITE_BEER,
} from "../constants/actions";

const initialState = {
  favouriteBeers: [],
};

const favouriteBeerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE_BEER:
      return {
        ...state,
        favouriteBeers: [...state.favouriteBeers, action.payload],
      };
    case REMOVE_FAVOURITE_BEER:
      return {
        ...state,
        favouriteBeers: state.favouriteBeers.filter(
          (beer) => beer.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default favouriteBeerReducer;
