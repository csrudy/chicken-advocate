import { actionTypes } from "../actions/actions";
import * as Types from "MyTypes";
import { MainModel } from "./model";

const initialState: MainModel = {
  chickenList: [],
  searchBarString: "cell",
  radio: "zip",
  filterBy: null,
};

export const mainReducer = (state: MainModel = initialState, action: Types.RootAction) => {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCH: {
      return {
        ...state,
        searchBarString: action.payload
      };
    }

    case actionTypes.CHOOSE_RADIO: {
      return {
        ...state,
        radio: action.payload
      };
    }

    case actionTypes.CHOOSE_FILTER: {
      console.log(action);
      return {
        ...state,
        filterBy: action.payload.input
      }
    }

    case actionTypes.CHICKEN_DATA: {
      return {
        ...state,
        chickenList: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export default mainReducer;
