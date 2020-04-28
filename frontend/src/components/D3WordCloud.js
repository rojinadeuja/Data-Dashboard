import WordCloud from 'react-d3-cloud';
import React, { Component } from 'react';
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
      console.log("Component mounted")
      axios.get('http://localhost:4000/topics').then(response => {
          console.log("This is the index", this.props.topic_index)
            this.setState({ topics: [response.data] });
            console.log("The data returned is", this.state.topics);
            value = this.state.topics[0][this.props.topic_index].details;
          this.getData()
          // console.log("Newer Data is", newData);
          this.setState({loading: false})
      })
      .catch(function(error){
          console.log(error);
      })
    }
    getData(){
      this.setState({newData : value.map(item => ({
        text: item.word,
        freq: item.frequency,
        value: getRandomArbitrary(200,80)
      }))});
      console.log('NEW DATA IS', this.state.newData)
    }
    onWordClicked(word){
      this.setState({showtext: "Word Selected: "+word.text+" |  Frequency: "+word.freq})
      console.log("Word MouseOver!!!", word.freq)
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