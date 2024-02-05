import { dummyData } from "shared/fakeData";

const initialState = {
  dummyData: dummyData,
};

const add_letter = "add_letter";

export const addLetter = (payload) => {
  return { type: add_letter, payload };
};

const FanLetters = (state = initialState, action) => {
  switch (action.type) {
    case add_letter:
      return [...state.dummyData, action.payload];
    default:
      return state;
  }
};

export default FanLetters;
