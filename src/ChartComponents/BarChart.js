import React, { Component } from 'react';
import Chart from 'chart.js';

export default class BarChart extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
      }

      componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April','May','June'],
                datasets: [{
                    label: 'line Dataset',
                    data: [10, 15, 20, 40, 12, 25],
                    fill: false,
                    borderColor: "red"
                }]
            }
        });
      }
      
      render() {
        return (
          <canvas ref={this.canvasRef}/>
        );
      }
}