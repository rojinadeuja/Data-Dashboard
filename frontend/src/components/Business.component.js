import React, {Component} from 'react';
import RowChart from './RowChart';
import D3RowChart from './D3RowChart';
export default class Business extends Component{
    render(){
        return(
            <div className='App'>
              <p style={{fontSize: "20px" }} className="text-secondary text-center" >TOPIC COHERENCE</p>
             <br/>
             <div className="text-center"><D3RowChart topic_index={0}/></div> {/*Render the RowChart Component*/}
             </div>
        )
    }
}