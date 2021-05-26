import {
  ADD_FAVOURITE_BEER,
  REMOVE_FAVOURITE_BEER,
} from "../constants/actions";

export const addFavouriteBeer = (favouriteBeer) => {
  return { type: ADD_FAVOURITE_BEER, payload: favouriteBeer };
};

export const removeFavouriteBeer = (favouriteBeerId) => {
  return { type: REMOVE_FAVOURITE_BEER, payload: favouriteBeerId };
};
