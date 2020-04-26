import React, { Component } from 'react';
import D3WordCloud from './D3WordCloud';

export default class Dashboard extends Component{
    render(){
        return(
            <div>
             <div class="row">
                <div class="col"><p>Topic 1</p><br/><D3WordCloud/></div>
                <div class="col"><p>Topic 2</p><br/><D3WordCloud/></div>
                <div class="col"><p>Topic 3</p><br/><D3WordCloud/></div>
              {/* <BarChart data={[5,10,1,3]} size={[500,500]} /> */}
             </div>
             <div class="row">
                <div class="col"><p>Topic 4</p><br/><D3WordCloud/></div>
                <div class="col"><p>Topic 5</p><br/><D3WordCloud/></div>
                <div class="col"><p>Topic 6</p><br/><D3WordCloud/></div>
            </div>
            <div class="row">
                <div class="col"><p>Topic 7</p><br/><D3WordCloud/></div>
                <div class="col"><p>Topic 8</p><br/><D3WordCloud/></div>
                <div class="col"><p>Topic 9</p><br/><D3WordCloud/></div>
            </div>
            </div>
        )
    }
}

