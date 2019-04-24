import { actionTypes } from "../actions/actions";
// import model
import * as Types from "MyTypes";
import { MainModel } from "./model";

const initialState: MainModel = {
  chickenList: [],
  location: '',
};

export const mainReducer = (state: MainModel = initialState, action: Types.RootAction) => {
  switch (action.type) {
    case actionTypes.CHICKEN_DATA: {
      return {
        ...state,
        chickenList: action.payload
      }
    }

    default: {
      return state
    }
  }
}

export default mainReducer;