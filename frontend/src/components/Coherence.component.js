/*************************************************
** {A React Component that renders the Topic Coherence}
**************************************************
** Author: {Rojina Deuja}
** Last Updated: {04-28-2020}
*************************************************/

import React, {Component} from 'react';
import D3RowChart from './D3RowChart';

export default class Coherence extends Component{
    render(){
        return(
            <div className='App'>
                <p style={{fontSize: "30px" }} className="text-secondary text-center" >AVERAGE TOPIC COHERENCE</p>
                <br/>
            <div className="text-center"><D3RowChart topic_index={0}/></div> {/*Render the RowChart Component*/}
        </div>
            )
    }
}