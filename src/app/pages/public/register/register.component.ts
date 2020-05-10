import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import * as Chart from 'chart.js';
import {FormControl} from '@angular/forms';
import {ChartData} from 'chart.js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  private data = [];
  private myChart: Chart;
  private labels = [];

  weight = new FormControl();

  @ViewChild('myChart', {static: true}) myChartRef: HTMLCanvasElement;

  constructor() { }

  ngOnInit(): void {

  }

  addWeight(weight: number): void {
    console.log(weight);
    if (weight > 0) {
      this.data.push(weight);
      this.labels.push(this.data.length);
      this.myChart.update();
    }
  }

  private getLabels(): void {
    for (let x = 0; x < this.data.length; x++) {
      this.labels.push(x + 1);
    }
  }

  ngAfterViewInit(): void {
    this.myChartRef = document.getElementById('myChart') as HTMLCanvasElement;
    console.log(this.myChartRef);
    this.myChart = new Chart(this.myChartRef.getContext('2d'), {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          data: this.data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Weight history',
          fontSize: 20,
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
