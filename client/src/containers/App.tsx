import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as Types from "MyTypes";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import { actions } from "../actions/actions";
import { MainModel } from "../reducers/model";
import Header from "../components/Header";
import CardDisplay from "./CardDisplay";

interface AppProps {
  name?: string;
  updateSearchBar: any;
  searchBarString: any;
  radio: any;
  chooseRadio: any;
  chickenList: [any];
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
      <Filter />
      {/*
      //@ts-ignore */}
      <CardDisplay />
    </React.Fragment>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
