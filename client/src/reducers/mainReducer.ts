import { actionTypes } from "../actions/actions";
// import model
import * as Types from "MyTypes";
import { MainModel } from "./model";


const initialState: MainModel = {
  searchBarString: 'cell'
};

export const mainReducer = (state: MainModel = initialState, action: Types.RootAction) => {
  switch (action.type) {
    case actionTypes.TO_DO: {
      return {
        ...state,
      }
    }
    case actionTypes.UPDATE_SEARCH:{
      return {
        searchBarString: action.payload,
        ...state
      }
    }

    default: {
      return state
    }
  }
}

export default mainReducer;