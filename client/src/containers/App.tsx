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
import CardDisplay from './CardDisplay'

interface AppProps {
<<<<<<< HEAD
  name?: string, // makes name optional
};

const mapStateToProps = (store: Types.ReducerState) => {
  return {}
};
=======
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

>>>>>>> 66799748638ae312e93631656d668706891cde70

//@ts-ignore
const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => bindActionCreators(actions, dispatch);

const App: React.FunctionComponent<AppProps> = (props) => {
  return (
    <React.Fragment>
      <Header />
<<<<<<< HEAD
      <CardDisplay />
      <h1>Hello, {props.name}</h1>
=======
      <CardBox />
      <SearchBar handleChange={props.updateSearchBar} handleRadio={props.chooseRadio} />
      <Filter />
      <h1>Hello</h1>
>>>>>>> 66799748638ae312e93631656d668706891cde70
    </React.Fragment>
  )
}



export default connect(mapStateToProps, mapDispatchToProps)(App);