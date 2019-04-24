import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { actions } from '../actions/actions';
import { MainModel } from '../reducers/model'
import * as Types from "MyTypes";
import CardBox from './CardBox';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';



// import model, styles, and children
import Header from '../components/Header'

interface AppProps {
  name?: string,
  updateSearchBar: any,
  searchBarString: any,
  radio: any,
  chooseRadio: any
}

const mapStateToProps = (store: Types.ReducerState) => {
  return {
    searchBarString: store.main.searchBarString,
    radio: store.main.radio
  }
}


//@ts-ignore
const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => bindActionCreators(actions, dispatch);

const App: React.FunctionComponent<AppProps> = (props) => {
  return (
    <React.Fragment>
      <Header />
      <CardBox />
      <SearchBar handleChange={props.updateSearchBar} handleRadio={props.chooseRadio} />
      <Filter />
      <h1>Hello</h1>
    </React.Fragment>
  )
}



export default connect(mapStateToProps, mapDispatchToProps)(App);