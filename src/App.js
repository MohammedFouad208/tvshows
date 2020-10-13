import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import Paper from '@material-ui/core/Paper';
import { TablePagination } from '@material-ui/core';
import axios from 'axios';
import Details from './Details'
import CustomPaginationActionsTable from './Component/Table'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory 
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

function searchingFor(term){
  return function(x){
    return x.name.toLowerCase().includes(term.toLowerCase()) || x.id == term || x.language.toLowerCase().includes(term.toLowerCase()) || !term;
  }

}

export default class SimpleTable extends React.Component {
  constructor(props)
  {
    super(props);
    this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler(event)
  {
    this.setState({term:event.target.value});
  }
  
  handleClick=(id)=>
  {
    console.log(id);
    this.props.history.push('/Details');
  }

   state ={
     shows_List:[],
     classes:makeStyles({
      root: {
        width: '100%',
        overflowX: 'auto',
        margin:'2%'
      },
      table: {
        minWidth: 650,
      },
    }),
    term:'',
   };
   componentDidMount(){
    var url = "http://api.tvmaze.com/shows";
    axios.get(url).then(res => {
      this.setState({shows_List:res.data});
    });
   }
   
   render(){
    return (
      <Paper className={this.state.classes.root}>
        <div ClassName="container-fluid">
          <h2>Tv Shows List</h2>
          <form>
            <input style={ {width:300, marginBottom:20}} type="text" className="form-control" onChange={this.searchHandler} placeholder='Search by name'></input>
          </form>
          <CustomPaginationActionsTable items={this.state.shows_List.filter(searchingFor(this.state.term))}/>
        </div>
      </Paper>
    );
   }

}