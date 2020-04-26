import WordCloud from 'react-d3-cloud';
import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';

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
var newData;

const Topic = props => ( 
    <tr>
        <td>{props.topic._id}</td>
        <td>{props.topic.name}</td>
    </tr>
)

class D3WordCloud extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        text: "Hello",
        topics: [],
        loading: true
      };
    }
    componentDidMount(){
      console.log("Component mounted")
      axios.get('http://localhost:4000/topics').then(response => {
          console.log("RESPONSE RECEIVED!!")
          this.setState({ topics: [response.data] });
          console.log("The data returned is", this.state.topics);
          const value = this.state.topics[0][0].details;
          console.log("The first value is", value);
          newData = value.map(item => ({
            text: item.word,
            value: getRandomArbitrary(250,70)
          }));
          console.log("Newer Data is", newData);
          this.setState({loading: false})
      })
      .catch(function(error){
          console.log(error);
      })
    }
    render(){
        if(this.state.loading){
          return 'Loading....'
        }
        return(
             <div>
             <WordCloud
                width={200}
                height={500}
                data={newData}
                fontSizeMapper={fontSizeMapper}
                rotate={rotate}
                random={0}
                padding={2}
                //onWordClick
    />
             </div>
        )
    }
}
export default D3WordCloud