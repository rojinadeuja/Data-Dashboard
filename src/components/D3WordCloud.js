import React from 'react';
import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';
import data from './data.json';
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
function getRandomRotation() {
    const degrees = [0, 0, 0, 0, 0, -90, 90];
    const randomRotation = degrees[Math.floor(Math.random() * degrees.length)];
    return randomRotation;
  }
const fontSizeMapper = word => word.value / 5;
const rotate = word => (getRandomRotation());
const newData = data.map(item => ({
    text: item.text,
    value: getRandomArbitrary(250,70)
  }));

class D3WordCloud extends React.Component{
    render(){
        return(
             <div>
             <WordCloud
                width={300}
                height={300}
                data={newData}
                fontSizeMapper={fontSizeMapper}
                rotate={rotate}
                random={0}
                padding={5}
                //onWordClick
    />
    
             </div>
        )
    }
}
export default D3WordCloud