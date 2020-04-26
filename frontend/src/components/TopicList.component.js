import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';

const Topic = props => ( 
    <tr>
        <td>{props.topic._id}</td>
        <td>{props.topic.name}</td>
    </tr>
)

export default class TopicList extends Component{

    constructor(props){
        super(props);
        this.state = {
            text: "Hello",
            topics: []
        };
    }

    componentDidMount(){
        console.log("Component mounted")
        axios.get('http://localhost:4000/topics').then(response => {
            // console.log([response.data])
            this.setState({ topics: [response.data] })
            console.log("The data returned is", this.state.topics);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    render(){
        return(
            <div>
                <h3>Topics List</h3>
                <p>{this.state.text}</p>
                <p></p>
            </div>
        )
    }
    
}

