import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import './App.css';
import LineChart from './LineChart';

//cd to Documents/ez-feed/ez-feed-app
//run with: npm start



class App extends Component {
  createFakeData(){
    // This function creates data that doesn't look entirely random
    const data = []
    for (let x = 0; x <= 30; x++) {
      const random = Math.random();
      const temp = data.length > 0 ? data[data.length-1].y : 50;
      const y = random >= .45 ? temp + Math.floor(random * 20) : temp - Math.floor(random * 20);
      data.push({x,y})
    }
    return data;
  }

  render() {
    return (
      <div className="App">
        <div className="header">Ez-Feed</div>

        <Plot
          data={[
            {
              x: [9, 17],
              y: [52.3, 70.9],
              type: 'scatter',
              mode: 'lines+points',
              marker: {color: 'red'},
            },
            {type: 'bar', x: [9, 17], y: [52.3, 70.9]},
          ]}
          layout={
            {
              width: 720,
              height: 540,
              title: 'Daily Cat Feeding Times and Amount',
              xaxis: { title: "Time" },
              yaxis: { title: "Amount Eaten (g)" }
            }
          }
        />

      {/* <LineChart data={this.createFakeData()} /> */}
      </div>
    );
  }
}
export default App;
