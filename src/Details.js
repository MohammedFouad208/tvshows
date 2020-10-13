import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Details extends React.Component {
    constructor()
    {
        super();
        this.state = {
            id:null,
            item:{}
        }
    }
    componentDidMount(){
        //const {handle} = this.props.match.params;
        console.log(this.props);
        const id = this.props.match.params.id;
        axios.get("http://api.tvmaze.com/shows/" + id).then(res => {
            console.log(res.data);
            this.setState({
                item:res.data
            });
        })

        this.setState({
            id:id
        });
    }
    
    render(){
        return(
            <div className="container"> 
                <h2 className="pl-4"> Details</h2>
                <div className="row">
                    <div className="col-lg-6 text-warning p-4">
                        <div className="border border-warning">
                            <p> {this.state.item.name} </p>
                        </div>
                        
                    </div>
                    <div className="col-lg-6 text-primary p-4">
                        <div className="border border-primary">
                            <p> {this.state.item.language} </p>
                        </div>
                    </div>
                </div>
               
            </div>
        );
    }
}