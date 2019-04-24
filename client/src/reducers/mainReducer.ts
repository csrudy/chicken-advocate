import { actionTypes } from "../actions/actions";
// import model
import * as Types from "MyTypes";
import { MainModel } from "./model";

<<<<<<< HEAD
const initialState: MainModel = {
  chickenList: [],
  location: '',
=======

const initialState: MainModel = {
  searchBarString: 'cell',
  radio: 'zip'
>>>>>>> 66799748638ae312e93631656d668706891cde70
};

export const mainReducer = (state: MainModel = initialState, action: Types.RootAction) => {
  switch (action.type) {
    case actionTypes.CHICKEN_DATA: {
      return {
        ...state,
        chickenList: action.payload
      }
    }
    case actionTypes.UPDATE_SEARCH:{
      return {
        ...state,
        searchBarString: action.payload
      }
    }

    case actionTypes.CHOOSE_RADIO:{
      return {
        ...state,
        radio: action.payload
      }
    }

    default: {
      return state
    }
  }
}

export default mainReducer;