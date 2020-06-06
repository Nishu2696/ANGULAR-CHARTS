import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-radar',
  templateUrl: './my-radar.component.html',
  styleUrls: ['./my-radar.component.css']
})
export class MyRadarComponent implements OnInit {

  public radarChartOptions = {
    responsive: true,
  };
  public radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' },
    { data: [98, 98, 10, 69, 26, 77, 100], label: 'Series C' }
  ];
  public radarChartType = 'radar';
  constructor() { }

  ngOnInit(): void {
  }

}
