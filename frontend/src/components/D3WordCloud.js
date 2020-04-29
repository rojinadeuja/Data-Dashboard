/*************************************************
** {A React Component that creates a Word Cloud for the Topic Modeling using D3.js}
**************************************************
** Author: {Rojina Deuja}
** Last Updated: {04-28-2020}
*************************************************/

import WordCloud from 'react-d3-cloud';
import React, { Component } from 'react';
import axios from 'axios';

function getRandomArbitrary(min, max) {
    /* Function returns a random value to each term in the cloud*/
    return Math.random() * (max - min) + min;
  }

function getRandomRotation() {
  /* Function returns a rotation to each term in the cloud */
    const degrees = [0, 0, 0, 0, 0, 90, 270];
    const randomRotation = degrees[Math.floor(Math.random() * degrees.length)];
    return randomRotation;
  }

const fontSizeMapper = word => word.value / 5; // Set Fontsize of each word from the random value
const rotate = word => (getRandomRotation()); // Set the Rotation of each word
var value;

class D3WordCloud extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        topics: [],
        loading: true,
        showtext: '',
        newData: ''
      };
    this.onWordClicked = this.onWordClicked.bind(this);
    this.getData = this.getData.bind(this);
    }
    componentDidMount(){
      /* Function is called after component gets mounted on the DOM */
          console.log("Component has mounted sucessfully!")
           // Get topic data from the server
          axios.get('http://localhost:4000/topics').then(response => {
          console.log("This is the index", this.props.topic_index)
          this.setState({ topics: [response.data] });
          console.log("The data returned is", this.state.topics);
          value = this.state.topics[0][this.props.topic_index].details;
          // Put the data into a state variable
          this.getData()
          // Show Charts
          this.setState({loading: false})
      })
      .catch(function(error){
          console.log(error);
      })
    }
    getData(){
       /* Function sets the data from the server into a state variable */
        this.setState({newData : value.map(item => ({
        text: item.word,
        freq: item.probability,
        value: getRandomArbitrary(200,80)
      }))});
    }
    onWordClicked(word){
       /* Function that detects click on any term and shows message */
      this.setState({showtext: "Word Selected: "+ word.text +" |  Probability: "+ word.freq})
      console.log("WordClicked: ", word.freq)
    }     
    render(){
        if(this.state.loading){
          return 'Loading...'
        }
        return(
            <div style={{border: "solid", borderRadius: "20px", borderColor: "#F7F7F7" }}>
              <p style={{fontSize: "20px" }} className="text-secondary bg-light" >Topic {this.props.topic_index} [{this.state.topics[0][this.props.topic_index].topic}]</p>
              <p style={{fontSize: "15px"}} className="text-secondary text-black-50">{this.state.showtext}</p>
              <WordCloud 
                width={330}
                height={305}
                data={this.state.newData}
                fontSizeMapper={fontSizeMapper}
                rotate={rotate}
                random={0}
                padding={2}
                onWordClick = {this.onWordClicked}/>
            </div> 
        )
    }
}
export default D3WordCloud