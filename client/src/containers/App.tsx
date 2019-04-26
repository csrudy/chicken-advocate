import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as Types from "MyTypes";
import { actions } from "../actions/actions";

// containers to render
import CardDisplay from "./CardDisplay";
import Filter from "./Filter";

// children components 
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

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) =>
//@ts-ignore
  bindActionCreators(actions, dispatch);

const App: React.FunctionComponent<AppProps> = props => {
  return (
    <React.Fragment>
      <Header />
      <SearchBar handleChange={props.updateSearchBar} handleRadio={props.chooseRadio} />
      <Filter />
      <CardDisplay />
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
