import React, { Component } from 'react';
import BarChart from './barChart'

// import * as d3 from 'd3';
export default class Dashboard extends Component{
    render(){
        return(
             <div className='App'>
             <h2>YELP DATA DASHBOARD</h2>
             <br/>
             <BarChart data={[5,10,1,3]} size={[500,500]} />
             </div>
        )
    }
}

