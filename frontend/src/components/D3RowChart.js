/*************************************************
** {A React Component that creates a Row Chart for the Topic Coherence using D3.js}
**************************************************
** Author: {Rojina Deuja}
** Last Updated: {04-28-2020}
*************************************************/

import React from 'react';
import * as d3 from 'd3';
import axios from 'axios';

var value;
class D3RowChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                newData: [],
                topics: [],
                // Set Chart Properties
                yAxisAttribute: "text",
                xAxisAttribute: "freq", 
                width: 1000, // Width of the chart
                height: 400, // Height of the chart
                loading: true
        }
        this.getData = this.getData.bind(this);
        this.chartRef = React.createRef(); // Create a ref, that gives us access to the respective DOM element
        this.drawChart = this.drawChart.bind(this); // Bind the method to the constructor
    }
    componentDidMount(){
            /* Function is called after component gets mounted on the DOM */
        console.log("Component has mounted sucessfully!")
        // Get topic data from the server
        axios.get('http://localhost:4000/topics').then(response => {
                console.log("This is the index", this.props.topic_index)
                this.setState({ topics: [response.data] });
                console.log("The data returned is", this.state.topics);
                value = this.state.topics[0];
                // Put the data into a state variable
                this.getData();
                // Call drawChart method to show chart
                this.drawChart(); 
                // Show Chart
                this.setState({loading: false});
        })
        .catch(function(error){
            console.log(error);
        })
      }
      getData(){
              /* Function sets the data from the server into a state variable */
        this.setState({newData : value.map(item => ({
          text: item.topic,
          freq: item.coherence * (-1)
        }))});
      }
    componentDidUpdate() {
            /* Function is called everytime the DOM is updated */
        this.drawChart()
     }
    drawChart() {
        // Define margins for the chart to render in the page
        let margin = {top: 20, right: 30, bottom: 40, left: 150},
                    width = this.state.width - margin.left - margin.right,
                    height = this.state.height - margin.top - margin.bottom;

        // Append the svg object to the div element of the page with .rowChart class which is rendered
        let svg = d3.select(".rowChart")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        // Add X axis
        let x = d3.scaleLinear()
                .domain([0, 5])
                .range([ 0, width]);

        svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .attr('class','axis x')
                .call(d3.axisBottom(x))
                .selectAll("text")
                .attr("transform", "translate(-10,0)rotate(-45)")
                .style("text-anchor", "end");

        // Add Y axis
        let y = d3.scaleBand()
                .range([ 0, height ])
                .domain(this.state.newData.map((d) =>  d[this.state.yAxisAttribute]))
                .padding(.1);
        svg.append("g")
                .attr('class','axis y')
                .call(d3.axisLeft(y))
                .selectAll("text")
                .attr("dy", null)

        // Add Bars
        svg.selectAll("myRect")
                .data(this.state.newData)
                .enter()
                .append("rect")
                .on('mouseover', function(){
                    d3.select(this).style('opacity', 0.5)
                 })
                .on('mouseout', function(){
                    d3.select(this).style('opacity', 1)
                 })
                .attr("x", x(0) )
                .attr("y", (d) => y(d[this.state.yAxisAttribute]))
                .attr("width", 0)
                .attr("height", y.bandwidth() -10 )
                .attr("fill", "#c41200")
                .transition(d3.transition().duration(1000))
                .attr("width", (d) => x(d[this.state.xAxisAttribute])) //d[this.state.xAxisAttribute]
        }
        render() {
                if(this.state.loading){
                        return 'Loading...'
                      }
                return (<div class='rowChart' ref={this.chartRef}/>) // Render the rowChart class along with the ref
                }
}
export default D3RowChart