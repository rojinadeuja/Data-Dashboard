/*************************************************
** {A React Component that renders the Topic Modeling Dashboard}
**************************************************
** Author: {Rojina Deuja}
** Last Updated: {04-28-2020}
*************************************************/

import React, { Component } from 'react';
import D3WordCloud from './D3WordCloud';

export default class Dashboard extends Component{
    render(){
        return(
            <div>
             <div className="row">
                <div className="col text-center"><D3WordCloud topic_index={0}/></div>
                <div className="col text-center" ><D3WordCloud topic_index={1}/></div>
                <div className="col text-center"><D3WordCloud topic_index={2}/></div>
            </div><br/>
            <div className="row">
                <div className="col text-center"><D3WordCloud topic_index={3}/></div>
                <div className="col text-center"><D3WordCloud topic_index={4}/></div>
                <div className="col text-center"><D3WordCloud topic_index={5}/></div>
            </div><br/>
            <div className="row">
                <div className="col text-center"><D3WordCloud topic_index={6}/></div>
                <div className="col text-center"><D3WordCloud topic_index={7}/></div>
                <div className="col text-center"><D3WordCloud topic_index={8}/></div>
            </div><br/>
        </div>
        )
    }
}

