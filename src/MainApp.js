import React from 'react';  
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';  
import SimpleTable from "./App"
import Details from "./Details"
//import { Button, Navbar ,Nav,Form,NavItem,NavLink ,NavDropdown} from 'reactstrap'
import {Navbar , Nav,NavDropdown, Form,FormControl,Button} from 'react-bootstrap'
import About from './Component/About'
import Home from './Component/Home'
import CustomPaginationActionsTable from './Component/Table'


function MainApp() {
    return (
        <Router>
            <Redirect to={"/Home"}></Redirect>   
            <div className="nav-bar">      
              <Navbar expand="lg">
                <Navbar.Brand as={Link} to="/Home"> React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/About">About</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item as={Link} to="/SimpleTable"> Tv Showes </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Navbar>
              
            </div>
            <Switch>
                <Route path='/Home' component={Home} />
                <Route path='/About' component={About} />
                <Route path='/SimpleTable' component={SimpleTable} />
                <Route path='/Details/:id' component={Details} />  
                <Route path='/Table' component={CustomPaginationActionsTable} />  
            </Switch>
     </Router>
    );
}
export default MainApp