import WordCloud from 'react-d3-cloud';
import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function getRandomRotation() {
    const degrees = [0, 0, 0, 0, 0, 90, 270];
    const randomRotation = degrees[Math.floor(Math.random() * degrees.length)];
    return randomRotation;
  }

const fontSizeMapper = word => word.value / 5;
const rotate = word => (getRandomRotation());
var newData;

// const Topic = props => ( 
//     <tr>
//         <td>{props.topic.topic}</td>
//     </tr>
// )

class D3WordCloud extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        topics: [],
        loading: true
      };
    }
    componentDidMount(){
      console.log("Component mounted")
      axios.get('http://localhost:4000/topics').then(response => {
          console.log("RESPONSE RECEIVED!!")
          console.log("This is the index", this.props.topic_index)
          this.setState({ topics: [response.data] });
          console.log("The data returned is", this.state.topics);
          const value = this.state.topics[0][this.props.topic_index].details;
          console.log("The first value is", value);
          newData = value.map(item => ({
            text: item.word,
            value: getRandomArbitrary(200,80)
          }));
          console.log("Newer Data is", newData);
          this.setState({loading: false})
          this.createChart()
      })
      .catch(function(error){
          console.log(error);
      })
    }
    render(){
        if(this.state.loading){
          return 'Loading...'
        }
        return(
             <div style={{border: "solid", borderRadius: "20px", borderColor: "#F7F7F7"}}>
              <p style={{fontSize: "20px"}} className="text-secondary bg-light">Topic {this.props.topic_index} [{this.state.topics[0][this.props.topic_index].topic}]</p>
             <WordCloud
                width={330}
                height={305}
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