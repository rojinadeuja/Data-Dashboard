import React, {Component} from 'react';
import RowChart from './RowChart';
export default class Business extends Component{
    render(){
        return(
            <div className='App'>
             <h2>BUSINESSES WITH MOST REVIEWS</h2>
             <br/>
             <RowChart/> {/*Render the RowChart Component*/}
             </div>
        )
    }
}