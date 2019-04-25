import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as Types from "MyTypes";
import { actions } from "../actions/actions";
import { MainModel } from "../reducers/model";

import CardDisplay from "./CardDisplay";
import Filter from "../components/Filter";

// children
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

interface AppProps {
  searchBarString: any;
  radio: any;
  chickenList: [any];
  updateSearchBar: any;
  chooseRadio: any;
  getAllChickenData: () => [any];
}

const mapStateToProps = (store: Types.ReducerState) => {
  return {
    searchBarString: store.main.searchBarString,
    radio: store.main.radio,
    chickenList: store.main.chickenList,
  };
};

//@ts-ignore
const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) =>
  bindActionCreators(actions, dispatch);

const App: React.FunctionComponent<AppProps> = props => {
  return (
    <React.Fragment>
      {/*
      //@ts-ignore */}
      <Header />
      <SearchBar handleChange={props.updateSearchBar} handleRadio={props.chooseRadio} />
      {/*
      //@ts-ignore */}
      <Filter />
      {/*
      //@ts-ignore */}
      <CardDisplay />
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// when you click on one of the filter buttons, we rearrange chickenlist and filter according to a specific metric, then rerender
